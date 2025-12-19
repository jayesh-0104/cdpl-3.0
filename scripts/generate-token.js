const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Using the credentials found in src/app/api/reviews/route.ts
const CLIENT_ID = '1078247115476-cujpa333jod5j1a9441po9r39snkce25.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://www.cinutedigital.com/';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

const SCOPES = [
    'https://www.googleapis.com/auth/business.manage',
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(`
--- Google Refresh Token Generator ---
1. Open the following URL in your browser:
\n${oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent' // Forces consent screen to ensure refresh token is returned
})}\n
2. Log in with the Google Account that manages the Business Profile.
3. Allow access.
4. You will be redirected to cinutedigital.com. Copy the entire URL you end up at (or just the 'code' parameter).
`);

rl.question('Enter the code (or paste the full URL): ', async (codeOrUrl) => {
    let code = codeOrUrl.trim();

    // Extract code if full URL is pasted
    if (code.includes('code=')) {
        code = new URL(code).searchParams.get('code');
    }

    try {
        const { tokens } = await oauth2Client.getToken(code);
        console.log('\nSUCCESS! Token retrieved.');

        if (tokens.refresh_token) {
            // Save to .env.local
            const envPath = path.join(__dirname, '..', '.env.local');
            let content = '';
            if (fs.existsSync(envPath)) {
                content = fs.readFileSync(envPath, 'utf8');
            }

            // Remove existing token if present to avoid duplicates
            const lines = content.split('\n').filter(line => !line.startsWith('GOOGLE_REFRESH_TOKEN='));
            lines.push(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);

            fs.writeFileSync(envPath, lines.join('\n'));
            console.log(`\nOK! I have automatically updated your .env.local file with the new token.`);
            console.log(`Please restart your server now: 'npm run dev'`);
        } else {
            console.log('\nWARNING: No refresh token returned. This usually means you have ALREADY granted access.');
            console.log('You must revoke access for this app in your Google Account permissions to get a new refresh token.');
            console.log('Visit: https://myaccount.google.com/permissions?name=Cinute%20Digital');
        }

    } catch (error) {
        console.error('\nError retrieving access token:', error.message);
    } finally {
        rl.close();
    }
});
