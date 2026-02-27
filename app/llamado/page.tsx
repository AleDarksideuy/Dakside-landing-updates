'use client'

import { useState } from 'react'

export default function ContactoPage() {
  const [open, setOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center">
      
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Llamado
        </h1>

        <p className="text-gray-300 text-lg md:text-xl">
          Postulate a nuestras convocatorias abiertas.
        </p>

        <div className="h-[2px] bg-white mt-6 mx-auto w-40 animate-growLineCenter"></div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-sm">

        {/* BOTÓN DESPLEGABLE ARTISTAS */}
        <div className="w-full">
          <button
            onClick={() => setOpen(!open)}
            className="w-full border border-white text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-white hover:text-black transition"
          >
            Llamado Artistas
          </button>

          {open && (
            <div className="flex flex-col gap-3 mt-4">

              <a
                href="https://forms.gle/3fLCA5NvZHKDfiGUA"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white py-3 px-4 rounded-xl text-center hover:bg-white hover:text-black transition"
              >
                Artista Visual
              </a>

              <a
                href="https://forms.gle/qU99xkbmHKLsFmVi8"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white py-3 px-4 rounded-xl text-center hover:bg-white hover:text-black transition"
              >
                Artista Musical
              </a>

              <a
                href="https://forms.gle/CDZvRzu4dKDMUMe86"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white py-3 px-4 rounded-xl text-center hover:bg-white hover:text-black transition"
              >
                Artista Digital
              </a>

            </div>
          )}
        </div>

        {/* BOTÓN DARKSIDE ARENA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd_7zowE9A8uvxsb_NooivFru6gV4azC5u3wIAPmKiX76ChFQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-white hover:text-black transition"
        >
          Registro Darkside Arena 
        </a>

      </div>
    </main>
  )
}