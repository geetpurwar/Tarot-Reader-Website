import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Privacy Policy',
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
        <title>Privacy Policy | Younicorn Tarot</title>
        <meta name="description" content="Privacy Policy for Younicorn Tarot - Learn how we protect your personal information and data." />
        {/* Structured Data for Privacy Policy Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Privacy Policy for Younicorn Tarot - Learn how we protect your personal information and data.",
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
          Privacy Policy
        </motion.h1>
        
        <motion.div
          className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-md transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-brown dark:prose-headings:text-white prose-p:text-brown dark:prose-p:text-gray-300 transition-colors duration-300">
            <p className="mb-4">Last Updated: May 21, 2025</p>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Younicorn Tarot. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">2. The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. 
              It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Usage Data includes information about how you use our website, products and services.</li>
              <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">5. Data Retention</h2>
            <p className="mb-4">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">6. Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">7. Cookies</h2>
            <p className="mb-4">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">8. Changes to the Privacy Policy</h2>
            <p className="mb-4">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
            </p>
            
            <h2 className="text-xl font-serif mb-4 text-brown dark:text-white transition-colors duration-300">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@younicorntarot.com<br />
              Or via our contact form on the website.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
