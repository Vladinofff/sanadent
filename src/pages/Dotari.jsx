import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'

// Informațiile reale pentru design-ul Zig-Zag
const equipment = [
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
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-sana-gray-100 bg-white group">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
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
                className="group relative aspect-square bg-sana-gray-100 rounded-2xl overflow-hidden border border-sana-gray-100/30 shadow-sm hover:shadow-md transition-all duration-500"
              >
                {/* Poza reală */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Dacă poza nu există fizic încă în folderul public/galerie, se va afișa textul de rezervă discret
                    e.target.style.opacity = '0'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />

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
    </>
  )
}