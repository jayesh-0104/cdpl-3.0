import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getTemplatedEmail } from '@/lib/email-utils';
import { appendJobApplicationToSheet, uploadResumeToDrive } from '@/lib/google-sheets';

// --- Configuration ---
const HR_EMAIL = process.env.HR_EMAIL || 'hr@cinutedigital.com'; // Default or Env
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || 'noreply@example.com';

// --- Nodemailer Transporter ---
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

export async function POST(request: Request) {
    console.log('API Apply Route Hit');
    try {
        const formData = await request.formData();

        const position = formData.get('position') as string;
        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const location = formData.get('location') as string;
        const skills = formData.get('skills') as string;
        const experienceLevel = formData.get('experienceLevel') as string;
        const currentCtc = formData.get('currentCtc') as string;
        const expectedCtc = formData.get('expectedCtc') as string;
        const noticePeriod = formData.get('noticePeriod') as string;
        const source = formData.get('source') as string || 'Jobs - Careers - Open role';
        const resumeFile = formData.get('resume') as File;

        // 1. Basic Validation
        if (!fullName || !email || !phone || !resumeFile) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // 2. Handle File Upload & Attachment Preparation
        let resumeLink = 'Attached in Email (Storage not configured)';
        let fileBuffer: Buffer | null = null;

        if (resumeFile) {
            fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
            const filename = `${Date.now()}-${resumeFile.name.replace(/\s+/g, '_')}`;

            // Upload to Google Drive
            try {
                const driveLink = await uploadResumeToDrive(fileBuffer, filename, resumeFile.type);
                if (driveLink) {
                    resumeLink = driveLink;
                } else {
                    console.warn('Drive upload returned no link, falling back to attachment.');
                }
            } catch (driveError) {
                console.error('Failed to upload to Drive:', driveError);
                // Fallback to attachment message is already set as default
            }
        }

        // 3. Prepare Emails
        const currentYear = new Date().getFullYear().toString();

        // HR Email Data
        const hrHtml = await getTemplatedEmail('hr-notification.html', {
            position,
            fullName,
            email,
            phone,
            location,
            skills,
            experienceLevel,
            currentCtc,
            expectedCtc,
            noticePeriod,
            source,
            resumeLink,
            currentYear,
        });

        // Candidate Email Data
        const userHtml = await getTemplatedEmail('user-confirmation-job.html', {
            fullName,
            position,
            currentYear
        });

        const hrMailOptions: nodemailer.SendMailOptions = {
            from: SMTP_FROM_EMAIL,
            to: HR_EMAIL,
            subject: `[NEW APPLICATION] ${position} - ${fullName}`,
            html: hrHtml,
            attachments: fileBuffer ? [
                {
                    filename: resumeFile.name,
                    content: fileBuffer,
                }
            ] : [],
        };

        const userMailOptions: nodemailer.SendMailOptions = {
            from: SMTP_FROM_EMAIL,
            to: email, // Send to candidate
            subject: `Application Received: ${position} at CDPL`,
            html: userHtml,
        };

        // 4. Send Emails
        console.log('Sending emails...');
        const hrEmailResult = await sendEmail(hrMailOptions);
        const userEmailResult = await sendEmail(userMailOptions);
        console.log('HR email result:', hrEmailResult);
        console.log('User email result:', userEmailResult);

        // 5. Append to Google Sheet (Async)
        // 5. Append to Google Sheet (Sync to ensure completion)
        try {
            await appendJobApplicationToSheet({
                date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                position,
                fullName,
                email,
                phone,
                location,
                skills,
                experienceLevel,
                currentCtc,
                expectedCtc,
                noticePeriod,
                resumeLink,
                source
            });
            console.log('Google Sheet updated successfully');
        } catch (sheetError) {
            console.error('Google Sheet update error:', sheetError);
            // We don't block the response if sheet fails, but we log it.
        }

        if (hrEmailResult) {
            return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Application submitted, but notification failed.' }, { status: 200 });
        }

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
