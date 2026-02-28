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

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openMagazine, setOpenMagazine] = useState(false);

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
      {/* HERO SLIDER */}
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

      {/* DARKSIDE MAGAZINE */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Darkside Magazine
          </h2>

          <p className="text-gray-400 mb-8">
            Explorá nuestra revista digital y sumergite en la cultura urbana.
          </p>

          <button
            onClick={() => setOpenMagazine(!openMagazine)}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            {openMagazine ? 'Ocultar Revista' : 'Ver Revista'}
          </button>
        </div>

        <AnimatePresence>
          {openMagazine && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden mt-12 max-w-6xl mx-auto"
            >
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://heyzine.com/flip-book/8d211fda40.html"
                  className="w-full h-full rounded-xl shadow-2xl"
                  allow="clipboard-write"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}