import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const leoLogos = [
    { id: 1, src: '/University logo .png', alt: 'University of Sri Jayewardenepura' },
    { id: 2, src: '/LCI_emblem_white.png', alt: 'Lions Clubs International' },
    { id: 3, src: '/Leo International logo.png', alt: 'Leo International' },
    { id: 4, src: '/LMD Logo 2025-2026.png', alt: 'Leo Multiple District 306' },
    { id: 5, src: '/DP logo - 20252026.png', alt: 'District President Logo' },
    { id: 6, src: '/LC USJ WHITE.png', alt: 'Leo Club USJ', isLarge: true },
  ]

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
        {/* Leo Club Logos Section */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {leoLogos.map((logo) => (
              <div
                key={logo.id}
                className={`relative transition-transform duration-300 hover:scale-110 ${
                  logo.isLarge
                    ? 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
                    : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20'
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                  quality={logo.isLarge ? 95 : 80} // Higher quality for last logo
                  sizes={
                    logo.isLarge
                      ? '(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px'
                      : '(max-width: 640px) 48px, (max-width: 768px) 56px, (max-width: 1024px) 64px, 80px'
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="w-40 h-24 relative">
              <Image
                src="/algoarena logo.jpg"
                alt="AlgoArena Logo"
                fill
                className="object-contain"
                loading="lazy"
                quality={90}
                sizes="160px"
              />
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