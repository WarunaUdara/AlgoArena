import React from "react";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import ScrollAnimation from "../ui/scroll-animation";

const Contact = () => {
  const contacts = [
    {
      role: "Co-Chairperson",
      name: "Rusira Sandul",
      email: "rusirasandulhw@gmail.com",
      image: "/rusira sandul-3.jpg",
      order: "order-2 lg:order-1", // 2nd on mobile, 1st on desktop
    },
    {
      role: "Chairperson",
      name: "Chamathka Dilshani",
      email: "chamathkad1108@gmail.com",
      image: "/Chamathka Dilshani.jpg",
      order: "order-1 lg:order-2", // 1st on mobile, 2nd (middle) on desktop
    },
    {
      role: "Coordinating Head",
      name: "Roshen Adithya",
      email: "roshenadithya05@gmail.com",
      image: "/Roshen Adithya.jpg",
      order: "order-3 lg:order-3", // 3rd on mobile, 3rd on desktop
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollAnimation>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          </ScrollAnimation>
          <ScrollAnimation>
          <p className="text-lg text-gray-400 mb-2">Got questions?</p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Reach out to us, we&apos;re here to help you make the most of your
            hackathon experience!
          </p>
          </ScrollAnimation>
        </div>

        {/* Contact Cards Grid */}
        <ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${contact.order}`}
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 46, 186, 0.1), rgba(0, 46, 186, 0.02))",
                borderColor: "rgba(0, 46, 186, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 46, 186, 0.4)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px -12px rgba(0, 46, 186, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 46, 186, 0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Profile Image */}
              <div
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-700/50 border-4 flex items-center justify-center overflow-hidden"
                style={{ borderColor: "rgba(0, 46, 186, 0.3)" }}
              >
                {contact.image ? (
                  <Image
                    src={contact.image}
                    alt={contact.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">👤</span>
                  </div>
                )}
              </div>

              {/* Role */}
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {contact.role}
              </h3>

              {/* Name */}
              <p className="text-lg text-gray-300 text-center mb-4">
                {contact.name}
              </p>

              {/* Email Button */}
              <a
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-12 h-12 mx-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 transform hover:scale-110 group"
                aria-label={`Email ${contact.name}`}
              >
                <FaEnvelope className="text-white text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
