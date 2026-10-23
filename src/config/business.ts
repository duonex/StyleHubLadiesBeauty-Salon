import { SALON_INFO } from '../data/salonData';

export const BUSINESS_CONFIG = {
  name: SALON_INFO.name,
  legalName: 'Style Hub Ladies Beauty Salon',
  tagline: '5.0 ★ Google Rated Luxury Ladies Beauty Parlour in Tirunelveli',
  shortDescription: 'Premier ladies beauty salon in Tirunelveli specializing in Bridal Services, Skin Care, Facials, Haircut & Styling, Pedicure, Manicure, and Make-up.',
  
  // WhatsApp Integration
  whatsAppNumber: SALON_INFO.whatsappNumber,
  whatsAppDisplayNumber: SALON_INFO.phoneDisplay,
  
  // Contact details
  phone: SALON_INFO.phone,
  phoneDisplay: SALON_INFO.phoneDisplay,
  
  // Physical Salon Address
  address: {
    line1: SALON_INFO.address.line1,
    plaza: SALON_INFO.address.plaza,
    road: SALON_INFO.address.road,
    area: SALON_INFO.address.area,
    city: SALON_INFO.address.city,
    state: SALON_INFO.address.state,
    pincode: SALON_INFO.address.pincode,
    full: SALON_INFO.address.full,
  },
  
  // Working Hours
  workingHours: {
    display: SALON_INFO.hours.display,
    openTime: SALON_INFO.hours.openTime,
    closeTime: SALON_INFO.hours.closeTime,
    days: SALON_INFO.hours.days,
  },

  // Google Maps
  googleMapsUrl: SALON_INFO.googleMapsUrl,

  // Currency & Region
  currency: {
    symbol: '₹',
    code: 'INR',
    locale: 'en-IN'
  },

  // Guarantees / Highlights
  guarantees: [
    '100% Female Expert Stylists',
    'Hospital-Grade Sterilization & Hygiene',
    'Dedicated Private Bridal Suites',
    'Premium Authentic Salon Products'
  ]
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;
