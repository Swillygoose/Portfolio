import { motion } from "motion/react";
import { Figma, Palette, Smartphone, Zap, Users, Pen } from "lucide-react";

const skills = [
  {
    icon: Figma,
    title: "UI Design",
    description: "Crafting beautiful interfaces with attention to detail",
    gradient: "from-[#CD2C58] to-[#E06B80]",
  },
  {
    icon: Users,
    title: "UX Research",
    description: "Understanding user needs through research and testing",
    gradient: "from-[#9D84B7] to-[#7B68A6]",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Creating seamless mobile experiences for iOS & Android",
    gradient: "from-[#E06B80] to-[#FFC69D]",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Developing cohesive visual identities and design systems",
    gradient: "from-[#FFC69D] to-[#E06B80]",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description: "Bringing ideas to life with interactive prototypes",
    gradient: "from-[#7B68A6] to-[#CD2C58]",
  },
  {
    icon: Pen,
    title: "Illustrations",
    description: "Creating custom illustrations and visual assets",
    gradient: "from-[#CD2C58] to-[#9D84B7]",
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">What I Do Best</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:border-white/80"
              >
                {/* Background gradient effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Icon and Title in a row */}
                <div className="relative flex items-center gap-4 mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[#4A4E69]">{skill.title}</h3>
                </div>

                <p className="relative text-sm text-[#6B6B8D]">{skill.description}</p>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.gradient} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}