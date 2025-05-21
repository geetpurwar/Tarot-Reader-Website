import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Terms of Service',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 px-6 bg-cream dark:bg-dark-bg transition-colors duration-300">
      <Helmet>
        <title>Terms of Service | Younicorn Tarot</title>
        <meta name="description" content="Terms of Service for Younicorn Tarot - Learn about the terms and conditions governing your use of our services." />
        {/* Structured Data for Terms of Service Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Service",
              "description": "Terms of Service for Younicorn Tarot - Learn about the terms and conditions governing your use of our services.",
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
        <motion.h1 
          className="text-3xl md:text-4xl font-serif mb-8 text-center text-brown dark:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </motion.h1>
        
        <motion.div
          className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-md transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-brown dark:prose-headings:text-white prose-p:text-brown dark:prose-p:text-gray-300 transition-colors duration-300">
            <p className="mb-4">Last Updated: May 21, 2025</p>
            
            <h2 className="text-xl font-serif mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Younicorn Tarot. These Terms of Service ("Terms") govern your use of our website located at 
              younicorntarot.com (the "Service") operated by Younicorn Tarot ("us", "we", or "our").
            </p>
            <p className="mb-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
              then you may not access the Service.
            </p>
            
            <h2 className="text-xl font-serif mb-4">2. Communications</h2>
            <p className="mb-4">
              By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials 
              and other information we may send. However, you may opt out of receiving any, or all, of these communications 
              from us by following the unsubscribe link or instructions provided in any email we send.
            </p>
            
            <h2 className="text-xl font-serif mb-4">3. Purchases</h2>
            <p className="mb-4">
              If you wish to purchase any product or service made available through the Service ("Purchase"), 
              you may be asked to supply certain information relevant to your Purchase including, without limitation, 
              your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p className="mb-4">
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) 
              in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p className="mb-4">
              The service may employ the use of third-party services for the purpose of facilitating payment and the completion 
              of Purchases. By submitting your information, you grant us the right to provide the information to these third parties 
              subject to our Privacy Policy.
            </p>
            <p className="mb-4">
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: 
              product or service availability, errors in the description or price of the product or service, error in your 
              order or other reasons.
            </p>
            
            <h2 className="text-xl font-serif mb-4">4. Refunds</h2>
            <p className="mb-4">
              Our refund policy is as follows:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Digital products and services are non-refundable once delivered.</li>
              <li>If you are unsatisfied with a tarot reading service, please contact us within 24 hours of receiving the reading.</li>
              <li>We may offer refunds or credits at our sole discretion.</li>
            </ul>
            
            <h2 className="text-xl font-serif mb-4">5. Content</h2>
            <p className="mb-4">
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, 
              videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, 
              including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) 
              and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and 
              (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, 
              copyrights, contract rights or any other rights of any person or entity.
            </p>
            
            <h2 className="text-xl font-serif mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain 
              the exclusive property of Younicorn Tarot and its licensors. The Service is protected by copyright, trademark, and other 
              laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with 
              any product or service without the prior written consent of Younicorn Tarot.
            </p>
            
            <h2 className="text-xl font-serif mb-4">7. Disclaimer</h2>
            <p className="mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. 
              The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, 
              implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            <p className="mb-4">
              Younicorn Tarot, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function 
              uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; 
              c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>
            
            <h2 className="text-xl font-serif mb-4">8. Limitation Of Liability</h2>
            <p className="mb-4">
              In no event shall Younicorn Tarot, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or 
              inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any 
              content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, 
              whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have 
              been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
            
            <h2 className="text-xl font-serif mb-4">9. Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
              we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will 
              be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. 
              If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
            
            <h2 className="text-xl font-serif mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">
              Email: terms@younicorntarot.com<br />
              Or via our contact form on the website.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
