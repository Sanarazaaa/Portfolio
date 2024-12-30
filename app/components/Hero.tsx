import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn text-shadow">
          Sana Raza
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slideIn">
          Biomedical Engineer | Beta Reader | Int'l Competitions Participant
        </p>
        <Link 
          href="#about"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 animate-float"
        >
          Explore My Work
        </Link>
        <div className="mt-16 animate-float">
          <ArrowDown size={32} className="mx-auto" />
        </div>
      </div>
    </section>
  )
}

