import { motion } from "motion/react";
import { Download, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import { Button } from "../components/ui/button";

const experience = [
  {
    year: "2023 - Present",
    title: "Senior UX/UI Designer",
    company: "CreativeFlow Studio",
    location: "Remote",
    responsibilities: [
      "Lead design initiatives for major clients across various industries",
      "Manage and mentor a team of 3 junior designers",
      "Establish and maintain comprehensive design systems",
      "Conduct user research and usability testing",
      "Collaborate with development teams to ensure design implementation",
    ],
  },
  {
    year: "2021 - 2023",
    title: "UX/UI Designer",
    company: "DigitalWave Agency",
    location: "Paris, France",
    responsibilities: [
      "Designed user-centered solutions for web and mobile applications",
      "Created wireframes, prototypes, and high-fidelity mockups",
      "Conducted user interviews and analyzed user feedback",
      "Worked closely with clients to understand business requirements",
      "Improved conversion rates by 35% through strategic design improvements",
    ],
  },
  {
    year: "2019 - 2021",
    title: "Junior Designer",
    company: "StartUp Hub",
    location: "Lyon, France",
    responsibilities: [
      "Assisted in creating design assets for various startup projects",
      "Developed brand identities including logos and visual guidelines",
      "Created marketing materials and social media graphics",
      "Participated in brainstorming sessions and design critiques",
    ],
  },
];

const education = [
  {
    year: "2016 - 2019",
    degree: "Bachelor of Arts in Graphic Design",
    school: "École de Design Paris",
    description: "Specialized in digital design and user experience. Graduated with honors.",
  },
  {
    year: "2014 - 2016",
    degree: "Foundation in Visual Arts",
    school: "Paris Art Institute",
    description: "Fundamental courses in design principles, color theory, and typography.",
  },
];

const skills = {
  design: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Interaction Design", "Usability Testing", "Information Architecture", "Design Systems"],
  tools: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Principle", "InVision", "Miro", "Framer"],
  technical: ["HTML/CSS", "React Basics", "Design Tokens", "Responsive Design", "Accessibility (WCAG)", "Design Thinking"],
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
  const handleDownloadCV = () => {
    // Handle CV download
    console.log("Downloading CV...");
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
          <div className="max-w-4xl mx-auto text-center relative">
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
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold"
            >
              Curriculum Vitae
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B6B8D] mb-8"
            >
              A comprehensive overview of my professional experience, education, and achievements
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] hover:shadow-lg transition-shadow"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
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
              <h2 className="text-[#4A4E69] font-bold">Professional Experience</h2>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-white/40"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#CD2C58] to-[#E06B80] shadow-lg" />
                  
                  <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-[#4A4E69] mb-1">{exp.title}</h3>
                        <p className="text-[#CD2C58] mb-1">{exp.company}</p>
                        <p className="text-sm text-[#6B6B8D]">{exp.location}</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40">
                        {exp.year}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B8D]">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#CD2C58] to-[#E06B80] mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
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
              <h2 className="text-[#4A4E69] font-bold">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-[#4A4E69] mb-1">{edu.degree}</h3>
                      <p className="text-[#9D84B7]">{edu.school}</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#4A4E69] border border-white/40">
                      {edu.year}
                    </div>
                  </div>
                  <p className="text-sm text-[#6B6B8D]">{edu.description}</p>
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
              <h2 className="text-[#4A4E69] font-bold">Skills & Expertise</h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg"
              >
                <h3 className="text-[#4A4E69] mb-4">Design Skills</h3>
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
                <h3 className="text-[#4A4E69] mb-4">Design Tools</h3>
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
                <h3 className="text-[#4A4E69] mb-4">Technical Knowledge</h3>
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
              <h2 className="text-[#4A4E69] font-bold">Awards & Recognition</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all hover:bg-white/50"
                >
                  <div className="text-sm text-[#CD2C58] mb-2">{award.year}</div>
                  <h3 className="text-[#4A4E69] mb-2">{award.title}</h3>
                  <p className="text-sm text-[#6B6B8D] mb-1">{award.organization}</p>
                  <p className="text-xs text-[#9D84B7]">For: {award.project}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}