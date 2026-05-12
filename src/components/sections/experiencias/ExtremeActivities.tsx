"use client";

import { useState } from "react";
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from "next-intl";

const activitiesData = [
    { key: "buggies", imageId: "376251399_282320264652725_2542536003869655726_n_h8ylkp" },
    { key: "atv", imageId: "2d6dd5b6-d8e7-45de-9f24-919f48b00c02_gkt5ka" },
    { key: "turtles", imageId: "IMG_0769_umjkgj" },
    { key: "goldWaterfall", imageId: "YJQK1081_knah4c" },
    { key: "chorrosAdventure", imageId: "DJI_0350_1_gjhrof" },
    { key: "rafting", imageId: "image00065_l844m8" },
    { key: "dantaCaves", imageId: "DJI_20220223_170748_509_fqt1gq" },
    { key: "magdalena", imageId: "IMG_4174_lau1rn" }
];

export default function ExtremeActivities() {
    const t = useTranslations('ExtremeActivities');
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] px-4 sm:px-8 lg:px-16 overflow-hidden relative transition-colors duration-500">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A896]/5 dark:bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3 transition-colors duration-500" />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                <div className="mb-16 md:mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[#00A896] tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">
                            {t('beyondLimit')}
                        </span>
                        <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight transition-colors duration-500">
                            {t('adrenalinAnd')} <span className="italic font-medium text-[#D4AF37]">{t('nature')}</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-light max-w-lg text-base md:text-lg transition-colors duration-500">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="relative h-[450px] md:h-[600px] lg:h-[700px] lg:col-span-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                        {activitiesData.map((activity, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                    index === activeIndex
                                        ? "opacity-100 z-10 scale-100"
                                        : "opacity-0 z-0 scale-105"
                                }`}
                            >
                                <MysticImage
                                    src={activity.imageId}
                                    alt={t(`activities.${activity.key}.name`)}
                                    width={1080}
                                    height={1080}
                                    priority={index === 0}
                                    className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[15000ms] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                        ))}

                        <div className="absolute -bottom-6 -right-4 sm:bottom-12 sm:-right-12 z-20 bg-white/85 dark:bg-[#111111]/85 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/60 dark:border-white/10 max-w-[280px] sm:max-w-[340px] transform transition-all duration-700">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4AF37] to-[#00A896]/30 rounded-l-2xl" />
                            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#00A896] dark:text-[#D4AF37] uppercase mb-2 block pl-3 transition-colors duration-500">
                                {t(`activities.${activitiesData[activeIndex].key}.location`)}
                            </span>
                            <h3 className="font-serif font-light text-xl sm:text-3xl text-gray-900 dark:text-white leading-tight pl-3 transition-colors duration-500">
                                {t(`activities.${activitiesData[activeIndex].key}.name`)}
                            </h3>
                        </div>
                    </div>

                    <div className="lg:col-span-7 pl-0 sm:pl-4 lg:pl-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {activitiesData.map((activity, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer group relative overflow-hidden flex items-center p-4 sm:p-5 rounded-2xl transition-all duration-500 border ${
                                            isActive
                                                ? "bg-white dark:bg-[#1A1A1A] shadow-[0_15px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-white/60 dark:border-white/10 translate-x-2"
                                                : "bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-white/5"
                                        }`}
                                    >
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 dark:from-[#D4AF37]/10 to-transparent pointer-events-none transition-colors duration-500" />
                                        )}
                                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                                            isActive
                                                ? "bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 scale-110"
                                                : "bg-white dark:bg-[#111111] text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-800 group-hover:border-[#00A896]/30 dark:group-hover:border-[#D4AF37]/30 group-hover:text-[#00A896] dark:group-hover:text-[#D4AF37]"
                                        }`}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="relative z-10 ml-4 flex flex-col justify-center">
                                            <h4 className={`text-base sm:text-lg font-medium transition-colors duration-500 ${
                                                isActive ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 group-hover:text-[#D4AF37] dark:group-hover:text-[#00A896]"
                                            }`}>
                                                {t(`activities.${activity.key}.name`)}
                                            </h4>
                                            <span className={`text-[10px] sm:text-xs tracking-wide uppercase transition-colors duration-500 ${
                                                isActive ? "text-[#00A896] dark:text-[#D4AF37] font-semibold" : "text-gray-400 dark:text-gray-600 font-light"
                                            }`}>
                                                {t(`activities.${activity.key}.location`)}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-light italic flex items-start sm:items-center transition-colors duration-500">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center mr-4 transition-colors duration-500">
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                {t('receptionNotice')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}