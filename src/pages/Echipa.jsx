import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import DoctorsSection from '../components/DoctorsSection'
import CTABanner from '../components/CTABanner'

// ====================================================
// LISTA MEMBRILOR ECHIPEI PENTRU CAROUSEL
// ====================================================
// Aici pui manual toți membrii echipei (doctori + asistenți + orice altcineva)
// Pozele merg în public/echipa/ cu numele exacte de mai jos
// Ștergi ce nu vrei, adaugi noi rânduri după model
const teamMembers = [
  {
    photo: '/larisa.jpeg',
    name: 'Larysa Gunescu',
    role: 'Fondator · Managing Partner',
  },
  {
    photo: '/meda.jpg',
    name: 'Dr. Meda Serban',
    role: 'Fondator · Specialist Parodontologie',
  },
  {
    photo: '/mircea.jpg',
    name: 'Dr. Mircea Baldea',
    role: 'Specialist Chirurgie · Implantologie',
  },
  {
    photo: '/iulian.jpg',
    name: 'Dr. Iulian Filipov',
    role: 'Specialist Chirurgie Oro-Maxilo-Faciala',
  },
  {
    photo: '/bianca.jpeg',
    name: 'Dr. Bianca Burghel',
    role: 'Stomatologie Generală',
  },
  {
    photo: '/destan.jpeg',
    name: 'Dr. Destan Firinciogullari',
    role: 'Stomatologie Generală',
  },
  {
    photo: '/irina.jpeg',
    name: 'Dr. Irina Eftimescu',
    role: 'Specialist Endodonție',
  },
  {
    photo: '/andreea.jpg',
    name: 'Dr. Andreea Solomon',
    role: 'Specialist Ortodonție',
  },
  // Adaugă asistenți sau alți membri aici după acest model:
   {
     photo: '/laura.jpeg',
     name: 'Laura Elena Toma',
     role: 'Registrator Medical',
   },
   {
     photo: '/elena.jpeg',
     name: 'Elena Marin',
     role: 'Asistent Medical',
   },
]

// ====================================================
// CAROUSEL COMPACT cu membrii echipei
// ====================================================
function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-schimbare la fiecare 4 secunde
  useEffect(() => {
    if (isPaused || teamMembers.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % teamMembers.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % teamMembers.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const currentMember = teamMembers[currentIndex]

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Card cu poza */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white aspect-square max-w-sm mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={currentMember.photo}
              alt={currentMember.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Săgeți navigare - mici, discrete */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm hover:bg-sana-lime text-sana-gray-900 flex items-center justify-center transition-all duration-300 z-10 shadow-md"
          aria-label="Anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm hover:bg-sana-lime text-sana-gray-900 flex items-center justify-center transition-all duration-300 z-10 shadow-md"
          aria-label="Următor"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Text SUB poză - curat, ușor de citit */}
      <div className="text-center mt-6 min-h-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-display text-sana-gray-900 mb-2">
              {currentMember.name}
            </h3>
            <p className="text-[10px] tracking-[0.25em] uppercase text-sana-lime-dark font-medium">
              {currentMember.role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigare */}
      <div className="flex justify-center gap-1.5 mt-6">
        {teamMembers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-6 bg-sana-lime-dark'
                : 'w-1.5 bg-sana-gray-300 hover:bg-sana-gray-400'
            }`}
            aria-label={`Membru ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ====================================================
// Secțiunea cu textul istoric/viziunea SanaDent
// ====================================================
function EchipaViziune() {
  return (
    <section className="bg-[#FAF9F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
        
        {/* Coloana Stângă: Textul original */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-[#A3B83B] text-xs font-bold tracking-widest uppercase block mb-3">
              Viziunea Noastră
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1F2421] leading-tight font-light">
              Tratament interdisciplinar, cu pasiune și dăruire
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg font-light">
            <p>
              Echipa medicală <strong className="text-gray-900 font-semibold">SanaDent</strong> abordează soluția modernă de 
              specializare a medicilor pe etape specifice fiecarui tratament.
            </p>
            <p>
              Astfel, specialiștii tineri și ambițioși tratează interdisciplinar, 
              cu pasiune și dăruire, cele mai complexe cazuri clinice.
            </p>
          </div>

          <hr className="w-16 h-[1px] bg-[#A3B83B] border-none my-6" />

          <div className="border-l-4 border-[#A3B83B] pl-4 py-2">
            <p className="text-lg md:text-xl font-medium text-[#1F2421] leading-snug">
              „Zâmbetul tău este cartea noastră de vizită pentru că ne pasă cu adevărat de sănătatea ta și pentru că...”
            </p>
            <span className="inline-block mt-3 text-[#A3B83B] text-xl md:text-2xl font-serif italic font-semibold">
              „Meriți să zâmbești!”
            </span>
          </div>
        </div>

        {/* Coloana Dreaptă: Carousel echipă (compact) */}
        <div className="mt-12 lg:mt-0 lg:col-span-5">
          <TeamCarousel />
        </div>

      </div>
    </section>
  )
}

export default function Echipa() {
  return (
    <>
      <PageHeader
        eyebrow="Echipa noastră"
        title="Specialiștii care au grijă de zâmbetul tău"
        description="O echipă dedicată, formată din medici cu experiență, pasionați de excelență în stomatologie."
      />
      
      <EchipaViziune />
      
      <DoctorsSection showAllAsModal={true} />
      <CTABanner />
    </>
  )
}
