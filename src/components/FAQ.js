import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const faqItems = [
    {
      id: 1,
      question: "What types of readings does Empress offer?",
      answer: "Empress offers a variety of tarot readings including career guidance, relationship insights, spiritual path exploration, and general life direction readings. Each reading is personalized to your specific questions and needs."
    },
    {
      id: 2,
      question: "How do online tarot readings work?",
      answer: "Online tarot readings are conducted through video calls or written reports. For video calls, you'll receive a link to connect at your scheduled time. For written readings, you'll submit your questions and receive a detailed PDF report with card interpretations and guidance within 48 hours."
    },
    {
      id: 3,
      question: "What should I prepare before a reading?",
      answer: "To get the most out of your reading, take some time to reflect on what you want guidance on. Clear, focused questions tend to yield the most insightful readings. It's also helpful to find a quiet space where you won't be interrupted during your session."
    },
    {
      id: 4,
      question: "Do you offer astrology chart readings?",
      answer: "Yes, we offer comprehensive natal chart readings, transit forecasts, and compatibility charts. For these readings, you'll need to provide your exact birth date, time, and location for the most accurate interpretation."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-center mb-4 text-brown dark:text-white transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Frequently Ask <span className="text-terracotta">Questions</span>
        </motion.h2>
        <motion.p 
          className="text-center mb-12 max-w-2xl mx-auto text-brown dark:text-gray-300 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Your business is our mission. As business advisors, we offer expert guidance, staking our professional reputation for impact and profitability.
        </motion.p>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="border-b border-gray-200 dark:border-gray-700 py-4 transition-colors duration-300"
              initial="hidden"
              animate="visible"
              variants={questionVariants}
              custom={index}
            >
              <button 
                className="flex justify-between items-center w-full text-left font-serif text-lg text-brown dark:text-white hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300"
                onClick={() => toggleQuestion(item.id)}
              >
                <span>{item.question}</span>
                <motion.svg 
                  className="w-5 h-5 transition-transform duration-300"
                  animate={{ rotate: activeQuestion === item.id ? 180 : 0 }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeQuestion === item.id && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                    className="overflow-hidden"
                  >
                    <div className="py-4">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;