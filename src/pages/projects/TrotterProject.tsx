import { ProjectPage } from "../ProjectPage";
import { motion } from "motion/react";
import { TrotterImage1 } from "../../components/TrotterImage1";
import { TrotterImage2 } from "../../components/TrotterImage2";
import { TrotterImage3 } from "../../components/TrotterImage3";
import { TrotterImage4 } from "../../components/TrotterImage4";

interface TrotterProjectProps {
  onNavigate: (page: string) => void;
}

export function TrotterProject({
  onNavigate,
}: TrotterProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="Trotter App Design"
      description="Creating an app to get people to new places. Explore new places, events near you."
      heroContent={
        <div className="space-y-4">
          {/* First row: 3 portrait images */}
          <div className="grid grid-cols-3 gap-4">
            {/* Trotter Screenshot 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]"
            >
              <TrotterImage1 />
            </motion.div>

            {/* Trotter Screenshot 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]"
            >
              <TrotterImage2 />
            </motion.div>

            {/* Trotter Screenshot 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]"
            >
              <TrotterImage3 />
            </motion.div>
          </div>

          {/* Second row: 1 landscape Figma image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
          >
            <TrotterImage4 />
          </motion.div>
        </div>
      }
      client="Solo Project"
      duration="1 week"
      role="UX/UI Designer, Branding"
      tags={[
        "Mobile App Design",
        "Branding",
        "Figma",
        "Concept Design",
      ]}
      gradient="from-[#9D84B7]/80 to-[#CD2C58]/80"
      iconColors={{
        primary: "text-[#FF6B35]",
        secondary: "text-[#FF8C42]",
        tertiary: "text-[#FFA552]",
      }}
      textColors={{
        titleGradient: "from-[#FF6B35] to-[#FFA552]",
        badgeGradient: "from-[#FF6B35] to-[#FFA552]",
        buttonGradient: "from-[#FF6B35] to-[#FFA552]",
        buttonHoverGradient: "from-[#E65A2E] to-[#FF8C42]",
        processNumberGradient: "from-[#FF6B35] to-[#FFA552]",
        bulletGradient: "from-[#FF6B35] to-[#FFA552]",
      }}
      challenge="How can we inspire people to break out of their routine and discover new places, events, and experiences in their city? Many people fall into repetitive patterns, visiting the same places repeatedly and missing out on the vibrant opportunities around them. The challenge was to create an intuitive, engaging app that makes exploration effortless and exciting."
      solution="Trotter is a location-based discovery app that personalizes recommendations for places and events based on user preferences and behavior. The app features an intuitive swipe interface for quick browsing, curated collections of hidden gems, and real-time event notifications. The branding embraces adventure and exploration with a vibrant, energetic visual identity that encourages users to step outside their comfort zone."
      myRole="As a solo designer on this concept project, I was responsible for all aspects of the design process - from conceptualization and user research to branding, visual design, and prototyping. I developed the complete identity system including logo, color palette, typography, and design language. The project was fully executed in Figma, showcasing my ability to take a product from initial concept through to high-fidelity interactive prototypes."
      process={[
        {
          phase: "Concept & Research",
          description:
            "Started by identifying the problem space - people's tendency to stick to familiar places. Researched existing discovery apps, conducted informal interviews with potential users, and mapped out core user needs. Defined the app's value proposition: making exploration spontaneous, personalized, and rewarding.",
        },
        {
          phase: "Branding & Identity",
          description:
            "Developed the 'Trotter' brand identity with a focus on adventure and discovery. Created a dynamic logo, established a vibrant color palette that evokes energy and excitement, and selected typography that feels modern and approachable. The visual language balances playfulness with sophistication.",
        },
        {
          phase: "Information Architecture",
          description:
            "Designed the app structure around three core flows: Discover (browsing new places), Events (time-sensitive activities), and Profile (personalization and saved places). Created user flows and wireframes to ensure intuitive navigation and minimal friction in the discovery process.",
        },
        {
          phase: "UI Design & Prototyping",
          description:
            "Designed high-fidelity screens in Figma with careful attention to visual hierarchy, micro-interactions, and mobile-first patterns. Built interactive prototypes to demonstrate key interactions like the swipe-to-discover interface, place detail views, and event browsing. Refined based on feedback and usability considerations.",
        },
      ]}
      images={[
        {
          component: <TrotterImage1 />,
          caption: "Trotter loading screen",
        },
        {
          component: <TrotterImage2 />,
          caption: "Trotter homescreen",
        },
        {
          component: <TrotterImage3 />,
          caption: "Trotter Profile screen",
        },
        {
          component: <TrotterImage4 />,
          caption: "Figma file",
        },
      ]}
      outcomes={[
        "Developed a complete brand identity system from concept to execution",
        "Created a comprehensive design system with 40+ reusable components",
        "Designed 25+ high-fidelity screens covering all major user flows",
        "Built interactive prototypes demonstrating key interactions and micro-animations",
        "Established a strong visual identity that resonates with the target audience",
        "Showcased ability to conceptualize, design, and prototype a complete product independently",
      ]}
    />
  );
}