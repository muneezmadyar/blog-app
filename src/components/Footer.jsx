"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-purple-600 py-12 px-4 relative overflow-hidden">
        {/* Wavy Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z" fill="white" />
            <path d="M0,150 C150,250 350,50 500,150 C650,250 850,50 1000,150 L1000,300 L0,300 Z" fill="white" />
            <path d="M0,200 C150,300 350,100 500,200 C650,300 850,100 1000,200 L1000,300 L0,300 Z" fill="white" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-white text-3xl font-bold mb-6">
            Get our stories delivered From us to your inbox weekly.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get started
            </button>
          </form>

          <p className="text-white text-sm mt-3 opacity-80">
            Get a response tomorrow if you submit by 9pm today. If we receive your signup after 9pm, you'll receive the
            response the following day.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link to="/" className="text-purple-600 text-2xl font-bold">
              Zarrin
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8 mb-6">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-6">
            <Link to="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors">
              <img src={assets.facebook} alt="Facebook" width="8" height="8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors">
              <img src={assets.IG} alt="Instagram" width="8" height="8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors">
              <img src={assets.LN} alt="LinkedIn" width="8" height="8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link to="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors">
              <img src={assets.YT} alt="Twitter" width="8" height="8" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">Copyright Reserved to © 2023 All Right Reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

