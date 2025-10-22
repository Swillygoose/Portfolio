import { motion } from "motion/react";
import {
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "../components/ui/button";
import portraitImage from "figma:asset/18c9b6906aade7ca2a821d9e11847684df67fc9a.png";

const experience = [
  {
    year: "2025 - nå",
    title: "UX Designer",
    company: "CELL - Universitetet i Oslo",
    location: "Oslo, Norge",
  },
  {
    year: "2023 - 2024",
    title: "Sosiale Medier Assistent",
    company: "Portal One",
    location: "Norge",
  },
  {
    year: "2019 - nå",
    title: "Frilans",
    company: "Eget Firma",
    location: "Norge",
  },
];

const education = [
  {
    year: "2023 - nå",
    degree:
      "Bachelor i Informatikk: Bruk, design og interaksjon",
    school: "Universitetet i Oslo",
  },
  {
    year: "2018 - 2020",
    degree: "Master i Fine Arts Digital",
    school: "Camberwell College of Arts",
  },
  {
    year: "2015 - 2018",
    degree: "Bachelor i Fine Arts",
    school: "Middlesex University",
  },
];

const skills = {
  design: [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Interaction Design",
    "Usability Testing",
    "Information Architecture",
    "Design Systems",
  ],
  tools: [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "Principle",
    "InVision",
    "Miro",
    "Framer",
  ],
  technical: [
    "HTML/CSS",
    "React Basics",
    "Design Tokens",
    "Responsive Design",
    "Accessibility (WCAG)",
    "Design Thinking",
  ],
};

const awards = [
  {
    year: "2024",
    title: "Best Mobile App Design",
    organization: "Design Awards International",
    project: "HealthTrack Mobile App",
  },
  {
    year: "2023",
    title: "UI Design Excellence",
    organization: "Awwwards",
    project: "E-Commerce Dashboard",
  },
  {
    year: "2022",
    title: "Rising Star Designer",
    organization: "French Design Awards",
    project: "Portfolio of Work",
  },
];

export function CVPage() {
  const handleDownloadNorwegianCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/assets/cv-norwegian.pdf"; // Path to your Norwegian PDF
    link.download = "Sandra_Wilmann_CV_Norwegian.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadEnglishCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/assets/cv-english.pdf"; // Path to your English PDF
    link.download = "Sandra_Wilmann_CV_English.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20 relative bg-gradient-to-br from-[#FFE6D4] via-[#FFC69D]/40 to-[#FFE6D4] overflow-hidden">
      {/* One continuous animated background with blobs */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-[#CD2C58]/25 to-[#E06B80]/15 rounded-full mix-blend-multiply filter blur-3xl"
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
        className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-[#9D84B7]/25 to-[#CD2C58]/15 rounded-full mix-blend-multiply filter blur-3xl"
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
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-[#E06B80]/20 to-[#FFC69D]/15 rounded-full mix-blend-multiply filter blur-3xl"
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
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFC69D]/25 to-[#E06B80]/15 rounded-full mix-blend-multiply filter blur-3xl"
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
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#9D84B7]/30 to-[#E06B80]/20 rounded-full mix-blend-multiply filter blur-3xl"
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
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto relative">
            {/* Large light background shape */}
            <motion.div
              className="absolute inset-0 -m-12 bg-white/30 backdrop-blur-sm rounded-[3rem] -z-10"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* CV Header with Portrait */}
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left side - Info */}
                <div className="flex-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-2 text-[#4A4E69] font-bold"
                  >
                    Sandra Wilmann
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-6 text-[#6B6B8D]"
                  >
                    UX Designer
                  </motion.h2>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-2 mb-6"
                  >
                    <div className="flex items-center gap-2 text-[#6B6B8D]">
                      <Phone className="w-4 h-4 text-[#CD2C58]" />
                      <span className="text-sm">
                        +47 40300196
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#6B6B8D]">
                      <Mail className="w-4 h-4 text-[#CD2C58]" />
                      <span className="text-sm">
                        sandra_wilmann@hotmail.com
                      </span>
                    </div>
                  </motion.div>

                  {/* Bio */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[#6B6B8D] space-y-4 text-sm"
                  >
                    <p>
                      I am a UX designer in the MESHR project
                      and a student at the University of Oslo,
                      where I study Informatics: design, use,
                      and interaction. I am particularly
                      passionate about creating intuitive and
                      innovative solutions, and I have a strong
                      eye for what truly works for the user.
                    </p>
                    <p>
                      I enjoy taking responsibility in projects
                      and thrive in interdisciplinary teams. As
                      a person, I am proactive, curious, and
                      structured — and passionate about design
                      that creates value and meaning!
                    </p>
                  </motion.div>
                </div>

                {/* Right side - Portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white/60">
                    <img
                      src={portraitImage}
                      alt="Sandra Wilmann"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleDownloadNorwegianCV}
                  className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] hover:shadow-lg transition-shadow"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (Norwegian)
                </Button>
                <Button
                  onClick={handleDownloadEnglishCV}
                  className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] hover:shadow-lg transition-shadow"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (English)
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#CD2C58] to-[#E06B80] shadow-lg backdrop-blur-sm">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#4A4E69] font-bold">
                Professional Experience
              </h2>
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
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#CD2C58] to-[#E06B80] shadow-lg" />

                  <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-[#4A4E69] mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-[#CD2C58] mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-[#6B6B8D]">
                          {exp.location}
                        </p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40">
                        {exp.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] shadow-lg backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#4A4E69] font-bold">
                Education
              </h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#4A4E69] mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-[#9D84B7]">
                        {edu.school}
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40">
                      {edu.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#E06B80] to-[#FFC69D] shadow-lg backdrop-blur-sm">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#4A4E69] font-bold">
                Skills & Expertise
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg"
              >
                <h3 className="text-[#4A4E69] mb-4">
                  Design Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40 hover:border-[#CD2C58]/40 hover:bg-white/80 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg"
              >
                <h3 className="text-[#4A4E69] mb-4">
                  Design Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40 hover:border-[#9D84B7]/40 hover:bg-white/80 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg"
              >
                <h3 className="text-[#4A4E69] mb-4">
                  Technical Knowledge
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40 hover:border-[#E06B80]/40 hover:bg-white/80 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFC69D] to-[#E06B80] shadow-lg backdrop-blur-sm">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#4A4E69] font-bold">
                Awards & Recognition
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50"
                >
                  <div className="text-sm text-[#CD2C58] mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-[#4A4E69] mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-[#6B6B8D] mb-1">
                    {award.organization}
                  </p>
                  <p className="text-xs text-[#9D84B7]">
                    For: {award.project}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}