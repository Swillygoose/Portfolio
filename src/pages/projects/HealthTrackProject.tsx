import { ProjectPage } from "../ProjectPage";

interface HealthTrackProjectProps {
  onNavigate: (page: string) => void;
}

export function HealthTrackProject({ onNavigate }: HealthTrackProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="HealthTrack Mobile App"
      description="A comprehensive health and fitness tracking app with intuitive UI and personalized workout plans"
      heroImage="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMDIxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      client="HealthTech Innovations"
      duration="4 months"
      role="Lead UX/UI Designer"
      tags={["Mobile Design", "UX Research", "Figma", "Prototyping"]}
      gradient="from-[#CD2C58]/80 to-[#E06B80]/80"
      challenge="HealthTech Innovations needed a mobile app that would make health tracking accessible and engaging for users of all fitness levels. The main challenge was designing an interface that could handle complex health data while remaining simple and motivating for daily use. Many existing fitness apps overwhelmed users with too much information or felt clinical and uninviting."
      solution="I designed a clean, intuitive interface that progressively reveals information based on user needs. The app uses vibrant gradients and micro-interactions to create an energizing experience, while smart data visualization makes complex metrics easy to understand at a glance. Personalized workout plans adapt to user progress, keeping motivation high."
      myRole="As the Lead UX/UI Designer, I was responsible for the entire design process from initial research to final handoff. This included conducting user interviews, creating user personas and journey maps, designing wireframes and high-fidelity mockups, building interactive prototypes, conducting usability testing, and working closely with developers to ensure proper implementation. I also established the design system and component library for future scalability."
      process={[
        {
          phase: "Research & Discovery",
          description: "Conducted user interviews with 25 participants across different fitness levels. Analyzed competitor apps and identified pain points. Created user personas and mapped out user journeys to understand needs and behaviors.",
        },
        {
          phase: "Ideation & Wireframing",
          description: "Sketched multiple concepts and created low-fidelity wireframes. Focused on simplifying complex health data presentation. Iterated based on team feedback and user testing of paper prototypes.",
        },
        {
          phase: "Visual Design",
          description: "Developed a vibrant color palette using energizing gradients. Created a comprehensive design system with reusable components. Designed high-fidelity mockups for all key user flows and edge cases.",
        },
        {
          phase: "Prototyping & Testing",
          description: "Built interactive prototypes in Figma for usability testing. Conducted 3 rounds of testing with 15 users per round. Refined designs based on user feedback and analytics, improving task completion rates by 40%.",
        },
      ]}
      images={[
        {
          url: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxMTAwNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Dashboard with personalized health metrics",
        },
        {
          url: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NjEwNjcxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Wireframe iterations and user flow mapping",
        },
        {
          url: "https://images.unsplash.com/photo-1747999827332-163aa33cd597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTE1MjI1OXww&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Design system and component library",
        },
        {
          url: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMDIxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          caption: "Workout tracking interface with progress visualization",
        },
      ]}
      outcomes={[
        "Achieved a 92% user satisfaction rating in post-launch surveys",
        "App reached 50,000 downloads in the first month with a 4.8-star rating",
        "Users reported 35% increase in workout consistency compared to their previous tracking methods",
        "Reduced user onboarding time by 60% through streamlined first-time experience",
        "Design system has been successfully used to launch 3 additional feature sets",
        "Won 'Best Health App Design' at the 2024 Mobile Design Awards",
      ]}
    />
  );
}