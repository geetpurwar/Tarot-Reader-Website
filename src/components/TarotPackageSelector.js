import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TarotPackageSelector = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Package options
  const packages = [
    {
      id: 'personal-24',
      name: 'Personal Reading Delivered in 24 Hours',
      price: 'US$275.00',
      value: 275.00,
      stripeLink: 'https://buy.stripe.com/your-link-for-24h'
    },
    {
      id: 'personal-72',
      name: 'Personal Reading Delivered in 72 Hours',
      price: 'US$200.00',
      value: 200.00,
      stripeLink: 'https://buy.stripe.com/your-link-for-72h'
    },
    {
      id: 'add-1',
      name: '1 Additional question',
      price: 'US$30.00',
      value: 30.00,
      stripeLink: 'https://buy.stripe.com/your-link-for-1q'
    },
    {
      id: 'add-2',
      name: '2 additional questions',
      price: 'US$60.00',
      value: 60.00,
      stripeLink: 'https://buy.stripe.com/your-link-for-2q'
    },
    {
      id: 'add-3',
      name: '3 additional questions',
      price: 'US$90.00',
      value: 90.00,
      stripeLink: 'https://buy.stripe.com/your-link-for-3q'
    }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (pkg) => {
    setSelectedPackage(pkg);
    setIsOpen(false);
    if (onSelect) onSelect(pkg);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        {/* Selected display / dropdown trigger */}
        <div 
          className="bg-gray-700 bg-opacity-90 p-4 rounded-lg text-white cursor-pointer shadow-lg border border-gray-600 flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            <div className="mr-3">
              {selectedPackage ? 
                <motion.div 
                  initial={{ scale: 0.8 }} 
                  animate={{ scale: 1 }}
                  className="text-terracotta"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            </div>
            <div>
              <span className="font-serif text-lg">
                {selectedPackage ? `${selectedPackage.name} for ${selectedPackage.price}` : 'Select Package'}
              </span>
            </div>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Dropdown options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 mt-2 bg-gray-700 bg-opacity-95 rounded-lg shadow-xl z-20 border border-gray-600 overflow-hidden"
            >
              <ul>
                {packages.map((pkg) => (
                  <motion.li 
                    key={pkg.id}
                    whileHover={{ backgroundColor: 'rgba(217, 110, 72, 0.3)' }}
                    className={`p-4 cursor-pointer border-b border-gray-600 last:border-b-0 text-white ${selectedPackage?.id === pkg.id ? 'bg-terracotta bg-opacity-20' : ''}`}
                    onClick={() => handleSelect(pkg)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-serif">{pkg.name}</span>
                      <span className="font-bold text-terracotta">{pkg.price}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Buy Now Button - Only visible if a package is selected */}
      {selectedPackage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-4"
        >
          <a 
            href={selectedPackage.stripeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full bg-terracotta text-white px-6 py-3 rounded-sm font-sans text-center text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors shadow-md hover:shadow-lg pulse-button"
          >
            Buy Now - {selectedPackage.price}
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default TarotPackageSelector;