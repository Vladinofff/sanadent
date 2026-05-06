import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import StatsBanner from '../components/StatsBanner'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Wrench, MessageSquare, BookOpen } from 'lucide-react'

const subSections = [
  {
    to: '/de-ce-noi/echipa',
    icon: Users,
    title: 'Echipa',
    desc: 'Cunoaște medicii și asistenții care au grijă de zâmbetul tău.',
  },
  {
    to: '/de-ce-noi/dotari',
    icon: Wrench,
    title: 'Dotări',
    desc: 'Tehnologie modernă și aparatură de ultimă generație.',
  },
  {
    to: '/de-ce-noi/testimoniale',
    icon: MessageSquare,
    title: 'Testimoniale',
    desc: 'Ce spun pacienții noștri despre experiența SanaDent.',
  },
  {
    to: '/de-ce-noi/cazuistica',
    icon: BookOpen,
    title: 'Cazuistică',
    desc: 'Cazuri tratate cu succes — transformări reale.',
  },
]

export default function DeCeNoi() {
  // Calea către imaginea ta din folderul public
  const clinicImagePath = '/pozamare.jpg'

  return (
    <>
      <PageHeader
        eyebrow="De ce noi?"
        title="Locul în care zâmbetele întâlnesc inovația"
        description="Suntem o echipă pasionată de stomatologie modernă, dedicată sănătății și încrederii fiecărui pacient."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* CONTAINERUL IMAGINII CLINICII */}
          <div className="relative rounded-3xl aspect-[4/5] overflow-hidden bg-sana-gray-200 border border-sana-gray-100 shadow-md group">
            <img
  src={clinicImagePath}
  alt="Clinica stomatologică SanaDent"
  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Dacă imaginea nu se încarcă, ascundem tagul <img> și afișăm placeholderul de dedesubt
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />

            {/* Placeholder de rezervă (va apărea doar dacă imaginea lipsește din folderul public) */}
            <div className="absolute inset-0 hidden flex-col items-center justify-center p-6 text-center text-sana-gray-500 bg-sana-gray-200">
              <span className="text-xs uppercase tracking-widest font-semibold mb-2">
                Foto Clinică
              </span>
              <span className="text-[10px] italic">
                (Adaugă imaginea în public{clinicImagePath})
              </span>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4">Povestea SanaDent</div>
            <h2 className="text-4xl lg:text-5xl text-sana-gray-900 mb-8 leading-tight">
              Stomatologie cu <span className="italic">grijă</span> și precizie
            </h2>
            <div className="space-y-5 text-sana-gray-600 leading-relaxed">
              <p>
                SanaDent a fost gândită ca un loc unde fiecare pacient să se simtă în siguranță, ascultat și îngrijit cu profesionalism. Atmosfera caldă și standardele clinice înalte vă vor face să uitați de teama de dentist.
              </p>
              <p>
                Investim constant în tehnologie modernă și în formarea echipei, pentru a oferi tratamente de cea mai înaltă calitate. Credem că un zâmbet sănătos nu este doar o chestiune de estetică — este fundamentul încrederii și al stării de bine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBanner />

      {/* Sub-sections cards */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">Descoperă mai mult</div>
            <h2 className="text-4xl lg:text-5xl text-sana-gray-900 leading-tight">
              Ce ne <span className="italic">definește</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subSections.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.to}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    to={s.to}
                    className="group block bg-sana-cream rounded-3xl p-10 hover:bg-sana-gray-900 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-sana-gray-900 group-hover:bg-sana-lime rounded-2xl flex items-center justify-center text-sana-lime group-hover:text-sana-gray-900 mb-6 transition-all duration-500">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl text-sana-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                      {s.title}
                    </h3>
                    <p className="text-sana-gray-600 group-hover:text-sana-gray-300 leading-relaxed mb-6 transition-colors duration-500">
                      {s.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sana-gray-900 group-hover:text-sana-lime font-medium transition-colors duration-500">
                      Descoperă
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}