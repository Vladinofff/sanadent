import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { doctors } from '../data/doctors' // Asigură-te că această cale către fișierul tău cu date este corectă

function DoctorPage() {
  const { id } = useParams()

  // Pasul 1: Căutăm doctorul în toate categoriile din obiectul doctors
  let foundDoctor = null

  // Iterăm prin toate cheile (categoriile) obiectului doctors (fondatori, implantologie, etc.)
  Object.values(doctors).forEach((categoryArray) => {
    const doc = categoryArray.find((d) => d.id === id)
    if (doc) {
      foundDoctor = doc
    }
  })

  // Pasul 2: Dacă doctorul nu a fost găsit în nicio categorie, afișăm un mesaj prietenos în loc de ecran alb
  if (!foundDoctor) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Doctorul nu a fost găsit</h2>
        <p className="mb-8 text-gray-600">Profilul căutat nu există sau a fost mutat.</p>
        <Link to="/" className="bg-[#dce696] px-6 py-3 rounded-xl font-medium">
          Înapoi la prima pagină
        </Link>
      </div>
    )
  }

  // Pasul 3: Randăm pagina doctorului dacă a fost găsit cu succes
  return (
    <section className="py-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Buton de întoarcere */}
        <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8">
          ← Înapoi la echipă
        </Link>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Fotografie */}
            {foundDoctor.photo ? (
              <img 
                src={foundDoctor.photo} 
                alt={foundDoctor.name} 
                className="w-full md:w-64 h-80 object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full md:w-64 h-80 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-400">
                Fără poză
              </div>
            )}

            {/* Informații de bază */}
            <div className="flex-1">
              <h1 className="text-3xl font-serif font-semibold mb-2">{foundDoctor.name}</h1>
              <p className="text-[#a4b53b] font-medium tracking-wider text-sm uppercase mb-4">
                {foundDoctor.role}
              </p>
              
              {foundDoctor.shortDesc && (
                <p className="text-gray-600 italic mb-6">"{foundDoctor.shortDesc}"</p>
              )}
            </div>
          </div>

          {/* Descrierea completă (fullDesc) */}
          {foundDoctor.fullDesc && (
            <div className="mt-12 pt-8 border-t border-stone-100">
              <h3 className="text-xl font-serif font-semibold mb-6">Despre mine / Cursuri de specializare</h3>
              {/* Folosim whitespace-pre-line pentru a păstra alineatele și listele din string-ul din JS */}
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {foundDoctor.fullDesc}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </section>
  )
}

export default DoctorPage