export default function DetailBanner() {
    // Atributos enfocados en la experiencia personal y el mindfulness
    const experienceAttributes = [
        {
            text: "Momento Presente",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            )
        },
        {
            text: "Paz Interior",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            )
        },
        {
            text: "Fotografía y Memoria",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="12" rx="2" ry="2" />
                    <path d="M16 8v-2a2 2 0 0 0 -2-2H10a2 2 0 0 0 -2 2v2" />
                    <circle cx="12" cy="14" r="3" />
                </svg>
            )
        },
        {
            text: "Renovación",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
            )
        }
    ];

    return (
        /* Fondo color marfil/crema ultra claro, usamos border-y para enmarcarlo delicadamente */
        <section className="relative w-full bg-[#FCFBF9] py-20 lg:py-24 overflow-hidden border-y border-gray-100">

            {/* LADO IZQUIERDO: Imagen zen con degradado */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] z-0 opacity-10 lg:opacity-100">
                <img
                    src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1500&auto=format&fit=crop"
                    alt="Detalles de naturaleza zen"
                    className="w-full h-full object-cover object-center"
                />
                {/* Difuminado hacia el crema del fondo */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#FCFBF9]/60 to-[#FCFBF9]"></div>
            </div>

            {/* CONTENIDO PRINCIPAL: Cita y Atributos */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex justify-center lg:justify-end">

                <div className="w-full lg:w-[65%] xl:w-[55%] flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-16">

                    {/* Columna Izquierda: Cita */}
                    <div className="relative flex-1 text-center md:text-left mt-8 md:mt-0">
                        <span className="text-[#D4AF37] text-7xl lg:text-8xl font-serif absolute -top-8 -left-4 md:-top-10 md:-left-12 opacity-80 select-none">
                            &ldquo;
                        </span>

                        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 font-light leading-relaxed mb-6 relative z-10">
                            Detente y respira.<br className="hidden md:block" /> La verdadera belleza se encuentra en <span className="italic font-medium text-[#00A896]">el momento presente.</span>
                        </h3>

                        <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">
                            &mdash; SABIDURÍA ZEN
                        </p>
                    </div>

                    {/* Línea Separadora */}
                    <div className="hidden md:block w-px bg-gray-200 self-stretch min-h-[150px]"></div>
                    <div className="md:hidden h-px w-2/3 bg-gray-200"></div>

                    {/* Columna Derecha: Lista de Atributos */}
                    <div className="flex-1 w-full max-w-sm flex flex-col gap-6">
                        {experienceAttributes.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group cursor-default">
                                <div className="text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300">
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