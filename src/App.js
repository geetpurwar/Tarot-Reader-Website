import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TarotInfo from './components/TarotInfo';
import About from './components/About';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
// MysticalSymbols component removed
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import { initGA, trackPageView } from './utils/analytics';
import { ThemeProvider } from './utils/ThemeContext';

// Main content component for the home page
const HomePage = () => {
  useEffect(() => {
    // Track page view
    trackPageView('Home', '/');
  }, []);

  return (
    <>
      <Helmet>
        <title>Younicorn Tarot | Tarot Readings for Guidance and Clarity</title>
        <meta name="description" content="Discover what energies you have in store with personalized tarot readings for love, career, and personal growth." />
        {/* Structured Data for Home Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Younicorn Tarot",
              "url": "${window.location.origin}",
              "description": "Tarot readings for guidance and clarity in love, career, and personal growth.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "${window.location.origin}/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TarotInfo />
        <Banner />
        <About />
        <FAQ />
      </motion.div>
    </>
  );
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);
  return (
    <ThemeProvider>
      <Router>
        <div className="font-sans bg-cream dark:bg-gray-900 text-brown dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
