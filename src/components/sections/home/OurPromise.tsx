export default function OurPromise() {
    return (
        <section className="bg-[#FCFBF9] py-24 lg:py-32 px-5 sm:px-12 lg:px-16 relative overflow-hidden flex items-center justify-center">

            {/* Fondo decorativo sutil (Flor de Loto difuminada gigante)
                Movida a la derecha y rotada para que funcione como una marca de agua en el lienzo
            */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none transform rotate-12">
                <svg width="800" height="800" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                    <path d="M12 2C12 2 15 7 15 11C15 13.5 13.5 15 12 15C10.5 15 9 13.5 9 11C9 7 12 2 12 2ZM12 22C12 22 17 22 20 18C23 14 22 9 22 9C22 9 19 12 16 13C14 13.6 12 14 12 14C12 14 10 13.6 8 13C5 12 2 9 2 9C2 9 1 14 4 18C7 22 12 22 12 22ZM12 14C12 14 16 16 19 21C20 19 22 14 22 14C22 14 18 16 12 14ZM12 14C12 14 8 16 5 21C4 19 2 14 2 14C2 14 6 16 12 14Z" />
                </svg>
            </div>

            {/* Contenedor Grid Asimétrico */}
            <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                {/* =========================================
                    LADO IZQUIERDO: El Arco del Santuario (5 Columnas)
                    ========================================= */}
                <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">

                    {/* Contenedor en forma de Arco (rounded-t-full) */}
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-8 border-white group z-10">
                        {/* Foto de stock sugerida (detalles Zen/Naturaleza) */}
                        <img
                            src="https://images.unsplash.com/photo-1560297971-f26c8ba85802?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Serenidad en Buddha Mystic"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10000ms] ease-out"
                        />
                        <div className="absolute inset-0 bg-[#00A896]/10 mix-blend-multiply transition-colors group-hover:bg-transparent duration-700" />
                    </div>

                    {/* Tarjeta Flotante (Glassmorphism) que rompe el borde de la imagen */}
                    <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-white/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl shadow-xl border border-white/60 transform hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex flex-col items-center gap-3">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
                                <path d="M12 22c-4.4 0-8-3.6-8-8 0-5 8-12 8-12s8 7 8 12c0 4.4-3.6 8-8 8z" />
                                <path d="M12 22c-2.2 0-4-3.6-4-8 0-3 4-7 4-7s4 4 4 7c0 4.4-1.8 8-4 8z" />
                                <path d="M4 14c2 0 4-1.5 5-3" />
                                <path d="M20 14c-2 0-4-1.5-5-3" />
                            </svg>
                            <span className="text-[#00A896] text-[9px] font-bold tracking-[0.2em] uppercase text-center">
                                Nuestra <br/> Esencia
                            </span>
                        </div>
                    </div>
                </div>

                {/* =========================================
                    LADO DERECHO: La Promesa (7 Columnas)
                    ========================================= */}
                <div className="lg:col-span-7 relative z-10 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">

                    {/* Etiqueta superior */}
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                        <span className="w-10 h-[1px] bg-[#00A896] mr-4 hidden lg:block"></span>
                        <p className="text-[#00A896] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                            El alma de nuestro refugio
                        </p>
                    </div>

                    {/* Título de la sección */}
                    <h2 className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-serif mb-12 font-light leading-tight">
                        Nuestra <br className="hidden lg:block" />
                        <span className="text-[#D4AF37] italic font-medium">Promesa</span>
                    </h2>

                    {/* Contenedor del texto con tipografía refinada */}
                    <div className="relative max-w-3xl mx-auto lg:mx-0">
                        {/* Comilla de apertura gigante detrás del texto */}
                        <span className="absolute -top-12 -left-4 lg:-left-12 text-[8rem] text-[#D4AF37]/10 font-serif leading-none select-none">&quot;</span>

                        <p className="text-gray-900 font-serif text-2xl lg:text-3xl leading-relaxed mb-6 relative z-10 font-light">
                            Trabajamos cada día para convertir cada estadía en una experiencia memorable, combinando comodidad, servicio y un ambiente de tranquilidad que invite siempre a regresar.
                        </p>

                        <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed relative z-10 lg:pr-10">
                            Nuestro propósito es ofrecer mucho más que alojamiento: buscamos crear un espacio donde el tiempo parece detenerse, permitiendo a nuestros huéspedes descansar, respirar profundamente y reconectarse consigo mismos.
                        </p>
                    </div>

                    {/* Pilares de la promesa (Alineados dinámicamente) */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 mt-12 lg:mt-16 pt-8 border-t border-gray-200/60 w-full max-w-2xl mx-auto lg:mx-0">
                        <span className="text-[#00A896] font-bold text-xs uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
                            Comodidad
                        </span>
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
                        <span className="text-[#00A896] font-bold text-xs uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
                            Servicio
                        </span>
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
                        <span className="text-[#00A896] font-bold text-xs uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
                            Tranquilidad
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}