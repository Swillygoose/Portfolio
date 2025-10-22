import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  Users,
  Coffee,
  Heart,
  Sparkles,
  Zap,
  Search,
  Pen,
  Layers,
  Palette,
  MousePointerClick,
  FlaskConical,
  Crown,
  Paintbrush,
  Wand2,
  ArrowRight,
} from "lucide-react";
import portraitImage from "figma:asset/6613ac43773c1a0871d6484e71ba1e3af8238e9a.png";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

const stats = [
  { icon: Award, label: "Years Experience", value: "2+" },
  { icon: Users, label: "Happy Clients", value: "5+" },
  { icon: Coffee, label: "Projects Completed", value: "10+" },
];

const experience = [
  {
    year: "2025 - present",
    title: "UX Designer",
    company: "CELL - University of Oslo",
    description:
      "Working on user experience design projects at the University of Oslo's Centre for Experience based Legal Learning.",
  },
  {
    year: "2023 - 2024",
    title: "Social Media Assistant",
    company: "Portal One",
    description:
      "Managed social media presence and created engaging digital content for community engagement. Managed a Live Chat.",
  },
  {
    year: "2019 - present",
    title: "Freelance",
    company: "Own Company",
    description:
      "Providing freelance design services including UX/UI design, branding, and digital illustration for various clients.",
  },
];

// Portfolio projects with skills mapping
const portfolioProjects = [
  {
    id: "healthtrack",
    title: "HealthTrack Mobile App",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMDIxNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Dashboard",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjExNDQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Interaction Design",
      "Leadership",
    ],
  },
  {
    id: "brandflow",
    title: "BrandFlow Design System",
    image:
      "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEzMzU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    skills: [
      "Visual Design",
      "Interaction Design",
      "Wireframing",
      "Leadership",
      "Illustration",
    ],
  },
  {
    id: "foodshare",
    title: "FoodShare Social App",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMTA3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Animation",
    ],
  },
  {
    id: "techstart",
    title: "TechStart Branding",
    image:
      "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjExMzQwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    skills: ["Visual Design", "Illustration", "Leadership"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website Redesign",
    image:
      "https://images.unsplash.com/photo-1610989001873-03968eed0f08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2MTEzMzU0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    skills: [
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Interaction Design",
      "Animation",
    ],
  },
];

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [expandedSkill, setExpandedSkill] = useState<
    string | null
  >(null);

  const getProjectsForSkill = (skillName: string) => {
    return portfolioProjects.filter((project) =>
      project.skills.includes(skillName),
    );
  };

  const handleProjectClick = (projectId: string) => {
    if (onNavigate) {
      onNavigate(`project-${projectId}`);
    }
  };

  return (
    <div className="pt-20 relative bg-gradient-to-br from-[#FFE6D4] via-[#FFC69D]/40 to-[#FFE6D4] overflow-hidden">
      {/* One continuous animated background with blobs */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#9D84B7]/25 to-[#E06B80]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-[#E06B80]/25 to-[#CD2C58]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FFC69D]/20 to-[#9D84B7]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#E06B80]/30 to-[#CD2C58]/20 rounded-full mix-blend-multiply filter blur-3xl"
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
        className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-br from-[#9D84B7]/30 to-[#E06B80]/20 rounded-full mix-blend-multiply filter blur-3xl"
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

      {/* Content */}
      <div className="relative z-10">
        {/* About Me Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto relative">
            {/* Large light background shape */}
            <motion.div
              className="absolute inset-0 -m-12 bg-white/30 backdrop-blur-sm rounded-[3rem] -z-10"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-md mx-auto lg:mx-0"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src={portraitImage}
                    alt="Sandra Wilmann"
                    className="w-full h-[600px] object-contain"
                  />
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-6 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">
                  About Me
                </h1>
                <p className="text-[#6B6B8D] mb-6 leading-relaxed">
                  Hi! I'm Sandra Wilmann, a passionate UX/UI
                  designer with 2+ years of experience
                  crafting beautiful and functional digital
                  experiences. My journey in design started with
                  a simple curiosity about how things work and
                  evolved into a deep passion for creating
                  intuitive interfaces that users love.
                </p>
                <p className="text-[#6B6B8D] mb-6 leading-relaxed">
                  I believe that great design is not just about
                  aesthetics—it's about solving real problems
                  and making people's lives easier. Every
                  project I take on is an opportunity to blend
                  creativity with functionality, ensuring that
                  the end result is both beautiful and
                  purposeful.
                </p>
                <p className="text-[#6B6B8D] leading-relaxed">
                  When I'm not designing, you'll find me
                  exploring new coffee shops, drawing illustrations in
                  on my iPad, or playing video games!
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto relative">
            {/* Large light background shape behind entire stats section */}
            <motion.div
              className="absolute inset-0 -m-8 bg-white/30 backdrop-blur-sm rounded-[3rem] -z-10"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="text-center relative"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#CD2C58] to-[#E06B80] mb-4 shadow-lg relative">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-[#6B6B8D]">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* My Journey */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">
                My Journey
              </h2>
              <p className="text-[#6B6B8D]">
                A timeline of my professional experience and
                growth
              </p>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative pl-8 border-l-2 border-white/40"
                >
                  {/* Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#CD2C58] to-[#E06B80] shadow-lg" />

                  <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50">
                    <div className="text-sm text-[#CD2C58] mb-2">
                      {exp.year}
                    </div>
                    <h3 className="mb-2 text-[#4A4E69]">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#9D84B7] mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#6B6B8D] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">
                Skills & Tools
              </h2>
              <p className="text-[#6B6B8D]">
                My toolkit for creating exceptional digital
                experiences
              </p>
            </motion.div>

            {/* Design Skills with Expandable Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#CD2C58] to-[#E06B80] shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[#4A4E69]">
                  Design Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "User Research",
                    icon: Search,
                    description:
                      "Conducting in-depth user interviews and data analysis to inform design decisions",
                  },
                  {
                    name: "Wireframing",
                    icon: Pen,
                    description:
                      "Creating detailed wireframes and information architecture for seamless user flows",
                  },
                  {
                    name: "Prototyping",
                    icon: Layers,
                    description:
                      "Building interactive prototypes to test and validate design concepts",
                  },
                  {
                    name: "Visual Design",
                    icon: Palette,
                    description:
                      "Crafting beautiful, cohesive visual systems that bring brands to life",
                  },
                  {
                    name: "Interaction Design",
                    icon: MousePointerClick,
                    description:
                      "Designing engaging micro-interactions and animations for delightful experiences",
                  },
                  {
                    name: "Usability Testing",
                    icon: FlaskConical,
                    description:
                      "Running comprehensive testing sessions to optimize user experience",
                  },
                ].map((skill, i) => {
                  const SkillIcon = skill.icon;
                  const isExpanded =
                    expandedSkill === skill.name;
                  const relatedProjects = getProjectsForSkill(
                    skill.name,
                  );

                  return (
                    <div
                      key={i}
                      className={`group relative bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/60 hover:border-white/80 transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-xl ${
                        isExpanded
                          ? "md:col-span-2 lg:col-span-3"
                          : ""
                      }`}
                      onClick={() =>
                        setExpandedSkill(
                          isExpanded ? null : skill.name,
                        )
                      }
                    >
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E06B80]/0 to-[#CD2C58]/0 group-hover:from-[#E06B80]/10 group-hover:to-[#CD2C58]/10 transition-all duration-300" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <SkillIcon className="w-5 h-5 text-[#CD2C58] flex-shrink-0" />
                          <p className="text-sm text-[#4A4E69] font-semibold">
                            {skill.name}
                          </p>
                        </div>
                        <p className="text-xs text-[#6B6B8D] leading-relaxed mb-3">
                          {skill.description}
                        </p>

                        {/* Expanded content */}
                        <AnimatePresence>
                          {isExpanded &&
                            relatedProjects.length > 0 && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-white/40"
                              >
                                <p className="text-xs text-[#4A4E69] mb-3">
                                  Projects where I used{" "}
                                  {skill.name}:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                  {relatedProjects.map(
                                    (project, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{
                                          opacity: 0,
                                          y: 10,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          y: 0,
                                        }}
                                        transition={{
                                          delay: idx * 0.05,
                                        }}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleProjectClick(
                                            project.id,
                                          );
                                        }}
                                        className="group/project relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                                      >
                                        <img
                                          src={project.image}
                                          alt={project.title}
                                          className="w-full h-32 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#CD2C58]/90 to-transparent flex items-end p-3">
                                          <div>
                                            <p className="text-xs text-white">
                                              {project.title}
                                            </p>
                                            <div className="flex items-center gap-1 text-xs text-white/80 mt-1 opacity-0 group-hover/project:opacity-100 transition-opacity">
                                              <span>
                                                View Project
                                              </span>
                                              <ArrowRight className="w-3 h-3" />
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] shadow-lg backdrop-blur-sm">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[#4A4E69]">
                  Tools & Software
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Figma",
                    color: "from-[#CD2C58] to-[#E06B80]",
                  },
                  {
                    name: "Adobe",
                    color: "from-[#9D84B7] to-[#CD2C58]",
                  },
                  {
                    name: "Photoshop",
                    color: "from-[#FFC69D] to-[#E06B80]",
                  },
                  {
                    name: "Illustrator",
                    color: "from-[#7B68A6] to-[#9D84B7]",
                  },
                  {
                    name: "Miro",
                    color: "from-[#9D84B7] to-[#E06B80]",
                  },
                ].map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="outline"
                      className={`px-5 py-2.5 text-sm bg-white/50 backdrop-blur-md hover:bg-gradient-to-r hover:${tool.color} hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border-white/60`}
                    >
                      {tool.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Expertise with Expandable Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#E06B80] to-[#FFC69D] shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[#4A4E69]">
                  Additional Expertise
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Leadership",
                    icon: Crown,
                    description:
                      "Mentoring design teams and leading cross-functional collaboration on complex projects",
                  },
                  {
                    name: "Illustration",
                    icon: Paintbrush,
                    description:
                      "Creating custom illustrations and iconography to enhance visual storytelling",
                  },
                  {
                    name: "Animation",
                    icon: Wand2,
                    description:
                      "Designing smooth motion graphics and transitions that bring interfaces to life",
                  },
                ].map((skill, i) => {
                  const SkillIcon = skill.icon;
                  const isExpanded =
                    expandedSkill === skill.name;
                  const relatedProjects = getProjectsForSkill(
                    skill.name,
                  );

                  return (
                    <div
                      key={i}
                      className={`group relative bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/60 hover:border-white/80 transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-xl ${
                        isExpanded
                          ? "md:col-span-2 lg:col-span-3"
                          : ""
                      }`}
                      onClick={() =>
                        setExpandedSkill(
                          isExpanded ? null : skill.name,
                        )
                      }
                    >
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E06B80]/0 to-[#CD2C58]/0 group-hover:from-[#E06B80]/10 group-hover:to-[#CD2C58]/10 transition-all duration-300" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <SkillIcon className="w-5 h-5 text-[#CD2C58] flex-shrink-0" />
                          <p className="text-sm text-[#4A4E69] font-semibold">
                            {skill.name}
                          </p>
                        </div>
                        <p className="text-xs text-[#6B6B8D] leading-relaxed mb-3">
                          {skill.description}
                        </p>

                        {/* Expanded content */}
                        <AnimatePresence>
                          {isExpanded &&
                            relatedProjects.length > 0 && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-white/40"
                              >
                                <p className="text-xs text-[#4A4E69] mb-3">
                                  Projects where I used{" "}
                                  {skill.name}:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                  {relatedProjects.map(
                                    (project, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{
                                          opacity: 0,
                                          y: 10,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          y: 0,
                                        }}
                                        transition={{
                                          delay: idx * 0.05,
                                        }}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleProjectClick(
                                            project.id,
                                          );
                                        }}
                                        className="group/project relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                                      >
                                        <img
                                          src={project.image}
                                          alt={project.title}
                                          className="w-full h-32 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#CD2C58]/90 to-transparent flex items-end p-3">
                                          <div>
                                            <p className="text-xs text-white">
                                              {project.title}
                                            </p>
                                            <div className="flex items-center gap-1 text-xs text-white/80 mt-1 opacity-0 group-hover/project:opacity-100 transition-opacity">
                                              <span>
                                                View Project
                                              </span>
                                              <ArrowRight className="w-3 h-3" />
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}