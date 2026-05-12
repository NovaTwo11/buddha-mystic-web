import React from 'react';
import { useTranslations } from 'next-intl';

export default function RoomAmenities() {
    const t = useTranslations('RoomAmenities');

    const amenities = [
        {
            name: t('am1_name'),
            desc: t('am1_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M12 22V2M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16M12 22C10.3431 22 9 20.6569 9 19C9 17.3431 10.3431 16 12 16M19 12H5M19 12C19 10.3431 20.3431 9 22 9M19 12C19 13.6569 20.3431 15 22 15M5 12C5 10.3431 3.65685 9 2 9M5 12C5 13.6569 3.65685 15 2 15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am2_name'),
            desc: t('am2_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <rect x="2" y="4" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 22H16M12 18V22" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am3_name'),
            desc: t('am3_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M5 12.5556C8.86599 9.14815 15.134 9.14815 19 12.5556M2 9C7.52285 4.00001 16.4772 4.00001 22 9M8.5 16.1111C10.433 14.4074 13.567 14.4074 15.5 16.1111M12 20H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am4_name'),
            desc: t('am4_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M4 14V11C4 9.34315 5.34315 8 7 8H17C18.6569 8 20 9.34315 20 11V14M4 14C4 16.2091 5.79086 18 8 18H16C18.2091 18 20 16.2091 20 14M4 14H20M12 8V3M12 3H10M12 3H14M7 21V18M17 21V18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am5_name'),
            desc: t('am5_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <rect x="5" y="3" width="14" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 10H19M9 6H11M9 14H11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
        {
            name: t('am6_name'),
            desc: t('am6_desc'),
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10 stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-[#00A896] dark:group-hover:stroke-[#D4AF37] transition-all duration-500" strokeWidth="1.2">
                    <path d="M4 16V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V16M4 16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16M4 16H20M4 12H20M8 19V21M16 19V21" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
        },
    ];

    return (
        <section className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32 transition-colors duration-500">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-[#00A896] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block font-light">
                    {t('badge')}
                </span>
                <h2 className="text-4xl text-gray-900 dark:text-white font-serif font-light mb-6 transition-colors duration-500">
                    {t('title_p1')} <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span>
                </h2>
                <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6 opacity-50"></div>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base transition-colors duration-500">
                    {t('description')}
                </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-10 mb-16">
                {amenities.map((amenity, idx) => (
                    <div
                        key={idx}
                        className="group relative flex flex-col items-center justify-center text-center p-4 sm:p-8 lg:p-12 bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 hover:border-[#D4AF37]/40 dark:hover:border-[#D4AF37]/30 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>

                        <div className="transform group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center">
                            <div className="mb-2 md:mb-6 inline-flex p-2 md:p-4 rounded-full bg-[#FAFAFA] dark:bg-[#1A1A1A] group-hover:bg-[#00A896]/5 dark:group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                                {amenity.icon}
                            </div>
                            <h3 className="text-[10px] md:text-lg text-gray-900 dark:text-white font-serif font-light tracking-wide mb-1 md:mb-2 transition-colors duration-500">
                                {amenity.name}
                            </h3>
                            <p className="hidden sm:block text-[8px] md:text-xs text-gray-500 dark:text-gray-400 font-light tracking-widest uppercase transition-colors duration-500">
                                {amenity.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-[#00A896]/5 to-[#D4AF37]/5 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/60 dark:bg-[#111111]/80 backdrop-blur-md border border-[#D4AF37]/20 dark:border-[#D4AF37]/10 p-8 md:p-10 text-center rounded-sm flex flex-col items-center shadow-sm transition-colors duration-500">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[#D4AF37] mb-4" strokeWidth="1.2">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed transition-colors duration-500">
                        <span className="text-[#D4AF37] font-medium block md:inline mb-2 md:mb-0 md:mr-2">{t('note_title')}</span>
                        {t('note_p1')} <span className="text-gray-900 dark:text-white font-medium transition-colors duration-500">{t('note_highlight')}</span> {t('note_p2')}
                    </p>
                </div>
            </div>
        </section>
    );
}