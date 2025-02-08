
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
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/60e5108e-b684-4848-998c-830bf64f92ec.png')",
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent dark:from-primary-dark/20 dark:via-primary-dark/10 mix-blend-overlay animate-gradient" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 dark:opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 p-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-heading font-bold text-white"
        >
          גן עדן הקנאפה
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-hebrew text-white/90"
        >
          חווית הקינוחים המזרחיים האותנטית
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
            className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary-dark dark:hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            לתפריט שלנו
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <Coffee className="w-5 h-5 mr-2" />
            להזמין עכשיו
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;
