import React from 'react';
import { motion } from 'framer-motion';

const Manifestation = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="py-16 px-6 bg-white text-center">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Would you like to manifest your dream life?
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.a 
            href="#" 
            className="inline-block bg-terracotta text-white px-8 py-3 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            GET "THE MAGICIAN" MANIFESTATION JOURNAL
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifestation;