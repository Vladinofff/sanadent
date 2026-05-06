import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { partners } from '../data/partners'

export default function Parteneri() {
  return (
    <>
      <PageHeader
        eyebrow="Parteneri"
        title="Lucrăm cu cele mai bune branduri"
        description="Alegem partenerii cu grijă pentru a oferi pacienților noștri cele mai bune materiale și tehnologii."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group bg-white rounded-3xl p-8 border border-sana-gray-100 hover:border-sana-lime/40 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Logo placeholder - înlocuiește cu logo real */}
                <div className="h-24 bg-sana-cream rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sana-gray-900 transition-colors duration-500">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-display text-xl text-sana-gray-700 group-hover:text-sana-lime transition-colors duration-500">
                      {p.name}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display text-sana-gray-900 mb-3">{p.name}</h3>
                {p.description && (
                  <p className="text-sm text-sana-gray-600 leading-relaxed mb-5">{p.description}</p>
                )}

                {p.website && (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sana-gray-900 font-medium pt-4 border-t border-sana-gray-100 hover:text-sana-lime-dark transition-colors"
                  >
                    Vizitează site
                    <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
