export default function ExperiencesBanner() {
    // Definimos los atributos de las experiencias para mapearlos fácilmente
    const experienceAttributes = [
        {
            text: "Conexión Natural",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 22V12" />
                    <path d="M12 12c-2.5-2.5-4-6-4-6s2.5 1 4 4c1.5-3 4-4 4-4s-1.5 3.5-4 6z" />
                </svg>
            )
        },
        {
            text: "Guías Locales Expertos",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
            )
        },
        {
            text: "Aventura y Equilibrio",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
            )
        },
        {
            text: "Turismo Consciente",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                    <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2h3.14" />
                    <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            )
        }
    ];

    return (
        /* Fondo color marfil/crema ultra claro, añadimos márgenes para separarlo de las otras secciones */
        <section className="relative w-full bg-[#FCFBF9] py-20 lg:py-24 overflow-hidden border-y border-gray-100 my-12">

            {/* LADO IZQUIERDO: Imagen de Naturaleza con degradado
                En móviles es una marca de agua (opacity-10). En PC es nítida (opacity-100).
            */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] z-0 opacity-10 lg:opacity-100">
                <img
                    src="https://images.unsplash.com/photo-1554020632-57ebe4b1933f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Naturaleza y Serenidad en Doradal"
                    className="w-full h-full object-cover object-left"
                />
                {/* Difuminado hacia el crema del fondo */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#FCFBF9]/60 to-[#FCFBF9]"></div>
            </div>

            {/* CONTENIDO PRINCIPAL: Cita y Atributos */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex justify-center lg:justify-end">

                {/* Contenedor derecho para que no pise el foco de la imagen en PC */}
                <div className="w-full lg:w-[65%] xl:w-[55%] flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-16">

                    {/* Columna Izquierda (Centro visual): Cita */}
                    <div className="relative flex-1 text-center md:text-left mt-8 md:mt-0">
                        {/* Comilla Dorada Flotante */}
                        <span className="text-[#D4AF37] text-7xl lg:text-8xl font-serif absolute -top-8 -left-4 md:-top-10 md:-left-12 opacity-80 select-none">
                            &ldquo;
                        </span>

                        <h3 className="text-2xl md:text-3xl font-serif text-gray-900 font-light leading-relaxed mb-6 relative z-10">
                            No hay un camino a la felicidad.<br className="hidden md:block" /> <span className="italic font-medium text-[#D4AF37]">La felicidad es el camino.</span>
                        </h3>

                        <p className="text-[#00A896] text-xs font-bold tracking-[0.3em] uppercase">
                            &mdash; SABIDURÍA BUDISTA
                        </p>
                    </div>

                    {/* Línea Separadora (Vertical en PC, Horizontal en Móviles) */}
                    <div className="hidden md:block w-px bg-gray-200 self-stretch min-h-[150px]"></div>
                    <div className="md:hidden h-px w-2/3 bg-gray-200"></div>

                    {/* Columna Derecha: Lista de Atributos */}
                    <div className="flex-1 w-full max-w-sm flex flex-col gap-6">
                        {experienceAttributes.map((item, index) => (
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