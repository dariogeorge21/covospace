import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-lg">
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Exclusive Offices & Workspaces in the Center of Kochi.
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Covospace is a premier coworking and shared workspace provider based in Kochi, Kerala. 
              We offer fully managed private offices, collaborative coworking spaces, meeting rooms, 
              and virtual office services.
            </p>
            <button className="bg-[#5ab834] text-white px-8 py-3 rounded-lg hover:bg-[#4a9e2d] transition-all duration-300 flex items-center font-semibold shadow-lg hover:shadow-xl">
              Quick Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}