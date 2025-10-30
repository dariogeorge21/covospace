import { Link } from 'react-router-dom';

// Icon components
const DeskIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
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

const SecurityIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default function DedicatedDesk() {
  const features = [
    {
      icon: DeskIcon,
      title: "Your Personal Workspace",
      description: "A dedicated desk that's exclusively yours in our aesthetically crafted coworking environment"
    },
    {
      icon: WifiIcon,
      title: "High-Speed Internet",
      description: "Free secure internet and WiFi with enterprise-grade connectivity for uninterrupted work"
    },
    {
      icon: MailIcon,
      title: "Mail & Courier Services",
      description: "Professional mail and courier handling with your business address for seamless operations"
    },
    {
      icon: SecurityIcon,
      title: "24x7 Security",
      description: "Round-the-clock security and secure access control for your peace of mind"
    },
    {
      icon: ClockIcon,
      title: "Flexible Access",
      description: "Access your workspace whenever you need it with our flexible timing options"
    },
    {
      icon: UsersIcon,
      title: "Networking Community",
      description: "Connect with like-minded professionals and expand your business network"
    }
  ];

  const pricingPlans = [
    {
      type: "Monthly Plan",
      price: "₹5,500",
      period: "per month +GST",
      description: "Best value for dedicated workspace users",
      features: [
        "Includes all Flexi Desk facilities",
        "Conference Room Access 3 Hours/Month (Additional hours chargeable)"
      ],
      popular: true
    }
  ];

  const benefits = [
    "Aesthetically crafted coworking environment",
    "Professional atmosphere for enhanced productivity",
    "Access to meeting rooms and conference facilities",
    "Complimentary tea, coffee, and refreshments",
    "Professional cleaning and maintenance",
    "On-site support and technical assistance",
    "Storage solutions and locker facilities",
    "Printing and scanning services"
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759950077/IMG_2930_pgjfod.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <DeskIcon />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-lime-400">Dedicated Desk</span> Solutions
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Work your way with a dedicated desk in an aesthetically crafted coworking environment.
              Enjoy the perfect blend of personal workspace and collaborative community in the heart of Kochi.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto mb-8">
              <div className="text-white/90 text-sm">
                <p><strong>Space ID:</strong> CS2-04 | <strong>Area:</strong> 203 Sq.ft | <strong>Seats:</strong> 8</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300"
              >
                Book Your Desk
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Dedicated Desks?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect balance of privacy and community with all the amenities you need to work efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-lime-200 transition-all duration-300 group">
                <div className="mb-4 p-2 bg-lime-50 rounded-lg group-hover:bg-lime-100 transition-colors duration-300 w-fit">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759950248/diverse-people-working-office_ylutg7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Choose the plan that works best for your schedule and budget. All plans include our core amenities.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 lg:p-8 ${
                plan.popular ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.type}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckIcon />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-lime-600 text-white hover:bg-lime-700"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What's Included with Every Desk
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated desk plans come with everything you need to work productively and professionally. 
                Focus on growing your business while we handle the rest.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lime-100 mb-6">
                  Join our community of professionals and entrepreneurs. Book your dedicated desk today 
                  and experience the Covspace difference in the heart of Kochi.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Immediate availability</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>No long-term commitments</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>Free trial day available</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span>24x7 support included</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-lime-500">
                  <Link 
                    to="/contact"
                    className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Office Space Showcase */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96 bg-cover bg-center relative group cursor-pointer"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759950271/modern-office-space-interior_toqvvf.jpg)'
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Office Environment</h3>
                    <p className="text-sm text-gray-600">Aesthetically designed workspace with premium furniture and natural lighting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759950290/DSCN0713_mgymsj.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Get answers to common questions about our dedicated desk solutions and workspace amenities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's included with a dedicated desk?
                </h3>
                <p className="text-gray-600 text-sm">
                  Every dedicated desk includes high-speed internet, mail handling, access to meeting rooms, 
                  storage space, and all basic amenities like printing, tea, and coffee.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I access my desk 24/7?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes! All our dedicated desk members get 24x7 access to the workspace with secure key card entry.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a minimum commitment period?
                </h3>
                <p className="text-gray-600 text-sm">
                  No long-term commitments required! You can choose daily, weekly, or monthly plans based on your needs. 
                  Monthly plans offer the best value.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I upgrade or downgrade my plan?
                </h3>
                <p className="text-gray-600 text-sm">
                  Absolutely! Our flexible plans allow you to upgrade to private offices or adjust your commitment 
                  level as your business grows.
                </p>
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