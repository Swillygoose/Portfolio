import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import portraitImage from "figma:asset/dd55ab4de0668caaa3555bf9acb3a7b23ce7ea43.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mb-8">
              <div className="designer-name text-6xl text-[#4A4E69] mb-3">
                Sandra Wilmann
              </div>
              <h1 className="mb-6">
                <span className="block bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">
                  UX/UI Designer
                </span>
              </h1>
            </div>

            <p className="mb-8 text-[#6B6B8D] max-w-lg leading-relaxed">
              I'm passionate about transforming ideas into
              experiences. I usually work in interdisciplinary
              areas, and I work closely with users to discover
              their needs. I mainly work in Figma, and love
              creating fun, innovative designs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/swilmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/swilmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E06B80] to-[#CD2C58] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "UI DESIGN",
                "UX DESIGN",
                "WIREFRAMING",
                "PRESENTING",
                "PROTOTYPING",
                "USER RESEARCH",
                "ILLUSTRATION",
                "ANIMATION",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm border border-[#E06B80]/30 px-4 py-2 rounded-full text-xs text-[#4A4E69] shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Background blob */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [6, 8, 6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#E06B80] to-[#FFC69D] rounded-[3rem] transform rotate-6"
              />

              {/* Portrait */}
              <div className="relative rounded-[3rem] overflow-hidden">
                <img
                  src={portraitImage}
                  alt="Sandra Wilmann"
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Floating element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl border border-[#E06B80]/20"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] bg-clip-text text-transparent mb-1 font-bold">
                    1+ Years
                  </div>
                  <p className="text-xs text-[#6B6B8D]">
                    Experience
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] rounded-3xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-white mb-1">10+</div>
                  <p className="text-xs text-white/80">
                    Projects
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}