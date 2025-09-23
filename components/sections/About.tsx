import React from 'react';
import Image from 'next/image';
import RippleGrid from '../ui/RippleGrid';
import  CountdownTimer  from '../ui/CountDownTimer';

const About = () => {
  // Set the target date for the countdown
  const hackathonDate = "2025-09-28T09:00:00";

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <RippleGrid
          gridColor="#002EBA"
          rippleIntensity={0.01}
          gridSize={22}
          opacity={0.3}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        {/* Top Text Section */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          What is ALGOARENA
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-base lg:text-lg leading-relaxed">
          Welcome to AlgoArena. This hackathon is where ideas become reality.
          Collaborate with like-minded innovators to build cutting-edge solutions and
          challenge yourself in a high-energy environment. This is your platform to learn,
          create, and build something extraordinary.
        </p>

        {/* Bottom Section with Image and Countdown */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/Gemini_Generated_Image_b07qsib07qsib07q.png"
                alt="Team collaborating at a hackathon"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✨</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start">
            <CountdownTimer targetDate={hackathonDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;