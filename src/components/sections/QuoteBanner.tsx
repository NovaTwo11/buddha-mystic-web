export default function QuoteBanner() {
    // Definimos los beneficios para mapearlos fácilmente y mantener el código limpio
    const benefits = [
        {
            text: "Mejor Tarifa Garantizada",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        },
        {
            text: "Reserva Segura",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            text: "Atención Personalizada",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            text: "Experiencias Únicas",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
            )
        }
    ];

    return (
        /* Fondo color marfil/crema ultra claro para la sección */
        <section className="relative w-full bg-[#FCFBF9] py-20 lg:py-24 overflow-hidden border-t border-gray-100">

            {/* LADO IZQUIERDO: Imagen del Buda con degradado
                En móviles es una marca de agua (opacity-10). En PC es nítida (opacity-100).
            */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] z-0 opacity-10 lg:opacity-100">
                <img
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1500&auto=format&fit=crop"
                    alt="Rostro de Buda Sereno"
                    className="w-full h-full object-cover object-left"
                />
                {/* Este div es la magia: difumina el borde derecho de la imagen hacia el color crema del fondo */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#FCFBF9]/60 to-[#FCFBF9]"></div>
            </div>

            {/* CONTENIDO PRINCIPAL: Cita y Beneficios */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex justify-center lg:justify-end">

                {/* Contenedor derecho para que no pise la cara del Buda en pantallas grandes */}
                <div className="w-full lg:w-[65%] xl:w-[55%] flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-16">

                    {/* Columna Izquierda (Centro visual): Cita del Buda */}
                    <div className="relative flex-1 text-center md:text-left mt-8 md:mt-0">
                        {/* Comilla Dorada Flotante */}
                        <span className="text-[#D4AF37] text-7xl lg:text-8xl font-serif absolute -top-8 -left-4 md:-top-10 md:-left-12 opacity-80 select-none">
                            &ldquo;
                        </span>

                        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 font-light leading-relaxed mb-6 relative z-10">
                            La paz viene de adentro.<br className="hidden md:block" /> No la busques afuera.
                        </h3>

                        <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">
                            &mdash; BUDDHA
                        </p>
                    </div>

                    {/* Línea Separadora (Vertical en PC, Horizontal en Móviles) */}
                    <div className="hidden md:block w-px bg-gray-200 self-stretch min-h-[150px]"></div>
                    <div className="md:hidden h-px w-2/3 bg-gray-200"></div>

                    {/* Columna Derecha: Lista de Beneficios */}
                    <div className="flex-1 w-full max-w-sm flex flex-col gap-6">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group cursor-default">
                                <div className="text-gray-400 group-hover:text-[#00A896] transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-light text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}