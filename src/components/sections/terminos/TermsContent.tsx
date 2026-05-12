import { useTranslations } from 'next-intl';

export default function TermsContent() {
    const t = useTranslations('TermsContent');

    return (
        <section className="pt-40 pb-32 px-4 sm:px-8 lg:px-16 transition-colors duration-500">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-20">
                    <span className="text-[#00A896] dark:text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block mb-6">
                        {t('transparencyAndTrust')}
                    </span>
                    <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8 leading-tight">
                        {t('termsAnd')} <span className="italic font-medium text-[#D4AF37]">{t('conditions')}</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-10"></div>
                </div>

                <div className="bg-white dark:bg-[#111111] p-8 md:p-14 rounded-sm shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/5 transition-all duration-500">
                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-gray-900 dark:text-white mb-6 border-b border-gray-50 dark:border-white/5 pb-4">
                            {t('section1Title')}
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>{t('vatLabel')}</strong> {t('vatText')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>{t('minorsLabel')}</strong> {t('minorsText')}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-gray-900 dark:text-white mb-6 border-b border-gray-50 dark:border-white/5 pb-4">
                            {t('section2Title')}
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>{t('conditionsLabel')}</strong> {t('conditionsText')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>{t('deadlineLabel')}</strong> {t('deadlineText')}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-gray-900 dark:text-white mb-6 border-b border-gray-50 dark:border-white/5 pb-4">
                            {t('section3Title')}
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>{t('transferabilityLabel')}</strong> {t('transferabilityText')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>{t('ownershipLabel')}</strong> {t('ownershipText')}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100 dark:border-white/10 text-center">
                        <p className="text-gray-500 dark:text-gray-400 italic text-sm mb-6">
                            {t('finalNote')}
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                            <a href="https://wa.me/573135431537" className="text-[#00A896] dark:text-[#D4AF37] font-medium text-sm hover:underline uppercase tracking-widest transition-all">
                                WhatsApp: 313 543 1537
                            </a>
                            <a href="mailto:buddhamystichotel@gmail.com" className="text-[#00A896] dark:text-[#D4AF37] font-medium text-sm hover:underline uppercase tracking-widest transition-all">
                                buddhamystichotel@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}