// To keep the JSX clean, the complex logo is created as a separate component.
// This is a recreation of the logo from the image as an SVG.
import CovspaceLogo from "./ui/CovspaceLogo";


const Header = () => {
  return (
    <header className="bg-white font-sans">
      {/* Top utility navigation bar */}
      <div className="bg-[#808080]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-20">
            <nav>
              <ul className="flex items-center space-x-8 text-m font-bold text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">ABOUT</a></li>
                <li className="flex items-center space-x-8">
                  <span>|</span>
                  <a href="#" className="hover:text-white transition-colors">LOCATION</a>
                </li>
                <li className="flex items-center space-x-8">
                  <span>|</span>
                  <a href="#" className="hover:text-white transition-colors">OUR CLIENTS</a>
                </li>
                <li className="flex items-center space-x-8">
                  <span>|</span>
                  <a 
                    href="#" 
                    className="bg-white text-gray-800 px-4 py-1.5 rounded-md text-[13px] font-bold hover:bg-gray-200 transition-colors"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main header with logo and primary navigation */}
      <div className="border-gray-200 my-4">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-25">
            {/* Logo */}
            <div className="flex-shrink-0">
              <CovspaceLogo />
            </div>
            <nav className="hidden md:block">
              <div className="flex items-center space-x-4">
                {/* Workspaces Dropdown */}
                <button className="flex items-center space-x-2 border border-gray-400 rounded-md px-5 py-2.5 text-[13px] font-bold">
                  <span>WORKSPACES</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                {/* Enterprise Solution Button */}
                <a href="#" className="bg-black text-white px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-gray-800 transition-colors">
                  ENTERPRISE SOLUTION
                </a>

                {/* Company Registration Button */}
                <a href="#" className="bg-black text-white px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-gray-800 transition-colors">
                  COMPANY REGISTRATION
                </a>

                {/* Enquire Now Button */}
                <a href="#" className="flex items-center space-x-2 bg-lime-500 text-white px-5 py-2.5 rounded-md text-[13px] font-bold hover:bg-lime-600 transition-colors">
                  <span>ENQUIRE NOW</span>
                  <svg className="w-3 h-3 -rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
