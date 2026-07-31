import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function LandingScreen({ onContinue }) {
  // 3D Tilt Effect on Mouse Move
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.85, rotateX: -15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.9, rotateX: 15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full flex flex-col items-center justify-center text-center py-6 px-4 relative perspective-1200 preserve-3d"
    >
      {/* 3D Scrapbook Paper Card Container */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-xl paper-3d-card border-2 border-pink-200 rounded-3xl p-8 md:p-12 border-dashed transition-transform duration-200 ease-out"
      >
        {/* Top Decorative Tape */}
        <div className="tape-top"></div>

        {/* 3D Floating Heart Doodles Around Card */}
        <motion.div 
          animate={{ y: [-6, 6, -6], rotate: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-4 text-pink-500 bg-white p-2.5 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] border border-pink-200 z-40 transform-gpu"
          style={{ transform: "translateZ(50px)" }}
        >
          <Heart className="w-7 h-7 fill-pink-400 stroke-red-500" />
        </motion.div>

        <motion.div 
          animate={{ y: [6, -6, 6], rotate: [12, -12, 12] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 -right-3 text-red-500 bg-white p-3 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] border border-red-200 z-40 transform-gpu"
          style={{ transform: "translateZ(50px)" }}
        >
          <Sparkles className="w-7 h-7 text-pink-500" />
        </motion.div>

        {/* 3D Greeting Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 font-handwriting text-2xl px-6 py-2 rounded-full mb-6 border border-pink-300 shadow-[0_4px_12px_rgba(255,133,161,0.25)] transform -rotate-2 transform-gpu"
          style={{ transform: "translateZ(30px)" }}
        >
          ✨ To my most favorite person ✨
        </motion.div>

        {/* 3D Pop-out Center Title: "Happy Girlfriend Day!" */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-black text-red-600 tracking-tight leading-tight mb-4 drop-shadow-[0_4px_12px_rgba(217,4,41,0.25)] transform-gpu"
          style={{ transform: "translateZ(40px)" }}
        >
          Happy Girlfriend Day!
        </motion.h1>

        {/* Cute Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-handwriting text-2xl md:text-3xl text-stone-700 max-w-md mx-auto mb-10 transform-gpu"
          style={{ transform: "translateZ(20px)" }}
        >
          I made a little scrapbook full of surprises just for you... 💕
        </motion.p>

        {/* 3D Animated Hand-drawn Heart Illustration */}
        <div className="flex justify-center items-center gap-3 mb-10 transform-gpu" style={{ transform: "translateZ(30px)" }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.25, 1],
                rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                z: [0, 20, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut" 
              }}
            >
              <Heart 
                className={`w-7 h-7 sm:w-9 sm:h-9 ${
                  i === 2 
                    ? 'text-red-600 fill-red-500 drop-shadow-md' 
                    : i % 2 === 0 
                      ? 'text-pink-500 fill-pink-300 drop-shadow-sm' 
                      : 'text-rose-400 fill-pink-200 drop-shadow-sm'
                }`} 
              />
            </motion.div>
          ))}
        </div>

        {/* Pill-shaped Tactile 3D "Continue" Button */}
        <div className="transform-gpu" style={{ transform: "translateZ(50px)" }}>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="btn-3d-red group relative inline-flex items-center gap-3 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full border-2 border-white cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            <span className="absolute -top-3 -right-3 bg-yellow-300 text-xs font-bold text-brown-900 px-3 py-1 rounded-full border border-yellow-400 rotate-12 shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
              Open 💌
            </span>
          </motion.button>
        </div>

      </motion.div>
    </motion.div>
  );
}
