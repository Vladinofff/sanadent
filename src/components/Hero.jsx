import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative text-white overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">

            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/fundal.jfif" // ← pune aici imaginea ta
                    alt="Clinica SanaDent"
                    className="w-full h-full object-cover"
                />
                {/* Overlay pentru lizibilitate */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="w-full px-6 lg:pl-16 xl:pl-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <div className="eyebrow text-sana-lime mb-6">
                        Centru de Stomatologie · București
                    </div>

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display leading-[1.1] mb-8 text-white">
    Pentru că... <br />
    meriți să <span className="text-sana-lime italic">zâmbești!</span>
</h1>

                    <p className="text-lg text-sana-gray-300 leading-relaxed mb-10 max-w-xl">
                        De la consultații de rutină la tratamente complexe , 
                        combinăm tehnologia modernă cu o abordare caldă, dedicată fiecărui pacient.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="btn-primary group flex items-center gap-2">
                            Programează-te
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>

                        <a
                            href="tel:+40786511919"
                            className="btn-outline border-sana-gray-700 text-white hover:border-sana-lime hover:text-sana-lime flex items-center gap-2"
                        >
                            <Phone size={16} />
                            Sună acum: 0786 511 919
                        </a>
                    </div>

                    {/* Trust signal */}
                    <div className="text-sm text-sana-gray-400 mt-6">
                        Peste 3500 de pacienți tratați cu succes în București
                    </div>
                </motion.div>
            </div>
        </section>
    )
}