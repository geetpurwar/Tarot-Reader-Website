/**
 * Analytics utility functions for tracking user interactions and purchases
 */
import { config } from './config';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', config.analytics.gaId);
  }
};

// Track page views
export const trackPageView = (title, path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: window.location.href,
      page_path: path || window.location.pathname
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, category = 'button_click') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: category,
      event_label: buttonName
    });
  }
};

// Track service views
export const trackServiceView = (service) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      items: [{
        item_id: service.id,
        item_name: service.title,
        price: service.price,
        item_category: 'Tarot Service'
      }]
    });
  }
};

// Track adding service to cart
export const trackAddToCart = (service) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      items: [{
        item_id: service.id,
        item_name: service.title,
        price: service.price,
        quantity: 1,
        item_category: 'Tarot Service'
      }]
    });
  }
};

// Track beginning checkout
export const trackBeginCheckout = (service) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      items: [{
        item_id: service.id,
        item_name: service.title,
        price: service.price,
        quantity: 1,
        item_category: 'Tarot Service'
      }]
    });
  }
};

// Track purchase completion
export const trackPurchase = (orderId, amount, items) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: orderId,
      value: amount,
      currency: 'USD',
      items: items.map(item => ({
        item_id: item.id,
        item_name: item.title,
        price: item.price,
        quantity: 1,
        item_category: 'Tarot Service'
      }))
    });
    
    // Store purchase details for thank you page
    localStorage.setItem('orderDetails', JSON.stringify({
      orderId,
      amount,
      items
    }));
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'form',
      event_label: formName
    });
  }
};

export default {
  initGA,
  trackPageView,
  trackButtonClick,
  trackServiceView,
  trackAddToCart,
  trackBeginCheckout,
  trackPurchase,
  trackFormSubmission
};
