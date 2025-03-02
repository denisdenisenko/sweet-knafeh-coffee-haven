
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
      {/* Top page that flips down */}
      <motion.div
        initial={{ rotateX: 0, y: 0 }}
        animate={{ 
          rotateX: isOpen ? 180 : 0,
          y: isOpen ? 100 : 0
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="bg-amber-50 w-[80vw] h-[45vh] shadow-xl origin-top"
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "10%",
          backgroundBlendMode: "overlay",
          position: "absolute",
          top: "20vh",
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

      {/* Bottom page - stationary */}
      <motion.div
        className="bg-amber-100 w-[80vw] h-[45vh] shadow-xl"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "10%",
          backgroundBlendMode: "overlay",
          position: "absolute",
          top: "calc(20vh + 45vh)",
        }}
      />

      {/* Book spine */}
      <div className="absolute w-[80vw] h-4 bg-gradient-to-b from-amber-200 to-amber-300 z-10" style={{ top: "20vh" }} />
    </motion.div>
  );
};

export default BookPageAnimation;
