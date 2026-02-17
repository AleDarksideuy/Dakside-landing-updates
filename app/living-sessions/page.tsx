'use client';

import Link from 'next/link';

const livingSessions = [
  {
    number: 1,
    band: 'La Última Ruta',
    youtubeUrl: 'https://youtu.be/I-n1wYJjLUo?si=NReUx3Kk6xZm6Law',
    available: true,
  },
  {
    number: 2,
    band: 'Dúo Spifit',
    youtubeUrl: 'https://youtu.be/g8yZn1NQQcc?si=6VBAqxvnMVwLCHW5',
    available: true,
  },
  {
    number: 3,
    band: 'Génesis',
    youtubeUrl: 'https://youtu.be/-YIQl6k9XY0?si=q-HbHR7qX-NXY-3S',
    available: true,
  },
  {
    number: 4,
    band: 'NAZ',
    youtubeUrl: 'https://youtu.be/RdNvn_qSIjg?si=pc4OwNjjwkhLxr2h',
    available: true,
  },
  {
    number: 5,
    band: 'Geraldine',
    youtubeUrl: 'https://youtu.be/vnGfpCj3BGo?si=EUj_ej5d8TBrMNBu',
    available: true,
  },
  {
    number: 6,
    band: null,
    youtubeUrl: null,
    available: false,
  },
  {
    number: 7,
    band: null,
    youtubeUrl: null,
    available: false,
  },
  {
    number: 8,
    band: null,
    youtubeUrl: null,
    available: false,
  },
];

export default function LivingSessionsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-12">
          Living Sessions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {livingSessions.map((session) => (
            <div
              key={session.number}
              className="group border border-white/20 rounded-xl overflow-hidden flex flex-col justify-between hover:border-white transition"
            >
              {/* Imagen (solo sesiones 1 a 5) */}
              {session.number <= 5 && (
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={`/A COLOR/LIVING SESSIONS CAPTURAS/${session.number}.png`}
                    alt={`Living Session ${session.number}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}

              {/* Contenido */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="text-sm text-white/60">
                    Living Session
                  </span>

                  <h2 className="text-2xl font-bold mt-1">
                    #{session.number}
                  </h2>

                  {/* Nombre de la banda (solo 1 a 4) */}
                  {session.band && (
                    <p className="mt-1 text-sm text-white/80">
                      {session.band}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  {session.available && session.youtubeUrl ? (
                    <Link
                      href={session.youtubeUrl}
                      target="_blank"
                      className="inline-block border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                    >
                      Ver en YouTube
                    </Link>
                  ) : (
                    <span className="inline-block border border-white/30 text-white/50 px-4 py-2 rounded-full text-sm cursor-not-allowed">
                      Próximamente
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

