import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import ScrapbookFrame from './components/ScrapbookFrame';
import LandingScreen from './components/screens/LandingScreen';
import AskScreen from './components/screens/AskScreen';
import ErrorScreen from './components/screens/ErrorScreen';
import GiftMenuScreen from './components/screens/GiftMenuScreen';
import LoveLetterScreen from './components/screens/LoveLetterScreen';
import BouquetBuilderScreen from './components/screens/BouquetBuilderScreen';
import MusicCardScreen from './components/screens/MusicCardScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [completedGifts, setCompletedGifts] = useState({
    letter: false,
    bouquet: false,
    music: false
  });

  const handleGiftSelect = (giftId) => {
    setCompletedGifts(prev => ({ ...prev, [giftId]: true }));
    setCurrentScreen(giftId);
  };

  return (
    <ScrapbookFrame>
      <AnimatePresence mode="wait">
        {currentScreen === 'landing' && (
          <LandingScreen 
            key="landing" 
            onContinue={() => setCurrentScreen('ask')} 
          />
        )}

        {currentScreen === 'ask' && (
          <AskScreen 
            key="ask" 
            onYes={() => setCurrentScreen('gift_menu')} 
            onNo={() => setCurrentScreen('error')} 
          />
        )}

        {currentScreen === 'error' && (
          <ErrorScreen 
            key="error" 
            onTryAgain={() => setCurrentScreen('ask')} 
          />
        )}

        {currentScreen === 'gift_menu' && (
          <GiftMenuScreen 
            key="gift_menu" 
            onSelectGift={handleGiftSelect}
            completedGifts={completedGifts}
          />
        )}

        {currentScreen === 'letter' && (
          <LoveLetterScreen 
            key="letter" 
            onBack={() => setCurrentScreen('gift_menu')} 
          />
        )}

        {currentScreen === 'bouquet' && (
          <BouquetBuilderScreen 
            key="bouquet" 
            onBack={() => setCurrentScreen('gift_menu')} 
          />
        )}

        {currentScreen === 'music' && (
          <MusicCardScreen 
            key="music" 
            onBack={() => setCurrentScreen('gift_menu')} 
          />
        )}
      </AnimatePresence>
    </ScrapbookFrame>
  );
}
