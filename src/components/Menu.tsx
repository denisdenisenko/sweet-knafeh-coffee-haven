import { CakeSlice, Coffee, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MenuItem = ({ name, description, price, index }: { name: string; description: string; price: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-light/5 dark:to-primary-light/10 rounded-xl transform transition-transform duration-300 group-hover:scale-105" />
    <div className="relative bg-white/50 dark:bg-secondary-dark/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/10 dark:border-primary-light/10 transform transition-all duration-300 group-hover:translate-y-[-5px]">
      <div className="absolute top-4 right-4">
        {index === 0 && (
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">Popular</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-semibold text-primary dark:text-primary-light mb-3">{name}</h3>
      <p className="text-foreground/70 dark:text-foreground/60 mb-4 min-h-[60px]">{description}</p>
      <div className="flex items-center justify-between">
        <p className="text-primary-dark dark:text-primary-light font-bold text-xl">{price}</p>
        <div className={cn(
          "p-2 rounded-full",
          "bg-primary/10 dark:bg-primary-light/10",
          "group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20",
          "transition-colors duration-300"
        )}>
          {name.toLowerCase().includes('coffee') ? (
            <Coffee className="w-5 h-5 text-primary dark:text-primary-light" />
          ) : (
            <CakeSlice className="w-5 h-5 text-primary dark:text-primary-light" />
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Knafeh",
      description: "Traditional cheese-based dessert with crispy kataifi, pistachios, and sweet syrup",
      price: "$12.99"
    },
    {
      name: "Chocolate Knafeh",
      description: "Our modern twist with rich chocolate filling and hazelnuts",
      price: "$14.99"
    },
    {
      name: "Arabic Coffee",
      description: "Traditional cardamom-spiced coffee served in small cups",
      price: "$3.99"
    },
    {
      name: "Turkish Coffee",
      description: "Rich and unfiltered coffee with optional cardamom flavor",
      price: "$4.99"
    }
  ];

  return (
    <div id="menu-section" className="relative py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/20 to-transparent dark:from-accent-dark/30 dark:via-accent-dark/20" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <CakeSlice className="w-10 h-10 text-primary dark:text-primary-light" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light">Our Menu</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;