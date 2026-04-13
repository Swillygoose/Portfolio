import { ProjectPage } from "../ProjectPage";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface PortfolioWebsiteProjectProps {
  onNavigate: (page: string) => void;
}

export function PortfolioWebsiteProject({
  onNavigate,
}: PortfolioWebsiteProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="Portfolio Website - Sandra Wilmann"
      description="A modern, responsive portfolio website showcasing UX/UI design projects with glassmorphism aesthetics and seamless user experience."
      heroContent={
        <div className="space-y-6">
          {/* Two landscape images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
            >
              <ImageWithFallback
                src="https://www.dropbox.com/scl/fi/8slp86wwa6rvcbyph4a5w/port1.png?rlkey=p5yep5l0idomnngt0nogvpzo4&st=qby5nejn&raw=1"
                alt="Portfolio homepage design"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
            >
              <ImageWithFallback
                src="https://www.dropbox.com/scl/fi/h58639waf4q6uajrekcq1/port2.png?rlkey=nsco2x7mjplcpid3a2zbg52s6&st=4lu2gp04&raw=1"
                alt="Portfolio project pages"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* One large landscape image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
          >
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/o96z6yei73wyn4u8tk6eh/port3.png?rlkey=18oor8xia82snjfoy0pd436ne&st=gc1m5o7d&raw=1"
              alt="Portfolio full design showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      }
      client="Personal Project"
      duration="1 week"
      role="UX/UI Designer, Developer"
      tags={[
        "Web Design",
        "React",
        "Figma",
        "Glassmorphism",
        "Responsive Design",
        "Frontend Development",
      ]}
      gradient="from-[#CD2C58]/80 to-[#9D84B7]/80"
      iconColors={{
        primary: "text-[#CD2C58]",
        secondary: "text-[#E06B80]",
        tertiary: "text-[#9D84B7]",
      }}
      textColors={{
        titleGradient: "from-[#CD2C58] to-[#9D84B7]",
        badgeGradient: "from-[#CD2C58] to-[#9D84B7]",
        buttonGradient: "from-[#CD2C58] to-[#9D84B7]",
        buttonHoverGradient: "from-[#B02448] to-[#8A6F9B]",
        processNumberGradient: "from-[#CD2C58] to-[#9D84B7]",
        bulletGradient: "from-[#CD2C58] to-[#9D84B7]",
      }}
      challenge="As a UX/UI designer, I needed a portfolio website that would not only showcase my projects effectively but also demonstrate my design capabilities through the portfolio itself. The challenge was to create a clean, modern, and user-friendly website that reflects my design aesthetic while ensuring optimal performance and accessibility. The portfolio needed to stand out visually while maintaining professionalism, be fully responsive across all devices, and provide an intuitive navigation experience that allows potential clients and employers to easily explore my work."
      solution="I designed and developed a modern portfolio website featuring a distinctive glassmorphism aesthetic with animated gradient backgrounds, creating a sleek and contemporary visual identity. The site uses a soft color palette of pinks, purples, and peach tones that creates a welcoming yet professional atmosphere. Built with React and Tailwind CSS, the portfolio includes five main sections: Home (featuring key projects), About (showcasing my experience and skills), Portfolio (comprehensive project gallery with filtering), CV (downloadable resume in multiple languages), and Contact (with functional form and social media integration). Each project has its own dedicated page with detailed case studies, custom color theming, and rich media content. The design emphasizes smooth animations, frosted glass cards, and thoughtful micro-interactions that enhance the user experience."
      myRole="As the sole designer and developer of this project, I was responsible for the entire design and development process. I created the visual design in Figma, establishing the color palette, typography system, and component library. I designed the information architecture and user flows to ensure intuitive navigation. I then built the website using React, implementing responsive layouts with Tailwind CSS, creating reusable components, and integrating animations using Motion (Framer Motion). I also set up the backend infrastructure using Supabase for the contact form functionality and implemented email notifications through Resend API. Throughout the process, I made design decisions that balanced aesthetics with usability and performance."
      process={[
        {
          phase: "Research & Strategy",
          description:
            "Analyzed successful portfolio websites in the UX/UI design industry to identify best practices and trends. Defined the core objectives: showcase projects effectively, demonstrate design skills, establish personal brand, and convert visitors into potential clients or employers. Created a content inventory of all projects, experience, and skills to be featured. Established key user journeys for different visitor types (recruiters, potential clients, fellow designers).",
        },
        {
          phase: "Design System & Prototyping",
          description:
            "Designed the complete visual system in Figma, including color palette (pinks, purples, peach), typography hierarchy, glassmorphism effects, and animated gradient backgrounds. Created wireframes for all five main pages (Home, About, Portfolio, CV, Contact) and individual project pages. Designed the navigation system with clear visual hierarchy and smooth transitions. Established a component library including project cards, navigation header, frosted glass containers, buttons, and forms. Prototyped key interactions and animations to test the user flow before development.",
          additionalImage: {
            src: "https://www.dropbox.com/scl/fi/o96z6yei73wyn4u8tk6eh/port3.png?rlkey=18oor8xia82snjfoy0pd436ne&st=gc1m5o7d&raw=1",
            alt: "Figma design system and components",
            caption:
              "Design system and component library created in Figma",
          },
        },
        {
          phase: "Development & Implementation",
          description:
            "Built the website using React with TypeScript for type safety and better developer experience. Implemented the design system using Tailwind CSS v4.0, creating a cohesive visual language across all pages. Developed reusable components including Header, ProjectCard, and ProjectPage with custom theming support. Integrated Motion for smooth animations and page transitions. Set up Supabase backend for contact form submissions and implemented Resend API for email notifications. Created individual project pages with custom color theming (purple for MESHR, orange for Trotter/SOLVEIG, purple for Toby's, green for Fritidsblomst). Implemented responsive design ensuring optimal viewing on mobile, tablet, and desktop devices.",
        },
        {
          phase: "Testing & Refinement",
          description:
            "Conducted cross-browser testing to ensure consistent appearance and functionality. Tested responsive behavior across multiple device sizes and orientations. Optimized performance by implementing lazy loading for images and efficient component rendering. Refined animations for smooth 60fps performance. Tested the contact form integration and email delivery. Made final adjustments to spacing, typography, and color contrast for accessibility. Prepared deployment and documented the codebase for future updates.",
        },
      ]}
      images={[
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/8slp86wwa6rvcbyph4a5w/port1.png?rlkey=p5yep5l0idomnngt0nogvpzo4&st=qby5nejn&raw=1"
              alt="Homepage with featured projects"
              className="w-full h-full object-cover"
            />
          ),
          caption:
            "Clean homepage design with featured projects and glassmorphism effects",
        },
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/h58639waf4q6uajrekcq1/port2.png?rlkey=nsco2x7mjplcpid3a2zbg52s6&st=4lu2gp04&raw=1"
              alt="Project detail page"
              className="w-full h-full object-cover"
            />
          ),
          caption:
            "Detailed project pages with custom color theming",
        },
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/o96z6yei73wyn4u8tk6eh/port3.png?rlkey=18oor8xia82snjfoy0pd436ne&st=gc1m5o7d&raw=1"
              alt="Portfolio grid view"
              className="w-full h-full object-cover"
            />
          ),
          caption:
            "Portfolio page with category filtering and project grid",
        },
      ]}
      outcomes={[
        "Created a visually distinctive portfolio that showcases design skills through the website itself",
        "Implemented a fully responsive design that works seamlessly across all devices",
        "Developed a modular component system that allows easy addition of new projects",
        "Integrated a functional contact form with backend infrastructure and email notifications",
        "Achieved smooth 60fps animations and transitions throughout the site",
        "Established a cohesive brand identity with consistent color palette and glassmorphism aesthetic",
        "Built with modern web technologies (React, Tailwind CSS, TypeScript) demonstrating technical capabilities",
        "Created comprehensive project case studies with rich media content and detailed process documentation",
      ]}
    />
  );
}