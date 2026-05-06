import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Numele este obligatoriu'
    if (!form.email.trim()) e.email = 'Emailul este obligatoriu'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email invalid'
    if (!form.phone.trim()) e.phone = 'Telefonul este obligatoriu'
    if (!form.message.trim()) e.message = 'Te rugăm scrie un mesaj'
    return e
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }

    setIsSubmitting(true)

    // Pregătim datele pentru Web3Forms cu cheia ta proaspăt generată
    const dataToSend = {
      access_key: "b33e80ca-bb9b-4593-aea0-5da20f1f1af7", // Cheia ta oficială integrată!
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: `Programare nouă: ${form.service || 'Nespecificat'}`,
      message: `
        Nume client: ${form.name}
        Telefon: ${form.phone}
        Email: ${form.email}
        Serviciu: ${form.service || 'Nespecificat'}
        
        Mesaj:
        ${form.message}
      `
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      })

      const result = await response.json()

      if (result.success) {
        setSent(true)
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSent(false), 8000) // Mesajul dispare după 8 secunde
      } else {
        alert("A apărut o problemă la trimiterea formularului. Te rugăm să încerci din nou.")
      }
    } catch (error) {
      console.error('Eroare trimitere:', error)
      alert("Eroare de conexiune. Verifică internetul și încearcă din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Hai să vorbim"
        description="Suntem aici să răspundem la întrebările tale și să programăm prima ta vizită."
      />

      <section className="section-padding bg-sana-cream">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-sana-gray-900 text-white rounded-3xl p-8 lg:p-10">
                <h3 className="text-2xl font-display mb-6">Detalii contact</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sana-lime rounded-xl flex items-center justify-center text-sana-gray-900 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-sana-lime mb-1">Adresă</div>
                      <div className="text-sm text-sana-gray-300 leading-relaxed">
                        Str. Avrig 8, Parter, Sector 2<br />București
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sana-lime rounded-xl flex items-center justify-center text-sana-gray-900 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-sana-lime mb-1">Telefon</div>
                      <a href="tel:+40786511919" className="text-sm text-white hover:text-sana-lime transition-colors block">+40 786 511 919</a>
                      <a href="tel:+40216427979" className="text-sm text-sana-gray-300 hover:text-sana-lime transition-colors block">+40 21 642 79 79</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sana-lime rounded-xl flex items-center justify-center text-sana-gray-900 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-sana-lime mb-1">Email</div>
                      <a href="mailto:office@sanadent.ro" className="text-sm text-white hover:text-sana-lime transition-colors">office@sanadent.ro</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sana-lime rounded-xl flex items-center justify-center text-sana-gray-900 flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-sana-lime mb-1">Program</div>
                      <div className="text-sm text-sana-gray-300">Luni - Vineri: 8:00 - 20:00</div>
                      <div className="text-sm text-sana-gray-300">Sâmbătă - Duminică: Închis</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="bg-sana-gray-200 rounded-3xl aspect-[4/3] overflow-hidden">
                <iframe
                  title="SanaDent locație"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.431057488921!2d26.1264843!3d44.4448574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff394da4ffeb%3A0xc6cbdf0dcd1a62d8!2sStrada%20Avrig%208%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1715000000000!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-sana-gray-100"
            >
              <div className="eyebrow mb-3">Programare</div>
              <h2 className="text-3xl lg:text-4xl font-display text-sana-gray-900 mb-2">
                Solicită o programare
              </h2>
              <p className="text-sana-gray-600 mb-8">Completează formularul și te contactăm în maxim 24 de ore.</p>

              {sent && (
                <div className="bg-sana-lime/20 border border-sana-lime rounded-2xl p-5 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-sana-gray-900" size={22} />
                  <div>
                    <div className="font-medium text-sana-gray-900">Mesaj trimis cu succes!</div>
                    <div className="text-sm text-sana-gray-700">Te vom contacta în curând pentru confirmare.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-sana-gray-700 mb-2">
                      Nume *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-sana-cream focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition ${
                        errors.name ? 'border-red-400' : 'border-sana-gray-200'
                      }`}
                      placeholder="Numele tău"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-sana-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-sana-cream focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition ${
                        errors.phone ? 'border-red-400' : 'border-sana-gray-200'
                      }`}
                      placeholder="+40 ..."
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-sana-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-sana-cream focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition ${
                      errors.email ? 'border-red-400' : 'border-sana-gray-200'
                    }`}
                    placeholder="email@exemplu.ro"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-sana-gray-700 mb-2">
                    Serviciul de interes
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sana-gray-200 bg-sana-cream focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition"
                  >
                    <option value="">Selectează un serviciu</option>
                    <option value="Implantologie">Implantologie</option>
                    <option value="Chirurgie">Chirurgie</option>
                    <option value="Profilaxie">Profilaxie</option>
                    <option value="Restaurare Coronară">Restaurare Coronară</option>
                    <option value="Endodonție">Endodonție</option>
                    <option value="Parodontologie">Parodontologie</option>
                    <option value="Estetică Dentară">Estetică Dentară</option>
                    <option value="Protetică">Protetică</option>
                    <option value="Ortodonție">Ortodonție</option>
                    <option value="Pedodonție">Pedodonție</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-sana-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border bg-sana-cream focus:outline-none focus:ring-2 focus:ring-sana-lime/40 transition resize-none ${
                      errors.message ? 'border-red-400' : 'border-sana-gray-200'
                    }`}
                    placeholder="Descrie pe scurt motivul programării..."
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'} <Send size={16} />
                </button>

                <p className="text-xs text-sana-gray-500 text-center">
                  Prin trimiterea formularului ești de acord cu politica noastră de confidențialitate.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}