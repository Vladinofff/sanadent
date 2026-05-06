import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Info } from 'lucide-react'
import { priceCategories, priceList } from '../data/prices'

export default function Preturi() {
  const [activeCategory, setActiveCategory] = useState('generale')
  const [search, setSearch] = useState('')

  const items = priceList[activeCategory] || []
  const filtered = search.trim()
    ? items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
    : items

  return (
    <>
      <PageHeader
        eyebrow="Prețuri"
        title="Listă de prețuri transparentă"
        description=" Pentru un plan personalizat, te invităm la o consultație."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          {/* Info banner */}
          <div className="bg-sana-lime/20 border border-sana-lime rounded-2xl p-5 mb-10 flex items-start gap-3 max-w-4xl mx-auto">
            <Info className="text-sana-gray-900 flex-shrink-0 mt-0.5" size={20} />
            <div className="text-sm text-sana-gray-800 leading-relaxed">
              Prețurile sunt în <strong>RON</strong> și sunt orientative. Costul final al unui tratament se stabilește în urma consultației, în funcție de complexitatea cazului. Pentru tratamente complexe oferim plan personalizat și posibilitatea plății în rate.
            </div>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-sana-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Caută un serviciu..."
                className="w-full pl-12 pr-5 py-4 rounded-full border border-sana-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition"
              />
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {priceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearch('') }}
                className={`px-5 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-sana-gray-900 text-sana-lime'
                    : 'bg-white text-sana-gray-700 hover:bg-sana-gray-100 border border-sana-gray-200'
                }`}
              >
                {cat.label} <span className="opacity-60 ml-1">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Price table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-sana-gray-100 max-w-4xl mx-auto"
            >
              {filtered.length === 0 ? (
                <div className="p-12 text-center text-sana-gray-500">
                  Nu am găsit servicii care să corespundă căutării.
                </div>
              ) : (
                <div className="divide-y divide-sana-gray-100">
                  {filtered.map((item, idx) => (
                    <motion.div
                      key={`${item.name}-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.02 }}
                      className="flex items-center justify-between gap-6 px-6 lg:px-8 py-5 hover:bg-sana-cream transition-colors duration-200"
                    >
                      <div className="text-sana-gray-800 leading-relaxed">{item.name}</div>
                      <div className="flex items-baseline gap-1 flex-shrink-0">
                        <span className="text-2xl font-display text-sana-gray-900 font-medium">{item.price}</span>
                        <span className="text-xs tracking-widest uppercase text-sana-gray-500">RON</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <p className="text-center text-xs text-sana-gray-500 mt-8 max-w-2xl mx-auto">
 
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
