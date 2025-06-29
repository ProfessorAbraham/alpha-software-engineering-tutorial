# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your ASET website to collect form submissions.

## Step 1: Create Google Sheets

1. **Create Enrollment Sheet:**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "ASET Enrollments"
   - Note the Sheet ID from the URL (the long string between `/d/` and `/edit`)

2. **Create Contact Sheet:**
   - Create another new spreadsheet
   - Name it "ASET Contact Messages"
   - Note the Sheet ID from the URL

## Step 2: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script/form-handler.js`
4. Update the Sheet IDs:
   \`\`\`javascript
   const ENROLLMENT_SHEET_ID = 'your_enrollment_sheet_id_here';
   const CONTACT_SHEET_ID = 'your_contact_sheet_id_here';
   \`\`\`

## Step 3: Deploy the Script

1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set execute as "Me"
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the web app URL

## Step 4: Update Environment Variables

Add to your `.env.local` file:
\`\`\`
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_web_app_url_here
\`\`\`

## Step 5: Test the Integration

1. Submit a test enrollment form
2. Check your Google Sheets to see if the data appears
3. Submit a test contact form
4. Verify both sheets are receiving data

## Sheet Structure

### Enrollment Sheet Columns:
- Submission Date
- First Name
- Last Name
- Email
- Phone
- Country
- City
- Education
- Experience
- Motivation
- Package Title
- Plan
- Price (ETB)
- Status

### Contact Sheet Columns:
- Submission Date
- Name
- Email
- Phone
- Subject
- Message
- Inquiry Type
- Status

## Managing Data

You can:
- Sort and filter data in Google Sheets
- Add additional columns for notes
- Use Google Sheets formulas for calculations
- Export data to other formats
- Share sheets with team members
- Set up email notifications for new submissions

## Troubleshooting

- Make sure the Google Apps Script is deployed as a web app
- Check that the sheet IDs are correct
- Verify the web app URL is properly set in environment variables
- Ensure the sheets have the correct permissions
