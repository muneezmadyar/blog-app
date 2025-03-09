// import { MapPin, Mail, Phone } from "lucide-react"

import Navbar from "./Navbar"
import { assets } from "../assets/assets"
import Footer from "./Footer"

const Contact = () => {
  return (
    <div>
      <Navbar/>
    <div className="max-w-7xl mt-20 mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Address Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
           
            <img className="h-4 w-4" src={assets.office_icon} alt="" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Our Address</h3>
          <p className="text-gray-600 text-center">123 Business Street, New York, NY 10001</p>
        </div>

        {/* Email Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
           <img className="h-4 w-4" src={assets.email_icon} alt="" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 text-center">contact@example.com</p>
        </div>

        {/* Phone Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
            {/* <Phone className="h-6 w-6 text-purple-600" /> */}
            <img className="h-4 w-4" src={assets.phone_icon} alt="" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 text-center">+1 (555) 123-4567</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mb-12 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div className="col-span-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="col-span-1">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          {/* Subject Field */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>

          {/* Message Field */}
          <div className="col-span-2">
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact

