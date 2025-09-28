import { ArrowRight, Building, Users, Calendar, MapPin, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Private Offices',
    description: 'Fully furnished private offices for teams of all sizes'
  },
  {
    icon: Users,
    title: 'Dedicated Desk',
    description: 'Your own dedicated workspace in a shared environment'
  },
  {
    icon: Calendar,
    title: 'Meeting Rooms',
    description: 'Professional meeting spaces with modern amenities'
  },
  {
    icon: MapPin,
    title: 'Virtual Offices',
    description: 'Professional business address and mail handling'
  },
  {
    icon: Briefcase,
    title: 'Business Address',
    description: 'Premium business address in the heart of Kochi'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Covospace
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#5ab834] rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-[#5ab834] text-white px-6 py-2 rounded-lg hover:bg-[#4a9e2d] transition-colors flex items-center font-medium">
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}