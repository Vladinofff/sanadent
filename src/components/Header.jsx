import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const subMenuDeCeNoi = [
  { to: '/de-ce-noi/echipa', label: 'Echipa' },
  { to: '/de-ce-noi/dotari', label: 'Dotări' },
  { to: '/de-ce-noi/testimoniale', label: 'Testimoniale' },
  { to: '/de-ce-noi/cazuistica', label: 'Cazuistică' },
]

const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/de-ce-noi', label: 'De ce noi?', submenu: subMenuDeCeNoi },
  { to: '/tratamente', label: 'Tratamente' },
  { to: '/parteneri', label: 'Parteneri' },
  { to: '/preturi', label: 'Prețuri' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileSubOpen, setMobileSubOpen] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sana-gray-900/95 backdrop-blur-md py-2' : 'bg-sana-gray-900 py-3'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img
            src="/logo.png"
            alt="SanaDent - Centru de Stomatologie"
            className="h-4 lg:h-5 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative"
              onMouseEnter={() => link.submenu && setOpenDropdown(link.to)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-sana-lime flex items-center gap-1 py-2 whitespace-nowrap ${
                    isActive ? 'text-sana-lime' : 'text-white'
                  }`
                }
              >
                {link.label}
                {link.submenu && <ChevronDown size={12} className={`transition-transform ${openDropdown === link.to ? 'rotate-180' : ''}`} />}
              </NavLink>

              {/* Dropdown */}
              {link.submenu && openDropdown === link.to && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-sana-gray-900 border border-sana-gray-800 rounded-xl py-2 min-w-[180px] shadow-xl animate-fade-in">
                    {link.submenu.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        className={({ isActive }) =>
                          `block px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-colors hover:bg-sana-gray-800 hover:text-sana-lime whitespace-nowrap ${
                            isActive ? 'text-sana-lime' : 'text-white'
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+40786511919"
          className="hidden md:flex items-center gap-3 group flex-shrink-0"
        >
          <div className="text-right whitespace-nowrap">
            <div className="text-sana-lime text-[10px] tracking-[0.2em] uppercase">Sună-ne</div>
            <div className="text-white font-medium text-sm">+40 786 511 919</div>
          </div>
          <div className="w-10 h-10 bg-sana-lime rounded-full flex items-center justify-center text-sana-gray-900 transition-transform group-hover:scale-110 flex-shrink-0">
            <Phone size={16} />
          </div>
        </a>

        {/* Mobile menu button */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-sana-gray-900 border-t border-sana-gray-800 animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container-x py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.to}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => !link.submenu && setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex-1 text-sm tracking-[0.2em] uppercase py-3 ${
                        isActive ? 'text-sana-lime' : 'text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.submenu && (
                    <button
                      onClick={() => setMobileSubOpen(mobileSubOpen === link.to ? null : link.to)}
                      className="text-white p-2"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown size={16} className={`transition-transform ${mobileSubOpen === link.to ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {link.submenu && mobileSubOpen === link.to && (
                  <div className="pl-4 border-l border-sana-gray-800 ml-2 mb-2">
                    {link.submenu.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block py-2 text-xs tracking-[0.15em] uppercase ${
                            isActive ? 'text-sana-lime' : 'text-sana-gray-400'
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+40786511919"
              className="btn-primary mt-4 justify-center"
            >
              <Phone size={16} /> +40 786 511 919
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
