import React from 'react'
import Image from 'next/image'
import ScrollAnimation from '../ui/scroll-animation'

const Partners = () => {
  // Partner logos
  const partners = [
    { id: 1, name: 'Articom', logo: '/articom.webp', link: 'https://articom.io/' },
    { id: 2, name: 'HackSL', logo: '/hackSL.png', link: 'https://chat.whatsapp.com/GkTITFPgoYXCcYdHCVpxej' },
    { id: 3, name: 'Shanthi Travels', logo: '/shanthi travels.jpg', link: 'https://shanthitravels.com/' },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
          </ScrollAnimation>
        </div>

        {/* Partners Grid */}
        <ScrollAnimation>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative backdrop-blur-sm border rounded-2xl p-3 sm:p-4 transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 46, 186, 0.1), rgba(0, 46, 186, 0.02))',
                borderColor: 'rgba(0, 46, 186, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 46, 186, 0.4)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 46, 186, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 46, 186, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Partner Logo */}
              <div className="relative w-full h-16 sm:h-20 flex items-center justify-center mb-2 sm:mb-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="object-contain max-h-12 sm:max-h-16 w-auto filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Partner Name */}
              <div className="text-center border-t pt-2 sm:pt-3" style={{ borderColor: 'rgba(0, 46, 186, 0.2)' }}>
                <h3 className="text-xs sm:text-base font-semibold text-white">
                  {partner.name}
                </h3>
              </div>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom right, rgba(0, 46, 186, 0.05), transparent)' }}
              ></div>
            </a>
          ))}
        </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Partners