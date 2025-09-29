// Icon component for the button, recreated as an SVG
const QuoteIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.29166 17.7084L17.7083 7.29169M17.7083 7.29169H7.29166M17.7083 7.29169V17.7084" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);


const Hero= () => {
  // NOTE: Replace this with the actual URL or path to your hero image.
  const heroImageUrl = 'https://res.cloudinary.com/dobqxxtml/image/upload/v1759083000/b16da8c5-83c7-49aa-a157-725f02ca5753.png';

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] lg:h-[900px] bg-cover bg-center font-sans"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
      }}
    >
      {/* Overlay to darken the image slightly, which makes text more readable */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Container to position the content */}
      <div className="relative h-full flex items-center justify-start max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The frosted glass content box */}
        <div className="bg-white/75 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 w-full max-w-lg">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: 'Istok Web', fontStyle: 'italic' }}>
            Exclusive Offices &<br />
            Workspaces in the Center<br />
            of Kochi.
          </h1>

          {/* Paragraph description */}
          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Istok Web', fontStyle: 'italic' }}>
            Covspace is a premier coworking and shared workspace provider based in Kochi, Kerala. We offer fully managed private offices, collaborative coworking spaces, meeting rooms, and virtual office services.
          </p>

          {/* Quick Quote Button */}
          <div className="mt-8">
            <button className="flex items-center space-x-2 text-white font-bold py-3 px-6 rounded-md hover:bg-lime-600 transition-colors duration-300 shadow-md" style={{ backgroundColor: '#5AB834' }}>
              <span>QUICK QUOTE</span>
              <QuoteIcon />
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Hero;
