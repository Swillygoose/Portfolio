import { ProjectPage } from "../ProjectPage";

interface EcommerceProjectProps {
  onNavigate: (page: string) => void;
}

export function EcommerceProject({ onNavigate }: EcommerceProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="E-Commerce Dashboard"
      description="A powerful analytics dashboard for e-commerce businesses to track sales, inventory, and customer insights"
      heroImage="https://images.unsplash.com/photo-1635334632340-08ee6727adaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTU1NDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
      client="RetailPro Inc."
      duration="5 months"
      role="Senior UX/UI Designer"
      tags={["Dashboard Design", "Data Visualization", "Web App", "User Research"]}
      gradient="from-[#9D84B7]/80 to-[#CD2C58]/80"
      challenge="RetailPro needed a dashboard that could handle massive amounts of e-commerce data while remaining intuitive for business owners with varying levels of technical expertise. The existing system was cluttered, slow, and failed to surface actionable insights. Users were overwhelmed by too many metrics and struggled to make informed business decisions."
      solution="I designed a clean, modular dashboard that uses progressive disclosure and smart data visualization to present complex analytics in an accessible way. Custom charts and graphs make trends immediately visible, while configurable widgets allow users to personalize their view. Real-time updates and intelligent alerts help business owners stay on top of critical metrics without constant monitoring."
      myRole="As Senior UX/UI Designer, I led the complete redesign of the dashboard platform. My responsibilities included conducting stakeholder interviews, analyzing user analytics, creating information architecture, designing wireframes and high-fidelity mockups, building interactive prototypes, and collaborating with the development team throughout implementation. I also mentored two junior designers on the project."
      process={[
        {
          phase: "Discovery & Research",
          description: "Interviewed 15 e-commerce business owners and analyzed usage data from the existing dashboard. Identified key pain points and most-used features. Created detailed user personas and mapped out critical user workflows for different business sizes.",
        },
        {
          phase: "Information Architecture",
          description: "Reorganized dashboard structure based on user priorities. Created a modular system allowing customization while maintaining coherent navigation. Developed a hierarchy that surfaces the most important metrics first.",
        },
        {
          phase: "Design & Prototyping",
          description: "Designed custom data visualizations optimized for quick scanning. Created a comprehensive component library for scalability. Built interactive prototypes to test complex interactions like drill-down analytics and report generation.",
        },
        {
          phase: "Testing & Refinement",
          description: "Conducted usability testing with 20 participants across multiple rounds. A/B tested different chart types and layouts. Refined based on feedback, improving task completion speed by 55%.",
        },
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1635334632340-08ee6727adaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTU1NDczfDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Main dashboard view with customizable widgets",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTE1NTU5NHww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Sales analytics with interactive charts",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjExNTU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Inventory management interface",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTE1NTU5NHww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Customer insights and segmentation tools",
        },
      ]}
      outcomes={[
        "Increased daily active users by 78% in the first quarter after launch",
        "Reduced time to complete common tasks by 55% on average",
        "Achieved 95% user satisfaction rating from existing customers",
        "Generated 40% more custom reports per user, indicating higher engagement with analytics",
        "Platform performance improved with 65% faster load times for complex dashboards",
        "Received 'Best Business Intelligence Design' recognition at UX Design Awards 2024",
      ]}
    />
  );
}
