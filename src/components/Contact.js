import React from "react";

export default function Contact({ WHATSAPP }) {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-3xl font-bold">Hubungi Kami</h3>
          <p className="text-gray-600 mt-2">Cari kami di Gmap atau hubungi langsung via WhatsApp.</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100">📍</div>
              <div>
                <div className="font-semibold">Alamat</div>
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
                <div className="text-sm text-gray-600"><a href={WHATSAPP} target="_blank" rel="noreferrer">Silakan tanya kami</a></div>
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
  );
}
