import React from 'react'

const Partners = () => {
  // Placeholder data for partners - you can add real logos later
  const partners = [
    { id: 1, name: 'Partner 1' },
    { id: 2, name: 'Partner 2' },
    { id: 3, name: 'Partner 3' },
  ]

  return (
    <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-gradient-to-b from-blue-950/30 to-blue-950/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 h-28 flex items-center justify-center hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Placeholder text */}
              <p className="text-sm text-gray-500">{partner.name}</p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners