import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ExternalLink, X } from 'lucide-react'
import { reviews, googleStats } from '../data/reviews'

export default function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState(null)

  // Blochează scroll-ul când e deschis modalul
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedReview])

  // Închide cu tasta Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedReview(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section-padding bg-sana-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sana-lime rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-sana-lime rounded-full blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow text-sana-lime mb-4">Recenzii pacienți</div>
          <h2 className="text-4xl lg:text-5xl font-display leading-tight mb-8">
            Ce spun pacienții <span className="italic text-sana-lime">noștri</span> despre experiența cu noi
          </h2>

          {/* Google rating card */}
          <div className="inline-flex flex-col items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-8">
            {/* Google logo */}
            <div className="flex items-center gap-2 text-sana-gray-400 text-sm">
              <span>Recenzii pe</span>
              <span className="font-semibold">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-display text-sana-lime font-bold">
                {googleStats.rating}
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={22}
                    className="fill-sana-lime text-sana-lime"
                  />
                ))}
              </div>
            </div>

            {/* Total reviews */}
            <div className="text-sm text-sana-gray-300">
              
            </div>

            {/* CTA */}
            <a
              href={googleStats.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sana-lime text-sana-gray-900 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-sana-lime-dark transition-all duration-300 mt-2"
            >
              Lasă o recenzie
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {reviews.map((review, idx) => (
            <ReviewCard
              key={review.id}
              review={review}
              idx={idx}
              onReadMore={() => setSelectedReview(review)}
            />
          ))}
        </div>

        {/* See all link */}
        <div className="text-center mt-12">
          <a
            href={googleStats.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-sana-lime hover:gap-3 transition-all duration-300"
          >
            Vezi toate recenziile pe Google
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Modal pentru recenzia completă */}
      <AnimatePresence>
        {selectedReview && (
          <ReviewModal
            review={selectedReview}
            onClose={() => setSelectedReview(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

// ====================================================
// Card individual de recenzie cu detectare automată dacă e prea lung
// ====================================================
function ReviewCard({ review, idx, onReadMore }) {
  const textRef = useRef(null)
  const [isClamped, setIsClamped] = useState(false)

  // Verifică dacă textul e tăiat (overflow datorat line-clamp)
  useEffect(() => {
    const el = textRef.current
    if (!el) return
    // Dacă înălțimea reală e mai mare decât cea afișată → e tăiat
    setIsClamped(el.scrollHeight > el.clientHeight + 1)
  }, [review.text])

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group bg-white rounded-3xl p-7 hover:shadow-2xl hover:shadow-sana-lime/10 transition-all duration-500 relative"
    >
      {/* Quote icon */}
      <Quote
        className="absolute top-6 right-6 text-sana-lime/40 group-hover:text-sana-lime transition-colors duration-500"
        size={32}
      />

      {/* Header: avatar + name + date */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-sana-gray-900 flex items-center justify-center text-sana-lime font-medium text-sm flex-shrink-0">
          {review.initials}
        </div>
        <div className="min-w-0">
          <div className="font-medium text-sana-gray-900 truncate">{review.name}</div>
          <div className="text-xs text-sana-gray-500">{review.date}</div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-sana-lime text-sana-lime"
          />
        ))}
      </div>

      {/* Review text */}
      <p
        ref={textRef}
        className="text-sm text-sana-gray-700 leading-relaxed line-clamp-6"
      >
        "{review.text}"
      </p>

      {/* Read more button - apare doar dacă textul e tăiat */}
      {isClamped && (
        <button
          onClick={onReadMore}
          className="mt-4 text-xs tracking-[0.2em] uppercase text-sana-lime-dark hover:text-sana-gray-900 font-medium transition-colors duration-300 inline-flex items-center gap-1.5 group/btn"
        >
          Citește mai mult
          <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">→</span>
        </button>
      )}
    </motion.article>
  )
}

// ====================================================
// Modal cu recenzia completă
// ====================================================
function ReviewModal({ review, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden relative shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-sana-gray-100 hover:bg-sana-gray-900 hover:text-sana-lime flex items-center justify-center text-sana-gray-700 transition-all duration-300"
          aria-label="Închide"
        >
          <X size={18} />
        </button>

        <div className="p-8 lg:p-10 overflow-y-auto max-h-[85vh]">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pr-12">
            <div className="w-14 h-14 rounded-full bg-sana-gray-900 flex items-center justify-center text-sana-lime font-medium flex-shrink-0">
              {review.initials}
            </div>
            <div className="min-w-0">
              <div className="font-medium text-sana-gray-900 text-lg">{review.name}</div>
              <div className="text-sm text-sana-gray-500">{review.date}</div>
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-sana-lime text-sana-lime"
              />
            ))}
          </div>

          {/* Quote icon */}
          <Quote className="text-sana-lime/40 mb-4" size={36} />

          {/* Full review text */}
          <p className="text-sana-gray-700 leading-relaxed whitespace-pre-line">
            {review.text}
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-sana-gray-100 flex items-center justify-between flex-wrap gap-4">
            <div className="text-xs text-sana-gray-500 flex items-center gap-2">
              <span>Recenzie pe</span>
              <span className="font-semibold">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
              </span>
            </div>
            <a
              href={googleStats.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase text-sana-lime-dark hover:text-sana-gray-900 font-medium transition-colors inline-flex items-center gap-2"
            >
              Vezi pe Google
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
