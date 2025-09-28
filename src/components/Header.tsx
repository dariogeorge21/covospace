import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#5ab834] transition-colors text-sm font-medium">
              About
            </a>
            <a href="#location" className="text-gray-600 hover:text-[#5ab834] transition-colors text-sm font-medium">
              Location
            </a>
            <a href="#clients" className="text-gray-600 hover:text-[#5ab834] transition-colors text-sm font-medium">
              Our Clients
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#5ab834] transition-colors text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-[#5ab834] text-white px-4 py-2 rounded-lg font-bold text-xl">
                Covospace
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center text-gray-700 hover:text-[#5ab834] transition-colors font-medium">
                Workspace
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="text-gray-700 hover:text-[#5ab834] transition-colors font-medium">
                Enterprise Solution
              </button>
              <button className="text-gray-700 hover:text-[#5ab834] transition-colors font-medium">
                Company Registration
              </button>
              <button className="bg-[#5ab834] text-white px-6 py-2 rounded-lg hover:bg-[#4a9e2d] transition-colors flex items-center font-medium">
                Enquire Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}