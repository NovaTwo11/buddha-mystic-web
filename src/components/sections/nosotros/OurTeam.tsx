'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import MysticImage from "@/components/ui/MysticImage";

export default function OurTeam() {
    const t = useTranslations('OurTeam');

    const [visibleItems, setVisibleItems] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const baseTeam = [
        {
            image: "56816104-3497-4c78-b39a-9667f2170920",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            image: "ccc4b63f-2ac1-4aa5-b8c7-ff5f0a7d6500",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            image: "8c323501-32e3-4679-a9c4-ee98c907b82e",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            image: "6578044f-25e7-470c-9102-edb83fe2221b",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
            )
        },
        {
            image: "4e241ea8-a600-4835-877a-564c05467368",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
            )
        },
        {
            image: "2c2fd5f1-8d0a-414c-ad12-2f1daffb4a80",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
            )
        },
        {
            image: "f7fc0ea8-d85c-471a-9aee-489624736e9c",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        }
    ];

    const team = [...baseTeam, ...baseTeam, ...baseTeam];
    const [currentIndex, setCurrentIndex] = useState(baseTeam.length);

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 768) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };
        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, [isTransitioning]);

    const prevSlide = () => {
        if (!isTransitioning) setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex >= baseTeam.length * 2) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex - baseTeam.length);
        } else if (currentIndex < baseTeam.length) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex + baseTeam.length);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-24 bg-white dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-serif font-light mb-4 transition-colors duration-500">
                        {t('title_p1')} <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span> {t('title_p2')}
                    </h2>
                    <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
                        {t('description')}
                    </p>
                </div>

                <div className="relative mb-24">
                    <div className="overflow-hidden px-4 -mx-4 pt-8 pb-4">
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {team.map((member, idx) => (
                                <div key={idx} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                    <div className="group relative bg-[#FAFAFA] dark:bg-[#111111] border border-gray-100 dark:border-white/5 p-4 transition-all duration-500 hover:shadow-xl hover:shadow-[#00A896]/5 dark:hover:shadow-[#00A896]/10 h-full flex flex-col mt-4">

                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-[#1A1A1A] border border-gray-100 dark:border-gray-800 rounded-full flex items-center justify-center z-20 shadow-sm group-hover:border-[#00A896] dark:group-hover:border-[#D4AF37] transition-colors duration-500">
                                            {member.icon}
                                        </div>

                                        <div className="aspect-[3/4] w-full overflow-hidden mb-6 relative rounded-sm">
                                            <div className="absolute inset-0 bg-[#00A896]/10 dark:bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                            <MysticImage
                                                src={member.image}
                                                alt={"member.name"}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute top-[35%] -left-2 md:-left-6 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-full text-gray-400 dark:text-gray-500 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-lg transition-all z-20"
                        aria-label={t('prev')}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-[35%] -right-2 md:-right-6 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-full text-gray-400 dark:text-gray-500 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:shadow-lg transition-all z-20"
                        aria-label={t('next')}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Banner de Equipo Completo */}
                <div className="relative w-full rounded-sm overflow-hidden group flex flex-col md:block shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="relative w-full aspect-[4/3] md:h-[800px] lg:h-[1000px] overflow-hidden rounded-t-sm md:rounded-sm">
                        <MysticImage
                            src="4350b21e-b58a-499f-bf5a-16690e86b2cb"
                            alt={t('alt_team')}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="hidden md:block absolute inset-0 bg-black/20 dark:bg-black/50 transition-colors duration-500" />
                    </div>

                    <div className="w-full md:absolute md:bottom-0 md:left-0 md:p-12 flex justify-center bg-[#FAFAFA] dark:bg-[#111111] md:bg-transparent md:dark:bg-transparent p-6 sm:p-8 transition-colors duration-500">
                        <div className="bg-white dark:bg-[#1A1A1A] md:bg-white/80 md:dark:bg-[#111111]/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 md:border-white/50 md:dark:border-white/10 px-6 py-8 md:px-8 md:py-6 text-center max-w-2xl rounded-b-sm md:rounded-sm shadow-sm md:shadow-lg w-full transition-all duration-500">
                            <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-serif font-light mb-2 transition-colors duration-500">
                                {t('banner_p1')} <span className="italic font-medium text-[#00A896] dark:text-[#D4AF37]">{t('banner_highlight')}</span> {t('banner_p2')}
                            </h3>
                            <p className="text-gray-900 dark:text-gray-300 font-light text-sm md:text-base transition-colors duration-500">
                                {t('banner_desc')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}