import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Heart } from 'lucide-react';

export default function GiftMenuScreen({ onSelectGift, completedGifts = {} }) {
  const gifts = [
    {
      id: 'letter',
      title: 'Love Letter',
      subtitle: 'A sweet letter pinned with memories',
      icon: (
        <svg className="w-20 h-20 text-red-500 drop-shadow-[0_10px_15px_rgba(217,4,41,0.3)]" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="25" width="80" height="55" rx="6" fill="#D90429" stroke="#900C3F" strokeWidth="3" />
          <path d="M10 25 L50 55 L90 25" fill="#EF233C" stroke="#900C3F" strokeWidth="3" />
          {/* 3D Golden Wax Seal */}
          <circle cx="50" cy="55" r="13" fill="#FFD700" stroke="#B8860B" strokeWidth="2.5" />
          <path d="M50 51 C50 49 47 47 45 49 C43 51 45 54 50 58 C55 54 57 51 55 49 C53 47 50 49 50 51 Z" fill="#D90429" />
        </svg>
      ),
      color: 'from-rose-50 to-pink-100',
      borderColor: 'border-rose-300',
    },
    {
      id: 'bouquet',
      title: 'Flower Bouquet',
      subtitle: 'Real Red Tulips & Pink Roses Bouquet',
      icon: (
        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-pink-300 shadow-[0_8px_15px_rgba(255,64,129,0.3)] bg-white p-1">
          <img src="/real_bouquet.png" alt="Real Bouquet" className="w-full h-full object-cover rounded-xl" />
        </div>
      ),
      color: 'from-pink-50 to-rose-100',
      borderColor: 'border-pink-300',
    },
    {
      id: 'music',
      title: 'Red Velvet Box',
      subtitle: 'Vinyl record ("Tu Hi Mera") & card',
      icon: (
        <svg className="w-20 h-20 text-red-600 drop-shadow-[0_10px_15px_rgba(160,9,14,0.3)]" viewBox="0 0 100 100" fill="none">
          <rect x="20" y="45" width="60" height="40" rx="4" fill="#A0090E" stroke="#590004" strokeWidth="3" />
          <rect x="16" y="35" width="68" height="14" rx="3" fill="#D90429" stroke="#590004" strokeWidth="3" />
          <rect x="44" y="35" width="12" height="50" fill="#FFD700" />
          <ellipse cx="38" cy="26" rx="12" ry="8" fill="#FFD700" transform="rotate(-20 38 26)" />
          <ellipse cx="62" cy="26" rx="12" ry="8" fill="#FFD700" transform="rotate(20 62 26)" />
          <circle cx="50" cy="30" r="5" fill="#DAA520" />
        </svg>
      ),
      color: 'from-red-50 to-rose-100',
      borderColor: 'border-red-300',
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center text-center py-4 px-2 perspective-1200 preserve-3d"
    >
      {/* Header Banner */}
      <div className="relative mb-8 transform-gpu" style={{ transform: "translateZ(30px)" }}>
        <div className="inline-block paper-3d-card border-2 border-red-300 rounded-3xl px-8 py-4 border-dashed relative">
          <div className="tape-top"></div>
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-black text-red-600 tracking-tight">
            🎁 Choose Your Gifts! 🎁
          </h1>
          <p className="font-handwriting text-2xl text-stone-600 mt-1">
            Tap on any gift to open your 3D surprises...
          </p>
        </div>
      </div>

      {/* 3 Clickable 3D Gift Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl px-2 preserve-3d">
        {gifts.map((gift, index) => {
          const isCompleted = completedGifts[gift.id];
          return (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              whileHover={{ y: -12, rotateX: 6, rotateY: index === 0 ? -6 : index === 2 ? 6 : 0, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectGift(gift.id)}
              className={`relative bg-gradient-to-b ${gift.color} border-2 ${gift.borderColor} rounded-3xl p-6 paper-3d-card border-dashed cursor-pointer flex flex-col items-center justify-between text-center transition-all duration-300 group min-h-[320px] preserve-3d`}
            >
              {/* Tape Effect */}
              <div className="tape-top opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Status Badge */}
              <div className="w-full flex justify-between items-center mb-2 transform-gpu" style={{ transform: "translateZ(20px)" }}>
                <span className="bg-white/90 backdrop-blur-xs text-xs font-bold text-pink-800 px-3 py-1 rounded-full border border-pink-200 shadow-xs">
                  Gift #{index + 1}
                </span>
                {isCompleted && (
                  <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-300 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Opened
                  </span>
                )}
              </div>

              {/* Icon Container popping in 3D */}
              <div className="relative my-4 group-hover:scale-115 transition-transform duration-300 transform-gpu" style={{ transform: "translateZ(40px)" }}>
                {gift.icon}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Sparkles className="w-7 h-7" />
                </motion.div>
              </div>

              {/* Card Title & Subtitle */}
              <div className="transform-gpu" style={{ transform: "translateZ(25px)" }}>
                <h3 className="font-serif-title text-2xl font-bold text-red-700 mb-1 group-hover:text-red-600">
                  {gift.title}
                </h3>
                <p className="font-handwriting text-xl text-stone-600">
                  {gift.subtitle}
                </p>
              </div>

              {/* 3D Action Button Label */}
              <div className="mt-4 w-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
                <div className="btn-3d-pink w-full text-white font-bold text-base py-3 rounded-2xl border border-white shadow-md transition-colors flex items-center justify-center gap-2">
                  <span>Open Surprise</span>
                  <Heart className="w-4 h-4 fill-current" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </motion.div>
  );
}
