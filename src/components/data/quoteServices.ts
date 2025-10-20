// Service pricing data structure for the Get Quote feature
// Extracted and consolidated from existing page components

export interface PricingOption {
  type: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  popular?: boolean;
}

export interface ServicePricing {
  id: string;
  name: string;
  description: string;
  category: 'workspace' | 'office' | 'meeting' | 'virtual' | 'business';
  features: string[];
  pricingOptions: PricingOption[];
  popular?: boolean;
  startingPrice: string;
  startingPeriod: string;
}

// Consolidated service data from existing pages
export const quoteServices: ServicePricing[] = [
  {
    id: 'flexi-desk',
    name: 'Flexi Desk',
    description: 'Flexible workspace solution with no fixed commitments. Perfect for freelancers and remote workers.',
    category: 'workspace',
    features: [
      'No advance booking required',
      'Access to premium amenities',
      'High-speed internet & WiFi',
      'Complimentary refreshments',
      'Professional environment'
    ],
    popular: true,
    startingPrice: 'INR 199',
    startingPeriod: 'per day',
    pricingOptions: [
      {
        type: 'Daily Pass',
        price: 'INR 199',
        period: 'per day',
        description: 'Perfect for occasional users and testing our workspace',
        features: [
          'Access to flexi desks',
          'High-speed internet',
          'Basic amenities',
          'Community access',
          '8-hour usage'
        ]
      },
      {
        type: 'Weekly Pass',
        price: 'INR 999',
        period: 'per week',
        description: 'Great for short-term projects and freelancers',
        features: [
          'All daily pass benefits',
          'Extended 12-hour usage',
          'Mail handling services',
          'Meeting room credits',
          'Storage options'
        ],
        highlight: true
      },
      {
        type: 'Monthly Pass',
        price: 'INR 3,000',
        period: 'per month',
        description: 'Best value for regular flexible workspace users',
        features: [
          'All weekly pass benefits',
          'Unlimited daily usage',
          'Priority desk selection',
          'Free printing allowance',
          'Business address usage',
          'Guest pass credits'
        ]
      }
    ]
  },
  {
    id: 'dedicated-desk',
    name: 'Dedicated Desk',
    description: 'Your personal workspace in our aesthetically crafted coworking environment.',
    category: 'workspace',
    features: [
      'Your own dedicated desk',
      'High-speed internet & WiFi',
      'Mail & courier handling',
      '24x7 security access',
      'Storage solutions'
    ],
    startingPrice: 'INR 299',
    startingPeriod: 'per day',
    pricingOptions: [
      {
        type: 'Daily Pass',
        price: 'INR 299',
        period: 'per day',
        description: 'Perfect for trying out our workspace',
        features: [
          'Dedicated desk for the day',
          'High-speed internet',
          'Basic amenities access',
          'Community networking'
        ]
      },
      {
        type: 'Weekly Plan',
        price: 'INR 1,499',
        period: 'per week',
        description: 'Ideal for short-term projects',
        features: [
          'Dedicated desk for 7 days',
          'All daily pass benefits',
          'Mail handling services',
          'Meeting room credits'
        ],
        popular: true
      },
      {
        type: 'Monthly Plan',
        price: 'INR 7,500',
        period: 'per month',
        description: 'Best value for regular users',
        features: [
          'Your own dedicated desk',
          'All weekly plan benefits',
          'Storage locker included',
          'Unlimited meeting room access',
          'Business address usage'
        ]
      }
    ]
  },
  {
    id: 'private-offices',
    name: 'Private Offices',
    description: 'Fully managed private office experience for teams and businesses.',
    category: 'office',
    features: [
      'Fully furnished workspace',
      'Flexible plans available',
      '24x7 security & access',
      'All-inclusive services',
      'Professional environment'
    ],
    startingPrice: 'INR 9,500',
    startingPeriod: 'per person/month',
    pricingOptions: [
      {
        type: 'Solo Office',
        price: 'INR 9,500',
        period: 'per person/month',
        description: 'Perfect for entrepreneurs and small startups (1-2 People, 80-120 sq ft)',
        features: [
          'Fully furnished workspace',
          'Ergonomic furniture included',
          'Natural lighting',
          'Storage solutions',
          '24x7 access',
          'Business address usage'
        ]
      },
      {
        type: 'Team Office',
        price: 'INR 8,500',
        period: 'per person/month',
        description: 'Ideal for growing teams and small businesses (3-6 People, 150-300 sq ft)',
        features: [
          'All Solo Office benefits',
          'Dedicated meeting area',
          'Team collaboration space',
          'Additional storage',
          'Printing allowance',
          'Guest reception services'
        ],
        highlight: true
      },
      {
        type: 'Enterprise Office',
        price: 'INR 7,500',
        period: 'per person/month',
        description: 'Perfect for established businesses (7+ People, 400+ sq ft)',
        features: [
          'All Team Office benefits',
          'Multiple meeting rooms',
          'Dedicated reception area',
          'Custom branding options',
          'Priority support',
          'Flexible lease terms'
        ]
      }
    ]
  },
  {
    id: 'meeting-rooms',
    name: 'Meeting Rooms',
    description: 'Premium meeting rooms with cutting-edge technology and complete amenities.',
    category: 'meeting',
    features: [
      '4-8 seater rooms available',
      'Audio & video conferencing',
      'Professional setup',
      'Catering on request',
      'Flexible booking options'
    ],
    startingPrice: 'INR 400',
    startingPeriod: 'per hour',
    pricingOptions: [
      {
        type: 'Huddle Room',
        price: 'INR 400',
        period: 'per hour',
        description: 'Perfect for small team meetings and quick discussions (4 Seater)',
        features: [
          'Seats up to 4 people',
          '40-inch display screen',
          'Basic audio/video setup',
          'Whiteboard included',
          '2-hour minimum booking'
        ]
      },
      {
        type: 'Conference Room',
        price: 'INR 500',
        period: 'per hour',
        description: 'Ideal for client meetings and team presentations (6-8 Seater)',
        features: [
          'Seats 6-8 people comfortably',
          '55-inch 4K display',
          'Professional conferencing system',
          'Wireless presentation',
          'Catering setup available',
          'Full-day packages available'
        ],
        highlight: true
      },
      {
        type: 'Executive Boardroom',
        price: 'INR 750',
        period: 'per hour',
        description: 'Premium boardroom for executive meetings (10-12 Seater)',
        features: [
          'Seats up to 12 people',
          '65-inch 4K display',
          'Premium conferencing system',
          'Executive furniture',
          'Dedicated support staff',
          'Catering included'
        ]
      }
    ]
  },
  {
    id: 'virtual-offices',
    name: 'Virtual Offices',
    description: 'Establish your presence at a prime business address without the upfront cost.',
    category: 'virtual',
    features: [
      'Prime business address',
      'Mail & courier handling',
      'Call answering & forwarding',
      'Professional presence',
      'Business registration support'
    ],
    startingPrice: 'INR 2,500',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Basic Virtual Office',
        price: 'INR 2,500',
        period: 'per month',
        description: 'Essential virtual office services for startups and freelancers',
        features: [
          'Prime business address usage',
          'Mail receiving and holding',
          'Monthly mail forwarding',
          'Basic phone number',
          'Call forwarding service',
          'Business registration support'
        ]
      },
      {
        type: 'Professional Virtual Office',
        price: 'INR 4,500',
        period: 'per month',
        description: 'Enhanced services for growing businesses',
        features: [
          'All Basic Virtual Office benefits',
          'Dedicated phone number',
          'Professional call answering',
          'Weekly mail forwarding',
          'Meeting room credits',
          'Business address verification'
        ],
        highlight: true
      },
      {
        type: 'Premium Virtual Office',
        price: 'INR 7,500',
        period: 'per month',
        description: 'Complete virtual office solution for established businesses',
        features: [
          'All Professional benefits',
          'Daily mail forwarding',
          'Unlimited call handling',
          'Dedicated receptionist',
          'Priority meeting room access',
          'Company registration assistance'
        ]
      }
    ]
  }
];

// Helper function to get service by ID
export const getServiceById = (id: string): ServicePricing | undefined => {
  return quoteServices.find(service => service.id === id);
};

// Helper function to get services by category
export const getServicesByCategory = (category: ServicePricing['category']): ServicePricing[] => {
  return quoteServices.filter(service => service.category === category);
};

// Helper function to get popular services
export const getPopularServices = (): ServicePricing[] => {
  return quoteServices.filter(service => service.popular);
};
