import Link from 'next/link';
import MysticImage from "@/components/ui/MysticImage";

export default function HomeHero() {
    return (
        <section className="relative w-full min-h-screen bg-white dark:bg-[#0A0A0A] flex items-center overflow-hidden transition-colors duration-500">

            {/* CONTENEDOR DE IMAGEN */}
            <div className="absolute inset-y-0 left-0 right-0 lg:left-auto w-full lg:w-[65%] z-0">
                <MysticImage
                    src="dji_fly_20260227_155846_986_1772226768716_photo_mcygcd"
                    alt="Hotel Buddha Mystic"
                    width={1200}
                    height={800}
                    priority={true}
                    className="w-full h-full object-cover object-center lg:object-right"
                />

                {/* DEGRADADO DE TRANSICIÓN (Adaptado para Modo Oscuro) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/20 lg:to-transparent dark:from-[#0A0A0A] dark:lg:from-[#0A0A0A] dark:lg:via-[#0A0A0A]/80 dark:lg:to-transparent transition-colors duration-500"></div>
            </div>

            {/* CONTENIDO DEL TEXTO */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-12 lg:pt-20 lg:pb-0 flex flex-col justify-center">

                {/* EL "CRISTAL ESMERILADO" (Adaptado para Modo Oscuro) */}
                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 relative bg-white/70 dark:bg-[#111111]/80 backdrop-blur-md lg:bg-transparent lg:dark:bg-transparent p-6 sm:p-10 lg:p-0 rounded-3xl lg:rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none lg:shadow-none border border-white/50 dark:border-white/10 lg:border-transparent lg:dark:border-transparent transition-all duration-500">

                    {/* Subtítulo en Aquamarina (Se mantiene por ser buen hook comercial) */}
                    <p className="text-[#00A896] text-xs md:text-sm font-bold tracking-[0.5em] mb-6 uppercase drop-shadow-sm lg:drop-shadow-none">
                        Una experiencia que trasciende
                    </p>

                    {/* Título Principal Rediseñado (Enfoque en Estética/Descanso) */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-gray-900 dark:text-white leading-[1.1] mb-6 md:mb-8 transition-colors duration-500">
                        Descubre un <br className="hidden sm:block" />
                        <span className="text-[#D4AF37] italic font-medium">refugio</span> <br className="hidden sm:block" />
                        excepcional.
                    </h1>

                    {/* Descripción Rediseñada */}
                    <p className="text-gray-800 dark:text-gray-300 lg:text-gray-600 dark:lg:text-gray-300 mb-10 md:mb-12 max-w-lg mx-auto md:mx-0 text-base md:text-xl font-light leading-relaxed transition-colors duration-500">
                        Un lugar donde el tiempo parece detenerse. Disfruta de un ambiente inspirado en la estética oriental, diseñado para ofrecerte máxima comodidad y un descanso inolvidable.
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

                        {/* Botón Secundario (Outline) - Adaptado para modo oscuro */}
                        <Link
                            href="/nosotros"
                            className="group w-full sm:w-auto flex items-center justify-center px-10 py-4 border border-gray-400 dark:border-gray-600 lg:border-gray-300 text-gray-900 dark:text-white lg:text-gray-800 bg-white/50 dark:bg-[#111111]/50 lg:bg-transparent dark:lg:bg-transparent tracking-widest text-xs font-bold uppercase hover:border-[#00A896] dark:hover:border-[#00A896] hover:text-[#00A896] dark:hover:text-[#00A896] transition-all duration-500"
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
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#7FFFD4]/10 dark:bg-[#00A896]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block transition-colors duration-500"></div>

        </section>
    );
}