import { ProjectPage } from "../ProjectPage";

interface FoodShareProjectProps {
  onNavigate: (page: string) => void;
}

export function FoodShareProject({ onNavigate }: FoodShareProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="FoodShare Social App"
      description="A vibrant social platform connecting food enthusiasts to share recipes, dining experiences, and culinary adventures"
      heroImage="https://images.unsplash.com/photo-1654683413645-d8d15189384c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc2MTE1NTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
      client="Culinary Connect Co."
      duration="5 months"
      role="Lead UX/UI Designer"
      tags={["Mobile App", "Social Media", "Animation", "Interaction Design"]}
      gradient="from-[#E06B80]/80 to-[#FFC69D]/80"
      challenge="The food social media space was saturated with apps that either focused purely on restaurant reviews or recipe sharing, but none successfully created a holistic community for food lovers. Users wanted a platform to share their cooking adventures, discover new recipes, connect with fellow food enthusiasts, and document their culinary journey—all in one beautiful, engaging experience."
      solution="I designed FoodShare as a visually appetizing social platform that combines recipe sharing, meal documentation, and community interaction. The app features stunning food photography galleries, interactive recipe cards with step-by-step cooking modes, social features like collaborative meal planning, and delightful micro-interactions that make every tap feel rewarding. Custom animations bring the food to life while maintaining smooth performance."
      myRole="As Lead UX/UI Designer, I directed all aspects of the app's design from initial concept through launch. My work included conducting user research with food enthusiasts and amateur chefs, designing the complete user experience including information architecture and user flows, creating high-fidelity designs with custom illustrations, prototyping complex interactions and animations, conducting extensive usability testing, and collaborating closely with developers to ensure pixel-perfect implementation."
      process={[
        {
          phase: "User Research",
          description: "Interviewed 30 food enthusiasts, home cooks, and social media users. Analyzed competing platforms and identified gaps in the market. Created detailed personas representing different user types from casual cooks to food bloggers. Mapped user journeys for key activities like recipe discovery and meal sharing.",
        },
        {
          phase: "Experience Design",
          description: "Designed intuitive navigation that balances discovery and creation. Created innovative recipe card format that's both beautiful and functional. Developed social features that encourage authentic sharing without overwhelming users. Crafted onboarding flow that quickly delivers value.",
        },
        {
          phase: "Visual Design & Animation",
          description: "Developed warm, appetizing color palette that makes food photos shine. Created custom iconography and illustrations. Designed delightful micro-interactions for likes, saves, and shares. Built animated transitions that guide users smoothly through the app.",
        },
        {
          phase: "Testing & Iteration",
          description: "Conducted 4 rounds of usability testing with beta users. A/B tested different recipe layouts and social features. Refined animations based on performance testing. Iterated on community features based on early user feedback and engagement metrics.",
        },
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1654683413645-d8d15189384c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc2MTE1NTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Home feed with beautiful food photography",
        },
        {
          url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxMTU1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Interactive recipe card with step-by-step mode",
        },
        {
          url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwYXBwfGVufDF8fHx8MTc2MTE1NTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "User profile and meal collection",
        },
        {
          url: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc29jaWFsfGVufDF8fHx8MTc2MTE1NTg1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Community features and collaborative meal planning",
        },
      ]}
      outcomes={[
        "Reached 100,000 downloads in the first 2 months with minimal marketing",
        "Achieved 4.9-star average rating on both iOS and Android app stores",
        "Users share an average of 12 recipes per month, 3x higher than projected",
        "Daily active user rate of 68%, exceeding industry benchmarks by 40%",
        "Average session duration of 18 minutes, indicating high engagement",
        "Featured as 'App of the Day' on the iOS App Store",
        "Community grew to 250,000 active users within 6 months of launch",
      ]}
    />
  );
}
