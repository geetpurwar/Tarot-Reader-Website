import React from 'react';
import { motion } from 'framer-motion';
import { MYSTICAL_SYMBOLS } from '../utils/ImagesModule';

const MysticalSymbols = () => {
  // Use the centralized mystical symbols from ImagesModule
  const symbolUrls = MYSTICAL_SYMBOLS;

  return (
    <section className="py-12 px-6 bg-cream overflow-hidden">
      <div className="flex justify-between symbols-row">
        {symbolUrls.map((url, index) => (
          <motion.img 
            key={index}
            src={url} 
            alt={`Mystical symbol ${index + 1}`} 
            className="w-12 h-12 opacity-70"
            animate={{ 
              y: [-5, 5, -5],
              rotate: [0, index % 2 === 0 ? 5 : -5, 0]
            }}
            transition={{ 
              duration: 3 + index * 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MysticalSymbols;