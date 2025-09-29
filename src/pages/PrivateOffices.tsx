import { Link } from 'react-router-dom';

// Icon components
const OfficeIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FlexibilityIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AllInclusiveIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const FurnitureIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21l0-4m8 4l0-4" />
  </svg>
);

const CleaningIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function PrivateOffices() {
  const features = [
    {
      icon: SecurityIcon,
      title: "24x7 Security & Access",
      description: "Round-the-clock security with secure key card access ensuring your office and belongings are always protected"
    },
    {
      icon: AllInclusiveIcon,
      title: "All-Inclusive Services",
      description: "Everything included - furniture, utilities, cleaning, maintenance, and professional reception services"
    },
    {
      icon: FlexibilityIcon,
      title: "Flexible Plans",
      description: "Choose from various office sizes and lease terms that adapt to your business needs and growth"
    },
    {
      icon: WifiIcon,
      title: "High-Speed Internet",
      description: "Enterprise-grade internet connectivity with dedicated bandwidth for uninterrupted business operations"
    },
    {
      icon: MailIcon,
      title: "Mail & Courier Handling",
      description: "Professional mail management and courier services with your prestigious business address"
    },
    {
      icon: CleaningIcon,
      title: "Professional Maintenance",
      description: "Daily cleaning, maintenance, and facility management handled by our professional team"
    }
  ];

  const officeTypes = [
    {
      type: "Solo Office",
      capacity: "1-2 People",
      size: "80-120 sq ft",
      price: "INR 9,500",
      period: "per person/month",
      description: "Perfect for entrepreneurs and small startups",
      features: [
        "Fully furnished workspace",
        "Ergonomic furniture included",
        "Natural lighting",
        "Storage solutions",
        "24x7 access",
        "Business address usage"
      ],
      highlight: false
    },
    {
      type: "Team Office",
      capacity: "3-6 People", 
      size: "150-300 sq ft",
      price: "INR 8,500",
      period: "per person/month",
      description: "Ideal for growing teams and small businesses",
      features: [
        "All Solo Office benefits",
        "Dedicated meeting area",
        "Team collaboration space",
        "Additional storage",
        "Printing allowance",
        "Guest reception services"
      ],
      highlight: true
    },
    {
      type: "Executive Suite",
      capacity: "8-15 People",
      size: "400-800 sq ft", 
      price: "INR 7,500",
      period: "per person/month",
      description: "Premium offices for established businesses",
      features: [
        "All Team Office benefits",
        "Private conference room",
        "Executive furniture",
        "Dedicated phone line",
        "Priority meeting room access",
        "Concierge services",
        "Custom branding options"
      ]
    }
  ];

  const includedServices = [
    "Premium business address in center of Kochi",
    "Professional furniture and ergonomic seating",
    "High-speed internet and WiFi connectivity", 
    "Unlimited local and STD calling",
    "Mail and courier handling services",
    "Daily housekeeping and maintenance",
    "24x7 security and CCTV monitoring",
    "Access to common areas and amenities",
    "Meeting room credits included",
    "Guest reception and visitor management",
    "Printing and scanning services",
    "Tea, coffee, and refreshment services"
  ];

  const whyChoosePrivate = [
    {
      title: "Privacy & Concentration",
      description: "Your own dedicated space free from distractions, perfect for confidential work and focused productivity."
    },
    {
      title: "Professional Image",
      description: "Impress clients and partners with a prestigious business address and professional office environment."
    },
    {
      title: "Scalability", 
      description: "Easily scale up or down as your team grows, without the hassle of traditional office leases."
    },
    {
      title: "Cost-Effective",
      description: "All-inclusive pricing eliminates hidden costs and provides predictable monthly expenses."
    },
    {
      title: "Immediate Availability",
      description: "Move in immediately with fully furnished offices ready for business operations."
    },
    {
      title: "Business Support",
      description: "Access to business services, networking opportunities, and professional community."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <OfficeIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-lime-600">Private Offices</span> for Modern Business
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the ultimate in workspace privacy and professionalism with our fully managed private office experience. 
            From solo entrepreneurs to growing teams, we have the perfect space for your business in the heart of Kochi.
          </p>
          <div className="bg-lime-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Starting from</p>
              <div className="text-3xl sm:text-4xl font-bold text-lime-600 mb-2">INR 9,500</div>
              <p className="text-gray-600">per person, per month</p>
              <div className="flex items-center justify-center mt-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="ml-2 text-sm text-gray-600">All-inclusive pricing</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300"
            >
              Get Quick Quote
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border-2 border-lime-600 text-lime-600 font-semibold py-3 px-8 rounded-lg hover:bg-lime-50 transition-colors duration-300"
            >
              Schedule Office Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Features & Amenities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our private offices come fully equipped with everything you need to run your business efficiently 
              and professionally from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Types & Pricing */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Office
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From individual offices to executive suites, we offer flexible private office solutions 
              that grow with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {officeTypes.map((office, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 lg:p-8 ${
                office.highlight ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' : 'border-gray-200'
              }`}>
                {office.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{office.type}</h3>
                  <p className="text-lime-600 font-medium mb-1">{office.capacity}</p>
                  <p className="text-sm text-gray-500 mb-3">{office.size}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{office.price}</span>
                    <span className="text-gray-500 ml-2 text-sm">{office.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{office.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {office.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckIcon />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${
                    office.highlight 
                      ? 'bg-lime-600 text-white hover:bg-lime-700' 
                      : 'border-2 border-lime-600 text-lime-600 hover:bg-lime-50'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Private Offices */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Private Offices?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Private offices offer the perfect balance of privacy, professionalism, and flexibility 
              for businesses that need their own dedicated space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChoosePrivate.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services & CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Everything Included in Your Office
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our all-inclusive pricing means no hidden costs or surprise bills. 
                Everything you need to run your business is included in one simple monthly payment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Move In?</h3>
              <p className="text-lime-100 mb-6">
                Your private office can be ready in 24-48 hours. All you need to bring is your laptop 
                and ideas - we'll handle everything else. Experience the Covspace difference today.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <SecurityIcon />
                  <span className="ml-3">24x7 secure access</span>
                </div>
                <div className="flex items-center text-sm">
                  <AllInclusiveIcon />
                  <span className="ml-3">All-inclusive services</span>
                </div>
                <div className="flex items-center text-sm">
                  <FlexibilityIcon />
                  <span className="ml-3">Flexible lease terms</span>
                </div>
                <div className="flex items-center text-sm">
                  <FurnitureIcon />
                  <span className="ml-3">Fully furnished & equipped</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  to="/contact"
                  className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Book Office Today
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <svg className="w-12 h-12 text-lime-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            <blockquote className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              "Moving to a Covspace private office was the best decision for our growing startup. 
              The all-inclusive pricing, professional environment, and flexible terms allowed us to focus 
              entirely on building our business without worrying about office management."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Client testimonial"
                className="w-12 h-12 rounded-full object-cover mr-4"
                loading="lazy"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                <p className="text-sm text-gray-600">CEO, TechFlow Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 sm:py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-lime-600 hover:text-lime-700 font-semibold text-base sm:text-lg transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
} 