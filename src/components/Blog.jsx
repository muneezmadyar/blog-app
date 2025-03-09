import { BlogData } from "../assets/assets" 
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Blog = ({ goBack }) => {

  useEffect(() => {
    console.log("Blog Page Rendered");
  }, []);

  return (
<div>
    <Navbar />
   
    
    <div className="max-w-7xl mx-auto mt-14 px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find our all blogs from here</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our collection of insightful articles covering development, travel, sports and more to stay informed
          and inspired.
        </p>
      </div>

      {/* Back button */}
      <div className="mb-8">
        <button onClick={goBack} className="flex items-center text-purple-600 hover:text-purple-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
         <Link to="/"> Back to Home</Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogData.map((blog, index) => (
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
    </div>
    <Footer/>
    </div>
  )
}

export default Blog

