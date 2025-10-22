import { Hero } from "../components/Hero";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "motion/react";

const featuredProjects = [
  {
    title: "HealthTrack Mobile App",
    description: "A comprehensive health and fitness tracking app with intuitive UI and personalized workout plans.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMDIxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile Design", "UX Research", "Figma"],
    gradient: "from-[#CD2C58]/80 to-[#E06B80]/80",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard for managing online stores with real-time analytics and inventory control.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjExNDQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web Design", "Dashboard", "Design System"],
    gradient: "from-[#9D84B7]/80 to-[#CD2C58]/80",
  },
  {
    title: "BrandFlow Design System",
    description: "A complete design system with reusable components, documentation, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEzMzU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Design System", "Branding", "Documentation"],
    gradient: "from-[#E06B80]/80 to-[#FFC69D]/80",
  },
];

export function HomePage() {
  return (
    <div className="relative bg-gradient-to-br from-[#FFE6D4] via-[#FFC69D]/40 to-[#FFE6D4] overflow-hidden">
      {/* One continuous animated background with blobs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#E06B80]/30 to-[#CD2C58]/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-br from-[#9D84B7]/30 to-[#E06B80]/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFC69D]/25 to-[#E06B80]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-[#CD2C58]/25 to-[#9D84B7]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        
        {/* Featured Projects Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">Featured Projects</h2>
              <p className="text-[#6B6B8D] max-w-2xl mx-auto">
                A selection of my recent work showcasing creative solutions and user-centered design
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/60 hover:border-white/80 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="mb-3 text-[#4A4E69]">{project.title}</h3>
                    <p className="text-sm text-[#6B6B8D] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm text-[#CD2C58] border border-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />
      </div>
    </div>
  );
}
