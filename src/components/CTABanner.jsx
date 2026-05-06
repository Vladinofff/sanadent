import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="py-16 bg-sana-cream">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-sana-lime rounded-3xl p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl text-sana-gray-900 mb-4 leading-tight">
              Programează o consultație astăzi
            </h2>
            <p className="text-sana-gray-800 leading-relaxed max-w-xl">
              Răspundem în maxim 24 de ore. Prima consultație include un plan de tratament personalizat, adaptat nevoilor tale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link to="/contact" className="btn-dark justify-center">
              Programează-te <ArrowRight size={16} />
            </Link>
            <a href="tel:+40786511919" className="inline-flex items-center justify-center gap-2 text-sana-gray-900 px-7 py-3.5 text-sm font-medium tracking-widest uppercase border border-sana-gray-900 rounded-full hover:bg-sana-gray-900 hover:text-sana-lime transition-all duration-300">
              <Phone size={16} /> Sună acum
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
