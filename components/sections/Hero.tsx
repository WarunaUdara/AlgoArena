import React from 'react'
import Plasma from '../ui/Plasma'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Plasma 
          color="#002EBA"
          speed={0.3}
          direction="forward"
          scale={2.8}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      
      {/* Content Layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen lg:min-h-0">
            
            {/* Left Side - Text Content */}
            {/* Mobile: Order 2 (bottom), Desktop: Order 1 (left) */}
            <div className="text-center lg:text-left lg:pr-12 order-2 lg:order-1 flex flex-col justify-end lg:justify-center pb-8 lg:pb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wider mb-2 text-white">
                ALGOARENA
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 lg:mb-7">
                A Journey from Learning to Building
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white hover:bg-gray-100 text-black rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  register →
                </button>
                <button className="px-6 py-3 lg:px-8 lg:py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  learn more ↓
                </button>
              </div>
            </div>
            
            {/* Right Side - Phone Mockup */}
            {/* Mobile: Order 1 (top), Desktop: Order 2 (right) */}
            <div className="flex justify-center lg:justify-center order-1 lg:order-2 flex-1 lg:flex-none items-center pt-16 lg:pt-0">
              <div className="">
                {/* Phone Frame */}
                <div className="w-52 h-[420px] md:w-64 md:h-[520px] lg:w-72 lg:h-[580px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                    {/* Add your robot avatar here */}
                    <div className="text-white text-4xl">🤖</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero