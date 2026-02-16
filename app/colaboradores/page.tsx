'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const collaborators = [
  {
    name: 'Intendencia de Soriano',
    image: '/collaborators/SORIANO FERTIL.jpg',
    description:
      'Gobierno departamental que impulsa y apoya el desarrollo cultural, deportivo y comunitario en el territorio.',
  },
  {
    name: 'Fondo de Incentivo Cultural (FIC)',
    image: '/collaborators/LOGO FIC BLANCO.png',
    description:
      'Programa nacional perteneciente al Ministerio de Educación y Cultura (MEC) que financia proyectos culturales mediante aportes de empresas y apoyo del Estado.',
  },
  {
    name: 'INJU',
    image: '/collaborators/INJU.jpg',
    description:
      'Instituto Nacional de la Juventud que promueve políticas públicas orientadas al desarrollo de jóvenes.',
  },
  {
    name: 'Casa de la Cultura de Mercedes',
    image: '/collaborators/CASA DE LA CULTURA.jpg',
    description:
      'Espacio cultural dedicado a la promoción de actividades artísticas y comunitarias.',
  },
  {
    name: 'Secretaría de Deporte',
    image: '/collaborators/SECRETARIA DE DEPORTES.jpg',
    description:
      'Entidad que impulsa el desarrollo deportivo y la integración social a través del deporte.',
  },
]

export default function ColaboradoresPage() {
  return (
    <main className="min-h-screen bg-black px-4 pb-16 flex flex-col items-center text-white">

      {/* Header */}
      <div className="max-w-4xl w-full text-center pt-32 md:pt-40 mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Colaboradores
        </h1>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Instituciones y organismos que respaldan y fortalecen el desarrollo cultural impulsado por DarkSideUy.
        </p>

        <div className="h-[2px] bg-white mt-6 mx-auto max-w-xl animate-growLine"></div>
      </div>

      {/* Listado institucional */}
      <div className="w-full max-w-5xl space-y-12">
        {collaborators.map((collab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-white/10 pb-8"
          >
            {/* Logo */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
              <Image
                src={collab.image}
                alt={collab.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                {collab.name}
              </h2>

              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
                {collab.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botón volver */}
      <Link href="/">
        <span className="mt-16 inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-black hover:text-white border-2 border-black hover:border-white transition">
          Volver a inicio
        </span>
      </Link>
    </main>
  )
}
