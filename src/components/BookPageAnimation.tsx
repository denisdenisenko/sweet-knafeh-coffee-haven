
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BookPageAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 1.5, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      style={{ perspective: "1200px" }}
    >
      {/* Left page */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{ 
          rotateY: isOpen ? -180 : 0,
          x: isOpen ? -100 : 0
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="bg-amber-50 w-[45vw] h-[80vh] shadow-xl origin-right"
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "10%",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="h-full flex items-center justify-center">
          <motion.img
            src="/images/knafeh-logo.png"
            alt="House of Knafeh"
            className="w-32 h-32 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </motion.div>

      {/* Right page - moves like it's being turned */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{ 
          rotateY: isOpen ? -180 : 0,
          x: isOpen ? -100 : 0 
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="bg-amber-100 w-[45vw] h-[80vh] shadow-xl origin-left"
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "10%",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Book spine */}
      <div className="absolute h-[80vh] w-4 bg-gradient-to-r from-amber-200 to-amber-300 z-10" />
    </motion.div>
  );
};

export default BookPageAnimation;
