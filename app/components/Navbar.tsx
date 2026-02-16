'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [open, setOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShow(false)
        setOpen(false)
      } else {
        setShow(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/DARKSIDE LOGO NUEVO.png"
              alt="Darksideuy Logo"
              className="h-8 sm:h-10 object-contain hover:opacity-80 transition"
            />
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/llamado">
              <button className="px-5 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition">
                Llamado
              </button>
            </Link>

            {/* Flecha mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center"
              aria-label="Abrir menú"
            >
              <svg
                className={`w-5 h-5 text-white transition-transform duration-300 ${
                  open ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 gap-8">
          <Link href="/contacto" className="text-white/80 hover:text-white transition">
            Contacto
          </Link>
          <Link href="/equipo" className="text-white/80 hover:text-white transition">
            Nuestro equipo
          </Link>
          <Link href="/colaboradores" className="text-white/80 hover:text-white transition">
            Colaboradores
          </Link>
        </div>

        {/* Dropdown mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-40 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 text-center">
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              Contacto
            </Link>
            <Link
              href="/equipo"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              Nuestro equipo
            </Link>
            <Link
              href="/colaboradores"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              Colaboradores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
