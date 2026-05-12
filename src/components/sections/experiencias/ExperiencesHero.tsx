import React from 'react';
import MysticImage from "@/components/ui/MysticImage";

export default function ExperiencesHero() {
    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center lg:justify-end overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">

            {/* Capa de Imagen de Fondo */}
            <MysticImage
                src={"image00052_y9jctq"}
                alt={"BG_Balsa"}
                width={1920}
                height={1080}
                priority={true}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
            />

            {/* Velos de Degradado (Overlays adaptativos) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 dark:from-black/80 via-black/10 dark:via-black/30 to-transparent pointer-events-none transition-colors duration-500" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 dark:from-black/60 via-transparent to-transparent pointer-events-none transition-colors duration-500" />

            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-5 sm:px-12 lg:px-16 pt-32 pb-12 lg:pb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

                {/* EL PANEL EDITORIAL */}
                <div className="bg-white/85 dark:bg-[#111111]/85 backdrop-blur-2xl p-8 sm:p-10 lg:p-14 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/60 dark:border-white/5 max-w-2xl relative overflow-hidden group transition-colors duration-500">

                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4AF37] to-[#00A896]/30" />

                    <span className="text-[#00A896] dark:text-[#D4AF37] tracking-[0.4em] text-[10px] sm:text-sm font-semibold uppercase mb-4 sm:mb-5 block pl-2 transition-colors duration-500">
                        Doradal, Antioquia
                    </span>

                    <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-7xl text-gray-900 dark:text-white mb-5 sm:mb-6 leading-[1.1] pl-2 transition-colors duration-500">
                        Aventuras que <br className="hidden sm:block" />
                        <span className="italic font-medium text-[#D4AF37]">cautivan</span> los sentidos
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base lg:text-lg leading-relaxed pl-2 transition-colors duration-500">
                        Más allá de nuestro santuario de descanso, te aguarda un entorno natural vibrante.
                        Descubre la majestuosidad de la región y disfruta de experiencias inolvidables al aire libre.
                    </p>
                </div>

                {/* Indicador de Scroll */}
                <div className="hidden lg:flex flex-col items-center gap-6 mb-8">
                    <span
                        className="text-white text-xs tracking-[0.3em] uppercase opacity-80"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        Descubrir
                    </span>
                    <div className="w-[1px] h-20 bg-white/30 relative overflow-hidden">
                        <div className="w-full h-1/3 bg-white absolute top-0"
                             style={{ animation: 'scrollDown 2s infinite' }}
                        />
                        <style>{`
                            @keyframes scrollDown {
                                0% { transform: translateY(-100%); }
                                100% { transform: translateY(300%); }
                            }
                        `}</style>
                    </div>
                </div>

            </div>
        </section>
    );
}