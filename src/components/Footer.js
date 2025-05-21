import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { trackButtonClick } from '../utils/analytics';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.338-3.369-1.338-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.026 2.748-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.745 0 .267.18.577.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
        </svg>
      )
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 5.46a8.18 8.18 0 01-2.35.64 4.1 4.1 0 001.8-2.27 8.22 8.22 0 01-2.6 1 4.11 4.11 0 00-7 3.74A11.64 11.64 0 013 4.29a4.1 4.1 0 001.27 5.49 4.1 4.1 0 01-1.86-.52v.05a4.11 4.11 0 003.29 4.03 4.09 4.09 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.4a11.62 11.62 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.3 8.3 0 0022 5.46"></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c-2.714 0-3.055.013-4.121.06-1.066.05-1.79.217-2.428.465a4.89 4.89 0 00-1.95.975 4.895 4.895 0 00-.975 1.95c-.247.637-.416 1.362-.465 2.428C2.013 8.945 2 9.286 2 12s.013 3.055.06 4.121c.05 1.066.217 1.79.465 2.428a4.89 4.89 0 00.975 1.95 4.895 4.895 0 001.95.975c.637.247 1.362.416 2.428.465 1.066.047 1.407.06 4.121.06s3.055-.013 4.121-.06c1.066-.05 1.79-.217 2.428-.465a4.89 4.89 0 001.95-.975 4.895 4.895 0 00.975-1.95c.247-.637.416-1.362.465-2.428.047-1.066.06-1.407.06-4.121s-.013-3.055-.06-4.121c-.05-1.066-.217-1.79-.465-2.428a4.89 4.89 0 00-.975-1.95 4.895 4.895 0 00-1.95-.975c-.637-.247-1.362-.416-2.428-.465C15.055 2.013 14.714 2 12 2zm0 1.8c2.67 0 2.985.01 4.04.058.974.045 1.504.207 1.856.345.466.181.8.399 1.15.748.35.35.566.684.748 1.15.137.352.3.882.344 1.856.048 1.055.058 1.37.058 4.04s-.01 2.985-.058 4.04c-.045.974-.207 1.504-.345 1.856-.181.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.352.137-.882.3-1.856.344-1.055.048-1.37.058-4.04.058s-2.985-.01-4.04-.058c-.974-.045-1.504-.207-1.856-.345-.466-.181-.8-.399-1.15-.748-.35-.35-.566-.684-.748-1.15-.137-.352-.3-.882-.344-1.856-.048-1.055-.058-1.37-.058-4.04s.01-2.985.058-4.04c.045-.974.207-1.504.345-1.856.181-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.352-.137.882-.3 1.856-.344 1.055-.048 1.37-.058 4.04-.058zm0 3.06a5.14 5.14 0 100 10.28 5.14 5.14 0 000-10.28zm0 8.476a3.336 3.336 0 110-6.672 3.336 3.336 0 010 6.672zm6.56-8.687a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-12 px-6 bg-brown dark:dark:bg-gray-800 text-cream transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.div 
            className="text-2xl md:text-3xl font-serif font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-terracotta">YoUnicorn</span> Tarot
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.name}
                href="#" 
                className="text-cream hover:text-terracotta transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &copy; {new Date().getFullYear()} YoUnicorn Tarot. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/privacy-policy" 
              className="hover:text-terracotta transition-colors"
              onClick={() => trackButtonClick('footer_privacy_policy')}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="hover:text-terracotta transition-colors"
              onClick={() => trackButtonClick('footer_terms_of_service')}
            >
              Terms of Service
            </Link>
            <button 
              className="hover:text-terracotta transition-colors"
              onClick={() => {
                trackButtonClick('footer_contact');
                // Open contact modal through global event
                const event = new CustomEvent('openModal', { detail: { type: 'contact' } });
                window.dispatchEvent(event);
              }}
            >
              Contact
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
