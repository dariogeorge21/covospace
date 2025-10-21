// Service data configuration for the Get Quote panel
// Consolidated from existing pricing data across the application

export interface ServicePricing {
  id: string;
  name: string;
  description: string;
  pricing: {
    daily?: string;
    weekly?: string;
    monthly?: string;
    hourly?: string;
    annually?: string;
  };
  features: string[];
  popular?: boolean;
  bookingUrl?: string;
}

export const quoteServices: ServicePricing[] = [
  {
    id: 'flexi-desk',
    name: 'Flexi Desk',
    description: 'Flexible workspace solution for dynamic professionals',
    pricing: {
      daily: 'INR 199',
      weekly: 'INR 999',
      monthly: 'INR 3,000'
    },
    features: [
      'Access to flexi desks',
      'High-speed internet',
      'Basic amenities',
      'Community access',
      'No advance booking required'
    ],
    popular: true,
    bookingUrl: '/flexi-desk'
  },
  {
    id: 'dedicated-desk',
    name: 'Dedicated Desk',
    description: 'Your personal workspace in a collaborative environment',
    pricing: {
      daily: 'INR 299',
      weekly: 'INR 1,499',
      monthly: 'INR 7,500'
    },
    features: [
      'Dedicated desk exclusively yours',
      'High-speed internet & WiFi',
      'Mail & courier services',
      '24x7 security & access',
      'Storage locker included'
    ],
    bookingUrl: '/dedicated-desk'
  },
  {
    id: 'private-offices',
    name: 'Private Offices',
    description: 'Fully managed private office experience for teams',
    pricing: {
      monthly: 'From INR 9,500 per person'
    },
    features: [
      'Fully furnished workspace',
      'Ergonomic furniture included',
      'Natural lighting',
      '24x7 access',
      'Business address usage',
      'Meeting room credits'
    ],
    bookingUrl: '/private-offices'
  },
  {
    id: 'virtual-offices',
    name: 'Virtual Office',
    description: 'Prime business address without the upfront cost',
    pricing: {
      monthly: 'From INR 2,500'
    },
    features: [
      'Prime business address usage',
      'Mail receiving and holding',
      'Call forwarding service',
      'Business registration support',
      'Professional receptionist',
      'Meeting room access'
    ],
    bookingUrl: '/virtual-offices'
  },
  {
    id: 'meeting-rooms',
    name: 'Meeting Rooms',
    description: 'Premium meeting rooms with cutting-edge technology',
    pricing: {
      hourly: 'From INR 400'
    },
    features: [
      '4-8 seater meeting rooms',
      'Audio and video conferencing',
      'Wireless presentation',
      'Professional setup',
      'Catering on request',
      'Full-day packages available'
    ],
    bookingUrl: '/meeting-rooms'
  },
  {
    id: 'business-address',
    name: 'Business Address',
    description: 'Company registration made simple with our address',
    pricing: {
      annually: 'INR 40,000'
    },
    features: [
      'Company and GST registration',
      'Bank account support',
      'Mail & courier handling',
      'Virtual office services',
      'Compliance management',
      'Legal documentation support'
    ],
    bookingUrl: '/company-registration'
  }
];

// Helper function to get formatted pricing display
export const getFormattedPricing = (service: ServicePricing): string => {
  const { pricing } = service;
  
  if (pricing.hourly) return `${pricing.hourly} per hour`;
  if (pricing.daily) return `${pricing.daily} per day`;
  if (pricing.weekly) return `${pricing.weekly} per week`;
  if (pricing.monthly) return `${pricing.monthly} per month`;
  if (pricing.annually) return `${pricing.annually} annually`;
  
  return 'Contact for pricing';
};

// Helper function to get the primary pricing for display
export const getPrimaryPricing = (service: ServicePricing): { price: string; period: string } => {
  const { pricing } = service;
  
  if (pricing.monthly) {
    return { price: pricing.monthly, period: 'per month' };
  }
  if (pricing.hourly) {
    return { price: pricing.hourly, period: 'per hour' };
  }
  if (pricing.daily) {
    return { price: pricing.daily, period: 'per day' };
  }
  if (pricing.weekly) {
    return { price: pricing.weekly, period: 'per week' };
  }
  if (pricing.annually) {
    return { price: pricing.annually, period: 'annually' };
  }
  
  return { price: 'Contact us', period: 'for pricing' };
};
