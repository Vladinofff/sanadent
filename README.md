# SanaDent — Website Clinică Stomatologie

Site React modern pentru clinica SanaDent, construit cu Vite + Tailwind CSS + Framer Motion.

## 🚀 Cum pornești proiectul (pas cu pas)

### 1. Instalează Node.js (dacă nu îl ai deja)
Descarcă de la https://nodejs.org/ — versiunea LTS (recomandată).

### 2. Deschide folderul în VS Code
File → Open Folder → selectează folderul `sanadent`.

### 3. Deschide terminalul în VS Code
`` Ctrl + ` `` (backtick) sau Terminal → New Terminal.

### 4. Instalează dependențele
```bash
npm install
```
(durează ~1-2 minute prima dată)

### 5. Pornește serverul de dezvoltare
```bash
npm run dev
```

### 6. Deschide site-ul
Vite va afișa un link de tipul `http://localhost:5173/` — dă click sau copiază în browser.

Site-ul se reîncarcă automat la fiecare modificare salvată. ✨

## 📁 Structura completă a proiectului

```
sanadent/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx              ⭐ Navigare cu submeniu "De ce noi?"
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx                Hero principal homepage
│   │   ├── StatsBanner.jsx         Banner cu statistici (15+, 5000+...)
│   │   ├── ServicesSection.jsx     Cele 10 tratamente pe homepage
│   │   ├── DoctorsSection.jsx      ⭐ Lista interactivă cu doctori
│   │   ├── GBTSection.jsx          ⭐ Secțiunea cu certificatul GBT
│   │   ├── PartnersCarousel.jsx    ⭐ Carousel parteneri infinit
│   │   ├── CTABanner.jsx           Banner verde "Programează-te"
│   │   ├── PageHeader.jsx          Header pentru paginile interioare
│   │   ├── ScrollToTop.jsx
│   │   └── WhatsAppButton.jsx      Buton flotant WhatsApp
│   ├── pages/
│   │   ├── Home.jsx                Pagina principală
│   │   ├── DeCeNoi.jsx             Pagina "De ce noi?" (cu carduri către sub-pagini)
│   │   ├── Echipa.jsx              Sub-pagină: Echipa medicală
│   │   ├── Dotari.jsx              Sub-pagină: Aparatură și echipamente
│   │   ├── Testimoniale.jsx        Sub-pagină: Recenzii pacienți
│   │   ├── Cazuistica.jsx          Sub-pagină: Cazuri before/after
│   │   ├── Tratamente.jsx          Cele 10 specializări detaliate
│   │   ├── Parteneri.jsx           Pagină completă parteneri
│   │   ├── Preturi.jsx             ⭐ Listă prețuri cu filtre + căutare
│   │   ├── FAQs.jsx                ⭐ Toate întrebările cu căutare
│   │   └── Contact.jsx             Formular + hartă + date contact
│   ├── data/                       ⭐ Aici editezi conținutul!
│   │   ├── doctors.js              Doctori organizați pe specializări
│   │   ├── services.js             Cele 10 tratamente
│   │   ├── prices.js               140+ servicii cu prețuri (din excel)
│   │   ├── faqs.js                 30+ întrebări frecvente
│   │   └── partners.js             Parteneri (Megagen, Invisalign, etc.)
│   ├── App.jsx                     Routing principal
│   ├── main.jsx                    Entry point
│   └── index.css                   Stiluri globale + Tailwind
├── tailwind.config.js              Paleta SanaDent (verde lime + negru)
├── vite.config.js
├── package.json
└── index.html
```

## 🗺️ Structura site-ului (rute)

| URL | Pagină |
|-----|--------|
| `/` | Acasă (Hero, Stats, Tratamente, Doctori, GBT, Parteneri) |
| `/de-ce-noi` | De ce noi? (overview cu carduri către sub-secțiuni) |
| `/de-ce-noi/echipa` | Echipa |
| `/de-ce-noi/dotari` | Dotări |
| `/de-ce-noi/testimoniale` | Testimoniale |
| `/de-ce-noi/cazuistica` | Cazuistică |
| `/tratamente` | Cele 10 tratamente |
| `/parteneri` | Parteneri |
| `/preturi` | Listă prețuri cu filtre |
| `/faqs` | Întrebări frecvente |
| `/contact` | Contact |

## ✏️ Cum completezi conținutul real

### 👨‍⚕️ Doctori
Editează `src/data/doctors.js`. Pentru fiecare specializare:
```js
{
  id: 'dr-popescu',
  name: 'Dr. Ion Popescu',
  role: 'Medic Primar',
  photo: '/doctors/popescu.jpg',  // poza în public/doctors/
  shortDesc: 'Descriere scurtă (2-3 fraze)...',
  fullDesc: 'Descriere completă...',
}
```

### 🦷 Tratamente
Editează `src/data/services.js`.

### 💰 Prețuri
Editează `src/data/prices.js` — toate prețurile din excel sunt deja importate. Poți adăuga, modifica sau șterge servicii.

### ❓ FAQs
Editează `src/data/faqs.js` — toate cele ~30 întrebări sunt deja completate.

### 🤝 Parteneri
Editează `src/data/partners.js`. Pentru fiecare partener:
- Pune logo-ul în `public/partners/`
- Setează `logo: '/partners/numefisier.png'`

### 📸 Poze
- **Doctori**: `public/doctors/`
- **Parteneri**: `public/partners/`
- **Clinică**: `public/clinic/`
- **Cazuistică**: `public/cazuistica/`
- **Certificat GBT**: `public/certificates/`

### 📞 Date de contact (telefon, email, adresă)
Caută cu `Ctrl+Shift+H` în VS Code și înlocuiește global:
- `+40786511919` → numărul real
- `+40 786 511 919` → numărul real cu spații
- `office@sanadent.ro` → emailul real
- `Str. Avrig 8` → adresa reală

### 🗺️ Hartă Google Maps
În `src/pages/Contact.jsx`, înlocuiește URL-ul iframe-ului. Generează unul nou:
1. Du-te pe Google Maps
2. Caută adresa clinicii
3. Click "Share" → "Embed a map"
4. Copiază URL-ul din `src="..."` și înlocuiește în Contact.jsx

## 🎨 Paleta de culori

- **sana-gray-900** (`#1a1a1a`) — negru principal
- **sana-lime** (`#c4d82e`) — verde lime de accent
- **sana-cream** (`#faf9f4`) — fundal cald
- **sana-gray-50/100/200** — nuanțe de gri pentru fundaluri

Pentru a ajusta culorile, editează `tailwind.config.js` → secțiunea `sana`.

## ✨ Funcționalități speciale

- **Header sticky** cu efect de scroll și submeniu dropdown pentru "De ce noi?"
- **Lista interactivă de doctori** — apeși pe categorie, se schimbă lista cu animație
- **Carousel parteneri** infinit (pauzează la hover)
- **Pagină prețuri** cu filtre pe categorii + căutare în timp real
- **FAQ** cu căutare în întrebări și răspunsuri
- **Formular contact** cu validare (nume, email, telefon, mesaj)
- **Animații smooth** la scroll (Framer Motion)
- **Responsive** — funcționează perfect pe mobil, tabletă și desktop
- **Buton WhatsApp flotant** mereu vizibil

## 🛠️ Build pentru producție

```bash
npm run build
```
Generează folderul `dist/` cu fișierele optimizate. Poți face deploy gratuit pe:
- **Netlify** (drag & drop folderul `dist/`)
- **Vercel** (conectează la GitHub)
- **GitHub Pages**
- Hosting clasic (FTP)

## 💡 Sfaturi rapide

- Pentru a modifica navigarea: `src/components/Header.jsx` → array-ul `navLinks`.
- Pentru SEO: editează meta-tag-urile din `index.html`.
- Formularul de contact momentan doar afișează în consolă — pentru trimiterea reală, integrează **EmailJS** (gratuit, ușor de pus) sau un endpoint propriu.
- Pentru certificatul GBT real: înlocuiește placeholder-ul din `GBTSection.jsx` cu `<img src="/certificates/gbt.jpg" />`.
