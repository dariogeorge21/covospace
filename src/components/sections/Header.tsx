// To keep the JSX clean, the complex logo is created as a separate component.
// This is a recreation of the logo from the image as an SVG.
import { useState } from 'react';
import CovspaceLogo from "../ui/CovspaceLogo";
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileWorkspacesOpen, setIsMobileWorkspacesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white font-sans">
      {/* Top utility navigation bar */}
      <div className="bg-[#808080] hidden sm:block">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 sm:h-20">
            <nav>
              <ul className="flex items-center space-x-4 lg:space-x-8 text-xs sm:text-sm lg:text-base font-bold text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">ABOUT</Link></li>
                <li className="flex items-center space-x-4 lg:space-x-8">
                  <span className="hidden md:block">|</span>
                  <Link to="/location" className="hover:text-white transition-colors">LOCATION</Link>
                </li>
                <li className="hidden md:flex items-center space-x-4 lg:space-x-8">
                  <span>|</span>
                  <Link to="/our-clients" className="hover:text-white transition-colors">OUR CLIENTS</Link>
                </li>
                <li className="flex items-center space-x-4 lg:space-x-8">
                  <span className="hidden md:block">|</span>
                  <Link 
                    to="/contact" 
                    className="bg-white text-gray-800 px-3 py-1.5 sm:px-4 rounded-md text-[11px] sm:text-[13px] font-bold hover:bg-gray-200 transition-colors"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Main header with logo and primary navigation */}
      <div className="border-gray-200 my-2 sm:my-4">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-25">
            {/* Logo */}
            <div className="flex-shrink-0 scale-75 sm:scale-90 lg:scale-100">
              <Link to="/"><CovspaceLogo /></Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="flex items-center space-x-3 xl:space-x-4">
                {/* Workspaces Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 border border-gray-400 rounded-md px-4 xl:px-5 py-2.5 text-[12px] xl:text-[13px] font-bold hover:bg-gray-50 transition-colors">
                    <span>WORKSPACES</span>
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  {/* Dropdown menu */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                    <Link to="/private-offices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Private Offices</Link>
                    <Link to="/dedicated-desk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Dedicated Desk</Link>
                    <Link to="/flexi-desk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Flexi Desk</Link>
                    <Link to="/virtual-offices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Virtual Offices</Link>
                    <Link to="/meeting-rooms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Meeting Rooms</Link>
                  </div>
                </div>

                {/* Company Registration Button */}
                <Link to="/company-registration" className="bg-black text-white px-4 xl:px-5 py-2.5 rounded-md text-[12px] xl:text-[13px] font-bold hover:bg-gray-800 transition-colors">
                  COMPANY REGISTRATION
                </Link>

                {/* Enquire Now Button */}
                <Link to="/contact" className="flex items-center space-x-2 bg-lime-500 text-white px-4 xl:px-5 py-2.5 rounded-md text-[12px] xl:text-[13px] font-bold hover:bg-lime-600 transition-colors">
                  <span>ENQUIRE NOW</span>
                  <svg className="w-3 h-3 -rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
              </div>
            </nav>

            {/* Mobile Enquire Now Button & Hamburger */}
            <div className="flex items-center space-x-3 lg:hidden">
              <Link to="/contact" className="bg-lime-500 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-[11px] sm:text-[12px] font-bold hover:bg-lime-600 transition-colors">
                ENQUIRE NOW
              </Link>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
              {/* Mobile Top Navigation Items */}
              <div className="border-b border-gray-200 pb-3 mb-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-white transition-colors">About</Link>
                  <Link to="/location" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-white transition-colors">Location</Link>
                  <Link to="/our-clients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-white transition-colors">Our Clients</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-white transition-colors">Contact</Link>
                </div>
              </div>

              {/* Mobile Main Navigation Items */}
              <div className="space-y-3">
                <button onClick={() => setIsMobileWorkspacesOpen(v => !v)} className="w-full flex items-center justify-between px-3 py-3 rounded-md text-left font-bold text-gray-900 hover:bg-white transition-colors border border-gray-300">
                  <span>WORKSPACES</span>
                  <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileWorkspacesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isMobileWorkspacesOpen && (
                  <div className="ml-2 mr-2 border border-gray-200 rounded-md bg-white">
                    <Link to="/private-offices" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Private Offices</Link>
                    <Link to="/dedicated-desk" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Dedicated Desk</Link>
                    <Link to="/flexi-desk" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Flexi Desk</Link>
                    <Link to="/virtual-offices" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Virtual Offices</Link>
                    <Link to="/meeting-rooms" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Meeting Rooms</Link>
                  </div>
                )}
                
                <Link to="/" className="block w-full px-3 py-3 rounded-md text-center font-bold text-white bg-black hover:bg-gray-800 transition-colors">
                  ENTERPRISE SOLUTION
                </Link>

                <Link to="/company-registration" className="block w-full px-3 py-3 rounded-md text-center font-bold text-white bg-black hover:bg-gray-800 transition-colors">
                  COMPANY REGISTRATION
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
