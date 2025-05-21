import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 180 },
    visible: (custom) => ({
      opacity: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8,
        delay: custom * 0.2
      }
    }),
    flipped: {
      rotateY: 180,
      transition: { duration: 0.5 }
    }
  };

  const cards = [
    {
      id: 1,
      name: "The Magician",
      meaning: "Manifestation, resourcefulness, power"
    },
    {
      id: 2,
      name: "The High Priestess",
      meaning: "Intuition, unconscious, inner voice"
    },
    {
      id: 3,
      name: "The Empress",
      meaning: "Nurturing, abundance, fertility"
    }
  ];

  const handleCardClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardId);
    }
  };

  return (
    <section id="interactive-tarot" className="py-20 px-6 bg-midnight text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Experience a <span className="text-terracotta">Daily Card</span>
        </motion.h2>
        <motion.p 
          className="mb-12 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Each card offers a unique perspective for your day ahead. Click a card to reveal its meaning.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div key={card.id} className="relative">
              <motion.div
                className={`w-32 h-48 rounded-lg shadow-lg cursor-pointer perspective`}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(card.id)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="absolute w-full h-full backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: selectedCard === card.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.6s'
                  }}
                >
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-terracotta to-brown rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1635864803358-8162819d2fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="Card back" 
                      className="w-16 h-16 opacity-70"
                    />
                  </div>
                </div>
                <div 
                  className="absolute w-full h-full backface-hidden bg-white text-brown rounded-lg p-4 flex flex-col items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: selectedCard === card.id ? 'rotateY(0deg)' : 'rotateY(-180deg)',
                    transition: 'transform 0.6s'
                  }}
                >
                  <h4 className="font-serif font-bold text-lg mb-2">{card.name}</h4>
                  <div className="w-16 h-16 bg-terracotta rounded-full mb-2"></div>
                  <p className="text-xs">{card.meaning}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveTarot;