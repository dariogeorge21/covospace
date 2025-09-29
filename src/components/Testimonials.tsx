import TestimonialCardBackground from "./ui/TestimonalBackground";
import QuoteIcon from "./ui/QuoteIcon";

const testimonialsData = [
  {
    quote: "Their smart panels transformed our classrooms. Teaching is more interactive, and students love it.",
    name: "Rohan Patel",
    handle: "@rohanpatel",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Their smart panels transformed our classrooms. Teaching is more interactive, and students love it.",
    name: "Kevin John",
    handle: "@kevinjohn",
    imageUrl: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    quote: "Their smart panels transformed our classrooms. Teaching is more interactive, and students love it.",
    name: "Emily Johnson",
    handle: "@emilyjohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Their smart panels transformed our classrooms. Teaching is more interactive, and students love it.",
    name: "Rohan Patel",
    handle: "@rohanpatel",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Their smart panels transformed our classrooms. Teaching is more interactive, and students love it.",
    name: "Kevin John",
    handle: "@kevinjohn",
    imageUrl: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    quote: "Their smart panels transformed our classrooms. Teaching is more interactive, and students love it.",
    name: "Emily Johnson",
    handle: "@emilyjohnson",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
];

// --- Reusable SVG Quote Icon ---


// --- Single Testimonial Card Component ---
const TestimonialCard = ({ quote, name, handle, imageUrl }: { quote: string; name: string; handle: string; imageUrl: string }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative rounded-lg overflow-hidden mb-6">
        <TestimonialCardBackground />
        <div className="relative z-10 p-6">
          <QuoteIcon />
          <p className="text-gray-700 mt-4 text-base">
            "{quote}"
          </p>
        </div>
      </div>
      <div className="flex items-center px-6">
        <img 
          className="w-12 h-12 rounded-full object-cover" 
          src={imageUrl} 
          alt={name} 
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-500 text-sm">{handle}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Testimonials Section Component ---
const Testimonials = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900">
            Listen what our <span className="text-green-500 font-medium">users</span> have to say
          </h2>
        </div>
        
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              handle={testimonial.handle}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
