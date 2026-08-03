import React, { useEffect, useRef } from "react";
import heroImage from './assets/bowl.png';
import fullMenuImage from './assets/oishi.png';
import shabuBowlImage from './assets/shabu_bowl.jpg';
import meatImage from './assets/meat.jpg';
import familyImage from './assets/family.jpg';

import { menu } from './data/menu';

import gallery1 from './assets/gallery_1.jpg';
import gallery2 from './assets/gallery_2.jpg';
import gallery3 from './assets/gallery_3.png';
import gallery4 from './assets/gallery_4.jpeg';
import saLogo from './assets/sa_logo_w_on_b.png';

// Shabuajihi Ciwidey — Single-file React SPA (TailwindCSS)
// - Single page application layout with sections: Home, Menu (6 items), Gallery, Reviews, Contact
// - Parallax effects implemented with a small onScroll handler
// - Main color: #ff472f
// - Order button links to WhatsApp (replace PHONE_NUMBER with actual number, e.g. 628123456789)

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const PRIMARY = "#ff472f";
  const WHATSAPP = "https://wa.me/6285314680572?text=Halo%20Shabuajihi,%20saya%20ingin%20pesan"; // <-- replace with real number

  const reviews = [
    { id: 1, name: "Rina", text: "Best shabu I had in Ciwidey — broths are rich and service is friendly!" },
    { id: 2, name: "Andi", text: "Perfect on a cold evening. Fast delivery and everything arrived hot." },
    { id: 3, name: "Sari", text: "Fresh ingredients and generous portions. Highly recommended." },
  ];

  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2, gallery3, gallery4, gallery1];

  // Parallax refs
  const parallaxRef = useRef(null);
  const heroImgRef = useRef(null);
  const mainHeaderRef = useRef(null);

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

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && mainHeaderRef.current) {
      const headerOffset = mainHeaderRef.current.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-900" style={{ backgroundColor: "#fff7f5" }}>
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b">
        <div ref={mainHeaderRef} className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={saLogo} alt="Shabuajihi Ciwidey Logo" className="w-14 h-14 md:w-20 md:h-20" />
            <div>
              <h1 className="text-lg font-bold">Shabuajihi Ciwidey</h1>
              <p className="text-xs text-gray-600">Ciwidey — authentic Japanese-inspired shabu</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" onClick={handleNavClick} className="hover:opacity-80">Home</a>
            <a href="#menu" onClick={handleNavClick} className="hover:opacity-80">Menu</a>
            <a href="#gallery" onClick={handleNavClick} className="hover:opacity-80">Gallery</a>
            <a href="#reviews" onClick={handleNavClick} className="hover:opacity-80">Reviews</a>
            <a href="#contact" onClick={handleNavClick} className="hover:opacity-80">Contact</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="ml-2 inline-block px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: PRIMARY }}>Order</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md">
            <nav className="flex flex-col items-center gap-4 text-sm py-4">
              <a href="#home" onClick={handleNavClick} className="hover:opacity-80">Home</a>
              <a href="#menu" onClick={handleNavClick} className="hover:opacity-80">Menu</a>
              <a href="#gallery" onClick={handleNavClick} className="hover:opacity-80">Gallery</a>
              <a href="#reviews" onClick={handleNavClick} className="hover:opacity-80">Reviews</a>
              <a href="#contact" onClick={handleNavClick} className="hover:opacity-80">Contact</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 inline-block px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: PRIMARY }}>Order</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO with Japanese nuance (pattern + dominant color) */}
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

      {/* MENU */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center">Menu</h3>
        <p className="text-center text-gray-600 mt-2">Six popular choices — photos, descriptions, and prices.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((m) => (
            <article 
              key={m.id} 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedItem(m)}
            >
              <div className="h-48 overflow-hidden">
                <img src={`${m.img}?q=80&w=800&auto=format&fit=crop`} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg">{m.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
                <div id="price-and-order" className="mt-auto">
                  <div className="mt-4 flex items-center justify-between">
                    <div className="font-bold">{m.price}</div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(WHATSAPP, "_blank");
                      }}
                      className="px-3 py-2 rounded-md text-white font-semibold" 
                      style={{ backgroundColor: PRIMARY }}
                    >
                      Order
                    </button>
                  </div>
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
                  <div className="text-sm text-gray-600">Komp Sukarasa Permai Jl. Jati Blok B-48, Kec. Pasirjambu, Kab Bandung, Jawa Barat 40972</div>
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
              <iframe
                title="Shabuajhi Ciwidey Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2305455645237!2d107.47130347582107!3d-7.099256392904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688d82f0f9c175%3A0x7577cd69b119a8ec!2sShabuajhi%20ciwidey!5e0!3m2!1sen!2sid!4v1761755082394!5m2!1sen!2sid"
                className="w-full h-72 border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

      {/* MODAL DETAIL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full max-h-[95vh] flex flex-col relative shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
              {/* Image side - Force Square Aspect Ratio */}
              <div className="w-full aspect-square overflow-hidden bg-gray-100 flex items-center justify-center shrink-0">
                <img 
                  src={`${selectedItem.img}?q=80&w=1200&auto=format&fit=max`} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Content side */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="sticky top-0 bg-white pb-2 z-10">
                  <h3 className="text-2xl font-bold">{selectedItem.name}</h3>
                  <p className="text-gray-600 mt-1 font-medium">{selectedItem.desc}</p>
                </div>
                
                <div className="mt-4 flex flex-col">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400">Isi Paket:</h4>
                  <div className="mt-2 text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                    {selectedItem.fullDesc}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t flex items-center justify-between sticky bottom-0 bg-white">
                  <div className="text-2xl font-bold" style={{ color: PRIMARY }}>{selectedItem.price}</div>
                  <a 
                    href={WHATSAPP} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-6 py-3 rounded-xl text-white font-bold shadow-lg shadow-orange-200 transition active:scale-95" 
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}