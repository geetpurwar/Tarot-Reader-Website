import constants from './constants.json';

// Environment variables
export const config = {
  stripe: {
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_TYooMQauvdEDq54NiTphI7jx'
  },
  analytics: {
    gaId: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
  },
  recaptcha: {
    siteKey: process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
  }
};

// Theme and other constants
export const theme = constants.theme;
export const services = constants.services;
export const contact = constants.contact;
export const navigation = constants.navigation;
export const siteInfo = constants.siteInfo;

export default {
  config,
  theme,
  services,
  contact,
  navigation,
  siteInfo
};
