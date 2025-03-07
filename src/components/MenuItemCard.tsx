
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  src: string;
  alt: string;
  title: string;
  category: string;
  price?: string;
  sizes?: Record<string, string>;
  description?: string;
  icon: LucideIcon;
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
}) => {
  return (
    <div 
      className="glass-morphism rounded-lg overflow-hidden flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 h-full w-full"
    >
      <div className="w-full h-[150px] overflow-hidden">
        <AspectRatio ratio={16/9} className="w-full h-full">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
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
            <p className="text-sm text-foreground/70 dark:text-foreground/60 line-clamp-2 mb-2">
              {description}
            </p>
          )}
        </div>
        {sizes && (
          <div className="mt-2 flex flex-wrap gap-1 text-xs">
            {Object.entries(sizes).map(([size, price]) => (
              <span key={size} className="bg-primary/10 dark:bg-primary-light/10 px-2 py-1 rounded">
                {size}: {price}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
