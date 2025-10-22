# CV PDF Files - Setup Instructions

Since Figma Make doesn't support uploading PDF files directly, you'll need to host your CVs externally and link to them.

## How to Set Up Your CV Downloads

### Step 1: Upload Your PDFs

Choose one of these hosting options:

#### Option A: GitHub (Recommended)
1. Create a GitHub repository (can be public or private)
2. Upload your CV files: `cv-norwegian.pdf` and `cv-english.pdf`
3. Get the raw file URLs:
   - Go to the file on GitHub
   - Click "Raw" button
   - Copy the URL (should look like: `https://raw.githubusercontent.com/yourusername/yourrepo/main/cv-norwegian.pdf`)

#### Option B: Google Drive
1. Upload your PDFs to Google Drive
2. Right-click the file → Share → Get link
3. Change permissions to "Anyone with the link can view"
4. Use a service like `https://sites.google.com/site/gdocs2direct/` to convert the sharing link to a direct download link

#### Option C: Dropbox
1. Upload to Dropbox
2. Get public link
3. Change `dl=0` to `dl=1` at the end of the URL for direct download

#### Option D: Any CDN or Static File Host
- Netlify
- Vercel
- AWS S3
- Any static file hosting service

### Step 2: Update the Code

Open `/pages/CVPage.tsx` and replace the placeholder URLs:

```javascript
const norwegianCVUrl = 'YOUR_NORWEGIAN_CV_URL_HERE';
// Replace with your actual URL, for example:
// const norwegianCVUrl = 'https://raw.githubusercontent.com/yourusername/yourrepo/main/cv-norwegian.pdf';

const englishCVUrl = 'YOUR_ENGLISH_CV_URL_HERE';
// Replace with your actual URL, for example:
// const englishCVUrl = 'https://raw.githubusercontent.com/yourusername/yourrepo/main/cv-english.pdf';
```

### Step 3: Test

Click the download buttons on your CV page to make sure they work!

## Example with GitHub

If you upload to GitHub, your final code would look like:

```javascript
const norwegianCVUrl = 'https://raw.githubusercontent.com/sandra-wilmann/portfolio-cvs/main/cv-norwegian.pdf';
const englishCVUrl = 'https://raw.githubusercontent.com/sandra-wilmann/portfolio-cvs/main/cv-english.pdf';
```

## Troubleshooting

- **Button opens a new tab instead of downloading**: This is normal fallback behavior. The browser will either download or display the PDF depending on user settings.
- **404 error**: Double-check that your URLs are correct and the files are publicly accessible
- **CORS errors**: Make sure your hosting service allows direct file downloads
