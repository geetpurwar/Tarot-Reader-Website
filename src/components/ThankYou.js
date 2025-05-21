import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const ThankYou = () => {
  useEffect(() => {
    // Track purchase completion
    if (window.gtag) {
      // Get purchase details from URL parameters or localStorage
      const orderDetails = JSON.parse(localStorage.getItem('orderDetails') || '{}');
      const orderId = new URLSearchParams(window.location.search).get('order_id') || orderDetails.orderId || 'unknown';
      const amount = orderDetails.amount || 0;
      const items = orderDetails.items || [];
      
      // Track purchase event
      window.gtag('event', 'purchase', {
        transaction_id: orderId,
        value: amount,
        currency: 'USD',
        items: items
      });
      
      // Track page view
      window.gtag('event', 'page_view', {
        page_title: 'Thank You',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Clear order details from localStorage after tracking
    setTimeout(() => {
      localStorage.removeItem('orderDetails');
    }, 1000);
  }, []);

  return (
    <section className="py-16 px-6 bg-cream min-h-screen flex items-center">
      <Helmet>
        <title>Thank You for Your Purchase | Younicorn Tarot</title>
        <meta name="description" content="Thank you for your purchase at Younicorn Tarot. Your tarot reading journey begins now." />
        <meta name="robots" content="noindex" /> {/* Don't index thank you pages */}
        {/* Structured Data for Order Confirmation */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CheckoutPage",
              "name": "Thank You for Your Purchase",
              "description": "Order confirmation page for Younicorn Tarot services.",
              "publisher": {
                "@type": "Organization",
                "name": "Younicorn Tarot",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${window.location.origin}/logo.png"
                }
              },
              "inLanguage": "en-US"
            }
          `}
        </script>
      </Helmet>
      
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="mx-auto"
            >
              <svg className="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Thank You for Your Purchase!
          </motion.h1>
          
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Your order has been successfully processed. You will receive a confirmation email shortly with all the details.
          </motion.p>
          
          <motion.div
            className="mb-8 p-6 bg-cream rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-xl font-serif mb-4">What's Next?</h2>
            <p className="mb-4">
              Your tarot journey is about to begin! Here's what you can expect:
            </p>
            <ol className="list-decimal pl-5 text-left mb-4">
              <li className="mb-2">You'll receive a confirmation email with your order details.</li>
              <li className="mb-2">Within 24 hours, we'll send you a personalized email with instructions for your reading.</li>
              <li className="mb-2">If you purchased a live reading, you'll receive a link to schedule your session.</li>
              <li className="mb-2">For written readings, expect delivery within 3-5 business days.</li>
            </ol>
          </motion.div>
          
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a 
              href="/" 
              className="bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              onClick={(e) => {
                if (window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'thank_you_page',
                    event_label: 'return_home'
                  });
                }
              }}
            >
              Return to Home
            </a>
            <a 
              href="/services" 
              className="bg-sage hover:bg-sage/80 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              onClick={(e) => {
                if (window.gtag) {
                  window.gtag('event', 'click', {
                    event_category: 'thank_you_page',
                    event_label: 'explore_more_services'
                  });
                }
              }}
            >
              Explore More Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
