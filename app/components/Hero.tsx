'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

const slides = [
  {
    title: 'Skatepark Underfest',
    description:
      'Un evento que fusiona música, cultura y deporte en un solo lugar. La escena urbana encuentra su voz.',
    imageDesktop: '/A COLOR/SPUF DICIEMBRE/D2.jpg',
    imageMobile: '/A COLOR/SPUF DICIEMBRE/D2.jpg',
    buttonText: 'Ver más',
    link: '/underfest',
  },
  {
    title: 'Ciclo de música',
    description:
      'Un ciclo de eventos enfocados en impulsar artistas del interior del país.',
    imageDesktop: '/PORTADAS/CICLO DE MUSICA/CICLO DE MUSICA.png',
    imageMobile: '/PORTADAS/CICLO DE MUSICA/CICLO DE MUSICA.png',
    buttonText: 'Ver más',
    link: '/ciclo-de-musica',
  },
  {
    title: 'Living Sessions',
    description:
      'Sesiones íntimas y audiovisuales desarrolladas para dar visibilidad a artistas del interior.',
    imageDesktop: '/PORTADAS/LIVING SESSION/COLOR LIVING SESSION.png',
    imageMobile: '/PORTADAS/LIVING SESSION/COLOR LIVING SESSION.png',
    buttonText: 'Ver más',
    link: '/living-sessions',
  },
  {
    title: 'Darkside Arena',
    description:
      'Un nuevo formato de eventos competitivos que llevará la experiencia a otro nivel.',
    imageDesktop: '/PORTADAS/DARKSIDE ARENA/DARKSIDE ARENA PORTADA CANDADO.png',
    imageMobile: '/PORTADAS/DARKSIDE ARENA/DARKSIDE ARENA PORTADA CANDADO.png',
    buttonText: 'Próximamente',
    link: null,
  },
  {
    title: 'Concurso de Bandas',
    description:
      'Competencias en vivo donde las bandas se enfrentan por un lugar en la escena.',
    imageDesktop: '/PORTADAS/CONCURSO DE BANDAS/CONCURSO DE BANDAS CANDADO.png',
    imageMobile: '/PORTADAS/CONCURSO DE BANDAS/CONCURSO DE BANDAS CANDADO.png',
    buttonText: 'Próximamente',
    link: null,
  },
];

const upcomingEvents = [
  { date: '02 ABR 2026', name: 'Concurso de Bandas | Ronda 1' },
  { date: '03 ABR 2026', name: 'Darkside Arena | Fecha 1' },
  { date: '07 MAY 2026', name: 'Concurso de Bandas | Eliminatorias' },
  { date: '22 MAY 2026', name: 'Darkside Arena | Fecha 2' },
  { date: '11 JUN 2026', name: 'Concurso de Bandas | Semifinal' },
  { date: '20 JUN 2026', name: 'Ciclo de Música | Edición 3' },
  { date: '10 JUL 2026', name: 'Darkside Arena | Fecha 3' },
  { date: '25 JUL 2026', name: 'Ciclo de Música | Edición 4' },
  { date: '06 AGO 2026', name: 'Concurso de Bandas | Final' },
  { date: '22 AGO 2026', name: 'Evento Especial' },
  { date: '11 SEP 2026', name: 'Darkside Arena | Fecha Especial' },
  { date: '26 SEP 2026', name: 'Ciclo de Música | Edición 5' },
  { date: '09 OCT 2026', name: 'Darkside Arena | Última Rankeable' },
  { date: '24 OCT 2026', name: 'Evento Especial' },
  { date: '13 NOV 2026', name: 'Darkside Arena | Final Anual' },
  { date: '28 NOV 2026', name: 'Ciclo de Música | Edición 6' },
  { date: '11 DIC 2026', name: 'Urban Fest' },
  { date: '19 DIC 2026', name: 'Premios Soriano' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openMagazine, setOpenMagazine] = useState(false);
  const [openTickets, setOpenTickets] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  if (!slides[current]) return null;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden" {...handlers}>
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 group"
          >
            <img
              src={
                isMobile
                  ? slides[current].imageMobile
                  : slides[current].imageDesktop
              }
              alt={slides[current].title}
              className={clsx(
                'h-full w-full object-cover brightness-75 transition-all duration-500',
                slides[current].title === 'Living Sessions' &&
                  'grayscale group-hover:grayscale-0',
                slides[current].title === 'Skatepark Underfest' &&
                  'grayscale'
              )}
            />

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-8 sm:px-16 lg:px-24 py-6 text-white">
              <h1 className="text-xl sm:text-3xl font-bold mb-1">
                {slides[current].title}
              </h1>

              <p className="max-w-lg mb-6 text-sm sm:text-base leading-snug">
                {slides[current].description}
              </p>

              {slides[current].link ? (
                <Link href={slides[current].link} legacyBehavior>
                  <a className="bg-white text-black font-medium px-4 py-1.5 text-sm rounded hover:bg-gray-200 transition inline-block">
                    {slides[current].buttonText}
                  </a>
                </Link>
              ) : (
                <span className="bg-white/70 text-black/70 font-medium px-4 py-1.5 text-sm rounded inline-block cursor-not-allowed">
                  {slides[current].buttonText}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 px-4 -translate-y-1/2 z-10">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="text-white hover:text-gray-400 transition bg-black/40 backdrop-blur-sm rounded-full p-2"
          >
            <FaArrowLeft size={24} />
          </button>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="text-white hover:text-gray-400 transition bg-black/40 backdrop-blur-sm rounded-full p-2"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* ENTRADAS */}
      <section className="bg-black text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* CAMBIO: imagen primero en mobile, texto debajo */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            
            {/* IMAGEN */}
            <div className="w-full order-1">
              <img
                src="/hero-images/cronograma2026.jpeg"
                alt="Temporada Teatro 2026"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* TEXTO + BOTÓN */}
            <div className="w-full order-2 md:order-none text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Temporada 2026
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Consultá todas las fechas oficiales del Teatro 28 de Febrero.
                Próximamente estarán disponibles los tickets online para cada evento.
              </p>

              <button
                onClick={() => setOpenTickets(!openTickets)}
                className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                {openTickets ? 'Cerrar cartelera' : 'Ver cartelera completa'}
              </button>
            </div>

          </div>
        </div>

        <AnimatePresence>
          {openTickets && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="max-w-5xl mx-auto px-6 pb-20">
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scroll">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.date + event.name}
                      className="flex justify-between items-center border border-white/10 rounded-lg px-6 py-4 hover:border-white/30 transition"
                    >
                      <div>
                        <p className="text-sm text-gray-400">{event.date}</p>
                        <p className="font-medium">{event.name}</p>
                      </div>

                      <button className="bg-white/20 text-white text-xs px-4 py-2 rounded cursor-not-allowed">
                        Próximamente
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          .custom-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: #ffffff40;
            border-radius: 10px;
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: #ffffff80;
          }
        `}</style>
      </section>

      {/* DARKSIDE MAGAZINE PREVIEW */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Darkside Magazine
          </h2>
          <p className="text-gray-400">
            Descubrí nuestra revista digital y explorá la cultura urbana desde adentro.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            onClick={() => setOpenMagazine(true)}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow-2xl"
          >
            <img
              src="/hero-images/portadarevista.jpeg"
              alt="Darkside Magazine Preview"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                Abrir Revista
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL REVISTA */}
      <AnimatePresence>
        {openMagazine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-7xl max-h-[95vh] p-6">
              <button
                onClick={() => setOpenMagazine(false)}
                className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition z-50"
              >
                Cerrar ✕
              </button>

              <iframe
                src="https://heyzine.com/flip-book/8d211fda40.html"
                className="w-full h-full rounded-xl"
                allow="clipboard-write"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}