import { Link } from 'react-router-dom';

// Icon components
const FlexibilityIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

const UsersIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function FlexiDesk() {
  const features = [
    {
      icon: CalendarIcon,
      title: "Ultimate Flexibility",
      description: "Choose daily, weekly, or monthly plans that adapt to your changing business needs and schedule"
    },
    {
      icon: WifiIcon,
      title: "Free Secure Internet & WiFi",
      description: "High-speed, enterprise-grade internet connectivity that keeps you productive throughout your workday"
    },
    {
      icon: MailIcon,
      title: "Mail & Courier Handling",
      description: "Professional mail and courier services with your business address for seamless operations"
    },
    {
      icon: UsersIcon,
      title: "Vibrant Community",
      description: "Network with entrepreneurs, freelancers, and professionals in our collaborative environment"
    },
    {
      icon: LightningIcon,
      title: "Instant Booking",
      description: "Book your workspace on-demand through our easy online platform or walk-in availability"
    },
    {
      icon: ShieldIcon,
      title: "Secure Environment",
      description: "24x7 security and access control ensure your belongings and work are always safe"
    }
  ];

  const pricingPlans = [
    {
      type: "Daily Pass",
      price: "INR 199",
      period: "per day",
      description: "Perfect for occasional users and testing our workspace",
      features: ["Access to flexi desks", "High-speed internet", "Basic amenities", "Community access", "8-hour usage"],
      highlight: false
    },
    {
      type: "Weekly Pass",
      price: "INR 999",
      period: "per week",
      description: "Great for short-term projects and freelancers",
      features: ["All daily pass benefits", "Extended 12-hour usage", "Mail handling services", "Meeting room credits", "Storage options"],
      highlight: true
    },
    {
      type: "Monthly Pass",
      price: "INR 3,000",
      period: "per month",
      description: "Best value for regular flexible workspace users",
      features: ["All weekly pass benefits", "Unlimited daily usage", "Priority desk selection", "Free printing allowance", "Business address usage", "Guest pass credits"]
    }
  ];

  const benefits = [
    "No advance booking required - walk in anytime",
    "Access to premium amenities and facilities",
    "Complimentary tea, coffee, and refreshments",
    "High-speed printing and scanning services",
    "Professional cleaning and maintenance",
    "Air-conditioned comfortable working environment",
    "Lockers and storage solutions available",
    "On-site technical support and assistance"
  ];

  const flexibilityFeatures = [
    {
      title: "Work When You Want",
      description: "No fixed schedules or rigid commitments. Use the workspace when it suits your lifestyle and business needs."
    },
    {
      title: "Scale Up or Down",
      description: "Start with daily passes and upgrade to monthly plans as your business grows, or scale back during slower periods."
    },
    {
      title: "Multiple Locations",
      description: "Access our network of workspaces across Kochi with a single flexi desk membership."
    },
    {
      title: "Cost-Effective",
      description: "Pay only for what you use. No overhead costs of maintaining a traditional office space."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <FlexibilityIcon />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-lime-600">Flexi Desk</span> Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Work your way with flexible desk arrangements in an aesthetically crafted coworking environment. 
            Perfect for entrepreneurs, freelancers, and businesses seeking ultimate workspace flexibility in Kochi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300"
            >
              Start Today
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border-2 border-lime-600 text-lime-600 font-semibold py-3 px-8 rounded-lg hover:bg-lime-50 transition-colors duration-300"
            >
              Try Free Day Pass
            </Link>
          </div>
        </div>
      </section>

      {/* Flexibility Features */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FlexiDesk?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the freedom to work on your terms with our flexible workspace solutions designed for the modern professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {flexibilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
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

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Daily, weekly, or monthly - choose the plan that fits your work style and budget. 
              No long-term commitments, maximum flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 lg:p-8 ${
                plan.highlight ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' : 'border-gray-200'
              }`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                      Most Popular
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
                  className={`block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${
                    plan.highlight 
                      ? 'bg-lime-600 text-white hover:bg-lime-700' 
                      : 'border-2 border-lime-600 text-lime-600 hover:bg-lime-50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Work Productively
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our flexi desk solution comes with all the amenities and services you need to work efficiently. 
                Just bring your laptop and ideas - we'll handle everything else.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Start Working Today!</h3>
              <p className="text-lime-100 mb-6">
                No setup fees, no deposits, no long-term contracts. Walk in and start working immediately 
                in our premium coworking space in the heart of Kochi.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <ClockIcon />
                  <span className="ml-3">Available 24x7 with flexible access</span>
                </div>
                <div className="flex items-center text-sm">
                  <WifiIcon />
                  <span className="ml-3">High-speed internet included</span>
                </div>
                <div className="flex items-center text-sm">
                  <MailIcon />
                  <span className="ml-3">Professional mail handling</span>
                </div>
                <div className="flex items-center text-sm">
                  <UsersIcon />
                  <span className="ml-3">Access to networking community</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  to="/contact"
                  className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Book Your Spot Now
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                >
                  Get Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How FlexiDesk Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with FlexiDesk is simple and straightforward. Here's how you can begin working today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Plan</h3>
              <p className="text-gray-600">
                Select from our daily, weekly, or monthly plans based on your needs. No advance booking required for daily passes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Walk In & Work</h3>
              <p className="text-gray-600">
                Simply walk into our Kochi location, show your membership or pay at reception, and choose any available desk.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-lime-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enjoy Full Access</h3>
              <p className="text-gray-600">
                Access all amenities, connect with the community, and focus on what matters most - growing your business.
              </p>
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