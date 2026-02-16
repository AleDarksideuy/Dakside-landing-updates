'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'

const images = [
  '/A COLOR/CDM TEATRO/1.1.png',
  '/A COLOR/CDM TEATRO/1.png',
  '/A COLOR/CDM TEATRO/2.2.png',
  
  '/A COLOR/CDM TEATRO/5.png',
  '/A COLOR/CDM TEATRO/6.1.png',
  '/A COLOR/CDM TEATRO/6.png',
  '/A COLOR/CDM TEATRO/7.png',
  '/A COLOR/CDM TEATRO/8.1.png',
  '/A COLOR/CDM TEATRO/8.png',
]

export default function CicloDeMusicaPage() {
  const [current, setCurrent] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  const open = (index: number) => setCurrent(index)
  const close = () => setCurrent(null)

  const next = () => {
    if (current === null) return
    setCurrent((prev) => (prev! + 1) % images.length)
  }

  const prev = () => {
    if (current === null) return
    setCurrent((prev) => (prev! - 1 + images.length) % images.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX

    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current
      if (Math.abs(distance) > minSwipeDistance) {
        distance > 0 ? next() : prev()
      }
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center pt-32 md:pt-40 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Ciclo de Música
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
         Un formato de eventos diseñado para dar visibilidad a artistas emergentes del interior y consolidar la escena musical local, generando espacios de encuentro, difusión y producción cultural en distintos puntos del departamento
        </p>

        <div className="h-[2px] bg-white mt-6 mx-auto max-w-xl animate-growLine"></div>
      </div>

      {/* Galería */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => open(index)}
            className="group relative overflow-hidden rounded-xl focus:outline-none"
          >
            <div className="aspect-[4/3] bg-black">
              <Image
                src={src}
                alt={`Ciclo de música ${index + 1}`}
                fill
                className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="px-4 py-2 border border-white text-sm rounded-full">
                Ver imagen
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal fullscreen */}
      {current !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Cerrar */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white hover:text-gray-400 transition"
            aria-label="Cerrar"
          >
            <FaTimes size={28} />
          </button>

          {/* Imagen */}
          <div className="relative w-full max-w-5xl h-[70vh] px-4">
            <Image
              src={images[current]}
              alt={`Imagen ${current + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 text-white hover:text-gray-400 transition"
            aria-label="Anterior"
          >
            <FaArrowLeft size={32} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 md:right-8 text-white hover:text-gray-400 transition"
            aria-label="Siguiente"
          >
            <FaArrowRight size={32} />
          </button>
        </div>
      )}
    </main>
  )
}
