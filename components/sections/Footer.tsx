import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      {/* Animated Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full w-40 opacity-80 blur-sm"
          style={{
            background: 'linear-gradient(to right, transparent, #002EBA, transparent)',
            animation: 'shimmer 5s infinite linear'
          }}
        ></div>
        <div 
          className="absolute top-0 left-0 h-full w-40"
          style={{
            background: 'linear-gradient(to right, transparent, #002EBA, transparent)',
            animation: 'shimmer 5s infinite linear'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="w-40 h-24 bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">LOGO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A place where passionate minds unite to code, collaborate and innovate for a better future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200" style={{ color: '#002EBA' }}>›</span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200" style={{ color: '#002EBA' }}>›</span>
                  About
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200" style={{ color: '#002EBA' }}>›</span>
                  Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200" style={{ color: '#002EBA' }}>›</span>
                  Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div className="text-center md:text-left">
              <p className="mb-1">Organized by Leo Club of University of Sri Jayewardenepura</p>
              <p>In Collaboration with IEEE Student Branch & CS Chapter of USJ</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">©</span>
              <p className="whitespace-nowrap">2025 AlgoArena. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer