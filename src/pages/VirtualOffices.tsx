import { Link } from 'react-router-dom';
import { useQuotePanel } from '../components/ui/QuotePanelProvider';

// Icon components
const VirtualIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const AddressIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const ReceptionIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MeetingIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default function VirtualOffices() {
  const { openQuote } = useQuotePanel();
  const features = [
    {
      icon: AddressIcon,
      title: "Prime Business Address",
      description: "Use our prestigious Kochi address on your business cards, website, and official documents to establish credibility"
    },
    {
      icon: MailIcon,
      title: "Mail & Courier Handling",
      description: "Professional mail management with secure receipt, sorting, and forwarding services for all your correspondence"
    },
    {
      icon: PhoneIcon,
      title: "Call Answering & Forwarding",
      description: "Dedicated phone number with professional call answering service and call forwarding to your preferred number"
    },
    {
      icon: ReceptionIcon,
      title: "Professional Reception",
      description: "Live receptionist services to greet your clients and handle visitor management when you're not physically present"
    },
    {
      icon: CloudIcon,
      title: "Digital Mail Scanning",
      description: "Receive scanned copies of your mail instantly via email, allowing you to stay updated from anywhere in the world"
    },
    {
      icon: DocumentIcon,
      title: "Company Registration Support",
      description: "Use our address for company registration, GST registration, and other official government documentation"
    }
  ];

  const packages = [
    {
      spaceId: "CS2-01",
      type: "Virtual Office",
      price: "₹9,500",
      period: "per month +GST",
      description: "Complete virtual office solution with 1 Day/Year access",
      features: [
        "Business Address",
        "GST Registration",
        "MSME Registration",
        "Current Account Opening Support",
        "Mail and Courier",
        "Temp Sign Board",
        "Reception Support",
        "Conference Room (2 Hours / Year)"
      ],
      highlight: true
    }
  ];

  const useCases = [
    {
      title: "Remote Businesses",
      description: "Companies with remote teams needing a professional business address and mail handling services.",
      icon: CloudIcon
    },
    {
      title: "Startups & Entrepreneurs",
      description: "New businesses requiring a credible address for registration and professional communications.",
      icon: VirtualIcon
    },
    {
      title: "Freelancers & Consultants",
      description: "Independent professionals needing to separate business and personal addresses.",
      icon: ReceptionIcon
    },
    {
      title: "International Companies",
      description: "Foreign businesses expanding to India needing local presence in Kerala's business hub.",
      icon: AddressIcon
    }
  ];

  const whyChooseVirtual = [
    "No overhead costs of maintaining physical office space",
    "Professional presence in Kochi's prime business district",
    "Flexibility to work from anywhere while maintaining local credibility",
    "Quick setup within 24-48 hours",
    "Scalable services that grow with your business needs",
    "Compliance support for business registrations and documentation"
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1760030834/diverse-people-working-office_xca7y2.jpg)',
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
                <VirtualIcon />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-lime-400">Virtual Offices</span> for Modern Business
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Establish your business presence in the heart of Kochi without the overhead of a physical office. 
              Our virtual office solutions provide everything you need to operate professionally from anywhere.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <p className="text-sm text-white/80 mb-2">Complete Package</p>
                <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">₹11,500</div>
                <p className="text-white/90">per year +GST</p>
                <p className="text-sm text-white/70 mt-2">Business Address | GST & MSME Registration | 1 Day/Year Access</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openQuote}
                className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-lime-700 transition-colors duration-300"
              >
                Get Started Today
              </button>
              <button
                onClick={openQuote}
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Virtual Office Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business professionally, without the need for a physical office space.
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

      {/* Packages Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1760030829/Office_new_file_nvoedi.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Virtual Office Packages
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Choose the package that best fits your business needs, from basic address services 
              to comprehensive virtual office solutions.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 lg:p-8 ${
                pkg.highlight ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' : 'border-gray-200'
              }`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                      Complete Package
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="bg-lime-50 text-lime-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                    {pkg.spaceId}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.type}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                  <p className="text-xs text-lime-600 font-medium">1 Day / Year Access</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckIcon />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openQuote}
                  className="block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300 bg-lime-600 text-white hover:bg-lime-700"
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Different Business Types
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Virtual offices serve a wide range of businesses, from startups to established companies 
              looking to expand their presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-lime-200 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-lime-50 rounded-lg group-hover:bg-lime-100 transition-colors duration-300">
                    <useCase.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-lime-700 transition-colors duration-300">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Virtual Offices?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Virtual offices offer the perfect solution for modern businesses that need flexibility, 
                professional credibility, and cost-effectiveness without the constraints of a physical office.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {whyChooseVirtual.map((benefit, index) => (
                  <div key={index} className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Go Virtual?</h3>
                <p className="text-lime-100 mb-6">
                  Start your virtual office today and give your business the professional presence it deserves. 
                  Our team will have you set up and operational within 24-48 hours.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <AddressIcon />
                    <span className="ml-3">Prime Kochi business address</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <PhoneIcon />
                    <span className="ml-3">Professional call answering</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MailIcon />
                    <span className="ml-3">Complete mail management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MeetingIcon />
                    <span className="ml-3">Conference Room access available</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={openQuote}
                    className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Start Virtual Office
                  </button>
                  <Link 
                    to="/contact"
                    className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Conference Room Showcase */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96 bg-cover bg-center relative group cursor-pointer"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1760031315/modern-empty-business-corporate-office-meeting-room-is-ready-businesspeople-late-night_mxc7ye.jpg)'
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Conference Rooms</h3>
                    <p className="text-sm text-gray-600">Access to premium conferencespaces when you need to meet clients in person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our virtual office services and how they can benefit your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-200 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I use the virtual office address for company registration?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, absolutely! Our virtual office address can be used for company registration, GST registration, 
                  and all other official business documentation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-200 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can I get started with a virtual office?
                </h3>
                <p className="text-gray-600 text-sm">
                  We can set up your virtual office within 24-48 hours of confirmation. You'll receive your business 
                  address, phone number, and access to all services immediately.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-200 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I get access to conference rooms with virtual office packages?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, our Professional and Premium packages include conference room hours. You can also book additional 
                  conference room time at member rates when needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-200 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How does the mail forwarding service work?
                </h3>
                <p className="text-gray-600 text-sm">
                  We receive and securely store your mail. Depending on your package, we forward it weekly or monthly. 
                  Premium customers also get digital scanning for immediate access to important documents.
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