'use client';


const images = [
  '/A COLOR/PROYECTO 33/1.jpg',
  '/A COLOR/PROYECTO 33/2.jpg',
  '/A COLOR/PROYECTO 33/3.jpg',
  '/A COLOR/PROYECTO 33/4.jpg',
  '/A COLOR/PROYECTO 33/5.jpg',
  '/A COLOR/PROYECTO 33/6.jpg',
  '/A COLOR/PROYECTO 33/7.jpg',
  '/A COLOR/PROYECTO 33/8.jpg',
];

export default function Proyecto33Page() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-widest">
          PROYECTO 33
        </h1>

        {/* Descripción */}
        <p className="text-white/60 max-w-xl mb-16 text-sm sm:text-base">
          Material clasificado. Fragmentos de lo que será el próximo gran movimiento de Darksideuy.
          Acceso limitado. Revelación en proceso.
        </p>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 aspect-[3/4] cursor-pointer"
            >
              {/* Imagen */}
              <img
                src={src}
                alt={`Proyecto 33 - Archivo ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 
                  grayscale blur-md group-hover:grayscale-0 group-hover:blur-0"
              />

              {/* Overlay Top Secret */}
              <div className="absolute inset-0 flex items-center justify-center 
                bg-black/40 opacity-100 group-hover:opacity-0 transition duration-500">
                <span className="text-xs tracking-[0.3em] text-white/70">
                  TOP SECRET
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
