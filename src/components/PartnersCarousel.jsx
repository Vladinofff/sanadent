import { Link } from 'react-router-dom'
import { partners } from '../data/partners'

export default function PartnersCarousel() {
  // Duplicăm pentru loop continuu
  const looped = [...partners, ...partners]

  return (
    <section className="py-16 bg-white border-y border-sana-gray-100">
      <div className="container-x">
        <div className="text-center mb-10">
          <div className="eyebrow mb-3">Partenerii noștri</div>
          <h3 className="text-2xl lg:text-3xl font-display text-sana-gray-900">
            Lucrăm cu cele mai bune <span className="italic">branduri</span>
          </h3>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {looped.map((partner, idx) => (
            <Link
              key={`${partner.id}-${idx}`}
              to="/parteneri"
              className="flex-shrink-0 w-48 h-24 bg-sana-cream rounded-2xl flex items-center justify-center px-6 group hover:bg-white hover:shadow-md transition-all duration-300"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-sana-gray-700 group-hover:text-sana-gray-900 font-display text-lg text-center transition-colors duration-300">
                  {partner.name}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Gradient fade margins */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}
