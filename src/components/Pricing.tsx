const pricingOptions = [
  { service: 'Private Offices', range: '₹15,000 - ₹45,000/month' },
  { service: 'Dedicated Desks', range: '₹8,000 - ₹12,000/month' },
  { service: 'Flexi Desk', range: '₹5,000 - ₹8,000/month' },
  { service: 'Virtual Office', range: '₹2,000 - ₹5,000/month' },
  { service: 'Meeting Rooms', range: '₹500 - ₹1,500/hour' },
  { service: 'Business Address', range: '₹1,000 - ₹3,000/month' }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Covospace Pricing
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {option.service}
              </h3>
              <p className="text-2xl font-bold text-[#5ab834]">
                {option.range}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}