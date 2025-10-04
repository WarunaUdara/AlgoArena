import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const contacts = [
    {
      role: 'Chairperson',
      name: 'Name',
      email: 'email@example.com'
    },
    {
      role: 'Co-Chairperson',
      name: 'Name',
      email: 'email@example.com'
    },
    {
      role: 'Coordinating Head',
      name: 'Name',
      email: 'email@example.com'
    }
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
      

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            Got questions?
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Reach out to us, we&apos;re here to help you make the most of your hackathon experience!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-950/30 to-blue-950/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-700/50 border-4 border-blue-500/30 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👤</span>
                </div>
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
                className="flex items-center justify-center gap-2 w-12 h-12 mx-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 transform hover:scale-110 group"
                aria-label={`Email ${contact.role}`}
              >
                <FaEnvelope className="text-white text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact