# Contact Form Setup Guide

Your contact form is now connected to a backend that stores submissions and sends email notifications!

## How It Works

1. **Form Submission** - When someone fills out your contact form, the data is sent to your Supabase backend
2. **Data Storage** - All submissions are securely stored in the key-value database
3. **Email Notifications** - You receive an email at `sandra_wilmann@hotmail.com` for each submission
4. **User Feedback** - Users see a success/error toast notification

## Email Setup with Resend

To receive email notifications, you need to set up Resend (a simple email API):

### Step 1: Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to "API Keys" in the dashboard
4. Create a new API key
5. Copy the API key (starts with `re_`)

### Step 2: Add Your API Key to Figma Make

You should have already been prompted to add your `RESEND_API_KEY`. If not:
- The system will ask you to provide it when the contact form is first used
- Paste your Resend API key when prompted

### Step 3: Verify Your Email Domain (Optional but Recommended)

By default, emails will be sent from `onboarding@resend.dev`. To use your own domain:

1. In your Resend dashboard, go to "Domains"
2. Add your domain (e.g., `sandrawilmann.com`)
3. Follow the DNS verification steps
4. Update line 51 in `/supabase/functions/server/index.tsx`:
   ```typescript
   from: "contact@yourdomain.com", // Change this
   ```

## Testing the Contact Form

1. Go to the Contact page on your portfolio
2. Fill out the form with test data
3. Click "Send Message"
4. You should see a success toast notification
5. Check your email at `sandra_wilmann@hotmail.com`

## What Data is Stored

Each contact form submission stores:
- Name
- Email
- Subject
- Message
- Timestamp
- Unique submission ID

## Viewing Submissions

All submissions are stored in your Supabase database. You can:
- View them in the Supabase dashboard
- Access them via the key-value store with prefix `contact_`

## Troubleshooting

### Emails Not Sending
- **Check API Key**: Make sure your `RESEND_API_KEY` is correctly set
- **Check Email Address**: Verify `sandra_wilmann@hotmail.com` is correct in the server code
- **Free Tier Limits**: Resend free tier has sending limits (check your Resend dashboard)

### Form Not Submitting
- **Check Browser Console**: Look for error messages
- **Check Network Tab**: Make sure the API call is going through
- **Check Server Logs**: View logs in the Supabase dashboard

### Success But No Email
- The form will still work even if email fails - submissions are always stored in the database
- Check the server logs for email-specific errors

## Resend Pricing

- **Free Tier**: 100 emails/day, 3,000 emails/month
- Perfect for a portfolio site!
- If you need more, paid plans start at $20/month

## Alternative: Form Submissions Without Email

If you don't want to set up email notifications right now:
- Contact form submissions will still be **stored in your database**
- You can view them in your Supabase dashboard
- Just skip the Resend API key setup
- The form will show a success message when submissions are stored

## Questions?

The contact form is fully functional and ready to use! Just add your Resend API key to start receiving email notifications.
