import { ProjectPage } from "../ProjectPage";

interface PortfolioWebsiteProjectProps {
  onNavigate: (page: string) => void;
}

export function PortfolioWebsiteProject({ onNavigate }: PortfolioWebsiteProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="Portfolio Website Redesign"
      description="A stunning portfolio website redesign for a creative agency showcasing their work through immersive interactions"
      heroImage="https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEyOTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
      client="Creative Collective Agency"
      duration="4 months"
      role="Lead UX/UI Designer"
      tags={["Web Design", "Animation", "Prototyping", "Interaction Design"]}
      gradient="from-[#CD2C58]/80 to-[#9D84B7]/80"
      challenge="Creative Collective's existing portfolio site failed to reflect the quality and innovation of their work. The static, template-based design didn't capture attention, had poor mobile experience, and wasn't converting visitors into leads. In a competitive creative industry, they needed a portfolio that would not only showcase their projects beautifully but also demonstrate their design capabilities through the website itself."
      solution="I designed an immersive, scroll-driven portfolio experience that treats the website as a piece of art in itself. Each project is revealed through smooth animations and transitions that guide users through the agency's work. The design uses bold typography, dynamic layouts, and subtle parallax effects to create depth. Interactive case study pages let visitors explore projects in detail, while a streamlined contact flow makes it easy for potential clients to reach out."
      myRole="As Lead UX/UI Designer, I owned the complete redesign from initial concept to final launch. My responsibilities included conducting competitive analysis and user research, creating the site architecture and user flows, designing all pages and interactions in high fidelity, building interactive prototypes to demonstrate complex animations, conducting usability testing with target users, and collaborating with developers to ensure smooth implementation of all interactive elements."
      process={[
        {
          phase: "Research & Strategy",
          description: "Analyzed 20+ award-winning agency portfolios. Conducted interviews with 10 potential clients to understand what influences their agency selection. Reviewed analytics from existing site to identify drop-off points. Defined success metrics and user goals.",
        },
        {
          phase: "Concept & Wireframing",
          description: "Explored multiple concepts for presenting project work. Created low-fidelity wireframes for key pages and user flows. Tested different navigation patterns and project browsing experiences. Developed a modular content system that could accommodate various project types.",
        },
        {
          phase: "Visual Design & Animation",
          description: "Designed bold, modern visual style that stands out in the creative industry. Created custom animations and transitions for each interaction. Developed responsive layouts that work beautifully across all devices. Designed unique layouts for different project case studies.",
        },
        {
          phase: "Prototyping & Testing",
          description: "Built high-fidelity interactive prototypes with realistic animations. Conducted usability testing with 15 users including potential clients. Optimized animations for performance across devices. Refined interactions based on feedback and performance testing.",
        },
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEyOTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Homepage with dynamic hero and scroll animations",
        },
        {
          url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTE1NjA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Project grid with interactive hover states",
        },
        {
          url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxMTU2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Project case study page with rich media",
        },
        {
          url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwZGVzaWdufGVufDF8fHx8MTc2MTE1NjEzMXww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Mobile responsive design and interactions",
        },
      ]}
      outcomes={[
        "Site generated 250% more qualified leads in the first 3 months",
        "Average session duration increased from 1.5 to 6.2 minutes",
        "Bounce rate decreased by 58%, with visitors viewing 4+ pages on average",
        "Client conversion rate improved by 85% compared to old site",
        "Site won 'Best Agency Portfolio' at Awwwards and CSS Design Awards",
        "Featured in 15+ design blogs and received 50,000+ social shares",
        "Mobile traffic increased 120% with new responsive experience",
      ]}
    />
  );
}
