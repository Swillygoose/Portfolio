# Sandra Wilmann - UX/UI Designer Portfolio

A modern, interactive portfolio website showcasing the work and expertise of Sandra Wilmann, a UX/UI Designer specializing in user-centered design solutions.

🔗 **Live Site:** https://sandra-wilmann.figma.site

## ✨ Features

### Design & Aesthetics
- **Glassmorphism UI**: Modern frosted glass card design throughout
- **Animated Gradient Blobs**: Dynamic, colorful background animations
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Motion animations using Framer Motion for engaging user experience
- **Color Palette**: Soft pinks, purples, and peach tones with sleek gradients

### Pages & Functionality
- **Home**: Hero section with social media links and portfolio highlights
- **About**: Personal story, professional journey timeline, interactive skills showcase
- **Portfolio**: Project gallery with detailed case studies for each project
- **CV**: Downloadable resume in both Norwegian and English
- **Contact**: Functional contact form with email notifications

### Interactive Features
- **Expandable Skill Cards**: Click skills to view related projects
- **Copy-to-Clipboard**: Easy copying of email and phone number with toast notifications
- **Social Media Integration**: Direct links to LinkedIn, GitHub, and Instagram
- **Contact Form**: Backend-powered form with Supabase and Resend email delivery

## 🛠️ Technology Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Motion (Framer Motion)** - Advanced animations
- **Lucide React** - Icon library
- **Shadcn/ui** - Component library

### Backend
- **Supabase** - Backend-as-a-Service
  - Database (PostgreSQL)
  - Edge Functions
  - Authentication
  - Storage
- **Resend** - Email delivery service
- **Hono** - Web server framework (for Edge Functions)

## 📁 Project Structure

```
├── App.tsx                      # Main application component
├── pages/                       # Page components
│   ├── HomePage.tsx            # Landing page
│   ├── AboutPage.tsx           # About section
│   ├── PortfolioPage.tsx       # Projects gallery
│   ├── CVPage.tsx              # Resume/CV page
│   ├── ContactPage.tsx         # Contact form
│   ├── ProjectPage.tsx         # Individual project template
│   └── projects/               # Individual project pages
├── components/                  # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section
│   ├── ProjectCard.tsx         # Project preview cards
│   ├── ContactSection.tsx      # Contact form
│   └── ui/                     # Shadcn UI components
├── supabase/functions/server/  # Backend Edge Functions
│   ├── index.tsx               # Main server routes
│   └── kv_store.tsx            # Key-value store utilities
├── styles/                      # Global styles
│   └── globals.css             # Tailwind base styles & tokens
└── utils/                       # Utility functions
    └── supabase/               # Supabase configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account (for backend features)
- Resend account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Swillygoose/sandra-wilmann-portfolio.git
   cd sandra-wilmann-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   The following environment variables are required for the backend functionality:
   - `SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
   - `SUPABASE_DB_URL` - Your Supabase database URL
   - `RESEND_API_KEY` - Your Resend API key for email delivery

   See [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) for detailed setup instructions.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Contact Form Setup

The contact form requires backend setup with Supabase and Resend. Follow these steps:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a Resend account at [resend.com](https://resend.com)
3. Configure the environment variables as listed above
4. Deploy the Supabase Edge Function (see [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md))

When someone submits the contact form, it will:
- Store the message in the Supabase database
- Send an email notification via Resend
- Display a success toast to the user

## 🎨 Customization

### Color Palette
The color scheme is defined in `/styles/globals.css` using CSS custom properties. Main colors:
- Primary Pink: `#CD2C58`
- Secondary Pink: `#E06B80`
- Purple: `#9D84B7`
- Peach: `#FFC69D`
- Background: `#FFE6D4`

### Typography
Default typography is configured in `globals.css` for each HTML element. The design intentionally avoids Tailwind typography utilities to maintain consistency.

### Content
- Update personal information in the respective page components
- Add/remove projects in `/pages/projects/`
- Update social media links in `Header.tsx` and `Hero.tsx`
- Modify CV download links in `CVPage.tsx`

## 📄 CV/Resume Downloads

The CV page features download buttons for both Norwegian and English versions. To update:

1. Host your PDF files externally (Google Drive, Dropbox, etc.)
2. Update the URLs in `/pages/CVPage.tsx`
3. Ensure the links are set to direct download

## 🌐 Deployment

This project can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

## 🤝 Contributing

This is a personal portfolio project. If you find bugs or have suggestions, feel free to open an issue.

## 📝 License

This project is open source and available for personal use. Please credit Sandra Wilmann if you use this design as inspiration.

## 👤 Contact

**Sandra Wilmann**
- LinkedIn: [linkedin.com/in/swilmann](https://www.linkedin.com/in/swilmann/)
- GitHub: [github.com/Swillygoose](https://github.com/Swillygoose)
- Instagram: [@swilmann](https://www.instagram.com/swilmann/)
- Email: sandra.willemann@hotmail.com

---

⭐ If you like this project, please give it a star on GitHub!

Built with ❤️ using React, TypeScript, and Tailwind CSS
