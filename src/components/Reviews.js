import React from "react";

export default function Reviews({ reviews }) {
  return (
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
  );
}
