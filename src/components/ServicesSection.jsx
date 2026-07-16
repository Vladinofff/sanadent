import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Smile, Sparkles, Microscope, Heart, Stethoscope, Baby, Shield, Wrench, Anchor, Layers } from 'lucide-react'
import { services } from '../data/services'

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

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16 items-end">
          <div>
            <div className="eyebrow mb-4">Tratamentele noastre</div>
            <h2 className="text-3xl lg:text-4xl text-sana-gray-900 leading-tight">
              Tratamente <span className="italic">complete</span> pentru fiecare nevoie
            </h2>
          </div>
          <p className="text-sana-gray-600 leading-relaxed lg:pb-2">
            De la profilaxie și estetică la chirurgie complexă, oferim întregul spectru de servicii stomatologice într-o singură clinică, cu echipamente de ultimă generație și o echipă de specialiști dedicați.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Smile
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link
  to={`/tratament/${service.id}`} // <--- Aceasta este modificarea!
  className="group relative block bg-sana-cream rounded-3xl p-7 h-full overflow-hidden border border-transparent hover:border-sana-lime/40 transition-all duration-500 hover:-translate-y-1"
>
                  <div className="w-12 h-12 bg-sana-gray-900 group-hover:bg-sana-lime rounded-xl flex items-center justify-center text-sana-lime group-hover:text-sana-gray-900 mb-5 transition-all duration-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl text-sana-gray-900 mb-3 leading-tight">{service.title}</h3>
                  <p className="text-sm text-sana-gray-600 leading-relaxed mb-6">{service.short}</p>
                  <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sana-gray-900 font-medium">
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
  )
}
