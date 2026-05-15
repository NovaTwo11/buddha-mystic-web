'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function RoomAmenities() {
    const t = useTranslations('RoomAmenities');

    const amenities = [
        {
            name: t('am1_name'),
            desc: t('am1_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M12 22V2M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16M12 22C10.3431 22 9 20.6569 9 19C9 17.3431 10.3431 16 12 16M19 12H5M19 12C19 10.3431 20.3431 9 22 9M19 12C19 13.6569 20.3431 15 22 15M5 12C5 10.3431 3.65685 9 2 9M5 12C5 13.6569 3.65685 15 2 15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am2_name'),
            desc: t('am2_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <rect x="2" y="4" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 22H16M12 18V22" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am3_name'),
            desc: t('am3_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M5 12.5556C8.86599 9.14815 15.134 9.14815 19 12.5556M2 9C7.52285 4.00001 16.4772 4.00001 22 9M8.5 16.1111C10.433 14.4074 13.567 14.4074 15.5 16.1111M12 20H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am4_name'),
            desc: t('am4_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M4 14V11C4 9.34315 5.34315 8 7 8H17C18.6569 8 20 9.34315 20 11V14M4 14C4 16.2091 5.79086 18 8 18H16C18.2091 18 20 16.2091 20 14M4 14H20M12 8V3M12 3H10M12 3H14M7 21V18M17 21V18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am5_name'),
            desc: t('am5_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <rect x="5" y="3" width="14" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10H19M9 6H11M9 14H11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am6_name'),
            desc: t('am6_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M4 16V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V16M4 16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16M4 16H20M4 12H20M8 19V21M16 19V21" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
    ];

    return (
        <section className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-20 transition-colors duration-500">
            {/* Cabecera */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <span className="text-[#00A896] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block font-medium">
                    {t('badge')}
                </span>
                <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-serif font-light mb-6 transition-colors duration-500">
                    {t('title_p1')} <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span>
                </h2>
                <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6 opacity-60"></div>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base transition-colors duration-500">
                    {t('description')}
                </p>
            </div>

            {/* Cuadrícula Libre */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-y-16 md:gap-x-12 mb-16">
                {amenities.map((amenity, idx) => (
                    <div key={idx} className="group flex flex-col items-center text-center">
                        <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-5 rounded-full bg-[#FAFAFA] dark:bg-[#0F0F0F] border border-gray-100 dark:border-white/5 group-hover:border-[#D4AF37]/40 group-hover:bg-white dark:group-hover:bg-black group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] transition-all duration-700 transform group-hover:-translate-y-2">
                            {amenity.icon}
                        </div>

                        <h3 className="text-sm md:text-lg text-gray-900 dark:text-white font-serif font-light tracking-wide mb-3 transition-colors duration-500">
                            {amenity.name}
                        </h3>

                        {/* Línea animada */}
                        <div className="w-4 h-[1px] bg-[#00A896]/30 mb-3 group-hover:w-12 group-hover:bg-[#D4AF37] transition-all duration-500"></div>

                        <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-light tracking-widest uppercase transition-colors duration-500 max-w-[90%] md:max-w-[80%]">
                            {amenity.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Nota Final Editorial */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center p-6 md:p-8 border-t border-b border-[#D4AF37]/20 dark:border-[#D4AF37]/10 bg-gradient-to-r from-transparent via-[#D4AF37]/[0.03] to-transparent transition-colors duration-500">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 p-3 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/5">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-[#D4AF37]" strokeWidth="1.5">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed text-center md:text-left transition-colors duration-500">
                    <span className="text-[#D4AF37] font-medium block md:inline mb-1 md:mb-0 md:mr-2 uppercase tracking-widest text-[10px] md:text-xs">{t('note_title')}</span>
                    {t('note_p1')} <span className="text-gray-900 dark:text-white font-medium transition-colors duration-500">{t('note_highlight')}</span> {t('note_p2')}
                </p>
            </div>
        </section>
    );
}