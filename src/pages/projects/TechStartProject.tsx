import { ProjectPage } from "../ProjectPage";

interface TechStartProjectProps {
  onNavigate: (page: string) => void;
}

export function TechStartProject({ onNavigate }: TechStartProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="TechStart Branding"
      description="Complete brand identity system for an innovative tech startup disrupting the cloud computing space"
      heroImage="https://images.unsplash.com/photo-1693044216415-e2c1d759ed62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGJyYW5kaW5nfGVufDF8fHx8MTc2MTA5MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
      client="TechStart Cloud"
      duration="3 months"
      role="Brand Designer & Visual Lead"
      tags={["Branding", "Visual Identity", "Illustration", "Marketing Design"]}
      gradient="from-[#9D84B7]/80 to-[#E06B80]/80"
      challenge="TechStart was preparing to launch their revolutionary cloud platform but lacked a cohesive brand identity. As a startup in a crowded market dominated by established giants, they needed a brand that would stand out while conveying trust, innovation, and technical excellence. The challenge was to create an identity that felt both cutting-edge and approachable, appealing to enterprise clients while maintaining startup energy."
      solution="I created a bold, modern brand identity that positions TechStart as the innovative challenger in cloud computing. The visual system uses a vibrant gradient palette that evokes both technology and creativity, paired with clean typography and custom geometric illustrations. The brand language balances technical credibility with human approachability. All touchpoints—from the logo to marketing materials to product UI—work together to tell a cohesive story of innovation and reliability."
      myRole="As Brand Designer and Visual Lead, I was responsible for creating the entire brand identity from scratch. This included developing the brand strategy, designing the logo and visual identity system, creating a comprehensive brand guidelines document, designing marketing collateral, illustrating custom brand assets, and establishing the visual direction for the product interface. I worked directly with the founders and marketing team to ensure the brand authentically represented their vision."
      process={[
        {
          phase: "Brand Discovery",
          description: "Conducted workshops with founders to understand company vision, values, and goals. Researched competitive landscape and identified differentiation opportunities. Defined brand personality, voice, and positioning strategy. Created mood boards exploring different visual directions.",
        },
        {
          phase: "Logo & Identity Design",
          description: "Sketched 50+ logo concepts exploring various metaphors for cloud, technology, and innovation. Refined top concepts through multiple iterations. Developed final logo with variations for different applications. Created comprehensive color palette and typography system.",
        },
        {
          phase: "Visual System Development",
          description: "Designed custom illustration style that extends the brand's visual language. Created patterns, textures, and graphic elements for flexibility. Developed photography guidelines and image treatment styles. Designed icon set for product and marketing use.",
        },
        {
          phase: "Application & Guidelines",
          description: "Applied brand to real-world touchpoints including website, pitch deck, business cards, and swag. Created detailed brand guidelines covering all aspects of visual identity. Designed templates for marketing team. Presented brand rollout to entire company and partners.",
        },
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1693044216415-e2c1d759ed62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGJyYW5kaW5nfGVufDF8fHx8MTc2MTA5MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Complete brand identity overview and logo variations",
        },
        {
          url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNvbG9ycyUyMGRlc2lnbnxlbnwxfHx8fDE3NjExNTU5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Brand color palette and gradient system",
        },
        {
          url: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBpbGx1c3RyYXRpb25zfGVufDF8fHx8MTc2MTE1NTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Custom illustration system and iconography",
        },
        {
          url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzYxMTU1OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Marketing collateral and brand applications",
        },
      ]}
      outcomes={[
        "Brand identity helped secure $15M Series A funding round",
        "Website traffic increased 200% in first month after rebrand launch",
        "Brand recognition surveys showed 85% positive perception among target audience",
        "Marketing materials achieved 45% higher engagement rates compared to pre-brand versions",
        "Product signup conversion rate improved by 32% with new branded experience",
        "Featured in 'Top 10 Tech Startups to Watch' by multiple industry publications",
        "Brand system successfully scaled to support international market expansion",
      ]}
    />
  );
}
