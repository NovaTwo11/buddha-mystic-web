import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface DetailContentProps {
    description: string;
    history: string;
    location: string;
    mapLink: string;
    details: string[];
}

export default function DetailContent({ description, history, location, mapLink, details }: DetailContentProps) {
    const t = useTranslations('DetailContent');
    const whatsappNumber = "573135431537";
    const message = t('whatsappMessage');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto transition-colors duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="lg:col-span-7 flex flex-col pt-4">
                    <div className="mb-6 flex items-center">
                        <div className="w-8 h-[1px] bg-[#D4AF37] mr-4"></div>
                        <span className="text-[#00A896] dark:text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500">
                            {t('destinationDetails')}
                        </span>
                    </div>

                    <h2 className="font-serif font-light text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8 leading-tight transition-colors duration-500">
                        {t('the')} <span className="italic font-medium text-[#D4AF37]">{t('experience')}</span>
                    </h2>

                    <p className="text-gray-900 dark:text-gray-300 font-light text-base md:text-lg leading-relaxed mb-12 text-justify transition-colors duration-500">
                        {description}
                    </p>

                    <h3 className="font-serif font-light text-2xl lg:text-3xl text-gray-900 dark:text-white mb-6 transition-colors duration-500">
                        {t('historyAndContext')}
                    </h3>

                    <p className="text-gray-900 dark:text-gray-400 font-light leading-relaxed text-justify transition-colors duration-500">
                        {history}
                    </p>
                </div>

                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl p-10 lg:p-14 rounded-sm shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/50 dark:border-white/5 transition-all duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A896]/50 dark:via-[#D4AF37]/50 to-transparent" />

                        <div className="mb-10">
                            <span className="text-[#00A896] dark:text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] block mb-3 transition-colors duration-500">
                                {t('location')}
                            </span>
                            <div className="flex flex-col items-start gap-3">
                                <p className="text-gray-900 dark:text-white font-medium text-sm md:text-base transition-colors duration-500">
                                    {location}
                                </p>

                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 hover:text-[#00A896] dark:hover:text-[#D4AF37] uppercase tracking-[0.1em] font-medium transition-colors duration-300 group"
                                >
                                    <svg className="w-4 h-4 mr-2 transform group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    {t('viewOnMap')}
                                </a>
                            </div>
                        </div>

                        <div className="mb-12">
                            <span className="text-[#D4AF37] dark:text-[#00A896] text-[10px] font-bold uppercase tracking-[0.2em] block mb-5 transition-colors duration-500">
                                {t('whatIsIncluded')}
                            </span>
                            <ul className="space-y-4">
                                {details.map((detail, index) => (
                                    <li key={index} className="flex items-start text-gray-900 dark:text-gray-300 font-light text-sm transition-colors duration-500 group">
                                        <svg className="w-4 h-4 mr-4 mt-0.5 text-[#00A896] dark:text-[#D4AF37] flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-[#D4AF37] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-[#00A896] transition-colors duration-500 shadow-xl shadow-[#D4AF37]/20 flex justify-center items-center text-center"
                        >
                            {t('bookTransport')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}