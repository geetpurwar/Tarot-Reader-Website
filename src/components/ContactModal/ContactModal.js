import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { config } from '../../utils/config';
import { trackButtonClick } from '../../utils/analytics';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    // Clear error when user starts typing
    if (formErrors[id]) {
      setFormErrors({ ...formErrors, [id]: '' });
    }
  };
  
  const handleRecaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    if (formErrors.recaptcha) {
      setFormErrors({ ...formErrors, recaptcha: '' });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (!captchaVerified) errors.recaptcha = 'Please verify you are not a robot';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setCaptchaVerified(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        
        // Track the form submission
        trackButtonClick('contact_form_submit');
        
        // Close the modal after a successful submission (after showing the success message)
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      }, 1500);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  console.log('ContactModal rendering, isOpen:', isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          >
            <motion.div 
              className="bg-cream dark:bg-dark-card rounded-lg p-8 max-w-md w-full mx-4 z-50 relative max-h-[90vh] overflow-y-auto transition-colors duration-300"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-brown dark:text-white hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mt-2">
                <h3 className="text-2xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">Contact Us</h3>
                
                <p className="mb-4 text-brown dark:text-gray-300 transition-colors duration-300">
                  Have questions or looking to schedule a reading? We'd love to hear from you! Fill out the form below, and we'll get back to you soon.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-md mb-4 transition-colors duration-300">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                ) : (
                  <form>
                    <div className="mb-4">
                      <label className="block text-brown dark:text-white text-sm font-bold mb-2 transition-colors duration-300" htmlFor="name">
                        Name
                      </label>
                      <input 
                        className={`shadow appearance-none border ${formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded w-full py-2 px-3 text-brown dark:text-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300`}
                        id="name" 
                        type="text" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && <p className="mt-1 text-red-500 text-xs">{formErrors.name}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-brown dark:text-white text-sm font-bold mb-2 transition-colors duration-300" htmlFor="email">
                        Email
                      </label>
                      <input 
                        className={`shadow appearance-none border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-brown leading-tight focus:outline-none focus:shadow-outline`}
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && <p className="mt-1 text-red-500 text-xs">{formErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-brown text-sm font-bold mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea 
                        className={`shadow appearance-none border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-brown leading-tight focus:outline-none focus:shadow-outline h-32`}
                        id="message" 
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {formErrors.message && <p className="mt-1 text-red-500 text-xs">{formErrors.message}</p>}
                    </div>
                    
                    <div className="mb-4 flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={config.recaptcha.siteKey}
                        onChange={handleRecaptchaChange}
                      />
                      {formErrors.recaptcha && <p className="mt-1 text-red-500 text-xs">{formErrors.recaptcha}</p>}
                    </div>
                    
                    <button 
                      type="button"
                      onClick={handleSubmit}
                      className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;