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
  area?: string | null;  // Can be null for Virtual Office
  seats?: string | number;
  seatsDescription?: string;  // Detailed seat breakdown like "3 Chair + 1 Manager + 2 Visitors"
  seatsTotal?: number;  // Numeric total
  facilities?: string[];
}

// Consolidated service data from existing pages
export const quoteServices: ServicePricing[] = [
  {
    id: 'cs2-01-flexi',
    spaceId: 'CS2-01',
    name: 'Flexi Desk / Hot Desk',
    description: 'Flexible workspace solution with no fixed commitments. Perfect for freelancers and remote workers.',
    category: 'workspace',
    area: '207 Sq.ft',
    seats: 9,
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
    seats: 8,
    features: [
      'All Flexi Desk facilities',
      'Conference Room Access 3 Hours/Month',
      'High-speed internet & WiFi',
      'Mail & courier handling',
      'Professional environment'
    ],
    facilities: [
      'Includes all Flexi Desk facilities',
      'Conference Room Access 3 Hours/Month (Additional hours chargeable)'
    ],
    startingPrice: '₹6,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹6,000',
        period: 'per month +GST',
        description: 'Best value for dedicated workspace users',
        features: [
          'Includes all Flexi Desk facilities',
          'Conference Room Access 3 Hours/Month (Additional hours chargeable)'
        ],
        popular: true
      }
    ]
  },
  {
    id: 'cs2-02',
    spaceId: 'CS2-02',
    name: 'Office Suite',
    description: 'Fully managed private office experience for small teams.',
    category: 'office',
    area: '143 Sq.ft',
    seatsDescription: '3 Chair + 1 Manager (Total - 4)',
    seatsTotal: 4,
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
        description: 'Perfect for small teams (3 Chair + 1 Manager, Total - 4)',
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
    name: 'Office Suite',
    description: 'Fully managed private office with conference room access.',
    category: 'office',
    area: '145 Sq.ft',
    seatsDescription: '3 Chair + 1 Manager + 2 Visitors (Total - 4)',
    seatsTotal: 4,
    features: [
      'Includes all CS2-02 facilities',
      'Conference Room Access 12 Hours/Month',
      'Additional hours chargeable',
      'Reception Desk & Guest Service',
      'Unlimited WiFi Access'
    ],
    facilities: [
      'Includes all CS2-02 facilities',
      'Conference Room Access 12 Hours/Month (Additional hours chargeable)'
    ],
    startingPrice: '₹30,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹30,000',
        period: 'per month +GST',
        description: 'Ideal for teams with conference needs (3 Chair + 1 Manager + 2 Visitors, Total - 4)',
        features: [
          'Includes all CS2-02 facilities',
          'Conference Room Access 12 Hours/Month (Additional hours chargeable)'
        ],
        highlight: true
      }
    ]
  },
  {
    id: 'cs2-05',
    spaceId: 'CS2-05',
    name: 'Office Suite',
    description: 'Premium office with business address and GST registration.',
    category: 'office',
    area: '172 Sq.ft',
    seatsDescription: '4 Chair + 1 Manager + 2 Visitors (Total - 5)',
    seatsTotal: 5,
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
      'Current Account'
    ],
    startingPrice: '₹35,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹35,000',
        period: 'per month +GST',
        description: 'Premium office for growing businesses (4 Chair + 1 Manager + 2 Visitors, Total - 5)',
        features: [
          'Premium Business Address',
          'GST Registration',
          'Current Account'
        ]
      }
    ]
  },
  {
    id: 'cs2-06',
    spaceId: 'CS2-06',
    name: 'Office Suite',
    description: 'Setup and register your company at our prestigious address.',
    category: 'office',
    area: '171 Sq.ft',
    seatsDescription: '4 Chair + 1 Manager + 2 Visitors (Total - 5)',
    seatsTotal: 5,
    features: [
      'Setup and Register your Company',
      'Prestigious Address',
      'Premium Business Address',
      'GST Registration',
      'Current Account'
    ],
    facilities: [
      'Setup and Register your Company at our Prestigious Address',
      'Includes facilities listed for CS2-05'
    ],
    startingPrice: '₹35,000',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Monthly Plan',
        price: '₹35,000',
        period: 'per month +GST',
        description: 'Complete company setup solution (4 Chair + 1 Manager + 2 Visitors, Total - 5)',
        features: [
          'Setup and Register your Company at our Prestigious Address',
          'Includes facilities listed for CS2-05'
        ]
      }
    ]
  },
  {
    id: 'cs2-c1',
    spaceId: 'CS2-C1',
    name: 'Conference Room',
    description: 'Premium conference rooms with cutting-edge technology and complete amenities.',
    category: 'meeting',
    area: '160 Sq.ft',
    seats: 8,
    features: [
      'Complimentary Beverages and Cookies',
      'Interactive Display',
      'Unlimited Wi-Fi'
    ],
    facilities: [
      'Complimentary Beverages and Cookies',
      'Interactive Display',
      'Unlimited Wi-Fi'
    ],
    startingPrice: '₹700',
    startingPeriod: 'per hour',
    pricingOptions: [
      {
        type: 'Conference Room',
        price: '₹700',
        period: 'per hour +GST',
        description: 'Ideal for client meetings and team presentations (8 Seater)',
        features: [
          'Complimentary Beverages and Cookies',
          'Interactive Display',
          'Unlimited Wi-Fi'
        ],
        highlight: true
      }
    ]
  },
  {
    id: 'cs2-01-virtual',
    spaceId: 'CS2-01',
    name: 'Virtual Office',
    description: 'Establish your presence at a prime business address without the upfront cost.',
    category: 'virtual',
    area: null,
    seatsDescription: '1 Day / Year',
    features: [
      'Business Address',
      'GST Registration',
      'MSME Registration',
      'Current Account Opening Support',
      'Mail and Courier',
      'Temp Sign Board',
      'Reception Support',
      'Conference Room (2 Hours / Year)'
    ],
    facilities: [
      'Business Address',
      'GST Registration',
      'MSME Registration',
      'Current Account Opening Support',
      'Mail and Courier',
      'Temp Sign Board',
      'Reception Support',
      'Conference Room (2 Hours / Year)'
    ],
    startingPrice: '₹9,500',
    startingPeriod: 'per month',
    pricingOptions: [
      {
        type: 'Virtual Office',
        price: '₹9,500',
        period: 'per month +GST',
        description: 'Complete virtual office solution with 1 Day/Year access',
        features: [
          'Business Address',
          'GST Registration',
          'MSME Registration',
          'Current Account Opening Support',
          'Mail and Courier',
          'Temp Sign Board',
          'Reception Support',
          'Conference Room (2 Hours / Year)'
        ],
        highlight: true
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
