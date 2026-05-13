import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

export default function OurPromise() {
    const t = useTranslations('OurPromise');

    return (
        <section className="bg-[#FCFBF9] dark:bg-[#0A0A0A] py-12 lg:py-16 px-5 sm:px-12 lg:px-16 relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">

            {/* DETALLE IMPACTANTE DE ENTRADA: Línea dorada etérea y resplandor descendente */}
            <div className="absolute top-0 left-0 w-full flex flex-col items-center z-0">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
                <div className="w-2 h-2 bg-[#D4AF37] rotate-45 -mt-[4px] opacity-80 shadow-[0_0_12px_rgba(212,175,55,0.6)]"></div>
                <div className="w-full h-24 bg-gradient-to-b from-[#D4AF37]/[0.03] dark:from-[#D4AF37]/[0.05] to-transparent"></div>
            </div>

            {/* FLOR DE LOTO MANDALA: Reemplazamos el SVG básico por nuestro diseño premium gigante */}
            <div className="absolute right-[-30%] top-[-10%] md:right-[-20%] lg:right-[-10%] lg:top-[-15%] w-[800px] md:w-[1000px] lg:w-[1400px] opacity-[0.03] dark:opacity-[0.02] text-[#D4AF37] pointer-events-none select-none transform rotate-12 transition-opacity duration-500 z-0">
                <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    {/* Arcos Base Concéntricos */}
                    <path d="M 85 100 A 15 15 0 0 1 115 100" strokeWidth="1" />
                    <path d="M 75 100 A 25 25 0 0 1 125 100" strokeWidth="0.5" strokeDasharray="1 3" />
                    <path d="M 65 100 A 35 35 0 0 1 135 100" strokeWidth="0.5" />
                    <path d="M 55 100 A 45 45 0 0 1 145 100" strokeWidth="0.3" strokeDasharray="2 4" />
                    {/* Pétalo Central Principal */}
                    <path d="M 100 100 C 100 55, 85 40, 100 10 C 115 40, 100 55, 100 100 Z" fill="currentColor" fillOpacity="0.05" strokeWidth="0.8" />
                    <path d="M 100 90 C 100 60, 92 45, 100 25 C 108 45, 100 60, 100 90 Z" strokeWidth="0.5" />
                    <line x1="100" y1="100" x2="100" y2="35" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="100" cy="18" r="1" fill="currentColor" />
                    {/* Primer Nivel de Pétalos Laterales */}
                    <path d="M 90 95 C 75 80, 60 65, 55 35 C 70 45, 85 65, 96 80" strokeWidth="0.8" fill="currentColor" fillOpacity="0.02" />
                    <path d="M 110 95 C 125 80, 140 65, 145 35 C 130 45, 115 65, 104 80" strokeWidth="0.8" fill="currentColor" fillOpacity="0.02" />
                    {/* Detalles punteados */}
                    <path d="M 93 90 C 80 80, 70 65, 65 42 C 75 52, 85 65, 96 80" strokeDasharray="1 2.5" />
                    <path d="M 107 90 C 120 80, 130 65, 135 42 C 125 52, 115 65, 104 80" strokeDasharray="1 2.5" />
                    {/* Segundo Nivel */}
                    <path d="M 80 100 C 55 90, 40 70, 30 40 C 45 55, 65 75, 90 95" strokeWidth="0.8" />
                    <path d="M 120 100 C 145 90, 160 70, 170 40 C 155 55, 135 75, 110 95" strokeWidth="0.8" />
                    <path d="M 75 100 C 55 92, 45 75, 38 50 C 50 63, 65 80, 85 98" strokeDasharray="1 3" />
                    <path d="M 125 100 C 145 92, 155 75, 162 50 C 150 63, 135 80, 115 98" strokeDasharray="1 3" />
                    {/* Tercer Nivel */}
                    <path d="M 65 100 C 35 95, 15 75, 5 45 C 25 65, 45 85, 80 100" strokeWidth="0.8" />
                    <path d="M 135 100 C 165 95, 185 75, 195 45 C 175 65, 155 85, 120 100" strokeWidth="0.8" />
                    <path d="M 60 100 C 35 96, 20 80, 12 55 C 28 73, 45 88, 75 100" strokeDasharray="1 4" />
                    <path d="M 140 100 C 165 96, 180 80, 188 55 C 172 73, 155 88, 125 100" strokeDasharray="1 4" />
                </svg>
            </div>

            {/* Contenedor Grid Asimétrico (Márgenes ajustados para mayor cohesión visual) */}
            <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-8 relative z-10">

                {/* =========================================
                    LADO IZQUIERDO: El Lienzo del Santuario (Rediseñado)
                    ========================================= */}
                <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">

                    {/* Contenedor Lienzo Premium (Muestra más imagen, sin recortes drásticos) */}
                    <div className="relative aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border-4 sm:border-8 border-white dark:border-[#111111] group z-10 transition-colors duration-500">
                        <MysticImage
                            src="DJI_20260228_142644_504_e3btak"
                            alt="Confort en Buddha Mystic"
                            height={1200}
                            width={1000}
                            priority={true}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10000ms] ease-out"
                        />
                        <div className="absolute inset-0 bg-[#00A896]/10 mix-blend-multiply transition-colors group-hover:bg-transparent duration-700" />
                    </div>

                    {/* Tarjeta Flotante (Glassmorphism) */}
                    <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60 dark:border-white/10 transform hover:-translate-y-2 transition-all duration-500">
                        <div className="flex flex-col items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#D4AF37]">
                                <path d="M12 22c-4.4 0-8-3.6-8-8 0-5 8-12 8-12s8 7 8 12c0 4.4-3.6 8-8 8z" />
                                <path d="M12 22c-2.2 0-4-3.6-4-8 0-3 4-7 4-7s4 4 4 7c0 4.4-1.8 8-4 8z" />
                                <path d="M4 14c2 0 4-1.5 5-3" />
                                <path d="M20 14c-2 0-4-1.5-5-3" />
                            </svg>
                            <span className="text-[#00A896] text-[10px] font-bold tracking-[0.2em] uppercase text-center leading-tight">
                                {t('badge_line1')} <br/> {t('badge_line2')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* =========================================
                    LADO DERECHO: La Promesa
                    ========================================= */}
                <div className="lg:col-span-7 relative z-10 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">

                    {/* Etiqueta superior */}
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                        <span className="w-10 h-[1px] bg-[#00A896] mr-4 hidden lg:block"></span>
                        <p className="text-[#00A896] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Título de la sección */}
                    <h2 className="text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-serif mb-10 font-light leading-tight transition-colors duration-500">
                        {t('title_p1')} <br className="hidden lg:block" />
                        <span className="text-[#D4AF37] italic font-medium">{t('title_highlight')}</span>
                    </h2>

                    {/* Contenedor del texto con tipografía refinada */}
                    <div className="relative max-w-3xl mx-auto lg:mx-0">
                        {/* Comilla de apertura gigante detrás del texto */}
                        <span className="absolute -top-10 -left-4 lg:-left-12 text-[6rem] sm:text-[8rem] text-[#D4AF37]/10 font-serif leading-none select-none">&quot;</span>

                        <p className="text-gray-900 dark:text-white font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed mb-6 relative z-10 font-light transition-colors duration-500">
                            {t('main_text')}
                        </p>

                        <p className="text-gray-900 dark:text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed relative z-10 lg:pr-10 transition-colors duration-500">
                            {t('secondary_text')}
                        </p>
                    </div>

                    {/* Pilares de la promesa (Márgenes ajustados) */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-6 mt-10 lg:mt-12 pt-6 border-t border-gray-200/60 dark:border-white/10 w-full max-w-2xl mx-auto lg:mx-0 transition-colors duration-500">
                        <span className="text-[#00A896] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
                            {t('pillar_1')}
                        </span>
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
                        <span className="text-[#00A896] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
                            {t('pillar_2')}
                        </span>
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 opacity-60"></div>
                        <span className="text-[#00A896] font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:text-[#D4AF37] transition-colors duration-500 cursor-default">
                            {t('pillar_3')}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}