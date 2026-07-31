import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, RefreshCw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

// 3D Cartoon Character Graphic
const CuteCharacterWithFlowers = () => (
  <svg className="w-44 h-44 sm:w-52 sm:h-52 drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]" viewBox="0 0 200 200" fill="none">
    <ellipse cx="100" cy="135" rx="55" ry="50" fill="#FFE5EC" stroke="#F4ACB7" strokeWidth="4" />
    <ellipse cx="55" cy="80" rx="16" ry="30" fill="#FFE5EC" stroke="#F4ACB7" strokeWidth="4" transform="rotate(-15 55 80)" />
    <ellipse cx="145" cy="80" rx="16" ry="30" fill="#FFE5EC" stroke="#F4ACB7" strokeWidth="4" transform="rotate(15 145 80)" />
    
    <path d="M70 115 Q80 105 90 115" stroke="#2B1E1E" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M110 115 Q120 105 130 115" stroke="#2B1E1E" strokeWidth="4" strokeLinecap="round" fill="none" />
    
    <ellipse cx="62" cy="125" rx="10" ry="6" fill="#FF70A6" opacity="0.7" />
    <ellipse cx="138" cy="125" rx="10" ry="6" fill="#FF70A6" opacity="0.7" />
    
    <path d="M92 128 Q100 138 108 128" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    
    <ellipse cx="70" cy="150" rx="12" ry="8" fill="#FFF0F5" stroke="#F4ACB7" strokeWidth="3" />
    <ellipse cx="130" cy="150" rx="12" ry="8" fill="#FFF0F5" stroke="#F4ACB7" strokeWidth="3" />
    
    <circle cx="100" cy="148" r="8" fill="#FF85A1" />
    <circle cx="94" cy="144" r="7" fill="#FF4081" />
    <circle cx="106" cy="144" r="7" fill="#FFB703" />
    <path d="M100 156 L100 170" stroke="#2A9D8F" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default function BouquetBuilderScreen({ onBack }) {
  const [showResult, setShowResult] = useState(false);

  const handleCreateBouquet = () => {
    setShowResult(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto py-4 px-2 flex flex-col items-center perspective-1200 preserve-3d"
    >
      {/* Top Header Bar */}
      <div className="w-full flex justify-between items-center mb-6 px-2">
        <button
          onClick={onBack}
          className="btn-3d-pink flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full border-2 border-white cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Gift Menu</span>
        </button>

        {showResult && (
          <button
            onClick={() => setShowResult(false)}
            className="flex items-center gap-1.5 bg-white text-stone-700 font-bold text-sm px-4 py-2 rounded-full border border-stone-300 shadow-sm hover:bg-stone-50 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>View Details</span>
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          /* STEP 1: REAL BOUQUET SHOWCASE SELECTION PHASE */
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full paper-3d-card border-2 border-pink-300 rounded-3xl p-6 sm:p-10 border-dashed relative text-center preserve-3d"
          >
            <div className="tape-top"></div>

            <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-black text-red-600 mb-2 drop-shadow-xs">
              Real Bouquet For Farahana 💐
            </h1>
            <p className="font-handwriting text-2xl sm:text-3xl text-stone-600 mb-8">
              Fresh Pink Roses & Red Tulips wrapped with love......
            </p>

            {/* REAL BOUQUET PHOTO DISPLAY CARD */}
            <div className="relative max-w-md mx-auto mb-8 preserve-3d transform-gpu" style={{ transform: "translateZ(30px)" }}>
              <div className="tape-corner-tl"></div>
              <div className="tape-corner-tr"></div>

              <motion.div 
                whileHover={{ scale: 1.04, rotateX: 4, rotateY: -4 }}
                className="relative bg-white p-4 rounded-3xl border-4 border-pink-200 shadow-[0_20px_40px_rgba(0,0,0,0.2)] overflow-hidden"
              >
                <img 
                  src="/real_bouquet.png" 
                  alt="Real Bouquet of Pink Roses and Red Tulips" 
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl border border-stone-200"
                />

                {/* Floating Badge overlay */}
                <div className="mt-4 inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm sm:text-base px-6 py-2 rounded-full border-2 border-white shadow-md">
                  🌷 Fresh Red Tulips & Pink Roses 🌸
                </div>
              </motion.div>
            </div>

            {/* Accept Real Bouquet Button */}
            <button
              onClick={handleCreateBouquet}
              className="btn-3d-red inline-flex items-center gap-3 text-white font-bold text-xl sm:text-2xl px-12 py-4 rounded-full border-2 border-white cursor-pointer"
            >
              <span>Present Her Real Bouquet 💕</span>
              <Sparkles className="w-6 h-6" />
            </button>

          </motion.div>
        ) : (
          /* STEP 2: RESULT SCREEN WITH REAL BOUQUET & CARTOON & PURPLE BUBBLES */
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full paper-3d-card border-2 border-pink-300 rounded-3xl p-6 sm:p-10 border-dashed relative overflow-hidden min-h-[520px] flex flex-col items-center justify-between preserve-3d"
          >
            <div className="tape-top"></div>

            {/* FLOATING 3D PURPLE TEXT BUBBLES IN Z-SPACE */}
            <motion.div 
              animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-4 sm:left-8 bg-purple-100 text-purple-800 font-handwriting text-xl sm:text-2xl px-5 py-2.5 rounded-3xl border border-purple-300 shadow-md rotate-[-4deg] z-30 transform-gpu"
              style={{ transform: "translateZ(50px)" }}
            >
              "Who's she? The best part of my day" 💜
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-8 right-4 sm:right-8 bg-purple-100 text-purple-800 font-handwriting text-xl sm:text-2xl px-5 py-2.5 rounded-3xl border border-purple-300 shadow-md rotate-[5deg] z-30 transform-gpu"
              style={{ transform: "translateZ(50px)" }}
            >
              "i'm your #1 fan" 🌟
            </motion.div>

            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 right-6 sm:right-12 bg-purple-100 text-purple-800 font-handwriting text-xl sm:text-2xl px-5 py-2.5 rounded-3xl border border-purple-300 shadow-md rotate-[-3deg] z-30 transform-gpu"
              style={{ transform: "translateZ(50px)" }}
            >
              "my favorite person" 💕
            </motion.div>

            {/* Main Result Layout */}
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto pt-14 pb-6 preserve-3d">
              
              {/* CARTOON CHARACTER ON THE LEFT */}
              <div className="md:col-span-5 flex flex-col items-center justify-center relative transform-gpu" style={{ transform: "translateZ(30px)" }}>
                <CuteCharacterWithFlowers />
                <div className="mt-2 bg-pink-100 text-red-700 font-handwriting text-2xl px-4 py-1.5 rounded-2xl border border-pink-300 shadow-sm rotate-[-2deg]">
                  flowers for my sweetheart! 🌸
                </div>
              </div>

              {/* CENTERED REAL BOUQUET DISPLAY */}
              <div className="md:col-span-7 flex flex-col items-center justify-center text-center transform-gpu" style={{ transform: "translateZ(40px)" }}>
                
                <motion.div 
                  initial={{ scale: 0.8, rotate: -3 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  className="relative p-3 bg-white rounded-3xl border-4 border-pink-300 shadow-[0_25px_50px_rgba(0,0,0,0.25)] mb-4 max-w-sm w-full overflow-hidden"
                >
                  <img 
                    src="/real_bouquet.png" 
                    alt="Real Bouquet of Pink Roses and Red Tulips for Farahana" 
                    className="w-full h-72 sm:h-80 object-cover rounded-2xl border border-stone-200"
                  />

                  {/* Satin Ribbon Ribbon Tag */}
                  <div className="mt-3 inline-block bg-yellow-300 text-brown-900 font-bold text-xs px-4 py-1.5 rounded-full border border-yellow-400 shadow-xs">
                    🎀 Real Pink Roses & Red Tulips Bouquet 🎀
                  </div>
                </motion.div>

                <h2 className="font-serif-title text-3xl sm:text-4xl font-black text-red-600 mb-1 drop-shadow-xs">
                  Real Flowers For Farahana!
                </h2>
                <p className="font-handwriting text-2xl text-stone-700">
                  Beautiful fresh red tulips & pink roses wrapped with all my love! ✨
                </p>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
