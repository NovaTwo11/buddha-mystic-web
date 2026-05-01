export default function OurPromise() {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-24 pt-16 relative overflow-hidden">

            {/* Fondo decorativo sutil (Flor de Loto difuminada en el centro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" className="text-buddha-black">
                    <path d="M12 2C12 2 15 7 15 11C15 13.5 13.5 15 12 15C10.5 15 9 13.5 9 11C9 7 12 2 12 2ZM12 22C12 22 17 22 20 18C23 14 22 9 22 9C22 9 19 12 16 13C14 13.6 12 14 12 14C12 14 10 13.6 8 13C5 12 2 9 2 9C2 9 1 14 4 18C7 22 12 22 12 22ZM12 14C12 14 16 16 19 21C20 19 22 14 22 14C22 14 18 16 12 14ZM12 14C12 14 8 16 5 21C4 19 2 14 2 14C2 14 6 16 12 14Z" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                {/* Ícono superior */}
                <div className="flex justify-center mb-8">
                    <span className="text-buddha-aquamarine text-4xl opacity-90 drop-shadow-sm transform hover:scale-110 transition-transform duration-500">🪷</span>
                </div>

                {/* Título de la sección */}
                <h2 className="text-buddha-black text-4xl md:text-5xl font-serif mb-12 font-light uppercase tracking-[0.2em]">
                    Nuestra <span className="text-buddha-gold italic font-medium">Promesa</span>
                </h2>

                {/* Contenedor del texto con comillas decorativas */}
                <div className="relative px-8 md:px-16">
                    <span className="absolute top-0 left-0 text-7xl text-buddha-gold/30 font-serif leading-none select-none -translate-y-4">"</span>

                    <p className="text-gray-700 font-light text-xl md:text-2xl leading-relaxed mb-6 relative z-10">
                        Trabajamos cada día para convertir cada estadía en una experiencia memorable, combinando comodidad, servicio y un ambiente de tranquilidad que invite siempre a regresar.
                    </p>
                    <p className="text-gray-700 font-light text-xl md:text-2xl leading-relaxed relative z-10">
                        Nuestro propósito es ofrecer mucho más que alojamiento: buscamos crear un espacio donde el tiempo parece detenerse, permitiendo a nuestros huéspedes descansar, respirar profundamente y reconectarse consigo mismos.
                    </p>

                    <span className="absolute bottom-0 right-0 text-7xl text-buddha-gold/30 font-serif leading-none select-none translate-y-8">"</span>
                </div>

                {/* Pilares de la promesa */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:space-x-6 mt-16 text-buddha-aquamarine font-bold text-xs md:text-sm uppercase tracking-[0.3em]">
                    <span className="hover:text-buddha-gold transition-colors duration-300">Comodidad</span>
                    <span className="text-buddha-gold text-xl hidden sm:inline">•</span>
                    <span className="hover:text-buddha-gold transition-colors duration-300">Servicio</span>
                    <span className="text-buddha-gold text-xl hidden sm:inline">•</span>
                    <span className="hover:text-buddha-gold transition-colors duration-300">Tranquilidad</span>
                </div>
            </div>
        </section>
    );
}