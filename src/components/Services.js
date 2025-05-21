import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: custom * 0.2
      }
    })
  };

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Want to work with me?<br /><span className="text-terracotta">You can...</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarot Reading Service */}
          <motion.div 
            className="tarot-card bg-white rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={0}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <img src="https://images.unsplash.com/photo-1572858683122-8df840bfdb9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80" alt="Tarot reading" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">Join My Parlroom</h3>
              <p className="text-brown mb-4">
                Get personal tarot readings and guidance to navigate life's complexities with confidence and clarity.
              </p>
              <motion.a 
                href="#" 
                className="inline-block bg-terracotta text-white px-6 py-2 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          
          {/* Books Service */}
          <motion.div 
            className="tarot-card bg-white rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={1}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <img src="https://images.unsplash.com/photo-1589996448606-27d84f76aed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300&q=80" alt="Tarot books" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">Get My Books</h3>
              <p className="text-brown mb-4">
                Explore my collection of tarot and astrology books designed to enlighten and empower your spiritual journey.
              </p>
              <motion.a 
                href="#" 
                className="inline-block bg-terracotta text-white px-6 py-2 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Books
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;