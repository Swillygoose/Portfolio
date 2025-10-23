import { ProjectPage } from "../ProjectPage";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

interface TobysProjectProps {
  onNavigate: (page: string) => void;
}

export function TobysProject({ onNavigate }: TobysProjectProps) {
  // Portrait images for the carousel
  const portraitImages = [
    "https://www.dropbox.com/scl/fi/um8d0mhj38luwe1xktn7y/fel2.png?rlkey=mbldtgr0n92om5nieugq5z249&st=94na6wi9&raw=1",
    "https://www.dropbox.com/scl/fi/hjjiazcff5hfcvr9xshbp/fel3.png?rlkey=p1tege51y3xwog5lwndvpbq7s&st=iuasgsck&raw=1",
    "https://www.dropbox.com/scl/fi/ci0sg0su6zxnah96mnqlu/fel4.png?rlkey=oe4wid5ca891l6yg1yscua41u&st=dcyjgq5r&raw=1",
    "https://www.dropbox.com/scl/fi/f27zmcsmk336rz0p9bvup/fel7.png?rlkey=oq30x3cr9ddqm45xcmoaqk3ia&st=f5mzrg62&raw=1",
    "https://www.dropbox.com/scl/fi/y8cwz7qimso8axudmxkq8/fel5.png?rlkey=p01p3m1lcoegm7pyl3ow17ex8&st=pe7qhs5f&raw=1",
    "https://www.dropbox.com/scl/fi/u6zc2infvfdqdwc1t9vnl/fel6.png?rlkey=jbjddee7eli2pdb0wyh4ni0c1&st=nn7v6uzf&raw=1",
  ];

  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="Toby's App Design"
      description="A playful burger ordering app with gamification, colorful branding, and delightful user experience."
      heroContent={
        <div className="space-y-4">
          {/* Carousel for portrait images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-4xl mx-auto"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {portraitImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[9/16]">
                        <ImageWithFallback
                          src={image}
                          alt={`Toby's app screenshot ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>

          {/* Landscape Figma file image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
          >
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/nt4a5yxtl505k0b878899/fel1.png?rlkey=iccrg3yxqeut46ud0qpe3nuhz&st=x9n9z8yn&raw=1"
              alt="Toby's Figma file"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      }
      client="Solo Project"
      duration="2 weeks"
      role="UX/UI Designer, Branding"
      tags={[
        "Mobile App Design",
        "Branding",
        "Gamification",
        "Figma",
        "Concept Design",
      ]}
      gradient="from-[#9D84B7]/80 to-[#CD2C58]/80"
      iconColors={{
        primary: "text-[#7B5EA7]",
        secondary: "text-[#9D84B7]",
        tertiary: "text-[#B794F4]",
      }}
      textColors={{
        titleGradient: "from-[#7B5EA7] to-[#B794F4]",
        badgeGradient: "from-[#7B5EA7] to-[#B794F4]",
        buttonGradient: "from-[#7B5EA7] to-[#B794F4]",
        buttonHoverGradient: "from-[#6A4E96] to-[#9D84B7]",
        processNumberGradient: "from-[#7B5EA7] to-[#B794F4]",
        bulletGradient: "from-[#7B5EA7] to-[#B794F4]",
      }}
      challenge="How can we make ordering fast food more engaging and fun? Traditional food ordering apps focus purely on functionality, missing opportunities to create memorable brand experiences and build customer loyalty. The challenge was to design a burger shop app that combines efficient ordering with playful interactions, gamification elements, and a distinctive brand personality."
      solution="Toby's is a vibrant burger ordering app that transforms the mundane task of food ordering into an enjoyable experience. The app features a colorful, playful design system that reflects the fun nature of the brand. Users can browse and customize burgers, drinks, and sides with an intuitive interface. Gamification elements like rewards, challenges, and achievements encourage repeat visits and create an emotional connection with the brand. The visual identity uses bold colors, friendly illustrations, and dynamic animations to create a memorable brand experience."
      myRole="As a solo designer on this concept project, I handled all aspects from branding to app design. I created the complete Toby's brand identity including logo design, color palette, typography, and illustration style. I then designed the mobile app experience, focusing on making ordering intuitive while incorporating playful gamification elements. All work was executed in Figma, demonstrating my ability to build cohesive brand experiences from scratch."
      process={[
        {
          phase: "Brand Discovery & Strategy",
          description:
            "Researched the competitive landscape of fast food apps and burger brands. Identified an opportunity to differentiate through playful, personality-driven design. Developed the 'Toby's' brand concept focusing on fun, quality, and community. Created mood boards and explored different visual directions before landing on the colorful, approachable aesthetic.",
        },
        {
          phase: "Visual Identity Development",
          description:
            "Designed the Toby's logo and complete brand identity system. Established a vibrant color palette with purple as the hero color, complemented by energetic accent colors. Created a custom illustration style with friendly, rounded shapes. Developed brand guidelines covering logo usage, color applications, typography, and illustration principles.",
        },
        {
          phase: "App Design & User Flows",
          description:
            "Mapped out the core user journeys: browsing menu, customizing orders, checkout, and gamification features. Designed wireframes focusing on reducing friction in the ordering process. Created high-fidelity screens that bring the Toby's brand to life while maintaining usability. Integrated gamification elements like progress bars, badges, and reward animations.",
        },
        {
          phase: "Interaction & Prototype",
          description:
            "Built interactive prototypes in Figma to demonstrate key interactions and micro-animations. Designed delightful moments like animated burger assembly, reward celebrations, and smooth transitions. Refined the design based on usability principles and feedback. Created a comprehensive component library for scalability.",
        },
      ]}
      images={[
        {
          component: (
            <ImageWithFallback
              src={portraitImages[0]}
              alt="Toby's splash screen"
              className="w-full h-full object-contain"
            />
          ),
          caption: "Welcome screen with playful branding",
        },
        {
          component: (
            <ImageWithFallback
              src={portraitImages[1]}
              alt="Toby's menu"
              className="w-full h-full object-contain"
            />
          ),
          caption: "Colorful menu browsing experience",
        },
        {
          component: (
            <ImageWithFallback
              src={portraitImages[2]}
              alt="Toby's customization"
              className="w-full h-full object-contain"
            />
          ),
          caption: "Interactive burger customization",
        },
        {
          component: (
            <ImageWithFallback
              src={portraitImages[3]}
              alt="Toby's rewards"
              className="w-full h-full object-contain"
            />
          ),
          caption: "Gamification and rewards system",
        },
        {
          component: (
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/nt4a5yxtl505k0b878899/fel1.png?rlkey=iccrg3yxqeut46ud0qpe3nuhz&st=x9n9z8yn&raw=1"
              alt="Toby's Figma file"
              className="w-full h-full object-contain"
            />
          ),
          caption: "Complete Figma design file",
        },
      ]}
      outcomes={[
        "Created a complete brand identity system with logo, colors, typography, and illustration style",
        "Designed 30+ high-fidelity app screens covering ordering, customization, and gamification",
        "Developed a comprehensive design system with reusable components and patterns",
        "Integrated engaging gamification elements that drive user retention and loyalty",
        "Built interactive prototypes showcasing smooth animations and micro-interactions",
        "Demonstrated ability to create cohesive brand experiences across branding and digital products",
      ]}
    />
  );
}