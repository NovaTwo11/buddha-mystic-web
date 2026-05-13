import Link from 'next/link';
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

export default function HomeHero() {
    const t = useTranslations('HomeHero');

    return (
        <section className="relative w-full min-h-screen bg-white dark:bg-[#0A0A0A] flex items-center overflow-hidden transition-colors duration-500">

            {/* CONTENEDOR DE IMAGEN FULL-BLEED */}
            <div className="absolute inset-0 w-full h-full z-0">
                <MysticImage
                    src="dji_fly_20260227_155846_986_1772226768716_photo_mcygcd"
                    alt="Hotel Buddha Mystic"
                    width={1920}
                    height={1080}
                    priority={true}
                    className="w-full h-full object-cover object-center lg:object-right scale-105 transition-transform duration-[20000ms] ease-out hover:scale-100"
                />

                {/* DEGRADADO INTELIGENTE: Suave para proteger la piscina */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent lg:bg-gradient-to-r lg:from-white lg:from-10% lg:via-white/20 lg:via-45% lg:to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90 dark:to-transparent dark:lg:from-[#0A0A0A] dark:lg:from-10% dark:lg:via-[#0A0A0A]/40 dark:lg:via-45% dark:lg:to-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* CONTENIDO DEL TEXTO */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-44 pb-32 lg:pt-36 lg:pb-28 flex flex-col justify-center min-h-screen">

                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 relative transition-all duration-500">

                    <p className="relative text-[#00A896] text-xs md:text-sm font-bold tracking-[0.5em] mb-6 uppercase drop-shadow-sm z-10">
                        {t('subtitle')}
                    </p>

                    <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-gray-900 dark:text-white leading-[1.1] mb-6 md:mb-8 transition-colors duration-500 z-10">
                        {t('title_p1')} <br className="hidden sm:block" />
                        <span className="text-[#D4AF37] italic font-medium">{t('title_highlight')}</span> <br className="hidden sm:block" />
                        {t('title_p2')}
                    </h1>

                    <p className="relative text-gray-900 dark:text-white mb-10 md:mb-12 max-w-lg mx-auto md:mx-0 text-base md:text-xl font-light leading-relaxed transition-colors duration-500 z-10">
                        {t('description')}
                    </p>

                    <div className="relative flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 z-10">
                        <a
                            href="https://engine.lobbypms.com/buddha-mystic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 py-4 tracking-widest text-xs font-bold uppercase hover:bg-[#00A896] transition-all duration-500 shadow-xl shadow-[#D4AF37]/30 flex justify-center text-center"
                        >
                            {t('book_now')}
                        </a>

                        <Link
                            href="/nosotros"
                            className="group w-full sm:w-auto flex items-center justify-center px-10 py-4 border border-gray-500 dark:border-gray-400 text-gray-900 dark:text-white tracking-widest text-xs font-bold uppercase hover:border-[#00A896] dark:hover:border-[#00A896] hover:text-[#00A896] dark:hover:text-[#00A896] transition-all duration-500"
                        >
                            <span>{t('discover_more')}</span>
                            <svg className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* FLOR DE LOTO MANDALA: Etérea, Blanca, z-0 para no bloquear clics y con máscara de desvanecimiento */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[175px] md:w-[600px] md:h-[300px] lg:w-[800px] lg:h-[400px] text-white pointer-events-none z-0 [-webkit-mask-image:linear-gradient(to_bottom,#000_10%,transparent_100%)] [mask-image:linear-gradient(to_bottom,#000_10%,transparent_100%)]">
                <svg
                    viewBox="0 0 200 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    preserveAspectRatio="xMidYMax meet"
                >
                    {/* Arcos Base Concéntricos (El núcleo del mandala) */}
                    <path d="M 85 100 A 15 15 0 0 1 115 100" strokeWidth="1" />
                    <path d="M 75 100 A 25 25 0 0 1 125 100" strokeWidth="0.5" strokeDasharray="1 3" />
                    <path d="M 65 100 A 35 35 0 0 1 135 100" strokeWidth="0.5" />
                    <path d="M 55 100 A 45 45 0 0 1 145 100" strokeWidth="0.3" strokeDasharray="2 4" />

                    {/* Pétalo Central Principal (La Llama) */}
                    <path d="M 100 100 C 100 55, 85 40, 100 10 C 115 40, 100 55, 100 100 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0.8" />
                    <path d="M 100 90 C 100 60, 92 45, 100 25 C 108 45, 100 60, 100 90 Z" strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="100" y2="35" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="100" cy="18" r="1" fill="currentColor" />

                    {/* Primer Nivel de Pétalos Laterales (Internos) */}
                    <path d="M 90 95 C 75 80, 60 65, 55 35 C 70 45, 85 65, 96 80" strokeWidth="0.8" fill="currentColor" fillOpacity="0.02" />
                    <path d="M 110 95 C 125 80, 140 65, 145 35 C 130 45, 115 65, 104 80" strokeWidth="0.8" fill="currentColor" fillOpacity="0.02" />

                    {/* Detalles punteados dentro del primer nivel */}
                    <path d="M 93 90 C 80 80, 70 65, 65 42 C 75 52, 85 65, 96 80" strokeDasharray="1 2.5" />
                    <path d="M 107 90 C 120 80, 130 65, 135 42 C 125 52, 115 65, 104 80" strokeDasharray="1 2.5" />

                    {/* Segundo Nivel de Pétalos Laterales (Medios) */}
                    <path d="M 80 100 C 55 90, 40 70, 30 40 C 45 55, 65 75, 90 95" strokeWidth="0.8" />
                    <path d="M 120 100 C 145 90, 160 70, 170 40 C 155 55, 135 75, 110 95" strokeWidth="0.8" />

                    {/* Detalles punteados dentro del segundo nivel */}
                    <path d="M 75 100 C 55 92, 45 75, 38 50 C 50 63, 65 80, 85 98" strokeDasharray="1 3" />
                    <path d="M 125 100 C 145 92, 155 75, 162 50 C 150 63, 135 80, 115 98" strokeDasharray="1 3" />

                    {/* Tercer Nivel de Pétalos Laterales (Exteriores Anchos) */}
                    <path d="M 65 100 C 35 95, 15 75, 5 45 C 25 65, 45 85, 80 100" strokeWidth="0.8" />
                    <path d="M 135 100 C 165 95, 185 75, 195 45 C 175 65, 155 85, 120 100" strokeWidth="0.8" />

                    {/* Detalles punteados dentro del tercer nivel */}
                    <path d="M 60 100 C 35 96, 20 80, 12 55 C 28 73, 45 88, 75 100" strokeDasharray="1 4" />
                    <path d="M 140 100 C 165 96, 180 80, 188 55 C 172 73, 155 88, 125 100" strokeDasharray="1 4" />

                    {/* Pequeños rombos mísitcos entre las aberturas de los pétalos */}
                    <path d="M 77 30 L 79 35 L 84 37 L 79 39 L 77 44 L 75 39 L 70 37 L 75 35 Z" fill="currentColor" fillOpacity="0.8" stroke="none" />
                    <path d="M 123 30 L 125 35 L 130 37 L 125 39 L 123 44 L 121 39 L 116 37 L 121 35 Z" fill="currentColor" fillOpacity="0.8" stroke="none" />
                    <path d="M 47 42 L 48 45 L 51 46 L 48 47 L 47 50 L 46 47 L 43 46 L 46 45 Z" fill="currentColor" fillOpacity="0.6" stroke="none" />
                    <path d="M 153 42 L 154 45 L 157 46 L 154 47 L 153 50 L 152 47 L 149 46 L 152 45 Z" fill="currentColor" fillOpacity="0.6" stroke="none" />
                </svg>
            </div>

            {/* Toque Aquamarina sutil de fondo para atmósfera */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#7FFFD4]/10 dark:bg-[#00A896]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block transition-colors duration-500 z-0"></div>

        </section>
    );
}