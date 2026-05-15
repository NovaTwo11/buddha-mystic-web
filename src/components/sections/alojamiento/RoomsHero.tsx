'use client';

import React from 'react';
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

export default function RoomsHero() {
    const t = useTranslations('RoomsHero');

    const scrollToRooms = () => {
        const element = document.getElementById('habitaciones');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <MysticImage
                    src="IMG_9708_k2ffjv"
                    alt={t('alt_img')}
                    width={1920}
                    height={1080}
                    priority={true}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-105"
                />
                {/* Degradado responsivo: De arriba hacia abajo en móviles (bg-gradient-to-b) y de izquierda a derecha en escritorio (md:bg-gradient-to-r) */}
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white/90 via-white/80 to-white/10 md:from-white/90 md:via-white/30 md:to-transparent dark:from-black/95 dark:via-black/80 dark:to-black/10 md:dark:from-black/80 md:dark:via-black/30 md:dark:to-transparent transition-all duration-500"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                <div className="max-w-[100%] sm:max-w-[90%] md:max-w-2xl mt-4 md:mt-0 transition-colors duration-500">
                    <header className="mb-6">
                        {/* El badge ahora es un poco más opaco en celular (bg-white/60) y vuelve a su transparencia original en PC (md:bg-white/40) */}
                        <span className="inline-block px-5 py-2 rounded-full bg-white/60 dark:bg-black/60 md:bg-white/40 md:dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 text-[#00A896] dark:text-[#4DD0C1] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-5 font-medium shadow-sm transition-colors duration-500">
                            {t('badge')}
                        </span>

                        {/* Sombra sutil en el texto solo para móviles (drop-shadow-sm) para despegarlo del fondo */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-serif font-light leading-[1.1] drop-shadow-sm md:drop-shadow-none transition-colors duration-500">
                            {t('title_p1')} <br />
                            <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span>
                        </h1>
                    </header>

                    <div className="w-16 h-px bg-[#D4AF37] mb-6"></div>

                    <p className="text-gray-900 dark:text-white font-light leading-relaxed text-base md:text-xl mb-8 drop-shadow-sm md:drop-shadow-none transition-colors duration-500">
                        {t('description')}
                    </p>

                    <button
                        onClick={scrollToRooms}
                        className="px-8 py-4 bg-[#D4AF37] text-white text-xs md:text-sm uppercase tracking-[0.2em] font-light hover:bg-[#00A896] transition-colors duration-500 rounded-sm shadow-lg shadow-black/5"
                    >
                        {t('button')}
                    </button>
                </div>
            </div>
        </section>
    );
}