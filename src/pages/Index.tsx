
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import CoolEntryAnimation from "@/components/CoolEntryAnimation";

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3500); // Slightly longer than the animation itself
    
    return () => clearTimeout(timer);
  }, []);

  // Define page transition variants
  const pageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showAnimation ? (
          <CoolEntryAnimation key="animation" />
        ) : (
          <motion.div
            key="index-page"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300"
          >
            <motion.div variants={sectionVariants}>
              <Hero />
            </motion.div>
            
            <motion.div 
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <LocationSection />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
