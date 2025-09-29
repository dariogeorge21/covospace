
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
    <div className="relative bg-white font-sans py-16 md:py-24 min-h-screen flex items-center justify-center">
      <Background />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Column 1: This column is intentionally left empty as per the layout requirement. */}
        <div></div>

        {/* Column 2: Contains all the pricing content. */}
        <div className="text-center z-10 -mt-[3%] ml-[5%]">

        {/* Main Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-[0.2em]">COVSPACE</h1>
        <p className="mt-1 text-sm font-medium text-gray-600 tracking-[0.2em]">KOCHI, KERALA</p>

        {/* Green Info Tags */}
        <div className="mt-8 flex justify-center items-center flex-wrap gap-4">
          <span className="bg-lime-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md">30 Private Offices</span>
          <span className="bg-lime-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md">65 Private Offices</span>
          <span className="bg-lime-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md">65 Private Offices</span>
          <span className="bg-lime-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md">65 Private Offices</span>
        </div>

        {/* Pricing List */}
        <div className="mt-12 text-left max-w-2xl mx-auto">
          <ul className="space-y-3">
            {pricingData.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-gray-800">
                <div className="flex items-center">
                  <span className="text-gray-900 text-2xl mr-3 leading-none">•</span>
                  <span>{item.service}</span>
                </div>
                <span className="text-gray-600 text-right">- {item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learn More Button */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center bg-black rounded-full p-1 transition-all duration-300">
            <span className="text-white text-sm font-bold tracking-widest pl-6 pr-4">
              LEARN MORE
            </span>
            <span className="bg-lime-500 rounded-full p-2 transform group-hover:translate-x-1 transition-transform duration-300">
              <ArrowIcon />
            </span>
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;

