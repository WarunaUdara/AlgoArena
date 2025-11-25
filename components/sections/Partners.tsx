import React from 'react'
import Image from 'next/image'
import ScrollAnimation from '../ui/scroll-animation'
import { Marquee } from '../ui/Marquee'

const Partners = () => {
  // Partner logos
  const partners = [
    { id: 1, name: 'Articom', logo: '/partner-articom.webp', link: 'https://articom.io/' },
    { id: 2, name: 'HackSL', logo: '/hackSL.png', link: 'https://chat.whatsapp.com/GkTITFPgoYXCcYdHCVpxej' },
    { id: 3, name: 'Shanthi Travels', logo: '/shanthi travels.jpg', link: 'https://shanthitravels.com/' },
    { id: 4, name: 'Pnyx', logo: '/partner-pnyx.png', link: 'https://www.facebook.com/share/1DRF5Tcuni/' },
    { id: 5, name: 'ART TV', logo: '/partner-arttv.jpg', link: 'https://www.facebook.com/ART.Television/' },
    { id: 6, name: 'LadyJ', logo: '/partner-ladyj.jpg', link: 'https://www.facebook.com/LadyJMaharagamaBorella' },
    { id: 7, name: 'Angana Pawansara photography', logo: '/partner-angana.jpg', link: 'https://www.facebook.com/profile.php?id=61580222933790' },
    { id: 8, name: 'PearlBay', logo: '/partner-pearlbay.jpg', link: 'https://www.facebook.com/pearlbaysrilanka' },
    { id: 9, name: 'Imperial College of Business Studies', logo: '/partner-icbs.jpg', link: 'https://www.facebook.com/share/1NDv8hQdWp/' },
    { id: 10, name: 'Abeysinghe Super Center', logo: '/partner-supermarket.jpg', link: 'https://www.facebook.com/profile.php?id=61574939009994' },
    { id: 11, name: 'Elegant Capitals Pvt Ltd', logo: '/partner-elegant-capitals.jpg', link: 'https://www.cineko.lk/' },
  ]

  const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => (
    <a
      href={partner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative backdrop-blur-sm border rounded-2xl p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col cursor-pointer w-[200px] sm:w-[250px]"
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
      <div className="relative w-full h-20 sm:h-24 flex items-center justify-center mb-3 sm:mb-4">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={150}
          height={60}
          className="object-contain max-h-16 sm:max-h-20 w-auto filter brightness-90 group-hover:brightness-100 transition-all duration-300"
        />
      </div>
      <div className="text-center border-t pt-3 sm:pt-4" style={{ borderColor: 'rgba(0, 46, 186, 0.2)' }}>
        <h3 className="text-sm sm:text-base font-semibold text-white">
          {partner.name}
        </h3>
      </div>
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom right, rgba(0, 46, 186, 0.05), transparent)' }}
      ></div>
    </a>
  )

  return (
    <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black"></div>

      {/* Content */}
      <div className="relative container mx-auto px-0 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <ScrollAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Partners
            </h2>
          </ScrollAnimation>
        </div>

        {/* Partners Marquee */}
        <ScrollAnimation>
          <div className="relative -mx-4 sm:mx-0">
            <Marquee pauseOnHover className="[--marquee-duration:30s]">
              {partners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </Marquee>
            {/* Additional fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 bg-gradient-to-r from-black via-black/95 to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-40 bg-gradient-to-l from-black via-black/95 to-transparent pointer-events-none z-20" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Partners