import React from 'react';
import { motion } from 'framer-motion';
import { trackButtonClick } from '../utils/analytics';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  return (
    <section id="about" className="py-20 bg-cream dark:bg-dark-bg text-brown dark:text-white px-6 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3 text-terracotta dark:text-terracotta-dark">About Younicorn Tarot</h2>
          <div className="w-24 h-1 bg-terracotta dark:bg-terracotta-dark mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-brown-light dark:text-gray-300">Providing professional tarot guidance to illuminate your path forward</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col space-y-6 bg-white dark:bg-dark-card p-8 rounded-lg shadow-md transition-colors duration-300"
          >
            <h3 className="text-2xl font-serif mb-2 text-terracotta dark:text-terracotta-dark">Professional Tarot Reading Services</h3>
            <p className="leading-relaxed">
              With over 15 years of experience in tarot reading and spiritual guidance, Younicorn Tarot offers professional and insightful readings to help you navigate life's complexities with confidence and clarity.
            </p>
            
            <h3 className="text-2xl font-serif mb-2 text-terracotta dark:text-terracotta-dark">Our Approach</h3>
            <p className="leading-relaxed">
              We believe that tarot is a powerful tool for self-discovery and personal growth. Our readings are designed to provide practical guidance, helping you make informed decisions and understand the energies influencing your life path.
            </p>
            
            <div className="pt-4">
              <button 
                className="bg-sage hover:bg-sage-dark text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 inline-flex items-center"
                onClick={() => {
                  trackButtonClick('about_learn_more');
                  const event = new CustomEvent('openModal', { detail: { type: 'contact' } });
                  window.dispatchEvent(event);
                }}
              >
                <span>Schedule a Consultation</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white dark:bg-dark-card text-brown dark:text-white p-8 rounded-lg shadow-md border-l-4 border-terracotta dark:border-terracotta-dark transition-colors duration-300"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <h3 className="text-2xl font-serif mb-6 text-center text-terracotta dark:text-terracotta-dark">Credentials & Expertise</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Certified Tarot Master with the International Tarot Foundation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Author of "Intuitive Tarot: Finding Your Inner Wisdom"</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Featured in Spiritual Guidance Monthly and Tarot Today publications</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Over 10,000 readings conducted for clients worldwide</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-terracotta mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced training in Jungian psychology and archetypal symbolism</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;