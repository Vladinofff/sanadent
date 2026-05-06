import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'
import { motion } from 'framer-motion'
import { Star, Quote, User } from 'lucide-react'

// Editează aici cu testimoniale reale
const testimonials = [
  {
    name: 'Cristian Bucur, IT Business Analyst',
    treatment: 'Implantologie',
    rating: 5,
    // Adaugă calea către poză (ex: '/pacienti/cristian.jpg') sau lasă gol '' pentru a folosi inițialele automat
    image: '/client1.jpg', 
    text: `
Invingandu-mi teama de dentist si in special de potentiale efecte secundare date de anestezii pe fondul unei boli cronice autoimune, mi-am facut curaj sa pasesc in clinica Sanadent, si se pare ca s-au gasit solutii iar dantura recapata contur.
Cateva pareri:
· Dotare ok, cu imagistica locala, atentia la detaliu de la primul pas pe dispozitivul de capisonare a incaltarilor, spunand multe;
· Management responsabil al cazurilor, de la primul consult construindu-se un dosarel cu tot ce s-a identificat, fotografiat si remediat;
· Ultaspecializare si tehnici cu care am luat contact in premiera pentru interventiile complexe din sfera tratamentului endodontic si a implanturilor;
· Ambient placut, tinerete pe acorduri muzicale care binedispun`
  },
  {
    name: 'Mihnea Dumitrache, avocat',
    treatment: 'Parodontologie',
    rating: 5,
    image: '/mihnea.jpg', // Poți pune o cale precum '/doctors/mircea.jpg' pentru a testa cu o poză existentă
    text: `
    
Sunt una dintre acele persoane terorizate de ideea de a merge la stomatolog. Cu toate acestea, a devenit foarte simplu sa imi inving teama si sa merg, cu regularitate, la dentist. Am descoperit in clinica Sanadent acel colectiv tanar, extrem de profesionist, ceea ce imi da incredere, si nu in ultimul rand, curaj.
Dotari de ultima generatie, o atmosfera calda, respect pentru pacient. Aceasta este reteta perfecta pentru a construi o relatie medic-pacient.
Profesionalismul si caldura D-nei doctor Meda Serban ma fac sa revin cu incredere si placere la fiecare programare.
Felicitari Sanadent si succes! Sunt sigur ca sunteti pe drumul bun.
`

  },
  {
    name: 'Florea Bratu',
    treatment: 'Profilaxie',
    rating: 5,
    image: '/florea.bmp',
    text: `
    Am avut o serie de probleme cu dantura si astfel am fost nevoit sa iau contact cu diversi medici stomatologi. Ca majoritatea dintre noi, simteam o sterangere de inima si un gol in stomac la fiecare vizita la stomatolog.
    De cand am cunoscut-o pe d-na doctor Meda Ofelia Serban, toate acestea s-au schimbat. Este un profesionist desavarsit, un specialist extraordinar, cu studii si cunostinte profesionale de ultima ora. Insa ceea ce m-a impresionat
    in mod deosebit este caracterul si atitudinea ei ca om. Te simti respectat ca pacient si ca om: nu exista intarzieri la programare, atmosfera este mereu vesela, te simti ca in familie si uiti de problemele pentru care ai venit.
    Doamna doctor Meda Serban este un specialist desavarsit, mi-a executat lucrari de la detartraj pana la reconstituire de gingie fara sa am dureri sau macar stresul acela permanent pe care il simtim toti cand mergem la stomatolog.
    Am plecat mereu senin si zambind de la cabinetul dumneaei. Ma inclin cu toata stima si respectul meu in fata acestui medic!
    `
  },
 
]

// Funcție ajutătoare pentru a genera inițialele pacientului când nu are poză
function getInitials(name) {
  if (!name) return '?'
  const parts = name.replace(/[[,\]]/g, '').trim().split(' ')
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return parts[0][0] ? parts[0][0].toUpperCase() : '?'
}

export default function Testimoniale() {
  return (
    <>
      <PageHeader
        eyebrow="Testimoniale"
        title="Ce spun pacienții noștri"
        description="Experiențele reale ale celor care au ales SanaDent pentru sănătatea zâmbetului lor."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white rounded-3xl p-8 border border-sana-gray-100 hover:border-sana-lime/40 hover:-translate-y-1 transition-all duration-500 relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="absolute top-6 right-6 text-sana-lime/30 group-hover:text-sana-lime transition-colors duration-500" size={36} />

                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-sana-lime text-sana-lime" />
                    ))}
                  </div>

                  <p className="text-sana-gray-700 leading-relaxed mb-6 italic text-sm sm:text-base">
                    "{t.text}"
                  </p>
                </div>

                {/* Secțiunea de jos modificată - acum include Avatarul/Poza */}
                <div className="pt-6 border-t border-sana-gray-100 flex items-center gap-4">
                  {/* Containerul pentru imagine */}
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-sana-cream border border-sana-gray-100 flex items-center justify-center">
                    {t.image ? (
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // Dacă nu avem poză, randează inițialele elegant
                      <span className="text-xs font-semibold text-sana-lime-dark tracking-wider">
                        {getInitials(t.name)}
                      </span>
                    )}
                  </div>

                  {/* Informațiile pacientului */}
                  <div className="min-w-0">
                    <div className="font-medium text-sana-gray-900 text-sm sm:text-base truncate">{t.name}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-sana-lime-dark mt-1 truncate">{t.treatment}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google reviews CTA */}
          <div className="mt-16 text-center bg-white rounded-3xl p-10 border border-sana-gray-100">
            <h3 className="text-2xl font-display text-sana-gray-900 mb-3">
              Vezi toate recenziile pe Google
            </h3>
            <p className="text-sana-gray-600 mb-6 max-w-xl mx-auto">
              Citește experiențele pacienților noștri și lasă propria recenzie după vizita ta.
            </p>
            <a
              href="https://www.google.com/search?sca_esv=a311bd6e35cc18f5&cs=0&sxsrf=ANbL-n6OFipCbMdCmbQCfFSNC9z3ZQk9Jg:1778097825955&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-3Dry5mb9DKj29iASvyARgbu4zD3fvZ1jbux4scQDiSC-Qwfujz77W7ysAArhpxBcR42BctJqY1VvUrooswMI__ycLIT44KmFFZ5c2OOokPXR-CaN&q=Sanadent+Recenzii&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdKGBAJSDRTIn78JFlkxMENjLFGwjrR1dswj9jv_1-ikfbHGk5aqMhtWmFHdBCtaomcAYUlQGaDSJnQ0M5bhvxMsb_1R&hl=ro-RO&sa=X&ved=2ahUKEwj30anKuqWUAxVTAtsEHbJHBFwQ_4MLegQIFhAM&biw=1920&bih=953&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Recenzii Google →
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}