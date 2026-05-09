export default function AboutHero() {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden transition-colors duration-500 bg-[#FCFBF9] dark:bg-[#0A0A0A]">

            {/* Lado Derecho: Imagen de fondo a pantalla completa o dividida */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2000&auto=format&fit=crop"
                    alt="Estética y confort en Buddha Mystic"
                    className="w-full h-full object-cover"
                />

                {/* Degradado sofisticado: En PC viene de la izquierda, en móvil desde abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/60 lg:to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90 dark:lg:from-[#0A0A0A] dark:lg:via-[#0A0A0A]/80 transition-colors duration-500"></div>
            </div>

            {/* Contenido Editorial Asimétrico */}
            <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 w-full pt-20">
                <div className="max-w-2xl bg-white/60 dark:bg-[#111111]/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all duration-700">

                    {/* Acento superior */}
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mr-4"></div>
                        <span className="text-[#00A896] text-[10px] font-bold tracking-[0.3em] uppercase">
                            Nuestra Identidad
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-serif font-light mb-6 leading-[1.1] transition-colors duration-500">
                        Nuestra <br className="hidden sm:block" />
                        <span className="italic font-medium text-[#D4AF37]">Esencia</span>
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-light transition-colors duration-500">
                        Un espacio diseñado al detalle donde el tiempo parece detenerse. En Buddha Mystic hemos creado el refugio perfecto para que escapes de la rutina y disfrutes de un descanso incomparable, rodeado de una estética cautivadora.
                    </p>
                </div>
            </div>
        </section>
    );
}