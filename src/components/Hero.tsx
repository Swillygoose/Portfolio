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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="designer-name text-6xl text-[#4A4E69] mb-3">
                Sandra Wilmann
              </div>
              <h1 className="mb-6">
                <span className="block bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold">UX/UI Designer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 text-[#6B6B8D] max-w-lg leading-relaxed"
            >
              I craft clean, user-focused digital experiences effortlessly. My approach combines thoughtful design with a passion for creating intuitive and engaging interfaces.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#CD2C58] to-[#E06B80] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                aria-label="Dribbble"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.375 0 0 5.375 0 12c0 6.626 5.375 12 12 12 6.626 0 12-5.374 12-12 0-6.625-5.374-12-12-12zm7.5 6.276c1.096 1.347 1.785 3.012 1.893 4.83-.247-.053-2.726-.553-5.22-.24-.108-.253-.215-.519-.338-.785-.36-.81-.754-1.607-1.162-2.376 2.618-1.073 3.8-2.62 3.827-2.65v.221zM12 2.252c2.235 0 4.278.857 5.827 2.25-.216.216-1.29 1.65-3.827 2.604-1.29-2.377-2.726-4.308-2.938-4.614.297-.065.609-.108.938-.108v-.132zm-3.6.708c.202.297 1.635 2.236 2.938 4.568-3.706 1.002-6.96 1.002-7.308.988.618-2.5 2.308-4.547 4.37-5.556zm-5.652 6.54v-.4c.338.015 4.17.054 8.07-1.109.455.883.883 1.784 1.28 2.695-.108.03-.215.065-.322.095C7.637 12.24 5.225 16.068 5.1 16.31c-1.29-1.425-2.076-3.315-2.076-5.385 0-.108.003-.216.008-.324v-.1zm6.54 10.244c-1.91 0-3.665-.618-5.085-1.664.162-.27 1.863-3.12 6.3-4.47.03-.015.054-.03.084-.045.976 2.544 1.382 4.683 1.498 5.28-1.018.54-2.17.855-3.39.855l-.407.044zm5.76-1.367c-.084-.498-.454-2.547-1.354-5.06 2.34-.378 4.386.239 4.632.324-.324 2.053-1.488 3.825-3.166 4.967l-.112-.231z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E06B80] to-[#CD2C58] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFC69D] to-[#E06B80] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                aria-label="Behance"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
            </motion.div>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {["UI DESIGNING", "WIREFRAMING", "UX DESIGNING", "PROTOTYPING", "USER RESEARCH"].map((skill, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm border border-[#E06B80]/30 px-4 py-2 rounded-full text-xs text-[#4A4E69] shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Portrait Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl border border-[#E06B80]/20"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] bg-clip-text text-transparent mb-1 font-bold">5+ Years</div>
                  <p className="text-xs text-[#6B6B8D]">Experience</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] rounded-3xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-white mb-1">10+</div>
                  <p className="text-xs text-white/80">Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}