import React from 'react';
import Image from 'next/image';
import RippleGrid from '../ui/RippleGrid';
import  CountdownTimer  from '../ui/CountDownTimer';
import ScrollAnimation from '../ui/scroll-animation';

const About = () => {
  // Set the target date for the countdown
  const registrationDate = "2025-10-13T12:00:00";

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <RippleGrid
          gridColor="#002EBA"
          rippleIntensity={0.01}
          gridSize={17}
          opacity={0.5}
          vignetteStrength={1}
          
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Top Text Section */}
        <ScrollAnimation>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          What is ALGOARENA
        </h2>
        </ScrollAnimation>
        <ScrollAnimation>
        <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed mb-6">
          AlgoArena is an inter-university coding competition organized by the Leo Club of the University of Sri Jayewardenepura, 
          in collaboration with the IEEE Student Branch and Computer Society Chapter.
        </p>
        <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed mb-6">
          The competition consists of two exciting rounds: an online preliminary round and a physical final round, 
          accompanied by workshops designed to enhance participants&apos; skills in competitive programming and problem-solving.
        </p>
        </ScrollAnimation>
        <ScrollAnimation>
        <p className="max-w-3xl mx-auto text-white text-base lg:text-lg leading-relaxed">
          Beyond the competition, AlgoArena includes a platform to showcase Leo Club projects across Sri Lanka, 
          encouraging learning, collaboration, and leadership among students. This is your opportunity to challenge yourself, 
          connect with innovators, and build something extraordinary.
        </p>
        </ScrollAnimation>

        {/* Bottom Section with Image and Countdown */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Image */}
          <ScrollAnimation>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/Gemini_Generated_Image_b07qsib07qsib07q.png"
                alt="Team collaborating at a hackathon"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              
            </div>
          </div>
          </ScrollAnimation>

            {/* Countdown Timer */}
            <ScrollAnimation>
            <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center lg:text-left">
              Registration Opens In
            </h3>
            <div className="w-full flex justify-center lg:justify-start"></div>
              <CountdownTimer targetDate={registrationDate} />
            </div>
            
            </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;