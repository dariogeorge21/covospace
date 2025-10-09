import React from 'react';

// The arrow icon for the "Learn More" button
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

// Background image placeholder component
const Background = () => (
  <div className="absolute -inset-6 z-0 flex items-center justify-center pointer-events-none">
    <img
      src="https://res.cloudinary.com/dobqxxtml/image/upload/v1759943792/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_zzxldy.jpg"
      alt="Office background"
      className="max-w-full max-h-full object-contain rounded-l-3xl rounded-r-[60px] opacity-90"
    />
  </div>
);

// Main Pricing Component
const Pricing = () => {
  // Data for the pricing list to keep the code clean
  const services = [
    { name: 'Private Offices', price: 'From INR. 8,500 per person, per month' },
    { name: 'Dedicated Desks', price: 'From INR. 7,500 per person, per month' },
    { name: 'Flexi Desk', price: 'From INR. 3,000 per person, per month' },
    { name: 'Virtual Office', price: 'From INR. 1,500 per month' },
    { name: 'Meeting Rooms', price: 'From INR. 500 per hour' },
    { name: 'Business Address', price: 'From INR. 40,000 annually' },
  ];

  // Data for the green office type buttons
  const officeTypes = [
    '30 Private Offices',
    '65 Private Offices',
    '65 Private Offices',
    '65 Private Offices',
  ];

  return (
    // Wrapper to position background behind the card
    <div className="relative flex flex-row-reverse mx-20">
      <Background />
      {/* Main container with glassmorphism effect and custom rounded corners */}
      <div className="max-w-2xl w-full bg-white/20 backdrop-blur-xl rounded-l-2xl rounded-r-[60px] p-10 md:p-14 font-sans shadow-lg border border-white/30 relative z-10">
        <div className="flex flex-col space-y-8">
          {/* Header Section */}
          <div>
            <h1 className="text-5xl font-extrabold text-black">COVSPACE</h1>
            <p className="text-sm tracking-[0.2em] font-medium text-black mt-1">
              KOCHI, KERALA
            </p>
          </div>

          {/* Office Types Buttons */}
          <div className="flex flex-wrap gap-3">
            {officeTypes.map((type, index) => (
              <button
                key={index}
                className="bg-[#84cc16] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Pricing List */}
          <ul className="space-y-3.5">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg leading-tight"
              >
                <span className="font-medium text-black">&#x2022; {service.name}</span>
                <span className="font-light text-black/90 sm:pl-4">{service.price}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <div className="pt-4">
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
  );
};

export default Pricing;