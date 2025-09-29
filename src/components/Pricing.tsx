
const pricingData = [
  { service: 'Private Offices', price: 'From INR. 9,500 per person, per month' },
  { service: 'Dedicated Desks', price: 'From INR. 7,500 per person, per month' },
  { service: 'Flexi Desk', price: 'From INR. 3,000 per person, per month' },
  { service: 'Virtual Office', price: 'From INR. 1,500 per month' },
  { service: 'Meeting Rooms', price: 'From INR. 500 per hour' },
  { service: 'Business Address', price: 'From INR. 40,000 annually' },
];

// Reusable SVG icon for the button arrow
const ArrowIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

const Background = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center">
    <img src="https://res.cloudinary.com/dobqxxtml/image/upload/v1759138193/pricing-bg_bcujok.png" alt="bg" className="max-w-full max-h-full object-contain" />
  </div>
)
const Pricing = () => {
  return (
    <div className="relative bg-white font-sans py-8 sm:py-12 md:py-16 lg:py-24 min-h-screen flex items-center justify-center">
      <Background />
      
      {/* Mobile Layout - Single Column */}
      <div className="block md:hidden w-full max-w-md mx-auto px-4 sm:px-6">
        <div className="text-center z-10 relative">
          {/* Main Title - Mobile */}
          <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-[0.15em] sm:tracking-[0.2em]">COVSPACE</h1>
          <p className="mt-1 text-xs sm:text-sm font-medium text-gray-600 tracking-[0.15em] sm:tracking-[0.2em]">KOCHI, KERALA</p>

          {/* Green Info Tags - Mobile */}
          <div className="mt-6 sm:mt-8 flex justify-center items-center flex-wrap gap-2 sm:gap-3">
            <span className="bg-lime-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md">30 Private Offices</span>
            <span className="bg-lime-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md">65 Desks</span>
            <span className="bg-lime-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md">Meeting Rooms</span>
            <span className="bg-lime-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md">Virtual Office</span>
          </div>

          {/* Pricing List - Mobile */}
          <div className="mt-8 sm:mt-10 text-left">
            <ul className="space-y-3 sm:space-y-4">
              {pricingData.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-800 bg-white/80 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <span className="text-gray-900 text-lg mr-2 leading-none">•</span>
                    <span className="text-sm sm:text-base font-medium">{item.service}</span>
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm ml-5 sm:ml-0 sm:text-right">- {item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More Button - Mobile */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <button className="group flex items-center bg-black rounded-full p-1 transition-all duration-300 min-h-[48px] touch-manipulation">
              <span className="text-white text-xs sm:text-sm font-bold tracking-wider pl-4 sm:pl-6 pr-3 sm:pr-4">
                LEARN MORE
              </span>
              <span className="bg-lime-500 rounded-full p-2 transform group-hover:translate-x-1 group-active:scale-95 transition-all duration-300">
                <ArrowIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two Column Grid */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Column 1: This column is intentionally left empty as per the layout requirement. */}
          <div></div>

          {/* Column 2: Contains all the pricing content. */}
          <div className="text-center z-10 relative md:-mt-[1%] md:ml-[2%] lg:-mt-[3%] lg:ml-[5%]">

            {/* Main Title - Desktop */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-[0.2em]">COVSPACE</h1>
            <p className="mt-1 text-sm md:text-base font-medium text-gray-600 tracking-[0.2em]">KOCHI, KERALA</p>

            {/* Green Info Tags - Desktop */}
            <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center items-center flex-wrap gap-3 md:gap-4">
              <span className="bg-lime-600 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-md">30 Private Offices</span>
              <span className="bg-lime-600 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-md">65 Private Offices</span>
              <span className="bg-lime-600 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-md">65 Private Offices</span>
              <span className="bg-lime-600 text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-md">65 Private Offices</span>
            </div>

            {/* Pricing List - Desktop */}
            <div className="mt-10 md:mt-12 lg:mt-16 text-left max-w-2xl mx-auto">
              <ul className="space-y-3 md:space-y-4">
                {pricingData.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-gray-800 hover:bg-white/60 p-2 rounded-lg transition-colors duration-200">
                    <div className="flex items-center">
                      <span className="text-gray-900 text-xl md:text-2xl mr-3 leading-none">•</span>
                      <span className="text-sm md:text-base lg:text-lg">{item.service}</span>
                    </div>
                    <span className="text-gray-600 text-xs md:text-sm lg:text-base text-right">- {item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Button - Desktop */}
            <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
              <button className="group flex items-center bg-black rounded-full p-1 transition-all duration-300 hover:shadow-lg">
                <span className="text-white text-sm md:text-base font-bold tracking-widest pl-4 md:pl-6 pr-3 md:pr-4">
                  LEARN MORE
                </span>
                <span className="bg-lime-500 rounded-full p-2 md:p-3 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowIcon />
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

