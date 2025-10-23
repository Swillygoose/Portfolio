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

interface SolveigProjectProps {
  onNavigate: (page: string) => void;
}

export function SolveigProject({ onNavigate }: SolveigProjectProps) {
  // Portrait images for the carousel
  const portraitImages = [
    "https://www.dropbox.com/scl/fi/4h5lm42htgeqcyn6vvmsx/sol1.png?rlkey=2gna1ai69v4wmbk4v6p8fv0lb&st=1g4ckqm4&raw=1",
    "https://www.dropbox.com/scl/fi/0ntmptph5rgzd5lai7s8q/sol2.png?rlkey=d4re4eqqybg5p50l2yn2wqphb&st=pkf2uv6b&raw=1",
    "https://www.dropbox.com/scl/fi/2dx2z6kgr7z7ey07poxmo/sol3.png?rlkey=j29pcvm69gclgwj0dm1iias22&st=97ekb93n&raw=1",
    "https://www.dropbox.com/scl/fi/sjaoqvu5oox29qr47fjzf/sol4.png?rlkey=cyqsoa1ky2fupa3odjhivsnq3&st=wvkw6syr&raw=1",
    "https://www.dropbox.com/scl/fi/tggsc2vrb2wbbzdukbo2t/sol5.png?rlkey=3s91o6fpsvn6uxkj50fohudey&st=ocqszlyb&raw=1",
    "https://www.dropbox.com/scl/fi/ehccttwnkyhpti6w1pt3f/sol6.png?rlkey=fxj7zvje752vs29fopzzsv9qy&st=kkhyiikp&raw=1",
    "https://www.dropbox.com/scl/fi/pa9hb1r3h0id1hreenpar/sol7.png?rlkey=y2pgdxlex1rgqipm9x15xi49d&st=a276jhwk&raw=1",
    "https://www.dropbox.com/scl/fi/eaoecsf42av6uidhfluqu/sol8.png?rlkey=tb5i7t72n8erpu0g04pasi4wd&st=nd65zrce&raw=1",
  ];

  return (
    <ProjectPage
      onNavigate={onNavigate}
      title="SOLVEIG - Solar Panel App"
      description="A mobile app that helps users calculate solar panel savings using real weather data and intelligent roof analysis."
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
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <ImageWithFallback
                          src={image}
                          alt={`SOLVEIG app screenshot ${index + 1}`}
                          className="w-full h-auto object-contain"
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

          {/* Large overview image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]"
          >
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/sxvxde0h4empdd4dknj5b/sol9.png?rlkey=dlfwmnbdzhw1r3fcth97tdt2a&st=wzkyrncf&raw=1"
              alt="SOLVEIG app overview"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      }
      client="University of Oslo - Course IN2000"
      duration="4 months"
      role="Team Leader, Kotlin Developer"
      tags={[
        "Mobile App Development",
        "Kotlin",
        "API Integration",
        "Leadership",
        "Data Visualization",
        "Android",
      ]}
      gradient="from-[#FFA726]/80 to-[#FFB74D]/80"
      iconColors={{
        primary: "text-[#F57C00]",
        secondary: "text-[#FFA726]",
        tertiary: "text-[#FFB74D]",
      }}
      textColors={{
        titleGradient: "from-[#F57C00] to-[#FFA726]",
        badgeGradient: "from-[#F57C00] to-[#FFA726]",
        buttonGradient: "from-[#F57C00] to-[#FFA726]",
        buttonHoverGradient: "from-[#E65100] to-[#F57C00]",
        processNumberGradient: "from-[#F57C00] to-[#FFA726]",
        bulletGradient: "from-[#F57C00] to-[#FFA726]",
      }}
      challenge="Solar panel adoption in Norway faces a major barrier: homeowners struggle to understand the real financial benefits and don't know where to optimally place panels on their roofs. Traditional solar calculators provide generic estimates that don't account for Norway's unique weather patterns and geographical variations. The challenge was to create a mobile app that provides accurate, personalized solar savings calculations using real Norwegian weather data and helps users visualize optimal panel placement on their specific roof."
      solution="SOLVEIG is an Android mobile app that empowers homeowners to make informed decisions about solar panel installation. The app integrates data from the Meteorologisk Institutt (Norwegian Meteorological Institute) to provide real-time weather information and historical data spanning 5 years. Using Google APIs, the app analyzes the user's roof to identify optimal solar panel placement locations. Users can see predicted energy savings based on their location, roof characteristics, and historical weather patterns. The app presents complex data through intuitive visualizations, making solar panel ROI calculations accessible to everyone."
      myRole="As team leader and Kotlin developer in this 6-person team, I coordinated project planning, sprint management, and ensured successful delivery within the 4-month timeline. I led architectural decisions for the Android app, implemented core features including API integration with Meteorologisk Institutt and Google services, and developed the savings calculation algorithms based on historical weather data. I also managed code reviews, facilitated team collaboration, and ensured our solution met the academic requirements for the IN2000 course at University of Oslo."
      process={[
        {
          phase: "Research & Planning",
          description:
            "Conducted research on solar panel economics in Norway and existing solar calculators. Analyzed the Meteorologisk Institutt API documentation and Google's Solar API capabilities. Defined project scope, created user stories, and established a sprint schedule for the 4-month timeline. Distributed responsibilities across the 6-person team based on individual strengths.",
        },
        {
          phase: "API Integration & Data Architecture",
          description:
            "Integrated the Meteorologisk Institutt API to access real-time weather data and 5 years of historical climate information. Implemented Google APIs for roof analysis and solar potential mapping. Designed the data architecture to efficiently process and cache weather data. Created algorithms to calculate energy production based on panel specifications, location, and historical weather patterns.",
        },
        {
          phase: "Core App Development",
          description:
            "Built the Android app in Kotlin with a focus on clean architecture principles. Developed the user interface for location input, roof analysis visualization, and savings calculations. Implemented features to display optimal solar panel placement on user's roof using Google's mapping technology. Created data visualization components to present complex savings projections in an understandable format.",
        },
        {
          phase: "Testing & Refinement",
          description:
            "Conducted extensive testing with various Norwegian locations to validate savings calculations. Refined the UI/UX based on user testing feedback. Optimized API calls and data caching for improved performance. Prepared project documentation and presentations for the IN2000 course evaluation.",
        },
      ]}
      images={[
        {
          component: (
            <ImageWithFallback
              src={portraitImages[0]}
              alt="SOLVEIG home screen"
              className="w-full h-full object-cover"
            />
          ),
          caption: "App home screen with location input",
        },
        {
          component: (
            <ImageWithFallback
              src={portraitImages[1]}
              alt="Weather data visualization"
              className="w-full h-full object-cover"
            />
          ),
          caption: "Real-time weather data from Meteorologisk Institutt",
        },
        {
          component: (
            <ImageWithFallback
              src={portraitImages[2]}
              alt="Roof analysis"
              className="w-full h-full object-cover"
            />
          ),
          caption: "Optimal solar panel placement on roof using Google APIs",
        },
        {
          component: (
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzYxMTI3MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solar panel installation visualization"
              className="w-full h-full object-cover"
            />
          ),
          caption: "Visualizing potential solar panel installation",
        },
      ]}
      outcomes={[
        "Successfully integrated Meteorologisk Institutt API for accurate Norwegian weather data spanning 5 years",
        "Implemented Google APIs to analyze roof structures and identify optimal solar panel placement",
        "Created accurate savings calculations based on location-specific historical weather patterns",
        "Led a 6-person team through successful 4-month development cycle with regular sprint deliveries",
        "Delivered a functional Android app built with Kotlin following clean architecture principles",
        "Received positive evaluation for the IN2000 course project at University of Oslo",
        "Demonstrated leadership skills in coordinating team efforts and managing project timeline",
      ]}
    />
  );
}