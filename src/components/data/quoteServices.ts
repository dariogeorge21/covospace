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
  spaceId?: string;
  area?: string;
  seats?: string;
  facilities?: string[];
}

// Consolidated service data from existing pages
export const quoteServices: ServicePricing[] = [
  {
    id: 'cs2-01',
    spaceId: 'CS2-01',
    name: 'Flexi Desk / Hot Desk',
    description: 'Flexible workspace solution with no fixed commitments. Perfect for freelancers and remote workers.',
    category: 'workspace',
    area: '207 Sq.ft',
    seats: '9',
    features: [
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    facilities: [
      '5 Day / 10 Day / Unlimited Plan',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    popular: true,
    startingPrice: '₹500',
    startingPeriod: 'per day',
    pricingOptions: [
      {
        type: 'Daily Plan',
        price: '₹500',
        period: 'per day +GST',
        description: 'Perfect for occasional users and testing our workspace',
        features: [
          'Access to flexi desks',
          'Unlimited WiFi Access',
          'Reception Desk & Guest Service',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
        ]
      },
      {
        type: 'Monthly Plan',
        price: '₹5,500',
        period: 'per month +GST',
        description: 'Best value for regular flexible workspace users',
        features: [
          '5 Day / 10 Day / Unlimited Plan',
          'Reception Desk & Guest Service',
          'Unlimited WiFi Access',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
        ],
        highlight: true
      }
    ]
  },
  {
    id: 'cs2-04',
    spaceId: 'CS2-04',
    name: 'Dedicated Work Space',
    description: 'Your personal workspace in our aesthetically crafted coworking environment.',
    category: 'workspace',
    area: '203 Sq.ft',
    seats: '8',
    features: [
      'All Flexi Desk facilities',
      'Conference Room Access 3 Hours/Month',
      'High-speed internet & WiFi',
      'Mail & courier handling',
      'Professional environment'
    ],
    facilities: [
      'Includes all Flexi Desk facilities',
      'Conference Room Access 3 Hours/Month',
      'Additional hours chargeable',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    startingPrice: '₹5,500',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹5,500',
        period: 'per month +GST',
        description: 'Best value for dedicated workspace users',
        features: [
          'Includes all Flexi Desk facilities',
          'Conference Room Access 3 Hours/Month',
          'Additional hours chargeable',
          'Reception Desk & Guest Service',
          'Unlimited WiFi Access',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
        ],
        popular: true
      }
    ]
  },
  {
    id: 'cs2-02',
    spaceId: 'CS2-02',
    name: 'Office Suit',
    description: 'Fully managed private office experience for small teams.',
    category: 'office',
    area: '143 Sq.ft',
    seats: '4 Total (3 Chair + 1 Manager)',
    features: [
      '5 Day / 10 Day / Unlimited Plan',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)'
    ],
    facilities: [
      '5 Day / 10 Day / Unlimited Plan',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    startingPrice: '₹30,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹30,000',
        period: 'per month +GST',
        description: 'Perfect for small teams (4 Total: 3 Chair + 1 Manager)',
        features: [
          '5 Day / 10 Day / Unlimited Plan',
          'Reception Desk & Guest Service',
          'Unlimited WiFi Access',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
        ]
      }
    ]
  },
  {
    id: 'cs2-03',
    spaceId: 'CS2-03',
    name: 'Office Suit',
    description: 'Fully managed private office with conference room access.',
    category: 'office',
    area: '145 Sq.ft',
    seats: '4 Total (3 Chair + 1 Manager + 2 Visitors)',
    features: [
      'Includes all CS2-02 facilities',
      'Conference Room Access 12 Hours/Month',
      'Additional hours chargeable',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access'
    ],
    facilities: [
      'Includes all CS2-02 facilities',
      'Conference Room Access 12 Hours/Month',
      'Additional hours chargeable',
      '5 Day / 10 Day / Unlimited Plan',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    startingPrice: '₹30,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹30,000',
        period: 'per month +GST',
        description: 'Ideal for teams with meeting needs (4 Total: 3 Chair + 1 Manager + 2 Visitors)',
        features: [
          'Includes all CS2-02 facilities',
          'Conference Room Access 12 Hours/Month',
          'Additional hours chargeable',
          '5 Day / 10 Day / Unlimited Plan',
          'Reception Desk & Guest Service',
          'Unlimited WiFi Access',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
        ],
        highlight: true
      }
    ]
  },
  {
    id: 'cs2-05',
    spaceId: 'CS2-05',
    name: 'Office Suit',
    description: 'Premium office with business address and GST registration.',
    category: 'office',
    area: '172 Sq.ft',
    seats: '5 Total (4 Chair + 1 Manager + 2 Visitors)',
    features: [
      'Premium Business Address',
      'GST Registration',
      'Current Account',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access'
    ],
    facilities: [
      'Premium Business Address',
      'GST Registration',
      'Current Account',
      '5 Day / 10 Day / Unlimited Plan',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    startingPrice: '₹35,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹35,000',
        period: 'per month +GST',
        description: 'Premium office for growing businesses (5 Total: 4 Chair + 1 Manager + 2 Visitors)',
        features: [
          'Premium Business Address',
          'GST Registration',
          'Current Account',
          '5 Day / 10 Day / Unlimited Plan',
          'Reception Desk & Guest Service',
          'Unlimited WiFi Access',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
        ]
      }
    ]
  },
  {
    id: 'cs2-06',
    spaceId: 'CS2-06',
    name: 'Office Suit',
    description: 'Setup and register your company at our prestigious address.',
    category: 'office',
    area: '171 Sq.ft',
    seats: '5 Total (4 Chair + 1 Manager + 2 Visitors)',
    features: [
      'Setup and Register your Company',
      'Prestigious Address',
      'Premium Business Address',
      'GST Registration',
      'Current Account'
    ],
    facilities: [
      'Setup and Register your Company at our Prestigious Address',
      'Premium Business Address',
      'GST Registration',
      'Current Account',
      '5 Day / 10 Day / Unlimited Plan',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access',
      'Mail & Courier Management',
      'Print / Photocopy Facility (50 Prints)',
      'Scan Facilities'
    ],
    startingPrice: '₹35,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹35,000',
        period: 'per month +GST',
        description: 'Complete company setup solution (5 Total: 4 Chair + 1 Manager + 2 Visitors)',
        features: [
          'Setup and Register your Company at our Prestigious Address',
          'Premium Business Address',
          'GST Registration',
          'Current Account',
          '5 Day / 10 Day / Unlimited Plan',
          'Reception Desk & Guest Service',
          'Unlimited WiFi Access',
          'Mail & Courier Management',
          'Print / Photocopy Facility (50 Prints)',
          'Scan Facilities'
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
