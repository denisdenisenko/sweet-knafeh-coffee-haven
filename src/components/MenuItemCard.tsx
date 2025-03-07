
import React, { useState, useRef, useEffect } from "react";
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
      className="h-full w-full bg-gradient-to-b from-background to-primary/5 dark:from-background/90 dark:to-primary-dark/10 backdrop-blur-sm rounded-xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="w-full h-[200px] flex items-center justify-center p-2 rounded-t-xl overflow-hidden bg-accent/10 dark:bg-primary/5">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full shadow-sm">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary/90">{category}</span>
            </div>
            {price && (
              <div className="text-lg font-bold text-primary dark:text-primary-light px-3 py-1 bg-primary/5 dark:bg-primary-light/5 rounded-full">
                {price}
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold text-foreground/90 dark:text-foreground/80 mb-3 line-clamp-1">
            {title}
          </h3>
          {description && (
            <div className="mb-4">
              <p 
                ref={textRef}
                className={`text-md text-foreground/70 dark:text-foreground/60 ${isExpanded ? '' : 'line-clamp-2'} transition-all duration-200`}
              >
                {description}
              </p>
              {isTruncated && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleDescription} 
                  className="mt-2 h-8 px-3 py-0 text-sm text-primary hover:bg-primary/10"
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
          <div className="mt-auto pt-3 flex flex-wrap gap-2 text-sm">
            {Object.entries(sizes).map(([size, price]) => (
              <span key={size} className="bg-primary/5 dark:bg-primary-light/10 px-3 py-1 rounded-full border border-primary/10 dark:border-primary-light/10 shadow-sm">
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
