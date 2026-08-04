import React, { useState, useEffect } from "react";

export default function Gallery({ galleryImages }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, galleryImages.length]);

  return (
    <section id="gallery" className="relative py-16" style={{ backgroundColor: "#fff7f5" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center">Galeri</h3>
        <p className="text-center text-gray-600 mt-2">Momen seru para pelanggan kami — dari acara kumpul-kumpul, ulang tahun, sampai makan malam yang hangat.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className="rounded-xl overflow-hidden shadow-md h-44 cursor-pointer hover:opacity-90 transition"
              onClick={() => setSelectedIndex(i)}
            >
              <img src={img} alt={`gallery-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY MODAL */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[110]"
            onClick={() => setSelectedIndex(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition z-[110] p-2"
            onClick={showPrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition z-[110] p-2"
            onClick={showNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div 
            className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center animate-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedIndex]} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            />
          </div>

          {/* Index indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
