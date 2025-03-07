
import React, { useState } from "react";
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
  const hasLongDescription = description && description.length > 70;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

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
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-xs text-foreground/60">{category}</span>
            </div>
            {price && (
              <div className="text-sm font-bold text-primary dark:text-primary-light">
                {price}
              </div>
            )}
          </div>
          <h3 className="text-base font-semibold text-foreground/90 dark:text-foreground/80 mb-1 line-clamp-1">
            {title}
          </h3>
          {description && (
            <div className="mb-2">
              <p className={`text-sm text-foreground/70 dark:text-foreground/60 ${isExpanded ? '' : 'line-clamp-2'} transition-all duration-200`}>
                {description}
              </p>
              {hasLongDescription && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleDescription} 
                  className="mt-1 h-6 px-2 py-0 text-xs text-primary hover:bg-primary/10"
                >
                  {isExpanded ? (
                    <span className="flex items-center gap-1">הסתר <ChevronUp className="w-3 h-3" /></span>
                  ) : (
                    <span className="flex items-center gap-1">קרא עוד <ChevronDown className="w-3 h-3" /></span>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
        {sizes && (
          <div className="mt-auto pt-2 flex flex-wrap gap-1 text-xs">
            {Object.entries(sizes).map(([size, price]) => (
              <span key={size} className="bg-primary/10 dark:bg-primary-light/10 px-2 py-1 rounded">
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
