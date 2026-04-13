import { Hero } from "../components/Hero";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "motion/react";

const featuredProjects = [
  {
    title: "MESHR",
    description: "Redesigning a web application to make European Court of Human Rights case law more accessible for law students and legal professionals.",
    image: "https://www.dropbox.com/scl/fi/k1h73iey4ni55t9vcj9ni/dashboard.jpg?rlkey=uo4zkna2dkmvqlt7xq5k7ikrc&st=gkvngv02&raw=1",
    tags: ["Web App Design", "UX Research", "Data Visualization"],
    gradient: "from-[#726AE9]/80 to-[#B794F4]/80",
    projectId: "project-meshr",
  },
  {
    title: "Universet",
    description: "A digital learning platform integrating Confidence-Based Assessment to help students and instructors gain deeper insights into learning patterns.",
    image: "https://www.dropbox.com/scl/fi/bbo59ayp0lc514lq4onjr/admin1.jpg?rlkey=8c9z2fccayf3eycrzjyvr4y53&st=3i85qunx&raw=1",
    tags: ["UX Design", "Educational Technology", "System Design"],
    gradient: "from-[#1E88E5]/80 to-[#26C6DA]/80",
    projectId: "project-universet",
  },
  {
    title: "Trotter App Design",
    description: "A mobile app concept to inspire people to discover new places and events. Solo project showcasing branding and full product design.",
    image: "https://www.dropbox.com/scl/fi/nt4a5yxtl505k0b878899/fel1.png?rlkey=iccrg3yxqeut46ud0qpe3nuhz&st=b9w8gwfg&raw=1",
    tags: ["Mobile App Design", "Branding", "Figma"],
    gradient: "from-[#9D84B7]/80 to-[#CD2C58]/80",
    projectId: "project-trotter",
  },
];

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
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

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  gradient={project.gradient}
                  index={index}
                  projectId={project.projectId}
                  onNavigate={onNavigate}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <SkillsSection />
      </div>
    </div>
  );
}