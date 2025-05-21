import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ServiceModal from './ServiceModal';
import { navigation, siteInfo } from '../utils/config';
import { trackButtonClick } from '../utils/analytics';
import { useTheme } from '../utils/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  // Function for smooth scrolling to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Track navigation click
      trackButtonClick(`nav_${sectionId}`, 'navigation');
      
      // Get the height of the navbar to use as offset
      const navbarHeight = document.querySelector('nav').offsetHeight;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Calculate the offset position
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
      
      // Smooth scroll to element with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('contact');
  const [activeSection, setActiveSection] = useState('');
  
  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.mainLinks
        .filter(link => link.path.startsWith('#') && !link.isExternal)
        .map(link => link.path.substring(1));
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Listen for custom events to open modals
  useEffect(() => {
    const handleOpenModal = (event) => {
      const { type } = event.detail;
      setModalType(type);
      setIsModalOpen(true);
    };
    
    window.addEventListener('openModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openModal', handleOpenModal);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = (type) => {
    // Track modal opening
    trackButtonClick(`open_${type}_modal`, 'modal');
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-cream dark:bg-gray-800 py-4 px-6 md:px-12 flex justify-between items-center shadow-md sticky top-0 z-50 transition-colors duration-300 border-b border-terracotta-dark/20 dark:border-terracotta-dark/10">
      <motion.div 
        className="text-2xl md:text-3xl font-serif font-semibold text-brown dark:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="flex items-center space-x-2" onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <Logo />
        </a>
      </motion.div>
      
      <div className="hidden md:flex space-x-10 font-sans text-base font-medium tracking-wide text-brown dark:text-white transition-colors duration-300">
        {navigation.mainLinks.map((link, index) => {
          // Determine if this is a modal link, external link, or internal navigation
          if (link.path.startsWith('#') && !link.isExternal) {
            // Internal anchor link - use smooth scroll
            return (
              <motion.button
                key={index}
                className={`relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-2 px-3 group ${activeSection === link.path.substring(1) ? 'text-terracotta dark:text-terracotta-dark font-semibold' : ''}`}
                whileHover={{ y: -1 }}
                onClick={() => scrollToSection(link.path.substring(1))}
              >
                {link.name}
                <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 ${activeSection === link.path.substring(1) ? 'w-full' : 'group-hover:w-full'}`}></span>
              </motion.button>
            );
          } else if (link.isModal) {
            // Modal trigger
            return (
              <motion.button
                key={index}
                className="relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group"
                whileHover={{ y: -2 }}
                onClick={() => openModal(link.modalType || 'contact')}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            );
          } else if (link.isExternal) {
            // External link
            return (
              <motion.a
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group"
                whileHover={{ y: -2 }}
                onClick={() => trackButtonClick(`nav_${link.name.toLowerCase()}`, 'navigation')}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            );
          } else {
            // Internal route
            return (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <Link 
                  to={link.path}
                  className="relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group"
                  onClick={() => trackButtonClick(`nav_${link.name.toLowerCase()}`, 'navigation')}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            );
          }
        })}
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            toggleDarkMode();
            trackButtonClick('dark_mode_toggle');
          }}
          className="p-2.5 rounded-md bg-cream dark:bg-gray-700 text-brown dark:text-white border border-brown/20 dark:border-gray-600 transition-all duration-300 shadow-sm hover:shadow"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </motion.button>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => openModal('contact')}
            className="bg-terracotta dark:bg-terracotta-dark text-white px-6 py-2.5 rounded-md font-sans text-base font-medium tracking-wide hover:bg-opacity-90 transition-all duration-300 shadow-sm hover:shadow"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-brown ml-4"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-midnight bg-opacity-95 z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={toggleMobileMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center justify-center space-y-8 font-serif text-2xl text-white">
            {navigation.mainLinks.map((link, index) => {
              // Determine if this is a modal link, external link, or internal navigation
              if (link.path.startsWith('#') && !link.isExternal) {
                // Internal anchor link - use smooth scroll
                return (
                  <motion.button
                    key={index}
                    className={`relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group ${activeSection === link.path.substring(1) ? 'text-terracotta dark:text-terracotta-dark' : ''}`}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      toggleMobileMenu();
                      scrollToSection(link.path.substring(1));
                    }}
                  >
                    {link.name}
                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 ${activeSection === link.path.substring(1) ? 'w-full' : 'group-hover:w-full'}`}></span>
                  </motion.button>
                );
              } else if (link.isModal) {
                // Modal trigger
                return (
                  <motion.button
                    key={index}
                    className="relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      toggleMobileMenu();
                      openModal(link.modalType || 'contact');
                    }}
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 group-hover:w-full"></span>
                  </motion.button>
                );
              } else if (link.isExternal) {
                // External link
                return (
                  <motion.a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      toggleMobileMenu();
                      trackButtonClick(`nav_${link.name.toLowerCase()}`, 'navigation');
                    }}
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                );
              } else {
                // Internal route
                return (
                  <motion.div key={index} whileHover={{ scale: 1.1 }}>
                    <Link 
                      to={link.path}
                      className="relative hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300 py-1 px-1 group"
                      onClick={() => {
                        toggleMobileMenu();
                        trackButtonClick(`nav_${link.name.toLowerCase()}`, 'navigation');
                      }}
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-terracotta dark:bg-terracotta-dark transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                );
              }
            })}
            <motion.button 
              className="mt-8 bg-terracotta text-white px-8 py-3 rounded-md font-sans text-lg uppercase tracking-wider hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                toggleMobileMenu();
                openModal('contact');
              }}
            >
              Contact us
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Modal */}
      <ServiceModal 
        service={null} 
        isOpen={isModalOpen} 
        onClose={closeModal}
        modalType={modalType}
      />
    </nav>
  );
};

export default Navbar;
