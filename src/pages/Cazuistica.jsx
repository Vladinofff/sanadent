import { useState, useRef, useCallback } from 'react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'

// Editează aici cu cazurile reale ale clinicii
// Pentru fiecare caz: pune pozele în public/cazuistica/ și referă cu /cazuistica/numefisier.jpg
// IMPORTANT: pozele before/after trebuie să aibă aceeași dimensiune pentru slider să arate bine
const cases = [
  { id: 1, title: 'Supraproteza implanturi', category: 'Implantologie', before: '/bf1.jpeg', after: '/bf2.jpeg', desc: 'Recuperarea zâmbetului și a funcției masticatorii pentru pacienții cu edentații extinse.' },
  { id: 2, title: 'Fatete No Prep', category: 'Estetică Dentară', before: '/fatete1.jpeg', after: '/fatete2.jpeg', desc: 'Albire în cabinet cu rezultate vizibile imediat.' },
  { id: 3, title: 'Fatete dentare arcada superioara', category: 'Estetică Dentară', before: '/bf3.jpeg', after: '/bf4.jpeg', desc: 'Transformarea completă a zâmbetului cu fațete ceramice aplicate pe arcada superioară' },
  { id: 4, title: 'Reabilitare totala arcada superioara', category: 'Protetică', before: '/bf5.jpeg', after: '/bf6.jpeg', desc: 'Restabilirea funcției și esteticii pentru întreaga arcadă superioară prin lucrări protetice complexe.' },
  { id: 5, title: 'Aparate Dentare', category: 'Ortodonție', before: '/bf7.jpeg', after: '/bf8.jpeg', desc: 'Corectarea malocluziei și obținerea unui zâmbet armonios prin tratament ortodontic complet.' },
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
                className="group"
              >
                {/* Container poză - cu slider dacă există ambele poze, placeholder dacă nu */}
                <div className="relative bg-sana-gray-200 rounded-3xl aspect-[4/5] overflow-hidden mb-4">
                  {c.before && c.after ? (
                    <BeforeAfterSlider before={c.before} after={c.after} title={c.title} />
                  ) : (
                    <PlaceholderImage />
                  )}
                </div>

                <div className="px-2">
                  <div className="text-xs tracking-[0.2em] uppercase text-sana-lime-dark mb-1">{c.category}</div>
                  <h3 className="text-xl text-sana-gray-900 font-display">{c.title}</h3>
                  <p className="text-sm text-sana-gray-600 mt-2 leading-relaxed">{c.desc}</p>
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

// ====================================================
// SLIDER BEFORE/AFTER INTERACTIV
// ====================================================
function BeforeAfterSlider({ before, after, title }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  // Calculează poziția slider-ului din coordonatele mouse-ului/touch-ului
  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  // Mouse events
  const handleMouseDown = (e) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }
  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleMouseUp = () => setIsDragging(false)

  // Touch events (pentru mobil)
  const handleTouchStart = (e) => {
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }
  const handleTouchMove = (e) => {
    if (isDragging) handleMove(e.touches[0].clientX)
  }
  const handleTouchEnd = () => setIsDragging(false)

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full select-none cursor-ew-resize overflow-hidden"
    >
      {/* Poza DUPĂ (de jos - vizibilă pe partea dreaptă) */}
      <img
        src={after}
        alt={`${title} - după`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Poza ÎNAINTE (deasupra - dezvăluită dupa slider position) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={before}
          alt={`${title} - înainte`}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
        />
      </div>

      {/* Badge "Înainte" - stânga sus */}
      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full pointer-events-none z-10">
        Înainte
      </div>

      {/* Badge "După" - dreapta sus */}
      <div className="absolute top-3 right-3 bg-sana-lime text-sana-gray-900 text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium pointer-events-none z-10">
        După
      </div>

      {/* Linia verticală + Handle (rotița) */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle-ul (rotița din mijloc) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-sana-lime">
          <div className="flex items-center gap-0.5">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M5 1L1 5L5 9" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
              <path d="M1 1L5 5L1 9" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hint text - apare doar inițial, apoi dispare */}
      {!isDragging && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full pointer-events-none z-10 animate-pulse">
          ← Trage →
        </div>
      )}
    </div>
  )
}

// ====================================================
// PLACEHOLDER pentru cazuri fără poze
// ====================================================
function PlaceholderImage() {
  return (
    <div className="absolute inset-0 grid grid-cols-2">
      <div className="relative bg-sana-gray-300 overflow-hidden flex items-center justify-center text-sana-gray-500 text-[10px] uppercase tracking-widest">
        Înainte
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full">
          Înainte
        </div>
      </div>
      <div className="relative bg-sana-gray-200 overflow-hidden flex items-center justify-center text-sana-gray-500 text-[10px] uppercase tracking-widest">
        După
        <div className="absolute top-3 right-3 bg-sana-lime text-sana-gray-900 text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium">
          După
        </div>
      </div>
    </div>
  )
}
