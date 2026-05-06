// src/pages/TratamentDetalii.jsx
import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { tratamenteDetailed } from '../data/tratamenteDetailed'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'

export default function TratamentDetalii() {
  const { id } = useParams() // Preluăm id-ul din link (ex: chirurgie)

  // Când se schimbă tratamentul, trimitem scroll-ul automat în partea de sus
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Verificăm dacă baza de date a fost importată corect pentru a evita ecrane albe
  const dateTratamente = tratamenteDetailed || {}
  
  // Convertim id-ul în litere mici pentru a fi siguri că se potrivește cu cheia din fișier
  const tratamentId = id ? id.toLowerCase() : ''
  const tratament = dateTratamente[tratamentId]

  // Dacă tratamentul selectat nu există în baza de date, afișăm o pagină elegantă de eroare în loc de ecran alb
  if (!tratament) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-sana-cream p-6 text-center">
        <h2 className="text-2xl font-serif font-semibold text-sana-gray-900 mb-2">
          Tratamentul nu a fost găsit
        </h2>
        <p className="text-sana-gray-600 mb-6 max-w-md text-sm">
          Nu am găsit nicio informație în baza de date pentru identificatorul 
          <code className="bg-red-100 text-red-600 px-2 py-0.5 rounded ml-1">"{id}"</code>.
        </p>
        <Link 
          to="/tratamente" 
          className="text-sm font-semibold uppercase tracking-wider text-sana-gray-900 border-b border-sana-gray-900 pb-1 hover:text-sana-lime-dark transition-colors"
        >
          ← Înapoi la toate tratamentele
        </Link>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="Specializare SanaDent"
        title={tratament.title}
        description={tratament.subtitle}
      />

      <section className="section-padding bg-sana-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Buton Înapoi */}
          <div className="mb-12">
            <Link to="/tratamente" className="text-xs tracking-widest uppercase text-sana-gray-500 hover:text-sana-gray-900 transition-colors flex items-center gap-2">
              ← Înapoi la toate tratamentele
            </Link>
          </div>

          <div className="space-y-16 md:space-y-28">
            
            {/* Secțiunea 1: Text Stânga, Poză Dreapta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-sana-gray-900 mb-6">
                  Ce presupune tratamentul?
                </h3>
                <p className="text-sana-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {tratament.desc1}
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-sana-gray-100 bg-white">
                  <img
                    src={tratament.image1}
                    alt={tratament.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Secțiunea 2: Poză Stânga, Text Dreapta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16"
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-sana-gray-100 bg-white">
                  <img
                    src={tratament.image2}
                    alt={`${tratament.title} clinica`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=800"
                    }}
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-sana-gray-900 mb-6">
                  Abordarea SanaDent
                </h3>
                <p className="text-sana-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {tratament.desc2}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}