import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, doctors } from '../data/doctors'

export default function DoctorsSection() {
  const [activeCategory, setActiveCategory] = useState('fondatori')
  const activeDoctors = doctors[activeCategory] || []

  return (
    <section className="bg-sana-cream">
      {/* BANNER ÎNTUNECAT - doar pentru header */}
      <div className="bg-sana-gray-900 text-white py-16 md:py-20 relative overflow-hidden">
        {/* Background decoration subtilă */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-sana-lime rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-sana-lime rounded-full blur-3xl" />
        </div>

        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow text-sana-lime mb-4">Echipa noastră</div>
            <h2 className="text-3xl lg:text-4xl text-white mb-6 leading-tight font-display">
              Specialiștii care au grijă de <span className="italic text-sana-lime">zâmbetul tău</span>
            </h2>
            <p className="text-sana-gray-300 leading-relaxed text-sm md:text-base">
              O echipă dedicată, formată din medici cu experiență, pasionați de excelență în stomatologie.
            </p>
          </div>
        </div>
      </div>

      {/* CONȚINUTUL PRINCIPAL - pe fundal crem */}
      <div className="py-16 md:py-20">
        <div className="container-x">
          {/* CONTAINERUL PRINCIPAL */}
          <div className="flex flex-row lg:grid lg:grid-cols-[280px_1fr] gap-2 md:gap-8 lg:gap-12 items-stretch">
            
            {/* COLOANA STÂNGA (Lista/Sidebar) */}
            <div 
              className="w-[35%] lg:w-auto flex-shrink-0 bg-sana-gray-900 rounded-2xl md:rounded-3xl p-1.5 md:p-3 border border-white/5 h-fit lg:sticky lg:top-28 transition-all duration-500"
              style={{
                boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)'
              }}
            >
              <ul className="space-y-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id
                  const hasDoctors = doctors[cat.id]?.length > 0
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        disabled={!hasDoctors}
                        className={`w-full text-left px-2 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                          isActive
                            ? 'bg-sana-lime text-sana-gray-900 font-semibold shadow-[0_4px_15px_rgba(214,255,0,0.15)]'
                            : hasDoctors
                            ? 'text-white/80 hover:bg-white/10 hover:text-white'
                            : 'text-white/30 cursor-not-allowed'
                        }`}
                      >
                        <span className="text-[10px] md:text-sm font-medium tracking-wide truncate pr-1">
                          {cat.label}
                        </span>
                        <ArrowRight
                          size={12}
                          className={`hidden md:block transition-all duration-300 ${
                            isActive 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Coloana Dreaptă (Lista de doctori) - CENTRATĂ VERTICAL */}
            <div className="w-[65%] lg:w-auto space-y-3 md:space-y-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 md:space-y-5 w-full"
                >
                  {activeDoctors.length === 0 ? (
                    <div 
                      className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-xs md:text-sm text-sana-gray-500 border border-sana-gray-100"
                      style={{
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      În curând vom adăuga doctorii din această specializare.
                    </div>
                  ) : (
                    activeDoctors.map((doctor, idx) => (
                      <motion.div
                        key={doctor.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <DoctorCard doctor={doctor} />
                      </motion.div>
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* See all link */}
          <div className="text-center mt-12 md:mt-16">
            <Link to="/de-ce-noi/echipa" className="btn-outline text-xs md:text-sm">
              Vezi toți doctorii <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function DoctorCard({ doctor }) {
  return (
    <article 
      className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-sana-gray-100 hover:border-sana-lime/30 transition-all duration-500 hover:shadow-2xl"
      style={{
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="grid grid-cols-[55px_1fr_40px] sm:grid-cols-[180px_1fr_auto] gap-2 sm:gap-6 p-2 md:p-6 items-center">
        
        {/* Photo */}
        <div className="relative w-14 h-14 sm:w-44 sm:h-44 rounded-xl sm:rounded-2xl overflow-hidden bg-sana-gray-100 flex-shrink-0">
          {doctor.photo ? (
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sana-gray-400">
              <User size={20} className="sm:size-[48px]" strokeWidth={1.2} />
            </div>
          )}
          <div className="absolute inset-0 ring-1 sm:ring-2 ring-sana-lime opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl pointer-events-none" />
        </div>

        {/* Info text */}
        <div className="min-w-0 px-1">
          <h3 className="text-xs sm:text-2xl text-sana-gray-900 mb-0.5 font-semibold truncate">
            {doctor.name}
          </h3>
          <div className="text-[7px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-sana-lime-dark font-medium mb-1 leading-relaxed">
  {doctor.role.split('|').map((line, i) => (
    <div key={i}>{line}</div>
  ))}
</div>
          <p className="hidden sm:block text-sm text-sana-gray-600 leading-relaxed line-clamp-3">
            {doctor.shortDesc}
          </p>
        </div>

        {/* CTA */}
        <Link
          to={`/doctori/${doctor?.id}`}
          className="flex sm:flex flex-col items-center justify-center bg-sana-gray-50 group-hover:bg-sana-lime text-sana-gray-900 rounded-xl sm:rounded-2xl w-10 h-10 sm:w-auto sm:px-6 sm:py-8 sm:self-stretch transition-all duration-500 min-w-0 sm:min-w-[120px]"
        >
          <span className="hidden sm:block text-[10px] tracking-[0.25em] uppercase font-medium mb-2">Descoperă</span>
          <ArrowRight size={14} className="sm:size-5 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
