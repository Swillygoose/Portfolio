import { ProjectPage } from "../ProjectPage";

interface BrandFlowProjectProps {
  onNavigate: (page: string) => void;
}

export function BrandFlowProject({ onNavigate }: BrandFlowProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="BrandFlow Design System"
      description="A comprehensive design system that unifies brand identity across multiple platforms and products"
      heroImage="https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBicmFuZGluZ3xlbnwxfHx8fDE3NjExNTU0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
      client="GlobalTech Solutions"
      duration="6 months"
      role="Lead Designer & Design System Architect"
      tags={["Design System", "Branding", "Component Library", "Documentation"]}
      gradient="from-[#FFC69D]/80 to-[#E06B80]/80"
      challenge="GlobalTech had grown rapidly through acquisitions, resulting in fragmented brand identity across 8 different products. Each team used different design patterns, colors, and components, leading to inconsistent user experiences and inefficient workflows. Designers were recreating the same components repeatedly, and developers struggled with maintaining multiple design implementations."
      solution="I architected and led the development of BrandFlow, a comprehensive design system that provides a single source of truth for all design decisions. The system includes a unified color palette, typography scale, component library, interaction patterns, and detailed usage guidelines. Built with scalability in mind, it supports both web and mobile platforms while maintaining flexibility for product-specific needs."
      myRole="As Lead Designer and Design System Architect, I was responsible for the entire system's creation from conception to adoption. This included conducting design audits across all products, establishing design principles, creating the component library, writing comprehensive documentation, training design and development teams, and establishing governance processes to ensure long-term success and consistency."
      process={[
        {
          phase: "Audit & Analysis",
          description: "Conducted comprehensive audit of all 8 products, cataloging every component, pattern, and design decision. Interviewed 25 designers and developers to understand pain points. Identified opportunities for consolidation and standardization while respecting legitimate product differences.",
        },
        {
          phase: "Foundation & Principles",
          description: "Established core design principles aligned with brand values. Developed unified color system, typography scale, spacing system, and accessibility standards. Created the foundational tokens that would power all future design decisions.",
        },
        {
          phase: "Component Development",
          description: "Designed and documented 120+ reusable components with multiple variants. Created both Figma and code implementations. Developed clear naming conventions and organizational structure. Built example templates showing components in context.",
        },
        {
          phase: "Adoption & Governance",
          description: "Created comprehensive documentation website with interactive examples. Led training sessions with all product teams. Established contribution guidelines and review process. Set up feedback channels and version control system for ongoing evolution.",
        },
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBicmFuZGluZ3xlbnwxfHx8fDE3NjExNTU0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Complete design system overview and documentation",
        },
        {
          url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHBhbGV0dGUlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTU1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Brand color system and accessibility guidelines",
        },
        {
          url: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2MTE1NTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Component library with variants and states",
        },
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWdufGVufDF8fHx8MTc2MTE1NTczMXww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Typography system and usage examples",
        },
      ]}
      outcomes={[
        "Reduced design-to-development handoff time by 70% across all teams",
        "Achieved 100% adoption across all 8 product teams within 6 months",
        "Decreased time spent on component creation by 85% for designers",
        "Improved brand consistency score from 42% to 96% in brand audits",
        "Enabled teams to ship new features 3x faster using pre-built components",
        "Won 'Excellence in Design Systems' at the 2024 Design Leadership Awards",
        "System has been extended to support 3 new product launches successfully",
      ]}
    />
  );
}
