const { google } = require('googleapis');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        envVars[key.trim()] = value.trim();
    }
});

const CLIENT_ID = '1078247115476-cujpa333jod5j1a9441po9r39snkce25.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REFRESH_TOKEN = envVars.GOOGLE_REFRESH_TOKEN;
const REDIRECT_URI = 'https://www.cinutedigital.com/';

console.log('--- Testing Google Reviews API ---');
console.log('Client ID:', CLIENT_ID.substring(0, 10) + '...');
console.log('Refresh Token:', REFRESH_TOKEN ? REFRESH_TOKEN.substring(0, 10) + '...' : 'MISSING');

if (!REFRESH_TOKEN) {
    console.error('ERROR: No GOOGLE_REFRESH_TOKEN found in .env.local');
    process.exit(1);
}

async function testFetch() {
    try {
        const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
        auth.setCredentials({ refresh_token: REFRESH_TOKEN });

        console.log('1. Fetching Account...');
        // 1. Get Account ID
        const mybusinessAccount = google.mybusinessaccountmanagement({ version: 'v1', auth });
        const accountsRes = await mybusinessAccount.accounts.list();
        const account = accountsRes.data.accounts && accountsRes.data.accounts[0];

        if (!account || !account.name) {
            throw new Error('No Google Business Profile account found.');
        }
        console.log('   Account found:', account.name);

        console.log('2. Fetching Location...');
        // 2. Get Location ID
        const mybusinessBusiness = google.mybusinessbusinessinformation({ version: 'v1', auth });
        const locationsRes = await mybusinessBusiness.accounts.locations.list({
            parent: account.name,
            readMask: 'name,title',
        });

        const location = locationsRes.data.locations && locationsRes.data.locations[0];
        if (!location || !location.name) {
            throw new Error('No location found for this account.');
        }
        console.log('   Location found:', location.name, `(${location.title})`);

        console.log('3. Fetching Reviews...');
        const accessToken = (await auth.getAccessToken()).token;
        if (!accessToken) throw new Error('Failed to generate access token');

        const reviewsResponse = await axios.get(
            `https://mybusiness.googleapis.com/v4/${location.name}/reviews`,
            {
                params: { pageSize: 5 },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        console.log('   SUCCESS! Reviews fetched:', reviewsResponse.data.reviews ? reviewsResponse.data.reviews.length : 0);
        console.log('   Average Rating:', reviewsResponse.data.averageRating);

    } catch (error) {
        console.error('\nFAILED TO FETCH REVIEWS');
        console.error('Error Message:', error.message);
        if (error.response) {
            console.error('API Response:', error.response.data);
        }
        if (error.code === '401' || error.message.includes('invalid_grant')) {
            console.error('\nDIAGNOSIS: The Refresh Token is invalid or expired.');
        }
    }
}

testFetch();
