import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-[#5ab834] text-white px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block">
              Covospace
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Premier coworking and shared workspace provider in Kochi, Kerala. 
              Professional spaces designed for modern businesses.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-[#5ab834] cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-[#5ab834] cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-[#5ab834] cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-[#5ab834] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Private Offices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Dedicated Desks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Meeting Rooms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Virtual Offices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Business Address</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Location</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Our Clients</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#5ab834] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#5ab834] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Business District,<br />
                  Kochi, Kerala 682001
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#5ab834] mr-3" />
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#5ab834] mr-3" />
                <p className="text-gray-300">hello@covospace.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Covospace. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}