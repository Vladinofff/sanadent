import { motion } from 'framer-motion'

const stats = [
  { value: '10+', label: 'Ani de experiență' },
  { value: '3500+', label: 'Pacienți mulțumiți' },
  { value: '100%', label: 'Pacienți care recomandă clinica' },
  { value: '8', label: 'Specializări medicale' },
]

export default function StatsBanner() {
  return (
    <section className="bg-sana-gray-900 py-16">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center lg:border-r last:border-r-0 border-sana-gray-800"
            >
              <div className="text-5xl lg:text-6xl font-display text-sana-lime mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-sana-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
