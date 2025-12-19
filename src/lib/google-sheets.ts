import { google } from 'googleapis';
import { Readable } from 'stream';

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file'
];

const formatPrivateKey = (key: string) => {
    // 1. Remove any surrounding quotes if they somehow got included
    let cleanKey = key.replace(/^"|"$/g, '');

    // 2. Handle escaped newlines (common in .env files)
    if (cleanKey.includes('\\n')) {
        cleanKey = cleanKey.replace(/\\n/g, '\n');
    }

    // 3. Check if it's a one-liner without proper newlines for headers
    // If it has spaces instead of newlines between header/footer and body
    if (!cleanKey.includes('\n') && cleanKey.includes('-----BEGIN PRIVATE KEY-----')) {
        cleanKey = cleanKey
            .replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n')
            .replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----');
    }

    return cleanKey;
};

export async function uploadResumeToDrive(fileBuffer: Buffer, fileName: string, mimeType: string) {
    try {
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!clientEmail || !rawPrivateKey) {
            console.warn('Google Credentials missing for Drive upload.');
            return null;
        }

        const privateKey = formatPrivateKey(rawPrivateKey);
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const drive = google.drive({ version: 'v3', auth });

        const fileMetadata = {
            name: fileName,
        };

        const media = {
            mimeType: mimeType,
            body: Readable.from(fileBuffer),
        };

        const file = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: 'id, webViewLink, webContentLink',
        });

        const fileId = file.data.id;

        // Make the file publicly readable
        if (fileId) {
            await drive.permissions.create({
                fileId: fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone',
                },
            });
        }

        console.log('File uploaded to Drive:', file.data.webViewLink);
        return file.data.webViewLink;

    } catch (error) {
        console.error('Drive upload error:', error);
        return null;
    }
}

export async function appendRowToSheet(data: {
    date: string;
    fullName: string;
    email: string;
    phone: string;
    source: string;
    type: string;
    interest?: string;
    message?: string;
}) {
    try {
        const sheetId = process.env.GOOGLE_SHEET_ID;
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!sheetId || !clientEmail || !rawPrivateKey) {
            console.warn('Google Sheets credentials missing. Skipping sheet update.');
            return;
        }

        const privateKey = formatPrivateKey(rawPrivateKey);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [
                data.date,
                data.fullName,
                data.email,
                data.phone,
                data.source,
                data.type,
                data.interest || '',
                data.message || '',
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:H', // Appends to the first available row in columns A-H
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        console.log('Google Sheet updated successfully.');
    } catch (error) {
        console.error('Error updating Google Sheet:', error);
        // Don't throw, so we don't block the main response
    }
}

export async function appendJobApplicationToSheet(data: {
    date: string;
    position: string;
    fullName: string;
    email: string;
    phone: string;
    location: string;
    skills: string;
    experienceLevel: string;
    currentCtc: string;
    expectedCtc: string;
    noticePeriod: string;
    resumeLink: string;
    source?: string;
}) {
    try {
        // Use a specific sheet ID for jobs if available, otherwise fall back to the main one (or fail if strict)
        // User requested a separate Google Sheet.
        const sheetId = process.env.GOOGLE_SHEET_ID_JOBS || process.env.GOOGLE_SHEET_ID;
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!sheetId || !clientEmail || !rawPrivateKey) {
            console.warn('Google Sheets credentials missing for Job Application. Skipping sheet update.');
            return;
        }

        const privateKey = formatPrivateKey(rawPrivateKey);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: SCOPES,
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const values = [
            [
                data.date,
                data.position,
                data.fullName,
                data.email,
                data.phone,
                data.location,
                data.skills,
                data.experienceLevel,
                data.currentCtc,
                data.expectedCtc,
                data.noticePeriod,
                data.resumeLink.startsWith('http') ? `=HYPERLINK("${data.resumeLink}", "View Resume")` : data.resumeLink,
                data.source || ''
            ],
        ];

        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:M', // columns A-M
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values,
            },
        });

        console.log('Job Application Google Sheet updated successfully.');
    } catch (error) {
        console.error('Error updating Job Application Google Sheet:', error);
    }
}
