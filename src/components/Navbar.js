import React from "react";
import saLogo from '../assets/sa_logo_w_on_b.png';

export default function Navbar({ isMenuOpen, setIsMenuOpen, handleNavClick, mainHeaderRef, WHATSAPP, PRIMARY }) {
  return (
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
  );
}
