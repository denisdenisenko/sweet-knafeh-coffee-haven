
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const particlesConfig = {
  count: 100,
  colors: ["#E6A168", "#8B4513", "#FEF7CD", "#FFF8DC"],
  size: [3, 5],
  speed: [1, 3],
};

const CoolEntryAnimation = () => {
  const [isActive, setIsActive] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000); // Animation duration
    
    return () => clearTimeout(timer);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: particlesConfig.count }).map((_, i) => {
    const size = Math.random() * (particlesConfig.size[1] - particlesConfig.size[0]) + particlesConfig.size[0];
    const color = particlesConfig.colors[Math.floor(Math.random() * particlesConfig.colors.length)];
    const speed = Math.random() * (particlesConfig.speed[1] - particlesConfig.speed[0]) + particlesConfig.speed[0];
    
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      color,
      speed,
    };
  });

  if (!isActive) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [`${particle.y}vh`, `-10vh`],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.speed * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
            }}
          />
        ))}
      </div>

      {/* Logo animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-8"
        initial={{ scale: 0.8, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src="/images/knafeh-logo.png" 
          alt="Knafeh Logo"
          className="w-48 h-48 object-contain mb-6"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.h1 
          className="text-5xl font-arabicHebrew text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          בית הכנאפה
        </motion.h1>
        
        <motion.div
          className="text-xl text-white/80 mb-6 font-hebrew text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          טעימה בכל ביס
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CoolEntryAnimation;
