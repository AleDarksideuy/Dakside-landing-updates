'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactoPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert('Mensaje enviado correctamente');
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert('Error al enviar el mensaje');
        }
      );
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8">Contacto</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Nombre */}
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full px-4 py-3 bg-black border border-white/20 rounded focus:outline-none focus:border-white"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full px-4 py-3 bg-black border border-white/20 rounded focus:outline-none focus:border-white"
          />

          {/* Mensaje */}
          <textarea
            name="message"
            placeholder="Escribí tu mensaje..."
            rows={5}
            required
            className="w-full px-4 py-3 bg-black border border-white/20 rounded resize-none focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}


