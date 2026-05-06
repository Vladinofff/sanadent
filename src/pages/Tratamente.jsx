import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'
import { ArrowRight, Smile, Sparkles, Microscope, Heart, Stethoscope, Baby, Shield, Wrench, Anchor, Layers } from 'lucide-react'
import { services } from '../data/services'
import { Link } from 'react-router-dom' // <-- PASUL 1: Am importat Link-ul pentru navigare

const iconMap = {
  Anchor: Anchor,
  Stethoscope: Stethoscope,
  Shield: Shield,
  Wrench: Wrench,
  Microscope: Microscope,
  Heart: Heart,
  Sparkles: Sparkles,
  Layers: Layers,
  Smile: Smile,
  Baby: Baby,
}

export default function Tratamente() {
  return (
    <>
      <PageHeader
        eyebrow="Tratamente"
        title="Tratamente complete pentru fiecare nevoie"
        description="De la prevenție și estetică, la tratamente complexe — totul sub un singur acoperiș."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Smile
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  {/* PASUL 2: Am transformat întregul container într-un <Link> interactiv */}
                  <Link
                    to={`/tratament/${service.id}`} // Trimite către /tratament/chirurgie, /tratament/implantologie etc.
                    className="group block bg-white rounded-3xl p-8 border border-sana-gray-100 hover:border-sana-lime/40 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-sana-gray-900 group-hover:bg-sana-lime rounded-2xl flex items-center justify-center text-sana-lime group-hover:text-sana-gray-900 mb-6 transition-all duration-500 shrink-0">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl text-sana-gray-900 mb-3 leading-tight font-serif font-semibold">{service.title}</h3>
                    <p className="text-sana-gray-600 leading-relaxed mb-4 text-sm sm:text-base">{service.short}</p>
                    <p className="text-xs text-sana-gray-400 leading-relaxed mb-6 italic">{service.description}</p>
                    
                    {/* PASUL 3: Zona de jos acum reacționează frumos la hover-ul de pe întreg cardul */}
                    <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sana-gray-900 font-medium pt-4 border-t border-sana-gray-100 mt-auto">
                      Află mai multe
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-sana-gray-900" />
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}