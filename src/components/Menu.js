import React from "react";

export default function Menu({ menu, setSelectedItem, selectedItem, WHATSAPP, PRIMARY }) {
  return (
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
    </section>
  );
}
