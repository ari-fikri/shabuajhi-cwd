import React from "react";

export default function Gallery({ galleryImages }) {
  return (
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
  );
}
