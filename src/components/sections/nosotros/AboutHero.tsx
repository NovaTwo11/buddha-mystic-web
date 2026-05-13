import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

export default function AboutHero() {
    const t = useTranslations('AboutHero');

    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden transition-colors duration-500 bg-[#FCFBF9] dark:bg-[#0A0A0A]">
            <div className="absolute inset-0 w-full h-full z-0">
                <MysticImage
                    src="763052f4-0411-4e6c-ae2a-3f4d1ce6548d"
                    alt={t('alt_img')}
                    width={1920}
                    height={1080}
                    priority={true}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/20 lg:to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/90 dark:lg:from-[#0A0A0A] dark:lg:via-[#0A0A0A]/80 transition-colors duration-500"></div>
            </div>

            <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 w-full">
                <div className="max-w-2xl bg-white/60 dark:bg-[#111111]/70 backdrop-blur-xl border border-white/60 dark:border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all duration-700">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-[1px] bg-[#D4AF37] mr-4"></div>
                        <span className="text-[#00A896] text-[10px] font-bold tracking-[0.3em] uppercase">
                            {t('badge')}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-serif font-light mb-6 leading-[1.1] transition-colors duration-500">
                        {t('title_p1')} <br className="hidden sm:block" />
                        <span className="italic font-medium text-[#D4AF37]">{t('title_highlight')}</span>
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed font-light transition-colors duration-500">
                        {t('description')}
                    </p>
                </div>
            </div>
        </section>
    );
}