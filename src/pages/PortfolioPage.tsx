import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";

const allProjects = [
  {
    title: "HealthTrack Mobile App",
    description: "A comprehensive health and fitness tracking app with intuitive UI and personalized workout plans.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMDIxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile Design", "UX Research", "Figma"],
    gradient: "from-[#CD2C58]/80 to-[#E06B80]/80",
    category: "mobile",
    projectId: "project-healthtrack",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard for managing online stores with real-time analytics and inventory control.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjExNDQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web Design", "Dashboard", "Design System"],
    gradient: "from-[#9D84B7]/80 to-[#CD2C58]/80",
    category: "web",
  },
  {
    title: "BrandFlow Design System",
    description: "A complete design system with reusable components, documentation, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEzMzU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Design System", "Branding", "Documentation"],
    gradient: "from-[#E06B80]/80 to-[#FFC69D]/80",
    category: "branding",
  },
  {
    title: "FoodShare Social App",
    description: "A social platform for food lovers to share recipes and connect with other cooking enthusiasts.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTA3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile App", "Social Media", "UX/UI"],
    gradient: "from-[#FFC69D]/80 to-[#E06B80]/80",
    category: "mobile",
  },
  {
    title: "TechStart Branding",
    description: "Complete brand identity including logo, color palette, typography, and brand guidelines for a tech startup.",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjExMzQwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Branding", "Identity", "Logo Design"],
    gradient: "from-[#9D84B7]/80 to-[#E06B80]/80",
    category: "branding",
  },
  {
    title: "Portfolio Website Redesign",
    description: "Modern portfolio website for a photographer with focus on showcasing work and booking system.",
    image: "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEzMzU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web Design", "Portfolio", "Responsive"],
    gradient: "from-[#CD2C58]/80 to-[#9D84B7]/80",
    category: "web",
  },
];

const categories = ["All", "Mobile", "Web", "Branding"];

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory.toLowerCase());

  return (
    <div className="pt-20 relative bg-gradient-to-br from-[#FFE6D4] via-[#FFC69D]/40 to-[#FFE6D4] overflow-hidden">
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
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center relative">
            {/* Large light background shape */}
            <motion.div
              className="absolute inset-0 -m-12 bg-white/30 backdrop-blur-sm rounded-[3rem] -z-10"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold"
            >
              My Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B6B8D] max-w-2xl mx-auto mb-12"
            >
              Explore my collection of projects showcasing user-centered design, 
              creative problem-solving, and attention to detail
            </motion.p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#CD2C58] to-[#E06B80] text-white shadow-lg"
                      : "bg-white/60 backdrop-blur-xl text-[#4A4E69] hover:bg-white/70 border border-white/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard {...project} index={index} onNavigate={onNavigate} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#9D84B7] to-[#CD2C58]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-white"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 mb-8 leading-relaxed"
            >
              I'm always excited to take on new challenges and create amazing digital experiences.
              Let's work together to bring your vision to life!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#CD2C58] px-8 py-3 rounded-full hover:shadow-2xl transition-shadow"
            >
              Get in Touch
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
}