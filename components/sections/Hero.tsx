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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-left lg:pr-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl  tracking-wider mb-2 bg-gradient-to-r text-white bg-clip-text ">
                ALGOARENA
              </h1>
              
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-7">
                A Journey from Learning to Building
                </p>
              
              
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  register →
                </button>
                <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  learn more ↓
                </button>
              </div>
            </div>
            
            {/* Right Side - Phone Mockup */}
            <div className="flex justify-center lg:justify-center">
              <div className="">
                {/* Phone Frame */}
                <div className="w-64 h-[520px] md:w-72 md:h-[580px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-black rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                    
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