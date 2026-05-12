import React from 'react';
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

export default function ExperiencesHero() {
    const t = useTranslations('Experiences');

    return (
        <section className="relative h-[100dvh] min-h-[600px] lg:min-h-[800px] w-full flex flex-col justify-end overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500 pt-24">
            <MysticImage
                src={"image00052_y9jctq"}
                alt={"BG_Balsa"}
                width={1920}
                height={1080}
                priority={true}
                className="absolute inset-0 z-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-105"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 dark:from-black/90 via-black/30 dark:via-black/50 to-transparent pointer-events-none transition-colors duration-500" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 dark:from-black/60 via-transparent to-transparent pointer-events-none transition-colors duration-500 hidden md:block" />

            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
                <div className="w-full lg:max-w-2xl bg-white/85 dark:bg-[#111111]/85 backdrop-blur-2xl p-6 sm:p-10 lg:p-14 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/60 dark:border-white/5 relative overflow-hidden group transition-colors duration-500">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4AF37] to-[#00A896]/30" />

                    <span className="text-[#00A896] dark:text-[#D4AF37] tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-xs font-semibold uppercase mb-3 sm:mb-5 block pl-3 sm:pl-4 transition-colors duration-500">
                        {t('location')}
                    </span>

                    <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.1] pl-3 sm:pl-4 transition-colors duration-500">
                        {t('titlePart1')} <br className="hidden sm:block" />
                        <span className="italic font-medium text-[#D4AF37]">{t('titleHighlight')}</span> {t('titlePart2')}
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base lg:text-lg leading-relaxed pl-3 sm:pl-4 transition-colors duration-500">
                        {t('description')}
                    </p>
                </div>

                <div className="hidden lg:flex flex-col items-center gap-6 mb-8">
                    <span
                        className="text-white text-[10px] tracking-[0.3em] uppercase opacity-80"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        {t('discover')}
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