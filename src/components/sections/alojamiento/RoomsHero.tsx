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
                    src="Foto_habitacion_1.1_gympjb"
                    alt={t('alt_img')}
                    width={1920}
                    height={1080}
                    priority={true}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-105"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/50 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                <div className="max-w-[90%] md:max-w-2xl bg-white/70 dark:bg-[#111111]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-8 md:p-14 rounded-sm shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] mt-4 md:mt-0 transition-colors duration-500">
                    <header className="mb-6">
                        <span className="text-[#00A896] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block font-light">
                            {t('badge')}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-serif font-light leading-[1.1] transition-colors duration-500">
                            {t('title_p1')} <br />
                            <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span>
                        </h1>
                    </header>

                    <div className="w-16 h-px bg-[#D4AF37] mb-6"></div>

                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-base md:text-xl mb-8 transition-colors duration-500">
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