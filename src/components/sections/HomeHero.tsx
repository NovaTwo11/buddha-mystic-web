import Link from 'next/link';

export default function HomeHero() {
    return (
        <section className="relative w-full min-h-screen bg-white flex items-center overflow-hidden">

            {/* CONTENEDOR DE IMAGEN */}
            <div className="absolute inset-y-0 left-0 right-0 lg:left-auto w-full lg:w-[65%] z-0">
                <img
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2500&auto=format&fit=crop"
                    alt="Hotel Buddha Mystic"
                    className="w-full h-full object-cover object-center lg:object-right"
                />

                {/* DEGRADADO DE TRANSICIÓN
                    Móviles: Un degradado muy sutil solo en la base para fusionar con la siguiente sección.
                    Desktop (lg): El desvanecimiento elegante de izquierda a derecha.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/70 lg:to-transparent"></div>
            </div>

            {/* CONTENIDO DEL TEXTO */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-12 lg:pt-20 lg:pb-0 flex flex-col justify-center">

                {/*
                    EL "CRISTAL ESMERILADO" (Glassmorphism):
                    En móviles (por defecto): Fondo blanco al 70%, difuminado, con bordes redondeados y sombra suave.
                    En Desktop (lg:*): Fondo transparente, sin difuminado, sin bordes, sin sombras.
                */}
                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 relative bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-3xl lg:rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] lg:shadow-none border border-white/50 lg:border-transparent transition-all duration-300">

                    {/* Subtítulo en Aquamarina */}
                    <p className="text-[#00A896] text-xs md:text-sm font-bold tracking-[0.5em] mb-6 uppercase drop-shadow-sm lg:drop-shadow-none">
                        Una experiencia que trasciende
                    </p>

                    {/* Título Principal */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-gray-900 leading-[1.1] mb-6 md:mb-8">
                        Encuentra <br className="hidden sm:block" />
                        <span className="text-[#D4AF37] italic font-medium">tu paz</span> <br className="hidden sm:block" />
                        interior.
                    </h1>

                    {/* Descripción */}
                    <p className="text-gray-800 lg:text-gray-600 mb-10 md:mb-12 max-w-lg mx-auto md:mx-0 text-base md:text-xl font-light leading-relaxed">
                        Un refugio donde el tiempo se detiene. Descansa, respira profundamente y reconéctate contigo mismo en la serenidad de nuestras instalaciones.
                    </p>

                    {/* Botones Rediseñados */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                        {/* Botón Principal (Solid) */}
                        <a
                            href="https://engine.lobbypms.com/buddha-mystic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 py-4 tracking-widest text-xs font-bold uppercase hover:bg-[#00A896] transition-all duration-500 shadow-xl shadow-[#D4AF37]/30 flex justify-center text-center"
                        >
                            RESERVAR AHORA
                        </a>

                        {/* Botón Secundario (Outline) - Más limpio gracias al fondo de cristal en móviles */}
                        <Link
                            href="/nosotros"
                            className="group w-full sm:w-auto flex items-center justify-center px-10 py-4 border border-gray-400 lg:border-gray-300 text-gray-900 lg:text-gray-800 bg-white/50 lg:bg-transparent tracking-widest text-xs font-bold uppercase hover:border-[#00A896] hover:text-[#00A896] transition-all duration-500"
                        >
                            <span>DESCUBRIR MÁS</span>
                            <svg className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Toque Aquamarina sutil de fondo para atmósfera */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#7FFFD4]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"></div>

        </section>
    );
}