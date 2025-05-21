import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { config, theme } from '../utils/config';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState('');
  const recaptchaRef = useRef(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const handleRecaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    if (captchaError) setCaptchaError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Email is invalid');
      return;
    }
    
    // Validate reCAPTCHA
    if (!captchaVerified) {
      setCaptchaError('Please verify you are not a robot');
      return;
    }
    
    setError('');
    setCaptchaError('');
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setCaptchaVerified(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 px-6 bg-cream border-t border-brown border-opacity-20">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-serif uppercase mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          NEWSLETTER
        </motion.h2>
        <motion.p 
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          Sign up to receive news and promotions by email
        </motion.p>
        
        <motion.div 
          className="max-w-md mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          {isSubmitted ? (
            <motion.div 
              className="bg-green-100 text-green-800 p-4 rounded-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for subscribing to our newsletter!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex-1 mb-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                />
                {error && <p className="mt-1 text-red-500 text-xs text-left">{error}</p>}
              </div>
              
              <div className="flex justify-center mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={config.recaptcha.siteKey}
                  onChange={handleRecaptchaChange}
                />
                {captchaError && <p className="mt-1 text-red-500 text-xs">{captchaError}</p>}
              </div>
              
              <motion.button 
                type="submit" 
                className="bg-terracotta text-white px-6 py-2 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition-colors mt-2 flex justify-center items-center mx-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : "Subscribe"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;