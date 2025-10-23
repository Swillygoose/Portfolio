import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { TrotterIcon } from "../components/TrotterIcon";
import { useState } from "react";

const allProjects = [
  {
    title: "MESHR - Legal Research Platform",
    description: "Redesigning a web application to make European Court of Human Rights case law more accessible for law students and professionals.",
    image: "https://www.dropbox.com/scl/fi/k1h73iey4ni55t9vcj9ni/dashboard.jpg?rlkey=uo4zkna2dkmvqlt7xq5k7ikrc&st=gkvngv02&raw=1",
    tags: ["Web App Design", "User Research", "Data Visualization"],
    gradient: "from-[#726AE9]/80 to-[#B794F4]/80",
    category: ["web"],
    projectId: "project-meshr",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with glassmorphism aesthetics, showcasing UX/UI projects with clean design and seamless navigation.",
    image: "https://www.dropbox.com/scl/fi/8slp86wwa6rvcbyph4a5w/port1.png?rlkey=p5yep5l0idomnngt0nogvpzo4&st=qby5nejn&raw=1",
    tags: ["Web Design", "React", "Figma"],
    gradient: "from-[#CD2C58]/80 to-[#9D84B7]/80",
    category: ["web"],
    projectId: "project-portfolio-website",
  },
  {
    title: "SOLVEIG - Solar Panel App",
    description: "Mobile app using Norwegian weather data and Google APIs to calculate solar panel savings and optimize placement.",
    image: "https://www.dropbox.com/scl/fi/sxvxde0h4empdd4dknj5b/sol9.png?rlkey=dlfwmnbdzhw1r3fcth97tdt2a&st=wzkyrncf&raw=1",
    tags: ["Mobile App Development", "Kotlin", "Leadership"],
    gradient: "from-[#FFA726]/80 to-[#FFB74D]/80",
    category: ["mobile"],
    projectId: "project-solveig",
  },
  {
    title: "Trotter App Design",
    description: "Creating an app to get people to new places. Explore new places and events near you. Solo concept project.",
    image: "https://www.dropbox.com/scl/fi/nt4a5yxtl505k0b878899/fel1.png?rlkey=iccrg3yxqeut46ud0qpe3nuhz&st=b9w8gwfg&raw=1",
    tags: ["Mobile App Design", "Branding", "Figma"],
    gradient: "from-[#9D84B7]/80 to-[#CD2C58]/80",
    category: ["mobile", "branding"],
    projectId: "project-trotter",
  },
  {
    title: "Toby's App Design",
    description: "A playful burger ordering app with gamification, colorful branding, and delightful user experience.",
    image: "https://www.dropbox.com/scl/fi/um8d0mhj38luwe1xktn7y/fel2.png?rlkey=mbldtgr0n92om5nieugq5z249&st=94na6wi9&raw=1",
    tags: ["Mobile App Design", "Branding", "Figma"],
    gradient: "from-[#7B5EA7]/80 to-[#B794F4]/80",
    category: ["mobile", "branding"],
    projectId: "project-tobys",
  },
  {
    title: "Fritidsblomst - Free Time Reminder",
    description: "An Arduino-powered interactive flower that reminds users to take time off. Built with volunteers who struggle with work-life balance.",
    image: "https://www.dropbox.com/scl/fi/13rox7s4323lrxbu3tjxn/fri4.png?rlkey=sieozfyutgm73n043xsemuh1c&st=y8rigjc2&raw=1",
    tags: ["Physical Computing", "Arduino", "User Research"],
    gradient: "from-[#81C784]/80 to-[#A5D6A7]/80",
    category: ["branding"],
    projectId: "project-fritidsblomst",
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
    : allProjects.filter(project => project.category.includes(selectedCategory.toLowerCase()));

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
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {filteredProjects.map((project, index) => (
                <div key={project.title}>
                  <ProjectCard 
                    {...project} 
                    index={index} 
                    onNavigate={onNavigate}
                    icon={project.projectId === "project-trotter" ? <TrotterIcon /> : undefined}
                  />
                </div>
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