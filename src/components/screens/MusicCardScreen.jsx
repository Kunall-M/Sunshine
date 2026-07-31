import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, Music, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

// 3D Styled Line-drawn character holding sign SVG
const LineDrawnCharacterSign = () => (
  <svg className="w-44 h-44 sm:w-52 sm:h-52 mx-auto drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)]" viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="55" r="32" stroke="#2B1E1E" strokeWidth="3.5" fill="white" />
    
    <ellipse cx="88" cy="50" rx="3" ry="5" fill="#2B1E1E" />
    <ellipse cx="112" cy="50" rx="3" ry="5" fill="#2B1E1E" />
    <ellipse cx="80" cy="58" rx="6" ry="3" fill="#FF85A1" opacity="0.6" />
    <ellipse cx="120" cy="58" rx="6" ry="3" fill="#FF85A1" opacity="0.6" />
    <path d="M93 62 Q100 68 107 62" stroke="#2B1E1E" strokeWidth="3" strokeLinecap="round" fill="none" />
    
    <path d="M100 87 L100 135" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M100 135 L80 175" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M100 135 L120 175" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" />
    
    <path d="M100 100 L55 115" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M100 100 L145 115" stroke="#2B1E1E" strokeWidth="3.5" strokeLinecap="round" />
    
    <rect x="25" y="110" width="150" height="55" rx="8" fill="#FFFDF0" stroke="#2B1E1E" strokeWidth="3.5" />
    <text x="100" y="132" textAnchor="middle" fill="#D90429" fontFamily="Caveat, cursive" fontSize="20" fontWeight="bold">
      I LOVE YOU Sooooo.....!
    </text>
    <text x="100" y="153" textAnchor="middle" fill="#D90429" fontFamily="Caveat, cursive" fontSize="24" fontWeight="bold">
      MUCH ❤️
    </text>
  </svg>
);

export default function MusicCardScreen({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [heartCount, setHeartCount] = useState(100);

  const songTitle = "Tu Hi Mera";
  const artistName = "KK • Jannat 2";
  const songSrc = "/Tu Hi Mera Jannat 2 Original Motion Picturetrack 128 Kbps.mp3";

  const audioRef = useRef(null);

  // 3D Motion tilt values
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const rotateX1 = useTransform(y1, [-150, 150], [8, -8]);
  const rotateY1 = useTransform(x1, [-150, 150], [-8, 8]);

  useEffect(() => {
    // Initialize HTML5 Audio with user's MP3 file
    const audio = new Audio(songSrc);
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [songSrc]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio playback error:", err);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = clickX / rect.width;
    const newTime = newPercent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const triggerHeartExplosion = () => {
    setHeartCount(prev => prev + 1);
    confetti({
      particleCount: 50,
      spread: 85,
      origin: { y: 0.7 },
      colors: ['#FF4081', '#D90429', '#FF85A1']
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
          onClick={() => {
            if (audioRef.current) audioRef.current.pause();
            onBack();
          }}
          className="btn-3d-pink flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full border-2 border-white cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Gift Menu</span>
        </button>

        <div className="bg-red-100 text-red-800 font-handwriting text-xl sm:text-2xl px-5 py-2 rounded-full border border-red-300 shadow-sm">
          🎵 "Tu Hi Mera" Music Player
        </div>
      </div>

      {/* SPLIT LAYOUT: TWO MAIN 3D GRAPHIC CARDS */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch preserve-3d">
        
        {/* CARD 1: DARK RED CARD WITH 3D VINYL RECORD & MUSIC PLAYER */}
        <motion.div 
          style={{ rotateX: rotateX1, rotateY: rotateY1, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative paper-3d-card-dark text-white rounded-3xl p-6 sm:p-8 border-2 border-red-900 flex flex-col justify-between"
        >
          <div className="tape-top bg-red-200/40"></div>

          {/* 3D VINYL RECORD GRAPHIC */}
          <div className="flex flex-col items-center text-center my-4 transform-gpu" style={{ transform: "translateZ(30px)" }}>
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 my-2">
              <motion.div 
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
                className="w-full h-full rounded-full bg-stone-900 border-4 border-amber-300 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden"
              >
                {/* Full-size Uncut Rotating Couple Photo filling the entire wheel */}
                <img src="/vinyl_couple.jpg" alt="Rotating Couple Photo" className="w-full h-full object-cover rounded-full" />
                
                {/* Subtle Vinyl Groove Rings Overlay */}
                <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none"></div>
                <div className="absolute inset-8 rounded-full border border-white/15 pointer-events-none"></div>
              </motion.div>

              <div className="absolute -top-2 right-4 w-12 h-20 pointer-events-none transform rotate-12">
                <div className="w-2 h-14 bg-stone-300 rounded-full ml-auto shadow-md"></div>
              </div>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-black text-rose-200 mt-4 leading-snug tracking-tight drop-shadow-sm">
              AND SUDDENLY, ALL THE LOVE SONGS WERE ABOUT <span className="underline decoration-pink-400 text-yellow-300">you</span>
            </h3>
          </div>

          {/* REAL MP3 MUSIC PLAYER UI WIDGET */}
          <div className="w-full bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner mt-4 transform-gpu" style={{ transform: "translateZ(40px)" }}>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 bg-pink-600 rounded-xl shadow-xs">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <div className="truncate">
                  <h4 className="font-bold text-base text-white truncate">{songTitle}</h4>
                  <p className="text-xs text-pink-200 truncate">{artistName}</p>
                </div>
              </div>

              <button 
                onClick={toggleMute}
                className="text-pink-200 hover:text-white p-1.5 rounded-lg transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            {/* Interactive Progress Bar */}
            <div 
              onClick={handleSeek}
              className="w-full bg-white/20 h-2.5 rounded-full mb-2 overflow-hidden cursor-pointer"
            >
              <div 
                className="bg-gradient-to-r from-pink-400 to-rose-400 h-full rounded-full transition-all duration-150"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-[11px] text-pink-200 font-mono mb-3">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={() => {
                  if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 10);
                }}
                className="text-pink-200 hover:text-white transition-colors cursor-pointer"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center shadow-[0_6px_15px_rgba(255,64,129,0.4)] border border-white/40 cursor-pointer active:scale-95 transition-transform"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
              </button>

              <button 
                onClick={() => {
                  if (audioRef.current) audioRef.current.currentTime = Math.min(duration, currentTime + 10);
                }}
                className="text-pink-200 hover:text-white transition-colors cursor-pointer"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* CARD 2: WHITE CARD WITH 3D LINE-DRAWN CHARACTER & SIGN */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative paper-3d-card text-stone-800 rounded-3xl p-6 sm:p-8 border-2 border-pink-300 border-dashed flex flex-col justify-between text-center"
        >
          <div className="tape-top"></div>

          <div className="my-auto py-4 transform-gpu" style={{ transform: "translateZ(30px)" }}>
            <LineDrawnCharacterSign />

            <div className="mt-6">
              <p className="font-handwriting text-2xl sm:text-3xl text-stone-700">
                More than all the stars in the night sky... ✨
              </p>
            </div>
          </div>

          {/* 3D TACTILE HEART BUTTON */}
          <div className="mt-6 pt-4 border-t border-pink-200 flex flex-col items-center gap-3 transform-gpu" style={{ transform: "translateZ(40px)" }}>
            <button
              onClick={triggerHeartExplosion}
              className="btn-3d-pink inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-3.5 rounded-full border-2 border-white cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Send Extra Love ({heartCount}%)</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>

    </motion.div>
  );
}
