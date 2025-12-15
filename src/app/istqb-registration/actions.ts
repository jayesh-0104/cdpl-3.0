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

    // Reuse validation or simplified template logic
    // We'll use admin-notification-basic.html but with injected details in the message/interest fields if possible,
    // or just rely on the 'message' field which basic template usually supports.
    // Actually, let's use a specific subject to make it clear.

    const adminSubject = `[ISTQB STEP 1] New Registration from ${name}`;

    // We can try to reuse 'admin-notification-basic.html' which expects { fullName, email, phone, source, year, ... }
    // To include City and Job Title, we might need a template that supports dynamic fields or put them in 'message' if the template renders it.
    // Checking previous analysis: admin-notification-basic.html renders 'message' if we pass it? 
    // Wait, let's look at `admin-notification-basic.html` again. 
    // It has a table. It doesn't seem to have a generic message block. 
    // `admin-notification.html` DOES have a message block. Let's use that.

    let adminHtml = '';
    try {
        adminHtml = await getTemplatedEmail('admin-notification.html', {
            ...adminData,
            year: currentYear.toString(),
            // admin-notification.html expects: fullName, email, phone, source, type, interest, message
            type: 'ISTQB Registration (Step 1)',
            interest: certificationLevel,
            message: `City: ${city}\nJob Title: ${jobTitle}\n\nUser has completed Step 1 and is proceeding to booking/exam selection.`
        });
    } catch (e) {
        console.error("Template error", e);
        // Fallback if template fails
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
    phone: string; // Passed from step 1 state

    // For Book Meeting
    meetingDate?: string;
    meetingTime?: string;

    // For Exam Selection
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
        subject = `[ISTQB STEP 2] Booking Request from ${name}`;
        type = 'ISTQB Booking';
        message = `User selected "Book a Meeting".\nProposed Date: ${meetingDate}\n\n(This meeting needs to be confirmed)`;
    } else {
        subject = `[ISTQB STEP 2] Exam Selection from ${name}`;
        type = 'ISTQB Exam Selection';
        message = `User selected "Skip & Select Exam Date".\nRequested Exam Date: ${examDate}\nCertification Level: ${certificationLevel}\nAmount: ${amount}`;

        if (paymentId) {
            message += `\n\nTransaction ID: ${paymentId}`;
        }
    }

    // Admin Notification
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

    const adminMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: ADMIN_EMAIL,
        cc: CC_EMAIL,
        bcc: BCC_EMAIL,
        subject,
        html: adminHtml,
    };

    await sendEmail(adminMailOptions);

    // We check if we need to update TeleCRM/Sheets again? 
    // Probably yes, to capture the final intent.
    appendRowToSheet({
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        fullName: name,
        email,
        phone,
        source,
        type,
        interest: certificationLevel || 'Meeting',
        message
    }).catch(e => console.error(e));

    return { success: true };
}
