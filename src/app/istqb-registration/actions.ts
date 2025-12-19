'use server';

import nodemailer from 'nodemailer';
import { getTemplatedEmail } from '@/lib/email-utils';
import { pushLeadToTeleCRM } from '@/lib/telecrm';
import { appendRowToSheet } from '@/lib/google-sheets';

// --- Configuration ---
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const CC_EMAIL = process.env.CC_EMAIL;
const BCC_EMAIL = process.env.BCC_EMAIL;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || 'noreply@example.com';

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

export async function submitIstqbStep1(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const city = formData.get('city') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const certificationLevel = formData.get('certificationLevel') as string;

    if (!name || !email || !phone) {
        return { success: false, message: 'Missing required fields' };
    }

    const currentYear = new Date().getFullYear();
    const source = 'ISTQB Registration Page - Step 1';

    // 1. Send Admin Notification (Step 1)
    const adminData = {
        fullName: name,
        email,
        phone,
        source,
        year: currentYear,
        interest: `ISTQB Certification Level: ${certificationLevel}`,
        message: `City: ${city}\nJob Title: ${jobTitle}\nLevel: ${certificationLevel}\n(Step 1 Completed)`,
        type: 'ISTQB Step 1'
    };

    const adminSubject = `Initial Request from ${name}`;

    let adminHtml = '';
    try {
        adminHtml = await getTemplatedEmail('admin-notification.html', {
            ...adminData,
            year: currentYear.toString(),
            type: 'Initial Request',
            interest: certificationLevel,
            message: `City: ${city}\nJob Title: ${jobTitle}\n\nUser has completed Step 1 (Initial Request).`
        });
    } catch (e) {
        console.error("Template error", e);
        adminHtml = `<p>New ISTQB Registration (Step 1)</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p>`;
    }

    const adminMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: ADMIN_EMAIL,
        cc: CC_EMAIL,
        bcc: BCC_EMAIL,
        subject: adminSubject,
        html: adminHtml,
    };

    await sendEmail(adminMailOptions);

    // 2. TeleCRM
    pushLeadToTeleCRM({
        fullName: name,
        email,
        phone,
        source,
    }).catch(e => console.error(e));

    // 3. Google Sheets
    appendRowToSheet({
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        fullName: name,
        email,
        phone,
        source,
        type: 'ISTQB Step 1',
        interest: certificationLevel,
        message: `City: ${city}, Job: ${jobTitle}`
    }).catch(e => console.error(e));

    return { success: true };
}

export async function submitIstqbStep2(data: {
    action: 'book_meeting' | 'skip_exam';
    name: string;
    email: string;
    phone: string;
    meetingDate?: string;
    meetingTime?: string;
    examDate?: string;
    certificationLevel?: string;
    amount?: string;
    paymentId?: string;
}) {
    const { action, name, email, phone, meetingDate, examDate, certificationLevel, amount, paymentId } = data;
    const currentYear = new Date().getFullYear();
    const source = 'ISTQB Registration Page - Step 2';

    let subject = '';
    let message = '';
    let type = '';

    if (action === 'book_meeting') {
        const userSubject = `Your ISTQB Consultation Meeting Link`;
        const userHtml = `
            <div style="font-family: sans-serif; padding: 20px;">
                <h2>Hello ${name},</h2>
                <p>Thank you for booking a consultation with us.</p>
                <p>Please join the meeting using the link below at the scheduled time (${meetingDate}):</p>
                <p>
                    <a href="https://meet.google.com/jpg-ixdq-ohf" style="background-color: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                        Join Google Meet
                    </a>
                </p>
                <p> Link: https://meet.google.com/jpg-ixdq-ohf </p>
                <p>Regards,<br/>CDPL Team</p>
            </div>
        `;

        await sendEmail({
            from: SMTP_FROM_EMAIL,
            to: email, // Send ONLY to User
            subject: userSubject,
            html: userHtml,
        });

    } else {
        // Exam Selection
        subject = `[ISTQB STEP 2] Exam Selection from ${name}`;
        type = 'ISTQB Exam Selection';
        message = `User selected "Choose Exam Date".\nRequested Exam Date: ${examDate}\nCertification Level: ${certificationLevel}\nAmount: ${amount}`;

        if (paymentId) {
            message += `\n\nTransaction ID: ${paymentId}`;
        }

        const adminData = {
            fullName: name,
            email,
            phone,
            source,
            year: currentYear.toString(),
            type,
            interest: certificationLevel || 'ISTQB Consultation',
            message
        };

        const adminHtml = await getTemplatedEmail('admin-notification.html', adminData);

        await sendEmail({
            from: SMTP_FROM_EMAIL,
            to: ADMIN_EMAIL,
            cc: CC_EMAIL,
            bcc: BCC_EMAIL,
            subject,
            html: adminHtml,
        });

        const userSubject = `ISTQB Exam Registration Confirmed`;
        const userHtml = `
            <div style="font-family: sans-serif; padding: 20px;">
                <h2>Hello ${name},</h2>
                <p>Thank you for registering for the ISTQB Exam.</p>
                <p><strong>Exam Date:</strong> ${examDate}</p>
                <p><strong>Certification Level:</strong> ${certificationLevel}</p>
                <p><strong>Transaction ID:</strong> ${paymentId}</p>
                <p>We will contact you shortly with further details.</p>
                <p>Regards,<br/>CDPL Team</p>
            </div>
        `;

        await sendEmail({
            from: SMTP_FROM_EMAIL,
            to: email,
            subject: userSubject,
            html: userHtml,
        });
    }

    appendRowToSheet({
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        fullName: name,
        email,
        phone,
        source,
        type: action === 'book_meeting' ? 'ISTQB Booking (User Only)' : type,
        interest: certificationLevel || 'Meeting',
        message: action === 'book_meeting' ? `Meeting booked for ${meetingDate}` : message
    }).catch(e => console.error(e));

    return { success: true };
}
