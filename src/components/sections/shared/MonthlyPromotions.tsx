import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function MonthlyPromotions() {
    const t = useTranslations('MonthlyPromotions');

    const whatsappNumber = "573135431537";
    const message = t('whatsapp_msg');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="relative w-full py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] flex items-center justify-center overflow-hidden px-4 sm:px-8 transition-colors duration-500">
            {/* Elementos decorativos de fondo (Luces tenues) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#00A896]/10 blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
            </div>

            <div className="relative max-w-4xl w-full">
                {/* Tarjeta Glassmorphism (Adaptada para la dualidad de la luz) */}
                <div className="bg-white/60 dark:bg-[#111111]/60 backdrop-blur-md border border-white/80 dark:border-white/10 p-10 md:p-16 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] text-center transform transition-all duration-700 hover:scale-[1.02]">

                    <h2 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-serif font-light mb-6 tracking-wide transition-colors duration-500">
                        {t('title_p1')} <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto transition-colors duration-500">
                        {t('description')}
                    </p>

                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-500 inline-flex justify-center items-center bg-[#D4AF37] text-white shadow-xl shadow-[#D4AF37]/20 hover:bg-[#00A896] hover:shadow-[#00A896]/20"
                    >
                        <svg
                            className="w-5 h-5 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {t('button')}
                    </Link>
                </div>
            </div>
        </section>
    );
}