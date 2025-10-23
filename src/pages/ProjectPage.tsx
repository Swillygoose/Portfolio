import { motion } from "motion/react";
import { ArrowLeft, Calendar, Users, Award, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

interface ProjectPageProps {
  title: string;
  description: string;
  heroImage?: string;
  heroContent?: React.ReactNode;
  client: string;
  duration: string;
  role: string;
  tags: string[];
  gradient: string;
  challenge: string;
  solution: string;
  myRole: string;
  process: {
    phase: string;
    description: string;
  }[];
  images?: {
    url: string;
    caption: string;
  }[];
  outcomes: string[];
  onNavigate: (page: string) => void;
  customContent?: React.ReactNode;
  liveUrl?: string;
  backgroundColor?: {
    main: string;
    blob1: string;
    blob2: string;
    blob3: string;
  };
  iconColors?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  textColors?: {
    titleGradient: string;
    badgeGradient: string;
    buttonGradient: string;
    buttonHoverGradient: string;
    processNumberGradient: string;
    bulletGradient: string;
  };
}

export function ProjectPage({
  title,
  description,
  heroImage,
  heroContent,
  client,
  duration,
  role,
  tags,
  gradient,
  challenge,
  solution,
  myRole,
  process,
  images,
  outcomes,
  onNavigate,
  customContent,
  liveUrl,
  backgroundColor,
  iconColors,
  textColors,
}: ProjectPageProps) {
  // Default colors
  const bgColors = backgroundColor || {
    main: "from-[#FFE6D4] via-[#FFC69D]/40 to-[#FFE6D4]",
    blob1: "from-[#E06B80]/30 to-[#CD2C58]/20",
    blob2: "from-[#9D84B7]/30 to-[#E06B80]/20",
    blob3: "from-[#FFC69D]/25 to-[#E06B80]/15",
  };
  
  const icons = iconColors || {
    primary: "text-[#CD2C58]",
    secondary: "text-[#9D84B7]",
    tertiary: "text-[#E06B80]",
  };

  const txtColors = textColors || {
    titleGradient: "from-[#726AE9] to-[#B794F4]",
    badgeGradient: "from-[#726AE9] to-[#B794F4]",
    buttonGradient: "from-[#726AE9] to-[#B794F4]",
    buttonHoverGradient: "from-[#5f5dd4] to-[#a57fe6]",
    processNumberGradient: "from-[#726AE9] to-[#B794F4]",
    bulletGradient: "from-[#726AE9] to-[#B794F4]",
  };

  return (
    <div className={`pt-20 relative bg-gradient-to-br ${bgColors.main} overflow-hidden`}>
      {/* Animated background blobs */}
      <motion.div
        className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-br ${bgColors.blob1} rounded-full mix-blend-multiply filter blur-3xl`}
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
        className={`absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-br ${bgColors.blob2} rounded-full mix-blend-multiply filter blur-3xl`}
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
        className={`absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br ${bgColors.blob3} rounded-full mix-blend-multiply filter blur-3xl`}
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

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 pt-12 pb-24">
          <div className="max-w-7xl mx-auto relative">
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

            {/* Back Button - Left Side */}
            <motion.button
              onClick={() => onNavigate("Portfolio")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-[#4A4E69] hover:text-[#726AE9] transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </motion.button>

            {/* Centered Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-7xl mb-6 bg-gradient-to-r ${txtColors.titleGradient} bg-clip-text text-transparent font-bold text-center`}
            >
              {title}
            </motion.h1>

            {/* Live Project Button - Centered Below Title */}
            {liveUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex justify-center mb-8"
              >
                <Button
                  onClick={() => window.open(liveUrl, '_blank')}
                  className={`bg-gradient-to-r ${txtColors.buttonGradient} hover:${txtColors.buttonHoverGradient} text-white rounded-full shadow-lg`}
                >
                  Check it out here! <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B6B8D] text-center max-w-3xl mx-auto mb-8"
            >
              {description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className={`bg-gradient-to-r ${txtColors.badgeGradient} text-white`}
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            {/* Hero Image */}
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src={heroImage}
                  alt={title}
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            )}
            {heroContent && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {heroContent}
              </motion.div>
            )}
          </div>
        </section>

        {/* Project Info Cards */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/60 shadow-xl"
              >
                <Users className={`w-8 h-8 ${icons.primary} mb-4`} />
                <h3 className="mb-2 text-[#4A4E69] font-bold">Client</h3>
                <p className="text-[#6B6B8D]">{client}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/60 shadow-xl"
              >
                <Calendar className={`w-8 h-8 ${icons.secondary} mb-4`} />
                <h3 className="mb-2 text-[#4A4E69] font-bold">Duration</h3>
                <p className="text-[#6B6B8D]">{duration}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/60 shadow-xl"
              >
                <Award className={`w-8 h-8 ${icons.tertiary} mb-4`} />
                <h3 className="mb-2 text-[#4A4E69] font-bold">My Role</h3>
                <p className="text-[#6B6B8D]">{role}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl border border-white/60 shadow-xl"
              >
                <h2 className="mb-4 text-[#4A4E69] font-bold">The Challenge</h2>
                <p className="text-[#6B6B8D] leading-relaxed">{challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl border border-white/60 shadow-xl"
              >
                <h2 className="mb-4 text-[#4A4E69] font-bold">The Solution</h2>
                <p className="text-[#6B6B8D] leading-relaxed">{solution}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Role & Responsibilities */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl border border-white/60 shadow-xl"
            >
              <h2 className="mb-6 text-[#4A4E69] font-bold text-center">
                My Role & Responsibilities
              </h2>
              <p className="text-[#6B6B8D] leading-relaxed">{myRole}</p>
            </motion.div>
          </div>
        </section>

        {/* Design Process */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center text-[#4A4E69] font-bold"
            >
              Design Process
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/60 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${txtColors.processNumberGradient} flex items-center justify-center text-white`}>
                      {index + 1}
                    </div>
                    <h3 className="text-[#4A4E69] font-bold">{step.phase}</h3>
                  </div>
                  <p className="text-[#6B6B8D] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl border border-white/60 shadow-xl"
            >
              <h2 className="mb-6 text-[#4A4E69] font-bold text-center">
                Outcomes & Impact
              </h2>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${txtColors.bulletGradient} mt-2 flex-shrink-0`} />
                    <p className="text-[#6B6B8D] leading-relaxed">{outcome}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-[#4A4E69] font-bold">
                Interested in working together?
              </h2>
              <p className="text-[#6B6B8D] mb-8">
                Let's create something amazing together
              </p>
              <motion.button
                onClick={() => onNavigate("Contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#CD2C58] to-[#E06B80] text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}