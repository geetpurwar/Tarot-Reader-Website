import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';

const TarotInfo = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('service');

  // Service packages data with enhanced details
  const services = [
    {
      id: 1,
      title: "Personal Tarot Reading",
      description: "Illuminate possibilities and make confident decisions with a personalized tarot reading session tailored to your specific questions and concerns.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1627764574958-fb54cd7d7448?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
      features: [
        "30-minute personalized reading session",
        "Focus on your specific questions",
        "Detailed interpretation of each card",
        "Actionable insights for decision-making",
        "Follow-up email summary of your reading"
      ]
    },
    {
      id: 2,
      title: "Relationship Guidance",
      description: "Gain clarity on relationships with a focused tarot reading that helps you understand patterns, challenges, and opportunities in your connections with others.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1620049045606-593e4551ef4a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "45-minute in-depth relationship reading",
        "Analysis of relationship dynamics",
        "Guidance for improving communication",
        "Insights into patterns and potential paths",
        "Personalized advice for moving forward"
      ]
    },
    {
      id: 3,
      title: "Future Path Reading",
      description: "Shine a light through the mental fog with a comprehensive tarot reading focused on your life path, career trajectory, and upcoming opportunities.",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1624274579623-18121fc8126e?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "60-minute comprehensive reading",
        "Career and life path analysis",
        "Identification of upcoming opportunities",
        "Guidance on potential challenges",
        "Strategic recommendations for your journey",
        "30-day follow-up check-in"
      ]
    }
  ];

  const openModal = (service, type = 'service') => {
    if (type === 'service') {
      setSelectedService(service);
    }
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="tarot-info" className="py-20 px-6 bg-cream dark:bg-dark-bg relative transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-brown dark:text-white transition-colors duration-300">Our Tarot Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={index}
              className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-md flex flex-col h-full hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-full overflow-hidden w-32 h-32 border-4 border-terracotta">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-center mb-4 text-brown dark:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-center text-brown dark:text-gray-300 mb-6 flex-grow transition-colors duration-300">
                {service.description}
              </p>
              <div className="text-center mt-4">
                <p className="text-2xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">${service.price}</p>
                <button 
                  className="bg-terracotta hover:bg-terracotta-dark text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
                  onClick={() => openModal(service)}
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={closeModal}
        modalType={modalType}
      />
    </section>
  );
};

export default TarotInfo;