import { useState, useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

// Informațiile reale pentru design-ul Zig-Zag
const equipment = [
  {
    title: 'Microscop Endodontic OPMI Pico Zeiss',
    subtitle: 'Echipament premium pentru tratamente endodontice de precizie',
    desc: 'Microscopul endodontic ZEISS OPMI Pico este un echipament premium dedicat tratamentelor endodontice de precizie, oferind imagini clare, iluminare LED performantă și mărire de înaltă calitate.  \n\nDesignul ergonomic asigură confort în timpul procedurilor îndelungate, iar sistemul optic avansat permite identificarea detaliilor fine, canalelor suplimentare și fisurilor dentare. Compact, fiabil și ușor de utilizat, OPMI Pico contribuie la tratamente mai sigure, mai eficiente și cu rezultate excelente pentru pacient.',
    image: '/zeiss.jpeg',
  },
  {
    title: 'Laser Stomatologic SiroLaser Blue Sirona',
    subtitle: 'Tehnologie avansată pentru tratamente minim invazive',
    desc: 'Laserul stomatologic SiroLaser Blue de la Dentsply Sirona este un echipament modern de ultimă generație, conceput pentru tratamente minim invazive și proceduri dentare precise. \n\nTehnologia unică cu trei lungimi de undă permite utilizarea sa în chirurgie gingivală, endodonție, parodontologie și terapii de biostimulare. Oferă tăieturi fine, vindecare rapidă, disconfort redus post-operator și control excelent al sângerării, contribuind la tratamente mai rapide, mai confortabile și mai eficiente pentru pacient.',
    image: '/sirona.jpeg',
  },
  {
    title: 'Scaner Intraoral Primescan Connect Dentsply Sirona',
    subtitle: 'Spunem stop amprentelor clasice',
    desc: 'Scannerul intraoral Primescan Connect de la Dentsply Sirona este o soluție digitală performantă pentru amprentare rapidă, precisă și confortabilă. \n\nCu tehnologie avansată de scanare 3D, permite captarea unei arcade complete oferind imagini detaliate și rezultate fiabile. Designul compact, în configurație cu laptop, asigură mobilitate și integrare ușoară în orice cabinet, iar conectivitatea digitală facilitează colaborarea rapidă cu laboratorul dentar. \n\nPrimescan Connect îmbunătățește experiența pacientului, anulând disconfortul creat de amprentarea cu materialele clasice și folosirea lingurilor de amprentă.',
    image: '/primescan.jpg',
  },
  {
    title: 'Radiologie Retroalveolară Computerizată RVG',
    subtitle: 'Soredex Minray (cu 99% mai puțin iradiantă)',
    desc: 'În majoritatea cazurilor, un diagnostic corect nu se poate pronunța fără o examinare radiologică. Pentru confortul dumneavoastră, dispunem de cabinet propriu de radiologie dotat cu aparatul Soredex Minray.\n\nAstfel, diagnosticul și tratamentul pot fi efectuate în aceeași ședință, fără a fi necesară deplasarea dumneavoastră într-un centru specializat de radioimagistică. Aparatura prezintă sisteme avansate de prevenire a efectelor nocive ale radiațiilor ionizante, doza receptată fiind extrem de scăzută.',
    image: '/radop.jpg',
  },
  {
    title: 'Microscopul Dentar – Smart Optic',
    subtitle: 'Soluții endodontice de înaltă precizie și calitate',
    desc: 'Tratamentele de canal (endodontice) realizate sub microscopul Smart Optic ne permit să salvăm dinți care altfel ar fi fost extrași. \n\nMagnificarea vizuală de înaltă definiție și iluminarea puternică îi oferă medicului specialist o vizibilitate perfectă asupra anatomiei interne a dintelui, asigurând curățarea și sigilarea impecabilă a canalelor radiculare.',
    image: '/smart.jpg',
  },
  {
    title: 'Tratament Endodontic Rotativ',
    subtitle: 'VDW Silver Reciproc',
    desc: 'Utilizăm unul dintre cele mai noi și performante aparate destinate exclusiv tratamentului mecanic al canalelor radiculare. \n\nSistemul inteligent VDW Silver Reciproc asigură o preparare rapidă, extrem de precisă și sigură a canalelor, reducând semnificativ timpul petrecut pe scaun și riscul de fracturare a acelor în interiorul dintelui.',
    image: '/reciproc.jpg',
  },
  {
    title: 'Fiziodispenser Chiropro-L',
    subtitle: 'Inovație în implantologie și chirurgie (Bien Air Elveția)',
    desc: 'Pentru intervențiile de chirurgie și implantologie orală, folosim tehnologia de vârf elvețiană Bien Air. \n\nFiziodispenserul Chiropro-L asigură un control absolut și extrem de fin asupra cuplului și vitezei de rotație în timpul inserării implanturilor, oferind o siguranță maximă și o vindecare post-operatorie mult mai rapidă a pacientului.',
    image: '/fizio.webp',
  },
  {
    title: 'Sistem Automat de Igienă',
    subtitle: 'Dispenser pentru protecție încălțăminte',
    desc: 'Accesul pacienților în incinta clinicii SanaDent se face cu protecție specială pentru încălțăminte, grație aparatului automat de căpisonat.\n\nAcest detaliu aparent mic continuă grija noastră permanentă pentru un mediu steril, sigur și extrem de curat, protejând sănătatea fiecărui pacient care ne trece pragul.',
    image: '/aparat.jpg',
  },
]

// Structură de date curată pentru cele 6 poze din galerie
const galleryImages = [
  { id: 1, src: '/1.jpg', alt: 'Cabinet stomatologic SanaDent' },
  { id: 2, src: '/2.jpg', alt: 'Recepție clinică SanaDent' },
  { id: 3, src: '/3.jpg', alt: 'Echipamente moderne stomatologie' },
  { id: 4, src: '/4.jpg', alt: 'Detalii design cabinet medical' },
  { id: 5, src: '/5.jpg', alt: 'Săli de tratament igienizate' },
  { id: 6, src: '/6.jpg', alt: 'Tehnologie avansată clinică' },
]

export default function Dotari() {
  const [lightboxImage, setLightboxImage] = useState(null)

  // Blochează scroll-ul când lightbox-ul e deschis
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxImage])

  // Închide cu Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxImage(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Dotări Sanadent"
        title="Centru de Stomatologie cu aparatură completă"
        description="Investim constant în echipamente de ultimă generație pentru ca orice tip de intervenție stomatologică să fie precisă, sigură și confortabilă."
      />

      {/* Secțiunea de dotări în layout ZIG-ZAG */}
      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          <div className="space-y-16 md:space-y-28">
            {equipment.map((item, idx) => {
              const isEven = idx % 2 === 1

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Zona pozei */}
                  <div className="w-full md:w-1/2">
                    <div
                      onClick={() => item.image && setLightboxImage({ src: item.image, alt: item.title })}
                      className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-sana-gray-100 bg-gradient-to-br from-sana-gray-50 to-sana-cream group cursor-pointer"
                    >
                      {item.image ? (
                        <>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          {/* Overlay cu icon zoom la hover */}
                          <div className="absolute inset-0 bg-sana-gray-900/0 group-hover:bg-sana-gray-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                            <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-lg">
                              <ZoomIn size={24} className="text-sana-gray-900" />
                            </div>
                          </div>
                        </>
                      ) : null}

                      {/* Backup în caz de eroare la încărcare */}
                      <div className="hidden absolute inset-0 w-full h-full bg-stone-100 text-stone-400 flex-col items-center justify-center p-6 text-center">
                        <span className="text-xs font-semibold tracking-wider uppercase mb-1">
                          Foto {item.title}
                        </span>
                        <span className="text-[10px] text-stone-400 italic">
                          (Adaugă poza în public{item.image})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Zona textului */}
                  <div className="w-full md:w-1/2 text-left px-2 md:px-0">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-sana-lime-dark font-semibold mb-2 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-sana-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sana-gray-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Galerie foto modernă */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-4">Galerie foto</div>
            <h2 className="text-4xl text-sana-gray-900 leading-tight">
              Spațiile <span className="italic">noastre</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightboxImage({ src: img.src, alt: img.alt })}
                className="group relative aspect-square bg-sana-gray-100 rounded-2xl overflow-hidden border border-sana-gray-100/30 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
              >
                {/* Poza reală */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.opacity = '0'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />

                {/* Overlay cu icon zoom la hover */}
                <div className="absolute inset-0 bg-sana-gray-900/0 group-hover:bg-sana-gray-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <ZoomIn size={20} className="text-sana-gray-900" />
                  </div>
                </div>

                {/* Textul de rezervă (vizibil doar dacă fișierul imagine lipsește) */}
                <div className="absolute inset-0 hidden flex-col items-center justify-center text-center p-4 bg-sana-gray-50 text-sana-gray-400">
                  <span className="text-xs uppercase tracking-widest font-medium mb-1">
                    Spațiu Clinica
                  </span>
                  <span className="text-[9px] text-sana-gray-400 italic">
                    [Foto {img.id}]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Lightbox - se deschide la click pe poză */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm animate-fade-in cursor-zoom-out"
        >
          {/* Buton închidere */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-sana-lime hover:text-sana-gray-900 text-white flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Închide"
          >
            <X size={24} />
          </button>

          {/* Poza */}
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-default"
          />

          {/* Titlu sub poză (opțional, dacă există) */}
          {lightboxImage.alt && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs md:text-sm px-5 py-2.5 rounded-full max-w-[90%] text-center">
              {lightboxImage.alt}
            </div>
          )}
        </div>
      )}
    </>
  )
}
