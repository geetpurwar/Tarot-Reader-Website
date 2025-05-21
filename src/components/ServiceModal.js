import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { trackButtonClick, trackBeginCheckout, trackPurchase } from '../utils/analytics';
import ReCAPTCHA from 'react-google-recaptcha';
import { config, theme } from '../utils/config';

// Initialize Stripe with key from environment variables and proper options
const stripePromise = loadStripe(config.stripe.publishableKey, {
  stripeAccount: undefined,
  apiVersion: undefined,
  locale: 'auto',
  // Explicitly set HTTPS requirement based on environment
  betas: undefined
});

const ContactForm = ({ onClose }) => {
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
  
  return (
    <div className="mt-2">
      <h3 className="text-2xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">Contact Us</h3>
      
      <p className="mb-4 text-brown dark:text-gray-300 transition-colors duration-300">Have questions or looking to schedule a reading? We'd love to hear from you! Fill out the form below, and we'll get back to you soon.</p>
      
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
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is Google's test key - replace with your actual key in production
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
  );
};

const NewsletterForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState('');
  const recaptchaRef = useRef(null);
  
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };
  
  const handleRecaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    if (captchaError) setCaptchaError('');
  };
  
  const handleSubmit = () => {
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
      
      // Track the form submission
      trackButtonClick('newsletter_subscribe');
    }, 1500);
  };
  
  return (
    <div className="mt-6">
      <h3 className="text-xl font-serif mb-4">Subscribe to Our Newsletter</h3>
      <p className="mb-4">Stay updated with our latest tarot insights and special offers.</p>
      
      {isSubmitted ? (
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-md mb-4 transition-colors duration-300">
          Thank you for subscribing to our newsletter!
        </div>
      ) : (
        <form>
          <div className="mb-4">
            <label className="block text-brown text-sm font-bold mb-2" htmlFor="newsletter-email">
              Email
            </label>
            <input 
              className={`shadow appearance-none border ${error ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-brown leading-tight focus:outline-none focus:shadow-outline`}
              id="newsletter-email" 
              type="email" 
              placeholder="your@email.com"
              value={email}
              onChange={handleChange}
            />
            {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
          </div>
          
          <div className="mb-4 flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is Google's test key - replace with your actual key in production
              onChange={handleRecaptchaChange}
            />
            {captchaError && <p className="mt-1 text-red-500 text-xs">{captchaError}</p>}
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
                Subscribing...
              </>
            ) : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
};

const PodcastLinks = () => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">Listen to Our Podcast</h3>
      <p className="mb-6 text-brown dark:text-gray-300 transition-colors duration-300">Discover what energies you have in store reveal for your zodiac sign! Younicorn Tarot offers tarot readings designed to help you navigate dive deeper into energies in love, career, and personal growth.</p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a 
          href="#" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            alert('Redirecting to Spotify');
          }}
        >
          <span className="mr-2">Listen on Spotify</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
        <a 
          href="#" 
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            alert('Redirecting to Apple Podcasts');
          }}
        >
          <span className="mr-2">Listen on Apple Podcasts</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.337 0 4.443 1.86 5.527 3.732.72 1.356.96 3.096.733 4.8-.36 2.04-2.293 4.2-4.4 4.8-1.8.517-3.6-.12-4.9-1.2-.84-.72-1.44-1.2-2.4-1.2-.48 0-.84.12-1.2.36-.12.12-.24.12-.36.12-.48 0-.6-.36-.6-.84 0-1.32.84-2.04 1.92-2.64 1.32-.72 2.76-.84 4.2-.84 1.68 0 3.48 1.08 3.48 2.76 0 .12 0 .12.12.12.36 0 .36-1.2.36-1.44 0-1.92-.6-3.72-1.92-5.04-1.2-1.2-2.76-1.8-4.56-1.8-1.2 0-2.4.36-3.48.84-.12.12-.36.12-.48.12-.24 0-.6-.24-.6-.6 0-.6.84-1.44 1.44-1.8 1.8-.84 3.72-1.2 5.64-1.2zm-.24 7.2c-1.44 0-2.64.6-3.6 1.68-.12.12-.12.24-.12.36 0 .12.12.24.24.24.12 0 .24-.12.36-.12.96-.6 1.8-.84 2.88-.84 1.2 0 2.28.6 3.12 1.32.12.12.24.12.36.12.12 0 .24-.12.24-.24 0-.12-.12-.24-.12-.36-.84-1.32-1.92-2.16-3.36-2.16zm.12 2.04c-.6 0-1.2.36-1.44.96-.12.24-.24.6-.24.96 0 .36.12.72.36 1.08.36.36.72.6 1.2.6.6 0 1.2-.36 1.44-.96.12-.24.24-.6.24-.96 0-.36-.12-.72-.36-1.08-.36-.36-.72-.6-1.2-.6z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const CheckoutForm = ({ service, packageType, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setErrorMessage('');

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      setErrorMessage('Payment system is loading. Please try again.');
      setIsProcessing(false);
      return;
    }

    // Track checkout initiation
    trackBeginCheckout(service);

    // In a real implementation, you would create a payment intent on your server
    // and pass the client secret to the frontend
    let price = service.price;
    if (packageType === 'premium') {
      price = service.premiumPrice || (service.price * 1.5);
    } else if (packageType === 'deluxe') {
      price = service.deluxePrice || (service.price * 2);
    }
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate a random order ID
      const orderId = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      
      // Track successful purchase
      trackPurchase(orderId, price, [{
        id: service.id,
        title: `${packageType.charAt(0).toUpperCase() + packageType.slice(1)} ${service.title}`,
        price: price
      }]);
      
      // Close modal
      onClose();
      
      // Redirect to thank you page
      window.location.href = `/thank-you?order_id=${orderId}`;
    }, 1500);
  };

  const packagePrice = {
    standard: service.price,
    premium: service.premiumPrice || (service.price * 1.5),
    deluxe: service.deluxePrice || (service.price * 2)
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-6">
        <label className="block text-brown text-sm font-bold mb-2">
          Card Details
        </label>
        <div className="p-3 border border-gray-300 rounded bg-white">
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#3d2314',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
            disabled={isProcessing}
          />
        </div>
      </div>
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 disabled:opacity-50"
        onClick={() => trackButtonClick('payment_submit')}
      >
        {isProcessing ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Pay $${packagePrice[packageType].toFixed(2)}`
        )}
      </button>
    </form>
  );
};

const ServiceModal = ({ service, isOpen, onClose, modalType = 'service' }) => {
  console.log('ServiceModal rendered with modalType:', modalType, 'isOpen:', isOpen, 'service:', service ? 'exists' : 'null');
  const [packageType, setPackageType] = useState('standard');
  
  // Track modal interactions
  const handleModalClose = () => {
    trackButtonClick('modal_close', modalType + '_modal');
    onClose();
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
  
  const renderModalContent = () => {
    console.log('Rendering modal content for type:', modalType);
    switch(modalType) {
      case 'contact':
        console.log('Rendering ContactForm component');
        return <ContactForm onClose={onClose} />;
      case 'newsletter':
        return <NewsletterForm onClose={onClose} />;
      case 'podcast':
        return <PodcastLinks />;
      case 'service':
      default:
        return (
          <>
            <h2 className="text-2xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">{service.title}</h2>
            <p className="text-brown dark:text-gray-300 mb-6 transition-colors duration-300">{service.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-serif mb-2 text-brown dark:text-white transition-colors duration-300">What's Included:</h3>
              <ul className="list-disc pl-5 space-y-2 text-brown dark:text-gray-300 transition-colors duration-300">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <label className="block text-brown dark:text-white text-sm font-bold mb-2 transition-colors duration-300" htmlFor="package-select">
                Select Package:
              </label>
              <select
                id="package-select"
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="shadow border rounded w-full py-2 px-3 text-brown dark:text-white dark:bg-gray-800 dark:border-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                <option value="standard">Standard (${service.price.toFixed(2)})</option>
                <option value="premium">Premium (${(service.premiumPrice || (service.price * 1.5)).toFixed(2)})</option>
                <option value="deluxe">Deluxe (${(service.deluxePrice || (service.price * 2)).toFixed(2)})</option>
              </select>
            </div>
            
            <Elements stripe={stripePromise}>
              <CheckoutForm service={service} packageType={packageType} onClose={onClose} />
            </Elements>
          </>
        );
    }
  };

  // Only check for service if the modalType is 'service'
  // Other modalTypes (like 'contact') don't require a service object
  if (modalType === 'service' && !service) {
    console.log('Service is null for service modal type, not rendering');
    return null;
  }

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
              className="bg-cream dark:bg-dark-card rounded-lg p-8 max-w-2xl w-full mx-4 z-50 relative max-h-[90vh] overflow-y-auto transition-colors duration-300"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-brown dark:text-white hover:text-terracotta dark:hover:text-terracotta-dark transition-colors duration-300"
                onClick={handleModalClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {renderModalContent()}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
