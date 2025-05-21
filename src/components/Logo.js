import React from 'react';
import { LOGO_URL } from '../utils/ImagesModule';
import { useTheme } from '../utils/ThemeContext';

const Logo = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className="flex items-center">
      <img 
        src={LOGO_URL} 
        alt="Younicorn Tarot Logo" 
        className={`h-16 w-auto transition-all duration-300 ${darkMode ? 'invert brightness-200' : ''}`} 
      />
    </div>
  );
};

export default Logo;