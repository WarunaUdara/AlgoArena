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
              className="group relative backdrop-blur-sm border rounded-2xl p-6 h-28 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
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
              {/* Placeholder text */}
              <p className="text-sm text-gray-500">{partner.name}</p>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(to bottom right, rgba(0, 46, 186, 0.05), transparent)' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners