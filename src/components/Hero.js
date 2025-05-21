import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MAIN_HERO_BG } from '../utils/ImagesModule';

const Hero = () => {
  useEffect(() => {
    // Set the background image
    const heroSection = document.querySelector('.hero-pattern');
    if (heroSection) {
      heroSection.style.backgroundImage = `url(${MAIN_HERO_BG})`;
    }
    
    // Parallax effect for the hero section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-pattern relative min-h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-midnight bg-opacity-60"></div>
      <div className="container mx-auto px-6 z-10 py-20 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-serif font-light mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The <span className="text-terracotta font-medium">CARDS</span> tell a story. But you write the ending.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          If you're looking for a crystal ball to spell out the precise coordinates of where you're going, and when you'll get there – good luck. And call me when you find it.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a 
            href="#tarot-info" 
            className="bg-terracotta text-white px-8 py-3 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
          <motion.a 
            href="#faq" 
            className="border border-white text-white px-8 py-3 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-white hover:bg-opacity-10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
