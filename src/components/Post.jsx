import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { assets } from '../assets/assets'

const Post = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mt-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Recent Post</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
          View All
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <img
            src={assets.sec3_image} 
            alt="Person wearing VR headset" 
            width={600} 
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-500">DEVELOPMENT</span>
              <span className="text-xs text-gray-400">14 JUNE 2023</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              How to make a Game look more attractive with New VR & AI Technology
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Gaming has been evolving for far many years and bringing to gamers new immersive experiences and cutting-edge. Whether it's publishing state-of-the-art processes, building helpful products or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
            </p>
          </div>
          
          <a href="#" className="inline-block mt-4">
            <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Post
