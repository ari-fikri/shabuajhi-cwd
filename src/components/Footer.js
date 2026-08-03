import React from "react";

export default function Footer({ WHATSAPP, PRIMARY }) {
  return (
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
  );
}
