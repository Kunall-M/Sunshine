import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// 3D Styled Paperclip SVG graphic
const PaperclipGraphic = () => (
  <svg className="w-12 h-12 text-stone-600 drop-shadow-[0_8px_15px_rgba(0,0,0,0.35)] z-40 transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

export default function LoveLetterScreen({ onBack }) {
  // Permanently embedded 4 polaroid photos provided by user
  const polaroids = [
    {
      id: 1,
      src: '/7d3c0426-c3cf-4b72-9ccd-26551b541e3b.png',
      caption: 'Reading & Cute Pouts 📖',
      rotate: '-rotate-4'
    },
    {
      id: 2,
      src: '/IMG-20260711-WA0036.jpg',
      caption: 'Our Cafe Dates 💕',
      rotate: 'rotate-4'
    },
    {
      id: 3,
      src: '/IMG-20260711-WA0032.jpg',
      caption: 'Your Adorable Smile ✨',
      rotate: '-rotate-3'
    },
    {
      id: 4,
      src: '/IMG_20260627_150542_460.jpg',
      caption: 'My Favorite Memory 💋',
      rotate: 'rotate-3'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto py-4 px-2 flex flex-col items-center perspective-1200 preserve-3d"
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

        <div className="bg-pink-100 text-pink-800 font-handwriting text-xl sm:text-2xl px-5 py-2 rounded-full border border-pink-300 shadow-sm">
          💌 Love Letter & 4 Special Memories
        </div>
      </div>

      {/* Main Layout: 3D Parchment Letter + 4 Permanent 3D Polaroids Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative preserve-3d">
        
        {/* 3D PARCHMENT PAPER ELEMENT (6 cols on lg) */}
        <div className="lg:col-span-6 relative bg-[#FAF3DD] border-2 border-[#E0D3A8] rounded-2xl p-6 sm:p-10 paper-3d-card transform-gpu" style={{ transform: "translateZ(20px)" }}>
          
          {/* 3D Paperclip Graphic */}
          <div className="absolute -top-6 left-8 z-40 transform-gpu" style={{ transform: "translateZ(40px)" }}>
            <PaperclipGraphic />
          </div>

          <div className="tape-corner-tr"></div>

          {/* Letter Header */}
          <div className="flex justify-between items-center mb-6 pt-2 border-b-2 border-pink-200/60 pb-3">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-black text-red-700 drop-shadow-xs">
              Dear Farahana, 💕
            </h2>
          </div>

          {/* Permanent Letter Content */}
          <div className="font-handwriting text-2xl sm:text-3xl text-stone-800 leading-relaxed whitespace-pre-line space-y-4">
            {"Farahana i lovee youuu so much . babeeee my jaaan myyyy babyyy muah muah muah, tum jabse mere life mai aayi ho tabse sab kuch accha hogya hai mujhe pata hai mere future tere hi sath hai , I'm so lucky to have you in my life . i love yoou soo much will you marry me?\n\nHappy girlfriend day my love  ! ❤️"}
          </div>

          <div className="mt-8 pt-4 border-t border-pink-200/60 text-right">
            <p className="font-script text-4xl text-red-600 font-bold">
              Forever Yours ❤️
            </p>
          </div>
        </div>

        {/* 4 PERMANENT FLOATING 3D POLAROIDS GRID (6 cols on lg) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center justify-center preserve-3d">
          {polaroids.map((polaroid, index) => (
            <motion.div
              key={polaroid.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -4 : 4 }}
              whileHover={{ scale: 1.07, rotate: 0, z: 60 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative bg-white border border-stone-200 p-3 rounded-xs shadow-[0_15px_30px_rgba(0,0,0,0.18)] w-full max-w-[250px] mx-auto group transform-gpu preserve-3d"
              style={{ transform: `translateZ(${30 + index * 6}px)` }}
            >
              {/* Masking Tape Graphic */}
              <div className={index % 2 === 0 ? "tape-corner-tl" : "tape-corner-tr"}></div>

              {/* Photo Display Frame */}
              <div className="relative w-full h-56 bg-stone-100 overflow-hidden border border-stone-200 rounded-xs flex items-center justify-center shadow-inner">
                <img 
                  src={polaroid.src} 
                  alt={polaroid.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/IMG_20260627_150542_460.jpg';
                  }}
                />
              </div>

              {/* Handwritten Polaroid Caption */}
              <div className="pt-3 pb-1 text-center">
                <p className="font-handwriting text-xl text-stone-800 font-bold leading-snug">
                  {polaroid.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </motion.div>
  );
}
