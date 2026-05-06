import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search } from 'lucide-react'
import { faqs } from '../data/faqs'

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(0)
  const [search, setSearch] = useState('')

  const filtered = search.trim()
    ? faqs.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
      )
    : faqs

  return (
    <>
      <PageHeader
        eyebrow="Întrebări frecvente"
        title="Răspunsuri la cele mai comune întrebări"
        description="Tot ce ar trebui să știi despre tratamentele și serviciile noastre."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x max-w-4xl">
          {/* Search */}
          <div className="mb-10">
            <div className="relative">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-sana-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setOpenIdx(-1) }}
                placeholder="Caută o întrebare..."
                className="w-full pl-12 pr-5 py-4 rounded-full border border-sana-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition"
              />
            </div>
            {search.trim() && (
              <p className="text-xs text-sana-gray-500 text-center mt-3">
                {filtered.length} {filtered.length === 1 ? 'rezultat găsit' : 'rezultate găsite'}
              </p>
            )}
          </div>

          {/* FAQ list */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center text-sana-gray-500 border border-sana-gray-100">
                Nu am găsit întrebări care să corespundă căutării. Încearcă alți termeni sau ne poți contacta direct.
              </div>
            ) : (
              filtered.map((faq, idx) => {
                const isOpen = openIdx === idx
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.02 }}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-sana-lime bg-sana-lime/10 shadow-sm'
                        : 'border-sana-gray-200 bg-white hover:border-sana-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full px-6 lg:px-8 py-5 flex items-center justify-between gap-4 text-left"
                    >
                      <span className={`text-base lg:text-lg font-medium transition-colors ${
                        isOpen ? 'text-sana-gray-900' : 'text-sana-gray-800'
                      }`}>
                        {faq.q}
                      </span>
                      <div className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 flex-shrink-0 ${
                        isOpen ? 'bg-sana-gray-900 text-sana-lime' : 'bg-sana-gray-100 text-sana-gray-700'
                      }`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-6 text-sana-gray-700 leading-relaxed border-t border-sana-lime/30 pt-5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white rounded-3xl p-10 border border-sana-gray-100">
            <h3 className="text-2xl font-display text-sana-gray-900 mb-3">
              Nu ai găsit răspunsul căutat?
            </h3>
            <p className="text-sana-gray-600 mb-6 max-w-xl mx-auto">
              Echipa noastră e gata să răspundă la orice întrebare. Contactează-ne și îți răspundem în maxim 24 de ore.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+40786511919" className="btn-primary">
                Sună acum →
              </a>
              <a href="mailto:office@sanadent.ro" className="btn-outline">
                Trimite email →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
