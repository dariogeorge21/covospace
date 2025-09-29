// import {ReactComponent as Ellipse} from '../Ellipse.svg'

const servicesData = [
  {
    title: 'Private Offices',
    description: 'Your team deserves more than space — enjoy a premier, fully managed private office experience.',
    features: [
      'Flexible Plans',
      '24x7 Security & Access',
      'All-Inclusive - includes Internet and Services',
    ],
  },
  {
    title: 'Dedicated Desk',
    description: 'Work your way with a dedicated desk in an aesthetically crafted coworking environment.',
    features: [
      'Daily-Weekly-Monthly Plans',
      'Free Secure Internet & WiFi',
      'Mail & Courier Handling',
    ],
  },
  {
    title: 'Meeting Rooms',
    description: 'Reserve premium meeting rooms designed with cutting-edge technology and complete amenities.',
    features: [
      '4 - 8 Seater Meeting Rooms',
      'Audio and Video Conferencing',
      'Catering on Request',
    ],
  },
  {
    title: 'Virtual Offices',
    description: 'Establish your presence at a prime business address without the upfront cost.',
    features: [
      'Prime Business Address',
      'Mail & Courier Handling',
      'Call Answering & Forwarding',
    ],
  },
  {
    title: 'Business Address',
    description: 'Company registration made simple — use our address.',
    features: [
      'Company and GST Registration',
      'Bank Account Support',
      'Mail & Courier Handling',
    ],
  },
];

const Background = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
    {/* Mobile: Show minimal background elements */}
    <div className="sm:hidden">
      <div className="absolute right-2 top-10 opacity-30">
        <img src="/Rectangle.svg" className="w-16 h-16" alt="" />
      </div>
    </div>

    {/* Tablet and Desktop: Show all decorative elements */}
    <div className="hidden sm:flex items-center justify-center">
      {/* Bottom left decorative elements */}
      <div className="absolute -left-10 md:-left-20 bottom-[-200px] md:bottom-[-300px]">
        <img src="/Ellipse3.svg" className="w-[300px] md:w-[400px] lg:w-[500px] hidden lg:block" alt="" />
      </div>
      <div className="absolute left-0 bottom-5 md:bottom-10">
        <img src="/Ellipse.svg" className="w-[80px] md:w-[100px] lg:w-auto" alt="" />
      </div>
      
      {/* Top right decorative elements */}
      <div className="absolute -right-5 md:-right-10 -top-10 md:-top-20">
        <img src="/Ellipse2.svg" className="w-[200px] md:w-[250px] lg:w-[300px] hidden md:block" alt="" />
      </div>
      <div className="absolute right-0 top-10 md:top-20">
        <img src="/Rectangle.svg" className="w-[60px] md:w-[80px] lg:w-auto" alt="" />
      </div>
      
      {/* Large background text - responsive sizing */}
      <div 
        className="text-[15rem] md:text-[25rem] lg:text-[35rem] xl:text-[50rem] 2xl:text-[70rem] font-bold text-transparent koulen-regular pt-10 hidden sm:block" 
        style={{
          WebkitTextStroke: '1px #E69464',
          opacity: 0.3
        }}
      >
        CS
      </div>
    </div>
  </div>
);

const EnquireIcon = () => (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.125 13.4583L14.875 5.54163M14.875 5.54163H6.125M14.875 5.54163V13.4583" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);

// Interface for ServiceCard props
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

// The main card component that will be rendered for each service
const ServiceCard = ({ title, description, features }: ServiceCardProps) => (
  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-200/80 shadow-sm h-full flex flex-col hover:shadow-md transition-shadow duration-300">
    <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-800 leading-tight">{title}</h3>
    <p className="mt-2 sm:mt-3 text-sm sm:text-sm md:text-base text-gray-600 flex-grow leading-relaxed">{description}</p>
    <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-sm text-gray-600 list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index} className="leading-relaxed">{feature}</li>
      ))}
    </ul>
    <div className="mt-4 sm:mt-6">
      <button className="flex items-center justify-center space-x-2 bg-lime-500 text-white font-bold text-xs sm:text-xs md:text-sm py-3 px-4 sm:px-5 rounded-md hover:bg-lime-600 active:bg-lime-700 transition-colors duration-300 w-full sm:w-auto min-h-[44px] touch-manipulation">
        <span>ENQUIRE NOW</span>
        <EnquireIcon />
      </button>
    </div>
  </div>
);


// The main export component
const ServicesSection = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50 font-sans overflow-hidden">
      <Background />
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Mobile Responsive */}
        <div className="relative mb-6 sm:mb-8 md:mb-12">
          {/* Mobile Title - Simple background */}
          <div className="block sm:hidden">
            <div className="bg-[#D95000] bg-opacity-80 px-6 py-3 rounded-lg inline-block">
              <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                OUR COVSPACES
              </h2>
            </div>
          </div>

          {/* Tablet and Desktop Title - SVG background */}
          <div className="hidden sm:block">
            <div className="relative inline-block">
              <svg 
                className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[419px]" 
                viewBox="0 0 419 75" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <foreignObject x="-30.6" y="-30.6" width="479.7" height="136.2">
                  <div 
                    style={{
                      backdropFilter: 'blur(15.3px)',
                      clipPath: 'url(#bgblur_0_61_10583_clip_path)',
                      height: '100%',
                      width: '100%'
                    }}
                  />
                </foreignObject>
                <g data-figma-bg-blur-radius="30.6">
                  <path d="M0 19C0 8.50659 8.50659 0 19 0H249.548C251.912 0 254.255 0.44112 256.457 1.30071L294.623 16.1993C296.825 17.0589 299.169 17.5 301.532 17.5H399.5C409.993 17.5 418.5 26.0066 418.5 36.5V56C418.5 66.4934 409.993 75 399.5 75H19C8.5066 75 0 66.4934 0 56V19Z" fill="#D95000" fillOpacity="0.6"/>
                  <path d="M19 1H249.548C251.787 1 254.008 1.41807 256.094 2.23242L294.26 17.1309C296.578 18.0357 299.044 18.5 301.532 18.5H399.5C409.441 18.5 417.5 26.5589 417.5 36.5V56C417.5 65.9411 409.441 74 399.5 74H19C9.05888 74 1 65.9411 1 56V19C1 9.05888 9.05888 1 19 1Z" stroke="#D95000" strokeOpacity="0.1" strokeWidth="2"/>
                </g>
                <defs>
                  <clipPath id="bgblur_0_61_10583_clip_path" transform="translate(30.6 30.6)">
                    <path d="M0 19C0 8.50659 8.50659 0 19 0H249.548C251.912 0 254.255 0.44112 256.457 1.30071L294.623 16.1993C296.825 17.0589 299.169 17.5 301.532 17.5H399.5C409.993 17.5 418.5 26.0066 418.5 36.5V56C418.5 66.4934 409.993 75 399.5 75H19C8.5066 75 0 66.4934 0 56V19Z"/>
                  </clipPath>
                </defs>
              </svg>

              <h2 className="absolute inset-0 flex items-center justify-start pl-4 sm:pl-6 md:pl-8 text-xl sm:text-2xl md:text-3xl text-white font-bold" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: 0 }}>
                OUR COVSPACES
              </h2>
            </div>
          </div>
        </div>

        {/* Services Grid - Mobile First Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 tracking-wide">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
