export default function MandalasPhilosophy() {
    return (
        <section className="relative py-24 md:py-32 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto overflow-hidden transition-colors duration-500">

            {/* Marca de agua monumental en el fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] lg:text-[280px] font-serif font-bold text-gray-100 dark:text-white/5 opacity-40 dark:opacity-100 whitespace-nowrap pointer-events-none select-none transition-colors duration-500 z-0">
                MANDALAS
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

                {/* Ritmo vertical elegante */}
                <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent mb-8 transition-colors duration-500" />

                <span className="text-[#00A896] dark:text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block mb-6 transition-colors duration-500">
                    Nuestra Filosofía
                </span>

                <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-12 leading-[1.2] transition-colors duration-500">
                    La fusión armónica de <br className="hidden md:block"/>
                    <span className="italic font-medium text-[#D4AF37]">dos mundos paralelos</span>
                </h2>

                {/* Contenedor de cristal con acentos esquineros */}
                <div className="relative bg-white/60 dark:bg-[#111111]/60 backdrop-blur-xl p-8 md:p-12 lg:p-16 border border-gray-100 dark:border-white/5 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm transition-all duration-500">

                    {/* Acentos minimalistas en las esquinas */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/50 transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/50 transition-colors duration-500" />

                    {/* Texto Editorial con Letra Capitular (Drop Cap) */}
                    <p className="text-gray-700 dark:text-gray-300 font-light text-base md:text-lg leading-relaxed text-justify transition-colors duration-500
                                  first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-[#D4AF37] first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                        En Mandalas creemos que la gastronomía es una forma de alimentar no solo al ser, sino también al alma y el corazón. Nuestro concepto nace de un profundo respeto por los ingredientes que brotan de nuestras tierras antioqueñas, los cuales son elevados mediante la precisión, el balance y las técnicas milenarias del continente asiático. Cada bocado está diseñado no solo para nutrir el cuerpo, sino para deleitar el espíritu y anclarte en el momento presente.
                    </p>
                </div>

            </div>
        </section>
    );
}