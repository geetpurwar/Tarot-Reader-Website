import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TarotPackageSelector from './TarotPackageSelector';
import { HERO_TAROT_CARDS, MYSTICAL_BACKGROUND, TAROT_CARD_1, TAROT_CARD_2, TAROT_CARD_3 } from '../utils/ImagesModule';
import './TarotServices.css';

const TarotServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Hero image for the section
  const heroImage = HERO_TAROT_CARDS;
  
  // Background image for the modal
  const modalBgImage = MYSTICAL_BACKGROUND;

  // Service data
  const services = [
    {
      id: 1,
      title: "Tarot is not about revealing a predetermined destiny",
      description: "(news flash: it doesn't exist). It's about illuminating possibilities and helping you make confident decisions.",
      image: TAROT_CARD_1,
      price: "$75",
      fullDescription: "This personalized tarot reading focuses on illuminating possibilities in your life path. Rather than predicting a fixed future, we explore various paths available to you and provide guidance to help you make confident decisions. Session includes a comprehensive 10-card Celtic Cross spread with detailed interpretation and practical action steps.",
      duration: "60 minutes",
      benefits: [
        "Clear insight into your current situation",
        "Exploration of potential paths and outcomes",
        "Practical guidance for decision-making",
        "Follow-up email with reading summary"
      ]
    },
    {
      id: 2,
      title: "It's not about 'fortune telling' or meddling with other people's choices",
      description: "Tarot is a tool for confident decision-making, clear communication, and timely, decisive action.",
      image: TAROT_CARD_2,
      price: "$95",
      fullDescription: "This specialized reading focuses on empowering you to make your own choices with clarity and confidence. We'll use tarot as a tool for exploring your inner wisdom and developing clear communication strategies. The session includes a personalized spread designed to highlight areas where decisive action is needed.",
      duration: "75 minutes",
      benefits: [
        "Develop strategies for confident decision-making",
        "Improve communication in challenging situations",
        "Identify areas requiring decisive action",
        "Create a personal action plan"
      ]
    },
    {
      id: 3,
      title: "And it's not necessarily about gloomy omens or impending doom",
      description: "(most types of doom are delightfully avoidable). Ultimately, it's all about clarity — shining a light through the mental fog.",
      image: TAROT_CARD_3,
      price: "$85",
      fullDescription: "This uplifting tarot session focuses on bringing clarity to confusing situations and dispersing mental fog. Rather than dwelling on negative outcomes, we'll explore positive possibilities and actionable steps to avoid unwanted situations. The reading includes a customized spread designed to illuminate your path forward with optimism and practical wisdom.",
      duration: "60 minutes",
      benefits: [
        "Clear perspective on confusing situations",
        "Focus on positive possibilities and outcomes",
        "Strategies to avoid unwanted situations",
        "Actionable steps for moving forward"
      ]
    }
  ];

  // Open modal with service details
  const openModal = (serviceId) => {
    setSelectedService(services.find(service => service.id === serviceId));
  };

  // Close modal
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-20 px-6 bg-cream">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-16 shadow-xl max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-midnight opacity-60"></div>
        <img src={heroImage} alt="Tarot Services" className="w-full h-64 md:h-80 object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif mb-4 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-terracotta">Tarot Services</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover clarity, insight, and guidance through our professional tarot reading services
          </motion.p>
        </div>
      </div>
      
      <div className="container mx-auto">
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-6 flex justify-center">
                  <div className="w-40 h-40 overflow-hidden rounded-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-center mb-3">{service.title}</h3>
                
                <p className="text-center text-brown mb-6 flex-grow text-sm">
                  {service.description}
                </p>
                
                <div className="text-center mt-4 flex items-center justify-center space-x-4">
                  <span className="text-2xl font-serif text-terracotta">{service.price}</span>
                  <motion.button
                    onClick={() => openModal(service.id)}
                    className="bg-terracotta text-white px-6 py-2 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors shadow-md hover:shadow-lg pulse-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full modal-content relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div
                className="absolute top-0 left-0 w-full h-32 z-0"
                style={{
                  backgroundImage: `url(${modalBgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.3
                }}
              ></div>
              <div className="p-6 md:p-8 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif text-brown">{selectedService.title}</h3>
                  <button 
                    className="text-brown hover:text-terracotta"
                    onClick={closeModal}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                  <div className="service-image-container">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.title} 
                      className="w-full h-56 md:h-72 object-cover service-image"
                    />
                  </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="mb-4">
                      <span className="text-xl font-serif text-terracotta block mb-2">{selectedService.price}</span>
                      <span className="text-sm text-gray-600 block mb-4">Duration: {selectedService.duration}</span>
                      <p className="text-brown mb-6">
                        {selectedService.fullDescription}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-serif text-lg mb-2">Benefits:</h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start benefit-item">
                            <svg className="w-5 h-5 text-terracotta mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h4 className="font-serif text-lg mb-4 text-center">Select Your Package</h4>
                      <TarotPackageSelector />
                      <p className="mt-4 text-sm text-gray-600 text-center">*All readings are confidential and delivered via email</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TarotServices;