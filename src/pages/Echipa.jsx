import PageHeader from '../components/PageHeader'
import DoctorsSection from '../components/DoctorsSection'
import CTABanner from '../components/CTABanner'

// Secțiunea cu textul istoric/viziunea SanaDent și placeholder pentru poză
function EchipaViziune() {
  return (
    <section className="bg-[#FAF9F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
        
        {/* Coloana Stângă: Textul original din vechiul site */}
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
              specializare a medicilor pe etape specific de fiecare tratament.
            </p>
            <p>
              Astfel, specialiștii tineri și ambițioși tratează interdisciplinar, 
              cu pasiune și dăruire, cele mai complexe cazuri clinice.
            </p>
          </div>

          <hr className="w-16 h-[1px] bg-[#A3B83B] border-none my-6" />

          {/* Sloganul cu font elegant */}
          <div className="border-l-4 border-[#A3B83B] pl-4 py-2">
            <p className="text-lg md:text-xl font-medium text-[#1F2421] leading-snug">
              „Zâmbetul tău este cartea noastră de vizită pentru că ne pasă cu adevărat de sănătatea ta și pentru că...”
            </p>
            <span className="inline-block mt-3 text-[#A3B83B] text-xl md:text-2xl font-serif italic font-semibold">
              „Meriți să zâmbești!”
            </span>
          </div>
        </div>

        {/* Coloana Dreaptă: Poza cu echipa completă (fără decupare / aspect-ratio blocat) */}
        <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2 w-full">
            <img 
              src="/echipa.jpg" // Calea către imaginea ta
              alt="Echipa SanaDent completă"
              className="w-full h-auto object-contain block transition-transform duration-500 hover:scale-[1.02]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'p-12', 'min-h-[250px]');
                e.target.parentNode.innerHTML = `
                  <div class="text-center text-gray-400">
                    <svg class="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="text-sm font-medium">Loc pentru fotografia echipei</p>
                    <p class="text-xs mt-1">Scurgeți fișierul în public/imagini/echipa-sanadent.jpg</p>
                  </div>
                `;
              }}
            />
          </div>
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
      
      {/* Secțiunea nou adăugată cu textul original și imaginea ta */}
      <EchipaViziune />
      
      <DoctorsSection />
      <CTABanner />
    </>
  )
}