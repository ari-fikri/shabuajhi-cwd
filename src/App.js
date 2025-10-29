import React, { useEffect, useRef } from "react";
import heroImage from './assets/bowl.png';
import fullMenuImage from './assets/full_menu.jpg';
import shabuBowlImage from './assets/shabu_bowl.jpg';
import meatImage from './assets/meat.jpg';
import familyImage from './assets/family.jpg';

import gallery1 from './assets/gallery_1.jpg';
import gallery2 from './assets/gallery_2.jpg';
import gallery3 from './assets/gallery_3.png';
import gallery4 from './assets/gallery_4.jpeg';

// Shabuajihi Ciwidey — Single-file React SPA (TailwindCSS)
// - Single page application layout with sections: Home, Menu (6 items), Gallery, Reviews, Contact
// - Parallax effects implemented with a small onScroll handler
// - Main color: #ff472f
// - Order button links to WhatsApp (replace PHONE_NUMBER with actual number, e.g. 628123456789)

export default function App() {
  const PRIMARY = "#ff472f";
  const WHATSAPP = "https://wa.me/62812xxxxxxx?text=Halo%20Shabuajihi,%20saya%20ingin%20pesan"; // <-- replace with real number

  const menu = [
    { id: 1, name: "Shabu Classic", desc: "Thinly sliced beef, house broth, seasonal veg.", price: "Rp 85.000", img: fullMenuImage },
    { id: 2, name: "Seafood Shabu", desc: "Shrimp, squid, and fish balls", price: "Rp 95.000", img: meatImage },
    { id: 3, name: "Vegetarian", desc: "Tofu, mushrooms, seasonal greens", price: "Rp 70.000", img: shabuBowlImage },
    { id: 4, name: "Spicy Miso", desc: "Miso-based spicy broth with premium beef", price: "Rp 95.000", img: "https://images.unsplash.com/photo-1544025162-d76694265947" },
    { id: 5, name: "Family Hotpot", desc: "Shareable pot for 3-4 people", price: "Rp 240.000", img: familyImage },
    { id: 6, name: "Sukiyaki", desc: "Sweet-savory sukiyaki style", price: "Rp 110.000", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2" },
  ];

  const reviews = [
    { id: 1, name: "Rina", text: "Best shabu I had in Ciwidey — broths are rich and service is friendly!" },
    { id: 2, name: "Andi", text: "Perfect on a cold evening. Fast delivery and everything arrived hot." },
    { id: 3, name: "Sari", text: "Fresh ingredients and generous portions. Highly recommended." },
  ];

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery1];

  // Parallax refs
  const parallaxRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scY = window.scrollY;
      // gentle parallax transforms
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scY * -0.12}px)`;
      }
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${scY * 0.06}px) scale(${1 + Math.min(scY / 3000, 0.04)})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-900" style={{ backgroundColor: "#fff7f5" }}>
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-md flex items-center justify-center" style={{ backgroundColor: PRIMARY }}>
              <span className="text-white font-bold">SC</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Shabuajihi Ciwidey</h1>
              <p className="text-xs text-gray-600">Ciwidey — authentic Japanese-inspired shabu</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:opacity-80">Home</a>
            <a href="#menu" className="hover:opacity-80">Menu</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#reviews" className="hover:opacity-80">Reviews</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="ml-2 inline-block px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: PRIMARY }}>Order</a>
          </nav>

          <div className="md:hidden">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-white font-semibold" style={{ backgroundColor: PRIMARY }}>Order</a>
          </div>
        </div>
      </header>

      {/* HERO with Japanese nuance (pattern + dominant color) */}
      <section id="home" className="pt-24 md:pt-32 pb-24 overflow-hidden relative">
        <div className="absolute inset-0" aria-hidden>
          <div ref={parallaxRef} className="w-full h-full" style={{ backgroundImage: `linear-gradient(180deg, ${PRIMARY}, rgba(255,255,255,0.02))`, mixBlendMode: 'multiply' }} />
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

      {/* MENU */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center">Menu</h3>
        <p className="text-center text-gray-600 mt-2">Six popular choices — photos, descriptions, and prices.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((m) => (
            <article key={m.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <img src={`${m.img}?q=80&w=800&auto=format&fit=crop`} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{m.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-bold">{m.price}</div>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-white font-semibold" style={{ backgroundColor: PRIMARY }}>Order</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY (parallax grid) */}
      <section id="gallery" className="relative py-16" style={{ backgroundColor: "#fff7f5" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">Gallery</h3>
          <p className="text-center text-gray-600 mt-2">Moments from our customers — gatherings, birthdays, cozy dinners.</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md h-44">
                <img src={img} alt={`gallery-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Reviews</h3>
          <p className="text-gray-600 mt-2">What customers say about us.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <blockquote key={r.id} className="bg-gray-50 rounded-xl p-6 shadow">
                <p className="text-gray-700">“{r.text}”</p>
                <footer className="mt-3 text-sm text-gray-500">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">Contact Us</h3>
            <p className="text-gray-600 mt-2">Find us on the map or chat with us directly on WhatsApp.</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">📍</div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-gray-600">Jl. Raya Ciwidey No. 12, Ciwidey, Bandung</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">✉️</div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600">hello@shabuajihi.cw</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">📞</div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-gray-600"><a href={WHATSAPP} target="_blank" rel="noreferrer">Chat with us</a></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow" style={{ minHeight: 300 }}>
              {/* Placeholder iframe — replace src with your Google Maps embed URL */}
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.069...\" className="w-full h-72 border-0" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <strong>Shabuajihi Ciwidey</strong>
            <div className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved</div>
          </div>

          <div className="text-sm">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md text-white font-semibold" style={{ backgroundColor: PRIMARY }}>Order via WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}