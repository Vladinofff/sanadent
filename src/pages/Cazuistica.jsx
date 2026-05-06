import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'

// Editează aici cu cazurile reale ale clinicii
// Pentru fiecare caz: pune pozele în public/cazuistica/ și referă cu /cazuistica/numefisier.jpg
const cases = [
  { id: 1, title: 'Reabilitare orală completă', category: 'Implantologie', before: '', after: '', desc: 'Restaurare completă cu implanturi și coroane ceramice.' },
  { id: 2, title: 'Albire profesională', category: 'Estetică Dentară', before: '', after: '', desc: 'Albire în cabinet cu rezultate vizibile imediat.' },
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
                  {/* Înlocuiește cu poze reale — split before/after:
                      <img src={c.before} alt="Înainte" className="absolute inset-0 w-1/2 h-full object-cover" />
                      <img src={c.after} alt="După" className="absolute right-0 top-0 w-1/2 h-full object-cover" />
                  */}
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="bg-sana-gray-300 flex items-center justify-center text-sana-gray-500 text-[10px] uppercase tracking-widest">
                      Înainte
                    </div>
                    <div className="bg-sana-gray-200 flex items-center justify-center text-sana-gray-500 text-[10px] uppercase tracking-widest">
                      După
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-sana-gray-900/0 group-hover:bg-sana-gray-900/40 transition-colors duration-500 flex items-end p-6">
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
