import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  index: number;
  projectId?: string;
  onNavigate?: (page: string) => void;
  icon?: React.ReactNode;
}

export function ProjectCard({ title, description, image, tags, gradient, index, projectId, onNavigate, icon }: ProjectCardProps) {
  const handleClick = () => {
    if (projectId && onNavigate) {
      onNavigate(projectId);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/60 ${
        projectId && onNavigate ? "cursor-pointer" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 0 }}
            whileInView={{ scale: 0 }}
            className="bg-white rounded-full p-4 shadow-lg group-hover:scale-100 transition-transform duration-300"
          >
            {icon || <ExternalLink className="w-6 h-6 text-[#CD2C58]" />}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-[#4A4E69]">{title}</h3>
        <p className="text-[#6B6B8D] mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-gradient-to-r from-[#FFE6D4] to-[#FFC69D]/50 text-[#4A4E69] border border-[#E06B80]/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}