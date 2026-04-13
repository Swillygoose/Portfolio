import { ProjectPage } from "../ProjectPage";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface UniversetProjectProps {
  onNavigate: (page: string) => void;
}

export function UniversetProject({ onNavigate }: UniversetProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="Universet"
      description="A digital learning and assessment platform that integrates Confidence-Based Marking (CBM) and Confidence-Based Assessment (CBA), helping students reflect on their certainty while giving instructors deeper insight into learning patterns"
      backgroundColor={{
        main: "from-[#E3F2FD] via-[#BBDEFB]/40 to-[#E3F2FD]",
        blob1: "from-[#42A5F5]/30 to-[#1E88E5]/20",
        blob2: "from-[#26C6DA]/30 to-[#42A5F5]/20",
        blob3: "from-[#BBDEFB]/25 to-[#42A5F5]/15",
      }}
      iconColors={{
        primary: "text-[#1E88E5]",
        secondary: "text-[#26C6DA]",
        tertiary: "text-[#42A5F5]",
      }}
      textColors={{
        titleGradient: "from-[#1E88E5] to-[#26C6DA]",
        badgeGradient: "from-[#1E88E5] to-[#26C6DA]",
        buttonGradient: "from-[#1E88E5] to-[#26C6DA]",
        buttonHoverGradient: "from-[#1565C0] to-[#00ACC1]",
        processNumberGradient: "from-[#1E88E5] to-[#26C6DA]",
        bulletGradient: "from-[#1E88E5] to-[#26C6DA]",
      }}
      heroContent={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Admin Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]"
          >
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/bbo59ayp0lc514lq4onjr/admin1.jpg?rlkey=8c9z2fccayf3eycrzjyvr4y53&st=3i85qunx&raw=1"
              alt="Universet admin interface"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Admin Screenshot 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]"
          >
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/a6lvo4blikd7galm9ye2n/admin2.jpg?rlkey=qiqhtw9idbl352lf7k1jt2vi7&st=4piqehtq&raw=1"
              alt="Universet question builder"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Admin Screenshot 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]"
          >
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/8dkxwj8kiwngoyg6flpk2/admin3.jpg?rlkey=vm462e34ppeak958qi6o18lit&st=u2b8cdbn&raw=1"
              alt="Universet student interface"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      }
      client="University of Oslo"
      duration="4 months"
      role="UX Designer, Team Lead"
      tags={[
        "UX Design",
        "Educational Technology",
        "User Research",
        "System Design",
        "Figma",
      ]}
      gradient="from-[#1E88E5]/80 to-[#26C6DA]/80"
      challenge="Assessment in higher education often fails to capture how confident students are in their knowledge. Traditional multiple-choice systems reward guessing and don't identify misconceptions clearly. The challenge was to design and prototype a digital learning platform that integrates Confidence-Based Marking (CBM) and Confidence-Based Assessment (CBA), helping students reflect on their certainty while giving instructors deeper insight into learning patterns. We needed to create an intuitive system that works for both students and instructors, while handling complex logic such as confidence levels, misconception categories, and adaptive feedback."
      solution="Universet is a digital learning and assessment platform that combines quizzes, confidence tracking, and feedback systems into one cohesive experience. The platform allows students to answer questions while indicating their confidence level, enabling a more nuanced evaluation of learning. Instead of just right or wrong, answers are categorized into correct, plausible, misconception, or incorrect, paired with confidence to generate meaningful feedback. The system supports both manual question creation and bulk import, making it flexible for educators, while maintaining a clear and accessible interface for less technical users."
      myRole="As UX designer and team lead in a multidisciplinary team, I was responsible for both design direction and project coordination. I led the design of the core user flows, including the question builder, student answering experience, and feedback system. I also facilitated workshops, aligned the team on design decisions, and ensured we maintained a consistent and intuitive user experience throughout the platform. Additionally, I worked closely with developers to translate complex pedagogical concepts into practical UI solutions, ensuring feasibility while preserving design quality."
      process={[
        {
          phase: "Research & Concept Development",
          description:
            "Explored theories behind CBM, CBA, and learning psychology. Analyzed how confidence impacts learning and identified key challenges in existing assessment systems. Defined core concepts such as confidence levels (25%, 50%, 75%, 100%), answer categories (correct, plausible, misconception, incorrect), and feedback strategies based on confidence + correctness.",
        },
        {
          phase: "Information Architecture & System Design",
          description:
            "Designed the structure of the platform, including question hierarchy (collections, categories, levels), scoring logic combining correctness and confidence, and data structures for tracking learning patterns. Developed clear mental models to make complex systems understandable for users.",
        },
        {
          phase: "UX & Interface Design",
          description:
            "Created wireframes and interactive prototypes in Figma. Key features included a simplified question builder for instructors, a segmented mode switch for manual vs. import workflows, a student answering interface integrating confidence selection, and clear, contextual feedback based on user performance. Focused heavily on clarity and accessibility for non-technical users.",
        },
        {
          phase: "Testing & Iteration",
          description:
            "Conducted usability testing and iterated on key flows. Refined interaction patterns (e.g. checkbox systems, component states), feedback clarity and tone, and navigation between different modes and features. Worked iteratively with the team to improve both usability and system logic.",
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
              <h3 className="mb-4 bg-gradient-to-r from-[#1E88E5] to-[#26C6DA] bg-clip-text text-transparent font-bold">
                Key Features
              </h3>
              <p className="text-[#6B6B8D] max-w-3xl mx-auto">
                Universet transforms traditional assessment by combining
                confidence tracking with advanced pedagogical concepts.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                <h4 className="mb-3 bg-gradient-to-r from-[#1E88E5] to-[#26C6DA] bg-clip-text text-transparent font-bold">
                  Confidence-Based Marking
                </h4>
                <p className="text-[#6B6B8D]">
                  Students indicate their confidence level (25%, 50%, 75%,
                  100%) for each answer, promoting metacognitive reflection and
                  revealing knowledge gaps.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                <h4 className="mb-3 bg-gradient-to-r from-[#1E88E5] to-[#26C6DA] bg-clip-text text-transparent font-bold">
                  Advanced Question Builder
                </h4>
                <p className="text-[#6B6B8D]">
                  Intuitive interface for creating questions with multiple
                  answer categories (correct, plausible, misconception,
                  incorrect) and support for bulk import workflows.
                </p>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
                <h4 className="mb-3 bg-gradient-to-r from-[#1E88E5] to-[#26C6DA] bg-clip-text text-transparent font-bold">
                  Adaptive Feedback System
                </h4>
                <p className="text-[#6B6B8D]">
                  Contextual feedback generated based on the combination of
                  answer correctness and confidence level, helping students
                  understand their learning patterns.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      }
      outcomes={[
        "Designed a complete UX system for confidence-based assessment",
        "Translated complex educational theory into practical, usable interfaces",
        "Created scalable structures for questions, feedback, and analytics",
        "Improved clarity for non-technical users through simplified UI patterns",
        "Led team collaboration and design alignment across the project",
        "Developed intuitive workflows for both students and instructors",
      ]}
    />
  );
}
