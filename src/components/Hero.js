import React from "react";
import heroImage from '../assets/bowl.png';

export default function Hero({ parallaxRef, heroImgRef, PRIMARY, WHATSAPP }) {
  return (
    <section id="home" className="pt-32 md:pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0" aria-hidden>
        <div ref={parallaxRef} className="w-full h-full" style={{ backgroundImage: `linear-gradient(180deg, ${PRIMARY}, rgba(255,255,255,0.02))` }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-white md:text-left text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Shabuajihi Ciwidey</h2>
          <p className="mt-4 text-lg opacity-90">Warm, Japanese-inspired shabu served hot — perfect for Ciwidey nights.</p>

          <div className="mt-6 flex justify-center md:justify-start gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg font-semibold" style={{ backgroundColor: "#fff", color: PRIMARY }}>Order via WhatsApp</a>
            <a href="#menu" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border font-semibold bg-transparent text-white/90">See Menu</a>
          </div>

          <ul className="mt-8 text-sm opacity-90 space-y-2">
            <li>· Fresh local ingredients</li>
            <li>· Broth recipes inspired by Japanese umami</li>
            <li>· Fast delivery within Ciwidey</li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div ref={heroImgRef} className="rounded-xl overflow-hidden shadow-2xl max-w-md w-full" style={{ border: `8px solid rgba(255,255,255,0.06)` }}>
            <img src={heroImage} alt="Shabu bowl" className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>

      {/* Decorative Japanese leaf motif top-left */}
      <svg className="absolute left-6 top-6 opacity-10 w-48 h-48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 80 C 30 10, 70 10, 90 80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </section>
  );
}
