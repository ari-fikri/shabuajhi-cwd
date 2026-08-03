import React, { useEffect, useRef } from "react";
import { menu } from './data/menu';

import gallery1 from './assets/gallery_1.jpg';
import gallery2 from './assets/gallery_2.jpg';
import gallery3 from './assets/gallery_3.png';
import gallery4 from './assets/gallery_4.jpeg';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Shabuajihi Ciwidey — Refactored Component-based React SPA (TailwindCSS)
// - Main color: #ff472f
// - Order button links to WhatsApp

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const PRIMARY = "#ff472f";
  const WHATSAPP = "https://wa.me/6285314680572?text=Halo%20Shabuajihi,%20saya%20ingin%20pesan";

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
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        handleNavClick={handleNavClick} 
        mainHeaderRef={mainHeaderRef} 
        WHATSAPP={WHATSAPP} 
        PRIMARY={PRIMARY} 
      />
      
      <main>
        <Hero 
          parallaxRef={parallaxRef} 
          heroImgRef={heroImgRef} 
          PRIMARY={PRIMARY} 
          WHATSAPP={WHATSAPP} 
        />
        
        <Menu 
          menu={menu} 
          setSelectedItem={setSelectedItem} 
          selectedItem={selectedItem} 
          WHATSAPP={WHATSAPP} 
          PRIMARY={PRIMARY} 
        />
        
        <Gallery galleryImages={galleryImages} />
        
        <Reviews reviews={reviews} />
        
        <Contact WHATSAPP={WHATSAPP} />
      </main>

      <Footer WHATSAPP={WHATSAPP} PRIMARY={PRIMARY} />
    </div>
  );
}
