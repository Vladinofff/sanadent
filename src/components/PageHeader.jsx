export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-sana-gray-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div className="container-x text-center max-w-3xl mx-auto">
        {eyebrow && <div className="eyebrow text-sana-lime mb-4">{eyebrow}</div>}
        <h1 className="text-5xl lg:text-6xl font-display leading-tight mb-6 text-white">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-sana-gray-300 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
