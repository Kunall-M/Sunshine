import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';

// 3D Styled Blushing Pleading Character
const BlushingPleadingCharacter = () => (
  <svg className="w-44 h-44 sm:w-52 sm:h-52 mx-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]" viewBox="0 0 200 200" fill="none">
    <ellipse cx="100" cy="130" rx="60" ry="55" fill="#FFE5EC" stroke="#F4ACB7" strokeWidth="4" />
    <ellipse cx="55" cy="75" rx="18" ry="35" fill="#FFE5EC" stroke="#F4ACB7" strokeWidth="4" transform="rotate(-15 55 75)" />
    <ellipse cx="145" cy="75" rx="18" ry="35" fill="#FFE5EC" stroke="#F4ACB7" strokeWidth="4" transform="rotate(15 145 75)" />
    <ellipse cx="55" cy="78" rx="10" ry="22" fill="#FFB5A7" transform="rotate(-15 55 78)" />
    <ellipse cx="145" cy="78" rx="10" ry="22" fill="#FFB5A7" transform="rotate(15 145 78)" />
    
    <circle cx="75" cy="115" r="16" fill="#2B1E1E" />
    <circle cx="125" cy="115" r="16" fill="#2B1E1E" />
    <circle cx="70" cy="110" r="6" fill="white" />
    <circle cx="79" cy="120" r="2.5" fill="white" />
    <circle cx="120" cy="110" r="6" fill="white" />
    <circle cx="129" cy="120" r="2.5" fill="white" />
    
    <ellipse cx="60" cy="130" rx="12" ry="7" fill="#FF70A6" opacity="0.6" />
    <ellipse cx="140" cy="130" rx="12" ry="7" fill="#FF70A6" opacity="0.6" />
    
    <path d="M92 128 Q100 135 108 128" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    
    <circle cx="88" cy="150" r="12" fill="#FFF0F5" stroke="#F4ACB7" strokeWidth="3" />
    <circle cx="112" cy="150" r="12" fill="#FFF0F5" stroke="#F4ACB7" strokeWidth="3" />
    <path d="M100 138 C100 135 96 132 94 134 C92 136 94 140 100 144 C106 140 108 136 106 134 C104 132 100 135 100 138 Z" fill="#FF4081" />
  </svg>
);

export default function AskScreen({ onYes, onNo }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0, z: 0, rotate: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const handleNoInteraction = () => {
    if (hoverCount < 2) {
      const randomX = (Math.random() - 0.5) * 180;
      const randomY = (Math.random() - 0.5) * 140;
      const randomRot = (Math.random() - 0.5) * 40;
      setNoPosition({ x: randomX, y: randomY, z: 30, rotate: randomRot });
      setHoverCount(prev => prev + 1);
    } else {
      onNo();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full flex flex-col items-center justify-center text-center py-4 px-2 perspective-1200 preserve-3d"
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-xl paper-3d-card border-2 border-pink-300 rounded-3xl p-6 sm:p-10 border-dashed"
      >
        <div className="tape-corner-tl"></div>
        <div className="tape-corner-tr"></div>

        {/* 3D Header Badge */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white font-serif-title tracking-wider text-xl sm:text-2xl md:text-3xl px-6 py-2 rounded-2xl shadow-[0_8px_20px_rgba(200,0,0,0.3)] border-2 border-white mb-6 uppercase transform -rotate-1 transform-gpu"
          style={{ transform: "translateZ(40px)" }}
        >
          🎁 PLEASE ACCEPT THE GIFT 🎁
        </motion.div>

        {/* 3D Center Graphic */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="my-4 relative transform-gpu"
          style={{ transform: "translateZ(30px)" }}
        >
          <BlushingPleadingCharacter />
          <div className="absolute top-2 right-8 sm:right-12 bg-pink-100 text-pink-800 font-handwriting text-xl px-4 py-1.5 rounded-full border border-pink-300 shadow-[0_4px_10px_rgba(0,0,0,0.12)] rotate-6">
            Pliiiz? 🥺👉👈
          </div>
        </motion.div>

        <p className="font-handwriting text-2xl sm:text-3xl text-stone-700 mb-8 transform-gpu" style={{ transform: "translateZ(20px)" }}>
          Will you be my Valentine / Girlfriend forever and ever?
        </p>

        {/* 3D Tactile Buttons Side-by-Side */}
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-10 relative min-h-[80px] transform-gpu" style={{ transform: "translateZ(50px)" }}>
          {/* 3D YES Button */}
          <button
            onClick={onYes}
            className="btn-3d-green flex items-center gap-2 text-white font-bold text-xl sm:text-2xl px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl border-2 border-white cursor-pointer"
          >
            <span>YES!</span>
            <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
          </button>

          {/* 3D NO Button with Evasive Logic */}
          <motion.button
            animate={{ x: noPosition.x, y: noPosition.y, rotate: noPosition.rotate }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={handleNoInteraction}
            onClick={handleNoInteraction}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xl sm:text-2xl px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl shadow-[0_6px_0_#9CA3AF] border-2 border-gray-400 cursor-pointer transition-colors"
          >
            {hoverCount === 0 ? "NO" : hoverCount === 1 ? "Are you sure? 😮" : "NO! 🙈"}
          </motion.button>
        </div>

      </motion.div>
    </motion.div>
  );
}
