import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'

// Editează aici cu cazurile reale ale clinicii
// Pentru fiecare caz: pune pozele în public/cazuistica/ și referă cu /cazuistica/numefisier.jpg
// Exemplu: before: '/cazuistica/caz1-inainte.jpg', after: '/cazuistica/caz1-dupa.jpg'
const cases = [
  { id: 1, title: 'Reabilitare orală completă', category: 'Implantologie', before: '', after: '', desc: 'Restaurare completă cu implanturi și coroane ceramice.' },
  { id: 2, title: 'Fatete No Prep', category: 'Estetică Dentară', before: '/fatete1.jpeg', after: '/fatete2.jpeg', desc: 'Albire în cabinet cu rezultate vizibile imediat.' },
  { id: 3, title: 'Fațete ceramice', category: 'Estetică Dentară', before: '', after: '', desc: 'Design digital al zâmbetului cu fațete premium.' },
  { id: 4, title: 'Tratament Invisalign', category: 'Ortodonție', before: '', after: '', desc: 'Aliniere cu gutiere transparente — 14 luni.' },
  { id: 5, title: 'Implant unitar', category: 'Implantologie', before: '', after: '', desc: 'Înlocuirea unui dinte lipsă cu implant Megagen.' },
  { id: 6, title: 'Coroane pe zirconiu', category: 'Protetică', before: '', after: '', desc: 'Reabilitare cu coroane ceramice pe suport de zirconiu.' },
  { id: 7, title: 'Tratament endodontic', category: 'Endodonție', before: '', after: '', desc: 'Salvarea unui dinte prin tratament de canal la microscop.' },
  { id: 8, title: 'Aparat dentar fix', category: 'Ortodonție', before: '', after: '', desc: 'Aliniere clasică cu aparat metalic — 18 luni.' },
  { id: 9, title: 'Reconstrucție carii frontale', category: 'Restaurare Coronară', before: '', after: '', desc: 'Obturații estetice fronte cu rezultate naturale.' },
]

const filters = ['Toate', 'Implantologie', 'Estetică Dentară', 'Ortodonție', 'Protetică', 'Endodonție', 'Restaurare Coronară']

export default function Cazuistica() {
  const [activeFilter, setActiveFilter] = useState('Toate')

  const filtered = activeFilter === 'Toate'
    ? cases
    : cases.filter(c => c.category === activeFilter)

  return (
    <>
      <PageHeader
        eyebrow="Cazuistică"
        title="Rezultate care vorbesc"
        description="Câteva dintre transformările pe care le-am realizat împreună cu pacienții noștri."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-sana-gray-900 text-sana-lime'
                    : 'bg-white text-sana-gray-700 hover:bg-sana-gray-100 border border-sana-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, idx) => (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-sana-gray-200 rounded-3xl aspect-[4/5] overflow-hidden mb-4">
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Coloana ÎNAINTE */}
                    <div className="relative bg-sana-gray-300 overflow-hidden">
                      {c.before ? (
                        <img
                          src={c.before}
                          alt={`${c.title} - înainte`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sana-gray-500 text-[10px] uppercase tracking-widest">
                          Înainte
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                        Înainte
                      </div>
                    </div>

                    {/* Coloana DUPĂ */}
                    <div className="relative bg-sana-gray-200 overflow-hidden">
                      {c.after ? (
                        <img
                          src={c.after}
                          alt={`${c.title} - după`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sana-gray-500 text-[10px] uppercase tracking-widest">
                          După
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-sana-lime text-sana-gray-900 text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium">
                        După
                      </div>
                    </div>
                  </div>

                  {/* Overlay cu informații la hover */}
                  <div className="absolute inset-0 bg-sana-gray-900/0 group-hover:bg-sana-gray-900/50 transition-colors duration-500 flex items-end p-6 pointer-events-none">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="text-xs tracking-[0.2em] uppercase text-sana-lime mb-1">{c.category}</div>
                      <div className="text-xl font-display mb-2">{c.title}</div>
                      <div className="text-xs text-sana-gray-200">{c.desc}</div>
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="text-xs tracking-[0.2em] uppercase text-sana-lime-dark mb-1">{c.category}</div>
                  <h3 className="text-xl text-sana-gray-900 font-display">{c.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
