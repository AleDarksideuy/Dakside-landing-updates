'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-black px-4 pb-16 flex flex-col items-center text-white">
      
      {/* Header */}
      <div className="max-w-4xl w-full text-center pt-32 md:pt-40 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Nuestro Equipo
        </h1>

        <div className="h-[2px] bg-white mt-6 mx-auto max-w-xl animate-growLine"></div>
      </div>

      {/* Foto grupal responsive */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl mb-12 px-2"
      >
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.45)]">
          <Image
            src="/equipo/darksideequipo.png"
            alt="Equipo DarkSideUy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Descripción */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="max-w-3xl text-center space-y-6"
      >
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Somos un equipo multidisciplinar dedicado a impulsar la cultura urbana desde una visión artística, estratégica y comunitaria. 
          Cada integrante aporta su mirada, experiencia y compromiso para construir proyectos sólidos que trascienden el escenario.
        </p>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed text-center">
          El equipo está conformado por:
          <br className="hidden md:block" />
          
          <span className="block text-white font-semibold text-center mt-2">
            Alejandro Camarano (Encargado de Comunicaciones) y Nicolás Pérez (Iluminacion y sonido), <br/> 
            Anaí Mayor (Gestora Cultural) y Marcos Dal'Broi (Director Creativo).
          </span>
        </p>

      </motion.div>

      {/* Botón volver */}
      <Link href="/">
        <span className="mt-14 inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-black hover:text-white border-2 border-black hover:border-white transition">
          Volver a inicio
        </span>
      </Link>
    </main>
  )
}
