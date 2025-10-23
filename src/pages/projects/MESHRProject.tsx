import { ProjectPage } from "../ProjectPage";
import { motion } from "motion/react";
import { Button } from "../../components/ui/button";
import { ExternalLink } from "lucide-react";
import { MESHRDashboardImage } from "../../components/MESHRDashboardImage";
import { MESHRSearchImage } from "../../components/MESHRSearchImage";
import { MESHRLandingImage } from "../../components/MESHRLandingImage";

interface MESHRProjectProps {
  onNavigate: (page: string) => void;
}

export function MESHRProject({
  onNavigate,
}: MESHRProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="MESHR"
      description="Redesigning a web application to make European Court of Human Rights case law more accessible and navigable for law students and legal professionals through modern UX design and network analysis visualization"
      backgroundColor={{
        main: "from-[#E8E4F8] via-[#D4CCF4]/40 to-[#E8E4F8]",
        blob1: "from-[#B794F4]/30 to-[#726AE9]/20",
        blob2: "from-[#9D84B7]/30 to-[#B794F4]/20",
        blob3: "from-[#D4CCF4]/25 to-[#B794F4]/15",
      }}
      iconColors={{
        primary: "text-[#726AE9]",
        secondary: "text-[#9D84B7]",
        tertiary: "text-[#B794F4]",
      }}
      heroContent={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]"
          >
            <MESHRDashboardImage />
          </motion.div>

          {/* Search Results Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]"
          >
            <MESHRSearchImage />
          </motion.div>

          {/* Landing Page Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]"
          >
            <MESHRLandingImage />
          </motion.div>
        </div>
      }
      client="CELL - University of Oslo"
      duration="Ongoing (2025 - Present)"
      role="UX Designer"
      tags={[
        "Web App Design",
        "User Research",
        "Information Architecture",
        "Data Visualization",
        "Figma",
      ]}
      gradient="from-[#726AE9]/80 to-[#B794F4]/80"
      liveUrl="https://www.meshr.org/"
      challenge="MESHR started as a hackathon-winning project in 2023 and launched officially in 2024 with 200+ users. However, the initial design was functional but lacked the modern, intuitive interface needed to handle complex legal case networks and data visualization. Users struggled to navigate through interconnected cases, understand relationships between legal precedents, and efficiently search through thousands of ECtHR (European Court of Human Rights) cases. The platform needed a complete UX redesign to support advanced features like AI-recommended cases, contextual search, and interactive graph visualizations while remaining accessible to both law students and experienced legal professionals."
      solution="I led a comprehensive redesign of MESHR's web application, creating a modern, cohesive design system with a focus on clarity and usability. The new design features a clean glassmorphism UI with purple gradients that align with the brand identity, an intuitive sidebar navigation system for quick access to key features, improved search functionality with contextual and filtering options, and streamlined project management for organizing case research. The redesign emphasizes visual hierarchy, making complex legal data more digestible through thoughtful information architecture and progressive disclosure of detailed information."
      myRole="As the UX Designer at CELL - University of Oslo, I'm responsible for reimagining the entire user experience of MESHR. My work includes conducting user research with law students and legal professionals, analyzing user behavior and pain points in the existing system, creating wireframes and high-fidelity prototypes in Figma, designing a comprehensive design system with reusable components, and collaborating with developers to ensure accurate implementation. I focus on balancing the needs of novice law students with the advanced requirements of legal researchers and professionals."
      process={[
        {
          phase: "User Research & Analysis",
          description:
            "Conducted interviews with law students and professionals using MESHR. Analyzed usage patterns of 200+ existing users to identify pain points in navigation, search, and case discovery. Researched competitor legal research platforms and best practices in data-heavy web applications.",
        },
        {
          phase: "Information Architecture",
          description:
            "Restructured the navigation to prioritize key user tasks: searching cases, managing projects, viewing network graphs, and accessing AI recommendations. Created user flows for primary use cases including contextual search, project creation, and case analysis.",
        },
        {
          phase: "Visual Design & Design System",
          description:
            "Developed a modern design language featuring glassmorphism effects, purple gradients (#726AE9 to #B794F4), and clean typography. Created a comprehensive component library including cards, buttons, form inputs, navigation elements, and data visualization components. Ensured consistency across all screens.",
        },
        {
          phase: "Prototyping & Iteration",
          description:
            "Built high-fidelity interactive prototypes in Figma showcasing the dashboard, search interface, and organization pages. Gathered feedback from the MESHR team and users, iterating on the designs to improve usability and visual appeal. Prepared detailed design specifications for developer handoff.",
        },
      ]}
      customContent={
        <div className="space-y-16">
          {/* Design Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="mb-4 bg-gradient-to-r from-[#726AE9] to-[#B794F4] bg-clip-text text-transparent font-bold">
                Key Design Features
              </h3>
              <p className="text-[#6B6B8D] max-w-3xl mx-auto">
                The MESHR redesign focuses on creating an
                intuitive, modern interface that makes complex
                legal research accessible and efficient.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                <h4 className="mb-3 bg-gradient-to-r from-[#726AE9] to-[#B794F4] bg-clip-text text-transparent font-bold">
                  Dashboard
                </h4>
                <p className="text-[#6B6B8D]">
                  Quick access to project management, MESHR
                  newsfeed, calendar integration, and AI chatbot
                  assistance with a clean card-based layout.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                <h4 className="mb-3 bg-gradient-to-r from-[#726AE9] to-[#B794F4] bg-clip-text text-transparent font-bold">
                  Advanced Search
                </h4>
                <p className="text-[#6B6B8D]">
                  Contextual search capabilities with advanced
                  filtering and clear result organization
                  displaying key metadata for quick scanning.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                <h4 className="mb-3 bg-gradient-to-r from-[#726AE9] to-[#B794F4] bg-clip-text text-transparent font-bold">
                  Organization
                </h4>
                <p className="text-[#6B6B8D]">
                  Visual timeline showcasing MESHR's journey,
                  team member profiles, and collaboration
                  opportunities for potential contributors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      }
      outcomes={[
        "Created a comprehensive design system with 50+ reusable components",
        "Redesigned the entire web application serving 200+ active users",
        "Improved information architecture for more intuitive navigation",
        "Developed modern UI that aligns with contemporary web design standards",
        "Enhanced search experience with contextual filtering and better result visualization",
        "Designed scalable components to support future features like AI recommendations and network graphs",
      ]}
    />
  );
}