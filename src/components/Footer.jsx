import { Link } from 'react-router-dom'
import { Facebook, Youtube, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sana-gray-900 text-sana-gray-300 pt-20 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="SanaDent - Centru de Stomatologie" 
                className="h-4 lg:h-5 w-auto transition-transform group-hover:scale-105"  
              />
            </Link>
            <div className="text-left py-4">
              <p className="font-display text-lg text-white/80 italic leading-relaxed mb-3">
                „Cerul i-a dăruit omului, spre a-i recompensa toate greutățile, trei lucruri: 
                <span className="text-sana-lime-dark"> speranța, visul și zâmbetul...</span>"
              </p>
              <footer className="text-[10px] tracking-[0.3em] uppercase text-sana-gray-500">
                — Immanuel Kant
              </footer>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6 font-sans">Navigare</h4>
            <ul className="space-y-3">
              <li><Link to="/de-ce-noi" className="hover:text-sana-lime transition-colors">De ce noi?</Link></li>
              <li><Link to="/tratamente" className="hover:text-sana-lime transition-colors">Tratamente</Link></li>
              <li><Link to="/parteneri" className="hover:text-sana-lime transition-colors">Parteneri</Link></li>
              <li><Link to="/preturi" className="hover:text-sana-lime transition-colors">Prețuri</Link></li>
              <li><Link to="/faqs" className="hover:text-sana-lime transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-sana-lime transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6 font-sans">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sana-lime mt-0.5 flex-shrink-0" />
                <span>Str. Avrig 8, Parter, Sector 2, București</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sana-lime flex-shrink-0" />
                <a href="tel:+40786511919" className="hover:text-sana-lime transition-colors">+40 786 511 919</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sana-lime flex-shrink-0" />
                <a href="mailto:office@sanadent.ro" className="hover:text-sana-lime transition-colors">office@sanadent.ro</a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-white text-sm tracking-[0.2em] uppercase mb-6 font-sans">Program</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-sana-lime mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white">Luni - Vineri</div>
                  <div>8:30 - 20:00</div>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-7">
                <div>
                  <div className="text-white">Sâmbătă - Duminică</div>
                  <div>Închis</div>
                </div>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {/* Buton Facebook - Actualizează href cu link-ul firmei */}
              <a href="https://www.facebook.com/sanadentsolution/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-sana-gray-700 rounded-full flex items-center justify-center hover:bg-sana-lime hover:border-sana-lime hover:text-sana-gray-900 transition-all">
                <Facebook size={16} />
              </a>
              {/* Buton Youtube - Actualizează href cu link-ul către video */}
              <a href="https://www.youtube.com/watch?v=Srt9Q6smbJg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-sana-gray-700 rounded-full flex items-center justify-center hover:bg-sana-lime hover:border-sana-lime hover:text-sana-gray-900 transition-all">
                <Youtube size={16} />
              </a>
              <a 
  href="https://www.instagram.com/sanadentsolution/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 border border-sana-gray-700 rounded-full flex items-center justify-center hover:bg-sana-lime hover:border-sana-lime hover:text-sana-gray-900 transition-all"
>
  <Instagram size={16} />
</a>
            </div>
          </div>
        </div>

        {/* Zona de Copyright, Politici și Siglele ANPC / SOL */}
        <div className="border-t border-sana-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-sana-gray-500">
          
          {/* Stânga: Copyright & Politici */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div>© {new Date().getFullYear()} SanaDent. Toate drepturile rezervate.</div>
            <div className="flex gap-4">
              <Link to="/politica-confidentialitate" className="hover:text-sana-lime transition-colors">
                Politica de confidențialitate
              </Link>
            </div>
          </div>

          {/* Dreapta: Siglele SOL și SAL */}
          <div className="flex items-center gap-3">
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" target="_blank" rel="noopener noreferrer">
              <img src="/sol.png" alt="SOL" className="h-9 w-auto bg-white rounded p-1 object-contain" />
            </a>
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
              <img src="/anpc.png" alt="ANPC" className="h-9 w-auto bg-white rounded p-1 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}