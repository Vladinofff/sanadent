import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, CheckCircle2, Play, X, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function GBTSection() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showVideo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setShowVideo(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section-padding bg-sana-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sana-lime rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sana-lime rounded-full blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* PARTEA DE SUS - GBT + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-white rounded-3xl p-4 lg:p-6 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="/certificatnou.jpeg"
                alt="Certificat GBT - Guided Biofilm Therapy - SanaDent"
                className="w-full h-auto rounded-2xl block"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-sana-lime text-sana-gray-900 rounded-full px-5 py-3 flex items-center gap-2 shadow-xl">
              <Award size={18} />
              <span className="text-xs tracking-[0.15em] uppercase font-medium">Certified</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="eyebrow text-sana-lime mb-4">Centru de excelență</div>
            <h2 className="text-4xl lg:text-5xl font-display leading-tight mb-6">
              Suntem <span className="italic text-sana-lime">centru certificat GBT</span>
            </h2>
            <p className="text-sana-gray-300 leading-relaxed mb-8 text-lg">
              SanaDent este un centru de excelență certificat în <strong className="text-white">Guided Biofilm Therapy</strong> — cea mai modernă metodă de profilaxie dentară, recunoscută internațional.
            </p>

            <div className="space-y-4 mb-10">
              <Feature
                title="Tratament personalizat"
                desc="Detectarea și îndepărtarea biofilmului pe baza nevoilor individuale ale fiecărui pacient."
              />
              <Feature
                title="Tehnologie avansată"
                desc="Utilizăm aparatura EMS, lider mondial în tehnologie de profilaxie modernă."
              />
              <Feature
                title="Confort maxim"
                desc="Procedură nedureroasă, eficientă și sigură pentru toate vârstele."
              />
              <Feature
                title="Standarde elvețiene"
                desc="Certificarea este eliberată de Swiss Dental Academy (SDA)."
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Programează ședință GBT →
              </Link>

              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-sana-lime hover:text-sana-lime px-7 py-3.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-300 group"
              >
                <Play size={16} className="transition-transform group-hover:scale-110" />
                Descoperă aici
              </button>
            </div>
          </motion.div>
        </div>

        {/* PARTEA DE JOS - Spark + Invisalign */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-8 lg:gap-12 items-center">
            {/* STÂNGA - cele 2 poze cu aceeași înălțime */}
<div className="grid grid-cols-2 gap-4 items-stretch">
  <div 
  className="aspect-[4/3] overflow-hidden rounded-2xl flex items-center justify-center"
  style={{ backgroundColor: '#14b8ca' }}
>
  <img
    src="/spark1.jpeg"
    alt="Spark Aligners"
    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
  />
</div>
<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white flex items-center justify-center">
  <img
    src="/invis.jpeg"
    alt="Invisalign"
    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
  />
</div>
</div>

            {/* DREAPTA - Text + CTA */}
            <div>
              <div className="eyebrow text-sana-lime mb-4">Parteneri Oficiali</div>
              <h3 className="text-3xl lg:text-4xl font-display leading-tight mb-4 text-white">
                Ortodonție <span className="italic text-sana-lime">invizibilă</span>
              </h3>
              <p className="text-sana-gray-300 leading-relaxed mb-6 text-base">
                Suntem partenerii oficiali <strong className="text-white">Spark</strong> și <strong className="text-white">Invisalign</strong> — cele mai avansate soluții de ortodonție cu gutiere transparente din lume.
              </p>

              <div className="bg-sana-lime/10 border border-sana-lime/30 rounded-2xl p-5 mb-6">
                <p className="text-white font-medium text-lg mb-1">
                  Sună-ne pentru o <span className="text-sana-lime italic">simulare gratuită</span>
                </p>
                <p className="text-sm text-sana-gray-300">
                  Vezi cum îți va arăta zâmbetul înainte să începi tratamentul.
                </p>
              </div>

              <a
                href="tel:+40786511919"
                className="inline-flex items-center gap-2 bg-sana-lime text-sana-gray-900 px-7 py-3.5 rounded-full text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:bg-sana-lime-dark group"
              >
                <Phone size={16} className="transition-transform group-hover:scale-110" />
                Sună acum: 0786 511 919
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowVideo(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm cursor-pointer"
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-sana-lime hover:text-sana-gray-900 text-white flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Închide video"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl cursor-default"
            >
              <video
                src="/gbt-video.mp4"
                controls
                autoPlay
                className="w-full h-auto rounded-2xl shadow-2xl"
              >
                Browserul tău nu suportă videoclipuri HTML5.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 bg-sana-lime/20 rounded-lg flex items-center justify-center text-sana-lime flex-shrink-0 mt-0.5">
        <CheckCircle2 size={16} />
      </div>
      <div>
        <h4 className="text-white font-medium mb-1 font-sans">{title}</h4>
        <p className="text-sm text-sana-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
