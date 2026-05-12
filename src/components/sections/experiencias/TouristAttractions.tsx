import Link from 'next/link';
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

const attractionsData = [
    { key: "haciendaNapoles", slug: "hacienda-napoles", imageId: "IMG_2924_cbv9lu" },
    { key: "santorini", slug: "santorini", imageId: "IMG_3071_tkdfmj" },
    { key: "rioClaro", slug: "rio-claro", imageId: "image00065_l844m8" },
    { key: "cascadaSanJuan", slug: "cascada-san-juan", imageId: "IMG_4049_a0kibm" },
    { key: "rioMagdalena", slug: "rio-magdalena", imageId: "DJI_0223_f9lnq7" },
    { key: "rioLaMiel", slug: "rio-la-miel", imageId: "191069696_216852443370430_6641700777784027213_n_rutdoy" }
];

export default function TouristAttractions() {
    const t = useTranslations('Experiences');

    return (
        <section className="py-24 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                <span className="text-[#00A896] tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">
                    {t('region')}
                </span>
                <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
                    {t('treasuresPart1')} <span className="italic font-medium text-[#D4AF37]">{t('treasuresHighlight')}</span> {t('treasuresPart2')}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-base md:text-lg transition-colors duration-500">
                    {t('treasuresDesc')}
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                {attractionsData.map((item) => (
                    <div key={item.key} className="group flex flex-col">
                        <Link
                            href={`/experiencias/${item.slug}`}
                            className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden z-0 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] block cursor-pointer"
                        >
                            <MysticImage
                                src={item.imageId}
                                alt={t(`attractions.${item.key}.title`)}
                                width={600}
                                height={800}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[10000ms] ease-out"
                            />
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent dark:group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                            <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-sm border border-transparent dark:border-white/10 px-3 py-1.5 rounded-sm shadow-sm transition-colors duration-500">
                                <span className="text-[9px] sm:text-xs font-semibold tracking-widest text-[#00A896] dark:text-[#D4AF37] uppercase transition-colors duration-500">
                                    {t(`attractions.${item.key}.category`)}
                                </span>
                            </div>
                        </Link>

                        <div className="relative z-10 bg-white/85 dark:bg-[#111111]/85 backdrop-blur-xl p-5 md:p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 -mt-12 mx-3 sm:-mt-16 sm:mx-6 flex-grow flex flex-col group-hover:-translate-y-3 transition-all duration-500">
                            <h3 className="font-serif font-light text-lg sm:text-2xl text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors duration-500">
                                {t(`attractions.${item.key}.title`)}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-6 flex-grow transition-colors duration-500">
                                {t(`attractions.${item.key}.description`)}
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href={`/experiencias/${item.slug}`}
                                    className="inline-flex items-center text-[10px] sm:text-xs text-[#00A896] dark:text-[#D4AF37] uppercase tracking-[0.2em] font-semibold group-hover:text-[#D4AF37] dark:group-hover:text-[#00A896] transition-colors duration-500"
                                >
                                    {t('discoverBtn')}
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}