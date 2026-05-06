import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import DeCeNoi from './pages/DeCeNoi'
import Echipa from './pages/Echipa'
import Dotari from './pages/Dotari'
import Testimoniale from './pages/Testimoniale'
import Cazuistica from './pages/Cazuistica'
import Tratamente from './pages/Tratamente'
import Parteneri from './pages/Parteneri'
import Preturi from './pages/Preturi'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import DoctorPage from './pages/DoctorPage'
import TratamentDetalii from './pages/TratamentDetalii'
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate' 


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/de-ce-noi" element={<DeCeNoi />} />
          <Route path="/de-ce-noi/echipa" element={<Echipa />} />
          <Route path="/de-ce-noi/dotari" element={<Dotari />} />
          <Route path="/de-ce-noi/testimoniale" element={<Testimoniale />} />
          <Route path="/de-ce-noi/cazuistica" element={<Cazuistica />} />
          <Route path="/tratamente" element={<Tratamente />} />
          <Route path="/parteneri" element={<Parteneri />} />
          <Route path="/preturi" element={<Preturi />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctori/:id" element={<DoctorPage />} />
          <Route path="/tratament/:id" element={<TratamentDetalii />} />
          
          {/* Ruta pentru Politica de Confidențialitate */}
          <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App