
import React, { useState, useRef, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  price?: string;
  sizes?: Record<string, string>;
  description?: string;
  icon: LucideIcon;
  index?: number;
}

const MenuItemCard: React.FC<MenuItemProps> = ({
  src,
  alt,
  title,
  category,
  price,
  sizes,
  description,
  icon: Icon,
  index = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if text is truncated
  useEffect(() => {
    if (textRef.current && description) {
      const isTextTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsTruncated(isTextTruncated);
    }
  }, [description]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="h-full w-full glass-morphism rounded-lg overflow-hidden flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full">
        <AspectRatio ratio={16/9}>
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-base md:text-sm text-foreground/60">{category}</span>
            </div>
            {price && (
              <div className="text-lg md:text-base font-bold text-primary dark:text-primary-light">
                {price}
              </div>
            )}
          </div>
          <h3 className="text-xl md:text-lg font-semibold text-foreground/90 dark:text-foreground/80 mb-2 line-clamp-1">
            {title}
          </h3>
          {description && (
            <div className="mb-3">
              <p 
                ref={textRef}
                className={`text-lg md:text-base text-foreground/70 dark:text-foreground/60 ${isExpanded ? '' : 'line-clamp-2'} transition-all duration-200`}
              >
                {description}
              </p>
              {isTruncated && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleDescription} 
                  className="mt-2 h-8 px-4 py-0 text-base md:text-sm text-primary hover:bg-primary/10"
                >
                  {isExpanded ? (
                    <span className="flex items-center gap-1">הסתר <ChevronUp className="w-4 h-4" /></span>
                  ) : (
                    <span className="flex items-center gap-1">קרא עוד <ChevronDown className="w-4 h-4" /></span>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
        {sizes && (
          <div className="mt-auto pt-2 flex flex-wrap gap-2 text-base md:text-sm">
            {Object.entries(sizes).map(([size, price]) => (
              <span key={size} className="bg-primary/10 dark:bg-primary-light/10 px-3 py-1 rounded">
                {size}: {price}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
