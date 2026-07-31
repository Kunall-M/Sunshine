import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Frown } from 'lucide-react';

// Sad crying cartoon character SVG
const SadCryingCharacter = () => (
  <svg className="w-40 h-40 sm:w-48 sm:h-48 mx-auto drop-shadow-md" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="100" cy="130" rx="60" ry="55" fill="#E2ECE9" stroke="#BEE3DB" strokeWidth="4" />
    {/* Drooping Ears */}
    <ellipse cx="50" cy="95" rx="18" ry="38" fill="#E2ECE9" stroke="#BEE3DB" strokeWidth="4" transform="rotate(35 50 95)" />
    <ellipse cx="150" cy="95" rx="18" ry="38" fill="#E2ECE9" stroke="#BEE3DB" strokeWidth="4" transform="rotate(-35 150 95)" />
    
    {/* Sad Crying Eyes */}
    <path d="M62 108 Q72 100 82 108" stroke="#2B1E1E" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M118 108 Q128 100 138 108" stroke="#2B1E1E" strokeWidth="4" strokeLinecap="round" fill="none" />
    
    {/* Animated Teardrops falling */}
    <motion.path 
      animate={{ y: [0, 25, 0], opacity: [1, 0, 1] }} 
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      d="M70 115 C66 122 66 128 70 132 C74 128 74 122 70 115 Z" 
      fill="#3A86FF" 
    />
    <motion.path 
      animate={{ y: [0, 30, 0], opacity: [1, 0, 1] }} 
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      d="M130 115 C126 122 126 128 130 132 C134 128 134 122 130 115 Z" 
      fill="#3A86FF" 
    />

    {/* Sad Downward Mouth */}
    <path d="M85 140 Q100 128 115 140" stroke="#2B1E1E" strokeWidth="4" strokeLinecap="round" fill="none" />
    
    {/* Sad Paws on head */}
    <circle cx="65" cy="142" r="11" fill="#F8F9FA" stroke="#BEE3DB" strokeWidth="3" />
    <circle cx="135" cy="142" r="11" fill="#F8F9FA" stroke="#BEE3DB" strokeWidth="3" />
  </svg>
);

export default function ErrorScreen({ onTryAgain }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="w-full flex flex-col items-center justify-center text-center py-4 px-2"
    >
      <div className="relative w-full max-w-xl bg-[#FFF5F5] border-2 border-red-300 rounded-3xl p-6 sm:p-10 shadow-2xl border-dashed">
        
        {/* Top Tape */}
        <div className="tape-top bg-red-200/80"></div>

        {/* Header Text: "WHY DID YOU CLICK NO!" */}
        <motion.h2 
          initial={{ scale: 0.9 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-black text-red-600 tracking-tight leading-tight mb-4"
        >
          💔 WHY DID YOU CLICK NO! 😭
        </motion.h2>

        {/* Sad Crying Character */}
        <div className="my-6">
          <SadCryingCharacter />
        </div>

        <p className="font-handwriting text-2xl sm:text-3xl text-red-700 mb-8">
          My heart is broken... You must have misclicked, right? 🥺
        </p>

        {/* TRY AGAIN Button */}
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 10px 25px -5px rgba(225, 29, 72, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onTryAgain}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xl sm:text-2xl px-10 py-4 rounded-full shadow-xl border-2 border-white cursor-pointer"
        >
          <RotateCcw className="w-6 h-6 animate-spin-slow" />
          <span>TRY AGAIN! 💕</span>
        </motion.button>

      </div>
    </motion.div>
  );
}
