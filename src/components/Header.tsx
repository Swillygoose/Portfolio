import { motion } from "motion/react";
import capLogo from "figma:asset/ed943022b412a354c3837954d86b2bc048a30058.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = ["Home", "About", "Portfolio", "CV", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFE6D4]/90 backdrop-blur-md border-b border-[#FFC69D]/30"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate("Home")}
        >
          <img src={capLogo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-[#4A4E69]">Sandra Wilmann</span>
        </motion.div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => onNavigate(item)}
                className={`text-sm transition-colors ${
                  currentPage === item
                    ? "text-[#CD2C58]"
                    : "text-[#4A4E69] hover:text-[#CD2C58]"
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate("Contact")}
          className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
        >
          Get in touch
        </motion.button>
      </nav>
    </motion.header>
  );
}