import { Coffee, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.querySelector("#menu-section");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent dark:from-primary-dark/10 dark:via-primary-dark/5 animate-gradient" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 dark:opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 p-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-heading font-bold bg-gradient-to-br from-primary via-primary/80 to-primary/60 dark:from-primary-light dark:to-primary-light/60 bg-clip-text text-transparent"
        >
          Knafeh Paradise
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-arabic text-foreground/80 dark:text-foreground/70"
        >
          Experience the Art of Middle Eastern Desserts
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-primary text-white hover:bg-primary/90 dark:bg-primary-light dark:text-primary-dark dark:hover:bg-primary-light/90 transition-all duration-300 transform hover:scale-105"
          >
            Explore Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary hover:bg-primary/5 dark:border-primary-light dark:hover:bg-primary-light/5 transition-all duration-300 transform hover:scale-105"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Order Now
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary dark:text-primary-light animate-bounce" />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 dark:bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/20 dark:bg-primary-light/10 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;