
const blogData = [
  {
    id: 1,
    title: "The Future of Remote Work",
    excerpt: "Exploring how coworking spaces are reshaping the modern workplace experience.",
    date: "Dec 15, 2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Productivity Tips for Entrepreneurs",
    excerpt: "Essential strategies to maximize your efficiency in a shared workspace environment.",
    date: "Dec 12, 2023",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Building Your Network",
    excerpt: "How coworking spaces foster meaningful professional connections and collaborations.",
    date: "Dec 8, 2023",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Design Trends in Workspaces",
    excerpt: "Latest interior design trends that are transforming office spaces worldwide.",
    date: "Dec 5, 2023",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Sustainable Office Practices",
    excerpt: "Green initiatives and eco-friendly practices for modern workspaces.",
    date: "Dec 1, 2023",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Work-Life Balance Guide",
    excerpt: "Maintaining healthy boundaries while working in flexible environments.",
    date: "Nov 28, 2023",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    title: "Technology in Coworking",
    excerpt: "How smart technology is enhancing the coworking experience for professionals.",
    date: "Nov 25, 2023",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    title: "Community Building Strategies",
    excerpt: "Creating strong communities within shared workspace environments.",
    date: "Nov 22, 2023",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
  }
];

const SeeMoreIcon = () => (
  <svg width="36" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="56" height="56" fill="url(#pattern0_78_188)"/>
    <defs>
    <pattern id="pattern0_78_188" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_78_188" transform="scale(0.0142857)"/>
    </pattern>
    <image id="image0_78_188" width="70" height="70" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAHFSURBVHhe7doxUgIxGMVx9B7MWENjCZVWnICtxTtwDc4g1jR6A62g1IbagnvgPuYbx1GeFvsl+bLz/g3Jlj+SLMPuxfF4HKjfXdqn+pFgSIIhCYYkGJJgSIIhCYYkGJJgSIIhCYYkGJJgSIIhCYYkGJLrP3ibzWax2+1ubJq16XT6Mp/PH23aOTcYoCyXywebFmm1Wi28cNy2UqmV8r3tdntrw865wTRN47aMI+R6xhwOh6vUK8fOsbMro91G63Y73du0U1U9PvnvHPOEqeZ2nftwrwKGocxmsycbuhcehqHg1tzCPNvUvdAwf6F4/pg7V1iYkigoJExpFBQOJgIKCgUTBQWFgYmEgkLARENBxWEioqCiMFFRUDGYyCioCEx0FJQdpgYUlBWmFhSUDaYmFJQFpjYUlBymRhSUFKZWFJQMpmYUlASmdhTkDtMHFOQK0xcU5Aaz3++v+4KC3GDa1XJnw69qRUFuMKPR6N2Gp3KgDIfDDxuewjsyNuxckheHmqZZTyaTV7ucNGxhrNbxePzm+UVU9VA/Z+63674kGJJgSIIhCYYkGJJgSIIhCYYkGJJgSIIhCYYkGJJgSIIhCeZsg8EnBGYiVupgVqsAAAAASUVORK5CYII="/>
    </defs>
  </svg>
);

const Blog = () => {
  return (
    // The main container with a black background and large rounded corners
    <div className="relative min-w-screen-2xl mx-60 overflow-hidden">
    <div className="bg-black text-white font-sans rounded-3xl p-6 sm:p-8 md:p-10">
      
      {/* Header section with title and button */}
      <header className="flex justify-between items-center">
        <h2 className="text-3xl sm:text-5xl" style={{fontFamily : 'cursive'}}>Blogs</h2>
        <button className="bg-lime-500 hover:bg-lime-600 transition-colors text-black text-sm font-semibold flex items-center gap-2 px-4 py-2 rounded-full">
          <SeeMoreIcon />
          <span>See More</span>
        </button>
      </header>

      {/* Grid for the blog posts */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        
        {blogData.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            {/* Blog Image */}
            <div className="relative h-32 sm:h-36 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            {/* Blog Content */}
            <div className="p-3 sm:p-4">
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base line-clamp-2 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-2">
                {post.excerpt}
              </p>
              <p className="text-gray-400 text-xs">
                {post.date}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
    </div>
  );
};

export default Blog;
