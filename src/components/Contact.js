import React from "react";

export default function Contact({ WHATSAPP }) {
  const PHONE_NUMBER = "6285314680572";
  const INSTAGRAM = "https://www.instagram.com/shabuajhi.ciwidey/";
  const TIKTOK = "https://www.tiktok.com/@shabuajhi.ciwidey";

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-3xl font-bold">Hubungi Kami</h3>
          <p className="text-gray-600 mt-2">Cari kami di Gmap atau hubungi langsung via media sosial.</p>

          <div className="mt-8 space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-50 text-red-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">Alamat</div>
                <div className="text-sm text-gray-600 leading-relaxed">Komp Sukarasa Permai Jl. Jati Blok B-48, Kec. Pasirjambu, Kab Bandung, Jawa Barat 40972</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-50 text-red-500 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">Email</div>
                <div className="text-sm text-gray-600"><a href="mailto:hello@shabuajihi.cw" className="hover:text-red-500 transition">hello@shabuajihi.cw</a></div>
              </div>
            </div>

            {/* WhatsApp & Call */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-green-50 text-green-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">WhatsApp & Telepon</div>
                <div className="flex flex-col gap-1 mt-1">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-green-600 transition flex items-center gap-2">
                    <span>Chat WhatsApp</span>
                  </a>
                  <a href={`tel:+${PHONE_NUMBER}`} className="text-sm text-gray-600 hover:text-green-600 transition flex items-center gap-2">
                    <span>Telepon Langsung</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-50 text-purple-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">Media Sosial</div>
                <div className="flex flex-col gap-1 mt-1">
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-purple-600 transition flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    <span>Instagram @shabuajhi.ciwidey</span>
                  </a>
                  <a href={TIKTOK} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-black transition flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    <span>TikTok @shabuajhi.ciwidey</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white" style={{ minHeight: 350 }}>
            <iframe
              title="Shabuajhi Ciwidey Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2305455645237!2d107.47130347582107!3d-7.099256392904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688d82f0f9c175%3A0x7577cd69b119a8ec!2sShabuajhi%20ciwidey!5e0!3m2!1sen!2sid!4v1761755082394!5m2!1sen!2sid"
              className="w-full h-80 border-0"
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

