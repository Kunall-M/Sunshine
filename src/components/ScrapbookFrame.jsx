import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, X, Copy, Check, QrCode as QrIcon, Smartphone } from 'lucide-react';

// 3D Styled Pink Flower Cutout
const PinkFlowerCutout = ({ className = "", style = {} }) => (
  <svg className={`w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_8px_12px_rgba(0,0,0,0.2)] ${className}`} style={style} viewBox="0 0 100 100" fill="none">
    <g>
      <circle cx="50" cy="24" r="20" fill="#FF85A1" />
      <circle cx="76" cy="42" r="20" fill="#FF85A1" />
      <circle cx="66" cy="72" r="20" fill="#FF85A1" />
      <circle cx="34" cy="72" r="20" fill="#FF85A1" />
      <circle cx="24" cy="42" r="20" fill="#FF85A1" />
      <circle cx="50" cy="50" r="16" fill="#FFE066" />
      <circle cx="50" cy="50" r="12" fill="#F4A261" opacity="0.5" />
    </g>
  </svg>
);

// 3D Sparkly Pink Star Sticker
const SparklyPinkStar = ({ className = "", style = {} }) => (
  <svg className={`w-7 h-7 md:w-10 md:h-10 text-pink-400 drop-shadow-[0_6px_10px_rgba(255,64,129,0.3)] ${className}`} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" fill="#FF4081" />
    <circle cx="12" cy="11" r="2.5" fill="#FFF0F5" />
  </svg>
);

// Hand-Drawn Heart Doodle SVG
const HeartDoodle = ({ className = "", style = {} }) => (
  <svg className={`w-7 h-7 ${className}`} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" fill="rgba(255, 133, 161, 0.2)" stroke="#D90429" />
  </svg>
);

export default function ScrapbookFrame({ children }) {
  const [showQRModal, setShowQRModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Permanent Live Worldwide Production Netlify URL & Active Tunnel
  const publicLink = "https://cae46b1e80724b.lhr.life";
  const deviceLink = typeof window !== 'undefined' && window.location.hostname !== 'localhost' ? window.location.href : publicLink;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(deviceLink)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(deviceLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen w-full bg-notebook-grid overflow-hidden flex flex-col justify-between selection:bg-pink-200 selection:text-pink-900 perspective-1200 preserve-3d">
      
      {/* --- TOP 3D TORN PINK PAPER BORDER --- */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-[#FFB6C1] to-[#FF85A1] opacity-95 z-20 torn-edge-top shadow-[0_6px_15px_rgba(225,29,72,0.2)] flex items-center justify-around px-4">
        <div className="w-full flex justify-between items-center opacity-70">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/90 shadow-xs"></div>
          ))}
        </div>
      </div>

      {/* --- TOP RIGHT INTERACTIVE "SHARE & SCAN QR CODE" BUTTON --- */}
      <div className="absolute top-3 right-16 sm:right-24 z-40 transform-gpu" style={{ transform: "translateZ(50px)" }}>
        <button
          onClick={() => setShowQRModal(true)}
          className="flex items-center gap-1.5 bg-white/95 text-pink-700 hover:bg-pink-50 font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-pink-300 shadow-md cursor-pointer transition-all hover:scale-105"
        >
          <QrCode className="w-4 h-4 text-red-500" />
          <span>Scan QR / Any Device Link</span>
        </button>
      </div>

      {/* --- BOTTOM 3D TORN PINK PAPER BORDER --- */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-[#FFB6C1] to-[#FF85A1] opacity-95 z-20 torn-edge-bottom shadow-[0_-6px_15px_rgba(225,29,72,0.2)] flex items-center justify-around px-4">
        <div className="w-full flex justify-between items-center opacity-70">
          {[...Array(14)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/90 shadow-xs"></div>
          ))}
        </div>
      </div>

      {/* --- 3D FLORAL CUTOUTS IN CORNERS --- */}
      <motion.div 
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute top-4 left-4 md:top-5 md:left-6 z-30 transform-gpu"
        style={{ transform: "translateZ(40px)" }}
      >
        <PinkFlowerCutout />
      </motion.div>

      <motion.div 
        initial={{ scale: 0, rotate: 20 }}
        animate={{ scale: 1, rotate: 12 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pointer-events-none absolute top-4 right-4 md:top-5 md:right-6 z-30 transform-gpu"
        style={{ transform: "translateZ(40px)" }}
      >
        <PinkFlowerCutout />
      </motion.div>

      <motion.div 
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: 1, rotate: -10 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pointer-events-none absolute bottom-4 left-4 md:bottom-5 md:left-6 z-30 transform-gpu"
        style={{ transform: "translateZ(40px)" }}
      >
        <PinkFlowerCutout />
      </motion.div>

      <motion.div 
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 25 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-none absolute bottom-4 right-4 md:bottom-5 md:right-6 z-30 transform-gpu"
        style={{ transform: "translateZ(40px)" }}
      >
        <PinkFlowerCutout />
      </motion.div>

      {/* --- 3D SPARKLY PINK STAR STICKERS --- */}
      <motion.div 
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.25, 1], z: [20, 50, 20] }} 
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-16 left-10 md:left-24 z-30"
      >
        <SparklyPinkStar />
      </motion.div>

      <motion.div 
        animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1], z: [20, 40, 20] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute top-18 right-10 md:right-28 z-30"
      >
        <SparklyPinkStar />
      </motion.div>

      {/* --- SCATTERED FLOATING HEART DOODLES --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-50">
        <HeartDoodle className="absolute top-1/4 left-6 md:left-14 rotate-[-12deg]" />
        <HeartDoodle className="absolute top-1/3 right-8 md:right-20 rotate-[18deg]" />
        <HeartDoodle className="absolute bottom-1/4 left-10 md:left-28 rotate-[25deg]" />
        <HeartDoodle className="absolute bottom-1/3 right-10 md:right-24 rotate-[-15deg]" />
      </div>

      {/* --- MAIN 3D SCRAPBOOK CONTAINER --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12 md:py-16 flex-1 flex flex-col justify-center items-center preserve-3d">
        {children}
      </div>

      {/* --- 3D SCRAPBOOK QR CODE MODAL --- */}
      <AnimatePresence>
        {showQRModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-sm paper-3d-card border-2 border-pink-300 rounded-3xl p-6 text-center border-dashed"
            >
              <div className="tape-top"></div>

              <button
                onClick={() => setShowQRModal(false)}
                className="absolute top-3 right-3 text-stone-500 hover:text-stone-800 p-1 rounded-full hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Smartphone className="w-6 h-6 text-pink-600" />
                <h3 className="font-serif-title text-2xl font-bold text-red-600">
                  Open On Any Device
                </h3>
              </div>

              <p className="font-handwriting text-xl text-stone-600 mb-4">
                Scan this QR code with her phone camera to open instantly!
              </p>

              {/* Scannable QR Code Image */}
              <div className="bg-white p-3 rounded-2xl border border-pink-200 shadow-md inline-block mb-4">
                <img 
                  src={qrApiUrl} 
                  alt="Scannable QR Code" 
                  className="w-52 h-52 mx-auto rounded-lg"
                />
              </div>

              {/* Link Input & Copy Button */}
              <div className="flex items-center gap-2 bg-stone-100 p-2 rounded-2xl border border-stone-200 mb-2">
                <input 
                  type="text" 
                  readOnly 
                  value={deviceLink} 
                  className="w-full text-xs font-mono text-stone-700 bg-transparent px-2 focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl cursor-pointer transition-colors shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 italic">
                *Ensure both devices are on the same Wi-Fi / Hotspot network.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
