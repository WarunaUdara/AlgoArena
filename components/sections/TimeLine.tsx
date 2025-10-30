"use client";

import React from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Timeline } from "@/components/ui/timeline";

const TimeLine = () => {
  const timelineData = [
    {
      title: "Workshop Sessions",
      date: "Phase 1",
      content: (
        <div className="border-l-2 pl-6 md:pl-8 space-y-6" style={{ borderColor: 'rgba(0, 46, 186, 0.3)' }}>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Workshop Sessions
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Three online workshop sessions to prepare participants for the competition.
            </p>
          </div>

          {/* Session 1 - Detailed */}
          <div className="bg-gradient-to-b from-transparent to-transparent border rounded-lg p-4 md:p-6" style={{ borderColor: 'rgba(0, 46, 186, 0.3)', backgroundColor: 'rgba(0, 46, 186, 0.05)' }}>
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                Session 1: APIs, Databases & Cloud Integration
              </h4>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-gray-300">
                <span className="text-gray-500">Date:</span>{" "}
                <span className="font-medium" style={{ color: '#FFFFFF' }}>October 5th, 2025</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">Time:</span>{" "}
                <span className="font-medium">8:00 PM</span>
              </p>
                <p className="text-gray-300">
                <span className="text-gray-500">Speaker:</span>{" "}
                <a 
                  href="https://www.linkedin.com/in/sureshmichael/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Mr. Suresh Michael Pieris
                </a>
                </p>
            </div>
          </div>

          {/* Session 2 */}
          <div className="bg-gradient-to-b from-transparent to-transparent border rounded-lg p-4 md:p-6" style={{ borderColor: 'rgba(0, 46, 186, 0.3)', backgroundColor: 'rgba(0, 46, 186, 0.05)' }}>
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                Session 2: UI/UX & best Practices to Mobile app Development
              </h4>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-gray-300">
                <span className="text-gray-500">Date:</span>{" "}
                <span className="font-medium" style={{ color: '#FFFFFF' }}>October 18th, 2025</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">Time:</span>{" "}
                <span className="font-medium">7:00 PM</span>
              </p>
                <p className="text-gray-300">
                <span className="text-gray-500">Speaker:</span>{" "}
                <a 
                  href="https://www.linkedin.com/in/kushanb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Mr. Kushan Bhareti
                </a>
                </p>
            </div>
          </div>

          {/* Session 3  */}
          <div className="bg-gradient-to-b from-transparent to-transparent border rounded-lg p-4 md:p-6" style={{ borderColor: 'rgba(0, 46, 186, 0.3)', backgroundColor: 'rgba(0, 46, 186, 0.05)' }}>
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                Session 3: Performance, Security & Scalability
              </h4>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-gray-300">
                <span className="text-gray-500">Date:</span>{" "}
                <span className="font-medium" style={{ color: '#FFFFFF' }}>November 8th, 2025</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">Time:</span>{" "}
                <span className="font-medium">8:00 PM</span>
              </p>
                <p className="text-gray-300">
                <span className="text-gray-500">Speaker:</span>{" "}
                <a 
                  href="https://www.linkedin.com/in/surani-tissera-437b5a94/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Dr. Surani Tissera
                </a>
                </p>
            </div>
          </div>
           {/* Session 4 */}
          <div className="bg-gradient-to-b from-transparent to-transparent border rounded-lg p-4 md:p-6" style={{ borderColor: 'rgba(0, 46, 186, 0.3)', backgroundColor: 'rgba(0, 46, 186, 0.05)' }}>
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                Session 4: Future & ML of mobile application development
              </h4>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-gray-300">
                <span className="text-gray-500">Date:</span>{" "}
                <span className="font-medium" style={{ color: '#FFFFFF' }}>November 15th, 2025</span>
              </p>
              <p className="text-gray-300">
                <span className="text-gray-500">Time:</span>{" "}
                <span className="font-medium">8:00 PM</span>
              </p>
                <p className="text-gray-300">
                <span className="text-gray-500">Speaker:</span>{" "}
                <a 
                  href="https://www.linkedin.com/in/sabilashanganeshan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                  style={{ color: '#FFFFFF' }}
                >
                  Mr. Sabilashan Ganeshan
                </a>
                </p>
            </div>
          </div>
          
        </div>
      ),
    },
    {
      title: "Preliminary Round",
      date: "Phase 2",
      content: (
        <div className="border-l-2 pl-6 md:pl-8" style={{ borderColor: 'rgba(0, 46, 186, 0.3)' }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Online Preliminary Round
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Submit a high-fidelity design prototype demonstrating your solution to the given problem statement. 
            Top performers advance to the final round.
          </p>
        </div>
      ),
    },
    {
      title: "Final Round",
      date: "Phase 3",
      content: (
        <div className="border-l-2 pl-6 md:pl-8" style={{ borderColor: 'rgba(0, 46, 186, 0.3)' }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Physical Final Round
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Selected finalists compete in person for the championship title and prizes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="timeline"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="container mx-auto z-10 relative">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-20">
            Timeline
          </h2>
        </ScrollAnimation>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default TimeLine;
