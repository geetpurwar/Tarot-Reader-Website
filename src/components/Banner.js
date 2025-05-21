import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section 
      className="py-24 px-6 bg-cover bg-center relative"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1620049045606-593e4551ef4a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-midnight bg-opacity-60"></div>
      <div className="container mx-auto relative z-10 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-serif mb-6 text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Readings Wherever You Go
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Discover what energies you have in store reveal for your zodiac sign! Younicorn Tarot offers tarot readings 
          designed to help you navigate dive deeper into energies in love, career, and personal growth.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://open.spotify.com', '_blank');
            }}
          >
            <span className="mr-2">Click Here For Spotify</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://podcasts.apple.com', '_blank');
            }}
          >
            <span className="mr-2">Click Here for Apple Podcasts</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.337 0 4.443 1.86 5.527 3.732.72 1.356.96 3.096.733 4.8-.36 2.04-2.293 4.2-4.4 4.8-1.8.517-3.6-.12-4.9-1.2-.84-.72-1.44-1.2-2.4-1.2-.48 0-.84.12-1.2.36-.12.12-.24.12-.36.12-.48 0-.6-.36-.6-.84 0-1.32.84-2.04 1.92-2.64 1.32-.72 2.76-.84 4.2-.84 1.68 0 3.48 1.08 3.48 2.76 0 .12 0 .12.12.12.36 0 .36-1.2.36-1.44 0-1.92-.6-3.72-1.92-5.04-1.2-1.2-2.76-1.8-4.56-1.8-1.2 0-2.4.36-3.48.84-.12.12-.36.12-.48.12-.24 0-.6-.24-.6-.6 0-.6.84-1.44 1.44-1.8 1.8-.84 3.72-1.2 5.64-1.2z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
