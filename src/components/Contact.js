import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_SYMBOL } from '../utils/ImagesModule';
import ReCAPTCHA from 'react-google-recaptcha';
import { config, theme } from '../utils/config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
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
  
  const handleRecaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    if (formErrors.recaptcha) {
      setFormErrors({ ...formErrors, recaptcha: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          category: '',
          message: ''
        });
        setCaptchaVerified(false);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-cream dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Send us a <span className="text-terracotta">message</span></h2>
            <p className="mb-6">
              Your success is our mission. As business advisors, we offer expert guidance, staking our professional reputation for impact and profitability.
            </p>
            
            <div className="flex items-center justify-center mt-12">
              <motion.img 
                src={CONTACT_SYMBOL} 
                alt="Magical symbol" 
                className="w-32 h-32 object-contain"
                animate={{ 
                  rotateZ: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent`}
                />
                {formErrors.name && <p className="mt-1 text-red-500 text-xs">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent`}
                />
                {formErrors.email && <p className="mt-1 text-red-500 text-xs">{formErrors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-brown mb-1">Category</label>
                <select 
                  id="category" 
                  name="category" 
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="tarot">Tarot Reading</option>
                  <option value="astrology">Astrology</option>
                  <option value="coaching">Spiritual Coaching</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Your message" 
                  className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent`}
                ></textarea>
                {formErrors.message && <p className="mt-1 text-red-500 text-xs">{formErrors.message}</p>}
              </div>
              
              <div className="flex justify-center my-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={config.recaptcha.siteKey}
                  onChange={handleRecaptchaChange}
                />
                {formErrors.recaptcha && <p className="mt-1 text-red-500 text-xs">{formErrors.recaptcha}</p>}
              </div>
              
              {isSubmitted && (
                <motion.div 
                  className="bg-green-100 text-green-800 p-4 rounded-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll get back to you shortly.
                </motion.div>
              )}
              
              <motion.button 
                type="submit" 
                className="w-full bg-terracotta text-white px-6 py-3 rounded-md font-sans text-sm uppercase tracking-wider hover:bg-terracotta-dark transition-colors duration-300 flex justify-center items-center"
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
                    Sending...
                  </>
                ) : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;