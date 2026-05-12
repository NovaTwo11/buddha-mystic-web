import { useTranslations } from 'next-intl';

export default function ConditionsFooter() {
    const t = useTranslations('ConditionsFooter');

    return (
        <section className="w-full bg-white dark:bg-[#0A0A0A] py-16 px-4 sm:px-8 mt-4 overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-gray-50/80 dark:bg-[#111111]/80 backdrop-blur-md border border-gray-100 dark:border-white/5 rounded-3xl md:rounded-full p-8 md:py-8 md:px-16 lg:px-24 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 lg:gap-16 transition-all duration-500">

                    <div className="flex items-center space-x-4 group w-full md:w-auto justify-start">
                        <div className="p-3 rounded-full bg-white dark:bg-[#1A1A1A] shadow-sm group-hover:bg-[#D4AF37]/10 dark:group-hover:bg-[#D4AF37]/20 transition-colors duration-300 flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-[#D4AF37]" strokeWidth="1.5">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
                            {t('rates')} <span className="font-medium text-gray-800 dark:text-white transition-colors duration-500">{t('no_tax')}</span>.
                        </span>
                    </div>

                    <div className="hidden md:block w-px h-10 bg-gray-200 dark:bg-gray-800 transition-colors duration-500"></div>

                    <div className="flex items-center space-x-4 group w-full md:w-auto justify-start">
                        <div className="p-3 rounded-full bg-white dark:bg-[#1A1A1A] shadow-sm group-hover:bg-[#00A896]/10 dark:group-hover:bg-[#00A896]/20 transition-colors duration-300 flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-[#00A896]" strokeWidth="1.5">
                                <path d="M17 21V19C17 16.7909 15.2091 15 13 15H11C8.79086 15 7 16.7909 7 19V21M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
                            {t('children')}
                        </span>
                    </div>

                    <div className="hidden md:block w-px h-10 bg-gray-200 dark:bg-gray-800 transition-colors duration-500"></div>

                    <div className="flex items-center space-x-4 group w-full md:w-auto justify-start">
                        <div className="p-3 rounded-full bg-white dark:bg-[#1A1A1A] shadow-sm group-hover:bg-[#D4AF37]/10 dark:group-hover:bg-[#D4AF37]/20 transition-colors duration-300 flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-[#D4AF37]" strokeWidth="1.5">
                                <path d="M4.5 10.5L3 13L4.5 15.5H7.5L9 13L7.5 10.5H4.5ZM19.5 10.5L18 13L19.5 15.5H22.5L24 13L22.5 10.5H19.5ZM12 4.5L10.5 7L12 9.5L13.5 7L12 4.5ZM12 16.5L10.5 19L12 21.5L13.5 19L12 16.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
                            {t('pets')}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}