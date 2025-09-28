export default function ClientMarquee() {
  const clients = [
    'TechCorp', 'Innovation Labs', 'StartupHub', 'Digital Solutions', 
    'Creative Agency', 'Business Pro', 'Future Tech', 'Smart Systems'
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Trusted by Leading Companies
        </h3>
        
        <div className="overflow-hidden">
          <div className="animate-marquee flex space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="bg-gray-100 px-8 py-4 rounded-lg text-gray-600 font-semibold text-lg whitespace-nowrap">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}