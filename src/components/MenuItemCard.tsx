
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
            <p className="text-sm text-foreground/70 dark:text-foreground/60 line-clamp-2 mb-2 min-h-[2.5rem]">
              {description}
            </p>
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
