export default function Gallery() {
  const images = [
    'https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          <strong>Workspaces Built to Inspire You.</strong>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image} 
                alt={`Workspace ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-[#5ab834] text-white px-8 py-3 rounded-lg hover:bg-[#4a9e2d] transition-colors font-semibold text-lg shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
        
        <div className="mt-16">
          <blockquote className="bg-gray-50 border-l-4 border-[#5ab834] p-6 rounded-r-lg max-w-2xl">
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "Covospace has transformed the way we work. The professional environment and 
              excellent amenities have significantly boosted our team's productivity."
            </p>
            <footer className="mt-4">
              <cite className="text-[#5ab834] font-semibold">- Sarah Johnson, Tech Startup Founder</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}