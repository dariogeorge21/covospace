const blogPosts = [
  {
    title: 'The Future of Coworking Spaces in Kochi',
    excerpt: 'Exploring how coworking spaces are transforming the business landscape in Kerala.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: 'March 15, 2024'
  },
  {
    title: '5 Benefits of Working in a Shared Office',
    excerpt: 'Discover why shared workspaces are becoming the preferred choice for modern businesses.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: 'March 10, 2024'
  },
  {
    title: 'Building a Professional Network Through Coworking',
    excerpt: 'Learn how coworking spaces facilitate meaningful professional connections.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    date: 'March 5, 2024'
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Latest from Our Blog
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-[#5ab834] text-sm font-medium mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="mt-4 text-[#5ab834] font-semibold hover:text-[#4a9e2d] transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}