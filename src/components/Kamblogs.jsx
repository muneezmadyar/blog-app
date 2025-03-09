import { BlogData } from "../assets/assets"
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Kamblogs = () => {
  const navigate = useNavigate();
  // Only take the first 3 blogs to display
  const featuredBlogs = BlogData.slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Recent Post</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out our latest articles and stay updated with the newest trends and insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={blog.image || `/placeholder.svg?height=300&width=400&text=Blog+${index + 1}`}
                alt={blog.heading}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-purple-600 uppercase">{blog.title}</span>
                <span className="text-xs text-gray-500">{blog.date}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{blog.heading}</h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.text}</p>

              <a href="/blog" className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-12">
      
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
            onClick={() => navigate("/blog")}>
            See More
          </button>
        
      </div>
    </div>
  )
}

export default Kamblogs

