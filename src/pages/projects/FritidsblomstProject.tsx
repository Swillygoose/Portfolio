import { ProjectPage } from "../ProjectPage";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface FritidsblomstProjectProps {
  onNavigate: (page: string) => void;
}

export function FritidsblomstProject({ onNavigate }: FritidsblomstProjectProps) {
  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="Fritidsblomst - Free Time Reminder"
      description="An Arduino-powered interactive flower that opens and closes with music to remind users to take time off."
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
                src="https://www.dropbox.com/scl/fi/56j9l8myiw756l4pbnf94/fri2.png?rlkey=o78nqtxx8vdjmpravaqxqxqb7&st=fs8xspe0&raw=1"
                alt="Fritidsblomst timeline planning"
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
                src="https://www.dropbox.com/scl/fi/da7qi5kal02yg6geok8fe/fri3.png?rlkey=ws0sebzfflb565i6y4vgw4j48&st=l8sawnse&raw=1"
                alt="Fritidsblomst timeline iteration"
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
              src="https://www.dropbox.com/scl/fi/joj2ipcak71ckh24ddkoo/fri1.png?rlkey=xjjkxnm0v4yx3himoktszkay0&st=e3wdt6yi&raw=1"
              alt="Fritidsblomst full setup"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      }
      client="University Project"
      duration="3 months"
      role="Team Leader, UX/UI Designer"
      tags={[
        "Physical Computing",
        "Arduino",
        "User Research",
        "Product Design",
        "Leadership",
        "User-Centered Design",
      ]}
      gradient="from-[#81C784]/80 to-[#A5D6A7]/80"
      iconColors={{
        primary: "text-[#66BB6A]",
        secondary: "text-[#81C784]",
        tertiary: "text-[#A5D6A7]",
      }}
      textColors={{
        titleGradient: "from-[#66BB6A] to-[#81C784]",
        badgeGradient: "from-[#66BB6A] to-[#81C784]",
        buttonGradient: "from-[#66BB6A] to-[#81C784]",
        buttonHoverGradient: "from-[#4CAF50] to-[#66BB6A]",
        processNumberGradient: "from-[#66BB6A] to-[#81C784]",
        bulletGradient: "from-[#66BB6A] to-[#81C784]",
      }}
      challenge="Many people who do voluntary work struggle to balance their studies, work commitments, and volunteer activities while maintaining healthy free time. Through user research with volunteers, we discovered that they often neglect personal downtime, leading to burnout and reduced effectiveness in all areas of their lives. The challenge was to create a physical, tangible reminder that would encourage these busy individuals to prioritize their leisure time without being intrusive or adding another digital burden."
      solution="Fritidsblomst (Free Time Flower) is an Arduino-powered interactive flower that serves as a gentle, physical reminder to take time off. The flower opens and closes mechanically while playing a tune, creating a calming, non-digital moment that prompts users to pause and consider their free time. Unlike app notifications that can be dismissed or ignored, the physical presence and mechanical movement of the flower creates a more meaningful interaction. The project was developed closely with volunteers through iterative design sessions, ensuring the solution truly met their needs."
      myRole="As team leader and designer in this 5-person collaborative project, I coordinated the team's efforts, facilitated user research sessions with volunteers, and led the iterative design process. I conducted interviews and observations to understand the work-life balance challenges faced by voluntary workers. I designed the interaction model and user experience for the flower, determining when and how it should open/close to be effective without being annoying. I also contributed to the Arduino programming and mechanical design, ensuring the technical implementation aligned with user needs. Throughout the project, I managed team communication, sprint planning, and ensured we maintained a user-centered approach."
      process={[
        {
          phase: "User Research & Discovery",
          description:
            "Conducted interviews and observational studies with volunteers to understand their daily routines, stress points, and relationship with free time. Discovered that digital reminders were often ignored or added to stress. Identified that volunteers respond better to physical, tangible interventions. Created user personas and journey maps to guide the design process.",
        },
        {
          phase: "Concept Development & Prototyping",
          description:
            "Brainstormed various physical reminder concepts with the team. Settled on a flower metaphor as it represents growth, nature, and taking time to appreciate beauty. Created paper prototypes and mechanical mockups to test the opening/closing mechanism. Tested different audio cues with users to find the right balance between noticeable and calming. Iterated on the design based on early user feedback.",
          additionalImage: {
            src: "https://www.dropbox.com/scl/fi/13rox7s4323lrxbu3tjxn/fri4.png?rlkey=sieozfyutgm73n043xsemuh1c&st=y8rigjc2&raw=1",
            alt: "Fritidsblomst planning and iteration process",
            caption: "Planning sessions and iterative design process with the team",
          },
        },
        {
          phase: "Arduino Development",
          description:
            "Programmed the Arduino to control servo motors for the flower opening/closing mechanism. Implemented audio playback for the tune using a piezo speaker. Created timing logic to trigger reminders at optimal moments based on user research findings. Tested various speeds and movements to create smooth, natural-looking flower animations. Integrated sensors to detect user interaction.",
        },
        {
          phase: "User Testing & Refinement",
          description:
            "Deployed prototypes with actual volunteers in their work environments. Gathered feedback through interviews and observation. Refined the timing, frequency, and intensity of reminders based on real-world usage. Adjusted the mechanical design for reliability and aesthetic appeal. Documented the final design and created a guide for users to personalize their reminder schedules.",
        },
      ]}
      images={[
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/joj2ipcak71ckh24ddkoo/fri1.png?rlkey=xjjkxnm0v4yx3himoktszkay0&st=e3wdt6yi&raw=1"
              alt="Fritidsblomst physical prototype"
              className="w-full h-full object-cover"
            />
          ),
          caption: "The physical prototype in use",
        },
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/13rox7s4323lrxbu3tjxn/fri4.png?rlkey=sieozfyutgm73n043xsemuh1c&st=y8rigjc2&raw=1"
              alt="Fritidsblomst prototype detail"
              className="w-full h-full object-cover"
            />
          ),
          caption: "Close-up of the Arduino-powered mechanism",
        },
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/56j9l8myiw756l4pbnf94/fri2.png?rlkey=o78nqtxx8vdjmpravaqxqxqb7&st=fs8xspe0&raw=1"
              alt="Fritidsblomst timeline planning"
              className="w-full h-full object-cover"
            />
          ),
          caption: "Project timeline and planning process",
        },
      ]}
      outcomes={[
        "Successfully created a functional Arduino-powered flower with smooth opening/closing mechanics",
        "Received positive feedback from volunteers who found the physical reminder more effective than digital notifications",
        "Led a 5-person team through successful user-centered design process with multiple iterations",
        "Demonstrated that physical computing solutions can address digital wellness challenges",
        "Users reported increased awareness of their need for breaks and improved work-life balance",
        "Project showcased effective collaboration between technical development and user research",
        "Created comprehensive documentation for future iterations and similar projects",
      ]}
    />
  );
}