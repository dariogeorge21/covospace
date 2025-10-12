const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Main Pricing Component
const Pricing = () => {
  // Data for the pricing list to keep the code clean
  const services = [
    { name: 'Private Offices', price: '- From INR. 9,500 per person, per month' },
    { name: 'Dedicated Desks', price: '- From INR. 7,500 per person, per month' },
    { name: 'Flexi Desk', price: '- From INR. 3,000 per person, per month' },
    { name: 'Virtual Office', price: '- From INR. 1,500 per month' },
    { name: 'Meeting Rooms', price: '- From INR. 500 per hour' },
    { name: 'Business Address', price: '- From INR. 40,000 annually' },
  ];

  // Data for the green office type buttons
  const officeTypes = [
    '30 Private Offices',
    '65 Private Offices',
    '65 Private Offices',
    '65 Private Offices',
  ];

  const PricingImageUrl="https://res.cloudinary.com/dobqxxtml/image/upload/v1759946073/new_litted_g4kces.jpg";

  return (
      <div 
      className="relative w-full min-h-[100vh] sm:h-[500px] md:h-[600px] lg:h-[900px] bg-cover bg-center font-sans bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${PricingImageUrl})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
      }}
    >
     <div className="absolute inset-0 bg-black opacity-20 sm:opacity-30"></div>

      {/* Container to position the content - mobile-first responsive */}
      <div className="relative h-full flex items-center flex-row-reverse justify-center sm:justify-start max-w-screen-2xl mx-auto px-2 py-8 sm:px-6 lg:px-8">
        
        {/* The frosted glass content box - fully responsive */}
        <div className="bg-white/80 sm:bg-white/75 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto sm:mx-0">
          <div className="flex flex-col space-y-6">
            {/* Header Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black">COVSPACE</h1>
              <p className="text-sm tracking-[0.2em] font-medium text-black mt-1">
                KOCHI, KERALA
              </p>
            </div>

            {/* Office Types Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {officeTypes.map((type, index) => (
                <button
                  key={index}
                  className="bg-[#84cc16] text-white text-xs font-semibold px-3 py-1.5 rounded-md italic"
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Pricing List */}
            <ul className="space-y-1 pt-1">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="grid grid-cols-2 items-start text-base md:text-lg leading-snug"
                >
                  <span className="font-medium text-black">&#x2022; {service.name}</span>
                  <span className="font-light text-black/90 text-right">{service.price}</span>
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <div className="pt-6">
              <button className="bg-black text-white font-bold py-3 pl-6 pr-3 rounded-full flex items-center gap-4 group transition-all duration-300 hover:shadow-2xl">
                LEARN MORE
                <div className="bg-[#84cc16] rounded-full p-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pricing;