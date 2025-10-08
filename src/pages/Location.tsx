import { Link } from 'react-router-dom';

// Icon components
const LocationIcon = () => (
  <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BusIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2 2H9a2 2 0 01-2-2v0a2 2 0 01-2-2V9a2 2 0 012-2h2" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const TrainIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2L3 14h9l4-12z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CoffeeIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5a3 3 0 003 3h6a3 3 0 003-3V4M4 4h12M4 4V2m12 2V2m-6 6v6m-3-3h6" />
  </svg>
);

const ShoppingIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

const RestaurantIcon = () => (
  <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Location() {
  const transportationOptions = [
    {
      icon: BusIcon,
      title: "Public Transportation",
      description: "Multiple bus routes connect to our location with frequent services throughout Kochi"
    },
    {
      icon: CarIcon,
      title: "Parking Facilities",
      description: "Dedicated parking spaces available for members with secure 24x7 access"
    },
    {
      icon: TrainIcon,
      title: "Metro & Rail Access",
      description: "Close proximity to metro stations and railway connections across Kerala"
    }
  ];

  const nearbyAmenities = [
    {
      icon: RestaurantIcon,
      title: "Restaurants & Cafes",
      description: "Wide variety of dining options from local cuisine to international restaurants"
    },
    {
      icon: CoffeeIcon,
      title: "Coffee Shops",
      description: "Premium coffee shops and casual meeting spots within walking distance"
    },
    {
      icon: ShoppingIcon,
      title: "Shopping Centers",
      description: "Major shopping complexes and retail outlets for all your business and personal needs"
    },
    {
      icon: BuildingIcon,
      title: "Business District",
      description: "Surrounded by corporate offices, banks, and professional service providers"
    }
  ];

  const locationBenefits = [
    "Strategic location in Kochi's central business district",
    "Easy accessibility from all parts of the city",
    "Close to major banks and financial institutions",
    "Walking distance to government offices",
    "Connected to major transportation hubs",
    "Proximity to hotels for visiting clients",
    "Access to professional services and vendors",
    "Vibrant business ecosystem and networking opportunities"
  ];

  const facilityHighlights = [
    { number: "30+", label: "Private Offices", description: "Fully furnished and ready-to-use" },
    { number: "65+", label: "Workstations", description: "Flexible seating arrangements" },
    { number: "24x7", label: "Security", description: "Round-the-clock protection" },
    { number: "100%", label: "Uptime", description: "Reliable internet and power" }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759946953/DJI_0010_uy3uvp.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <LocationIcon />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-lime-400">Location</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Strategically positioned in the center of Kochi, Kerala, our workspace puts you at the heart of 
              the state's business district with unparalleled accessibility and professional environment.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <LocationIcon />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Covspace Kochi</h2>
              <p className="text-white/90 text-lg mb-4">Center of Kochi, Kerala, India</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-lime-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                >
                  Get Directions
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our Kochi location features premium amenities and state-of-the-art infrastructure 
              designed for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {facilityHighlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold text-lime-600 mb-2">{item.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation & Accessibility */}
      <section 
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759947548/DSCN0759_eaza4f.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Easy to Reach
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Our central location ensures convenient access through multiple transportation options, 
              making it easy for you and your clients to reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {transportationOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  <option.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section with Interior Showcase */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Map Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Find Us on the Map
              </h2>
              <p className="text-gray-600 mb-6">
                Located in the heart of Kochi's business district, our workspace is easily accessible 
                and surrounded by all the amenities you need.
              </p>
              
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="bg-gray-100 rounded-xl h-64 sm:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <LocationIcon />
                    <p className="text-gray-600 mt-4 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500 mt-2">Center of Kochi, Kerala, India</p>
                    <div className="mt-4">
                      <Link 
                        to="/contact"
                        className="inline-flex items-center bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                      >
                        Get Detailed Directions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Showcase */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96 bg-cover bg-center relative group cursor-pointer"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dobqxxtml/image/upload/v1759947739/DSCN0683_dlbtql.jpg)'
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfortable Workspace</h3>
                    <p className="text-sm text-gray-600">Modern interiors designed for productivity and collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need Nearby
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our location puts you within walking distance of restaurants, cafes, shopping centers, 
              and essential business services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {nearbyAmenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  <amenity.icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Benefits & Contact */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Our Location Matters
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Being located in the center of Kochi isn't just about convenience – it's about connecting 
                you to Kerala's vibrant business ecosystem and providing easy access to everything your 
                business needs to thrive.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-lime-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Visit Us Today</h3>
              <p className="text-lime-100 mb-6">
                Experience our location firsthand with a personal tour. See why businesses choose 
                our Kochi workspace for their operations and growth.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <LocationIcon />
                  <span className="ml-3">Center of Kochi, Kerala</span>
                </div>
                <div className="flex items-center text-sm">
                  <BusIcon />
                  <span className="ml-3">Multiple transportation options</span>
                </div>
                <div className="flex items-center text-sm">
                  <CarIcon />
                  <span className="ml-3">Dedicated parking available</span>
                </div>
                <div className="flex items-center text-sm">
                  <BuildingIcon />
                  <span className="ml-3">Premium business district</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  to="/contact"
                  className="block w-full bg-white text-lime-600 text-center font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Schedule a Tour
                </Link>
                <Link 
                  to="/contact"
                  className="block w-full border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
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