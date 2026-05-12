import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

export default function RestaurantHero() {
    const t = useTranslations('Restaurant');

    return (
        <section className="relative h-screen min-h-[600px] lg:min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-gray-900 transition-colors duration-500 pt-20">
            <MysticImage
                src="w5490h3649x0y8-de17f978_lnr4rj"
                alt={t('heroAlt')}
                width={1920}
                height={1080}
                priority={true}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] scale-105 z-0"
            />
            <div className="absolute inset-0 z-10 bg-black/40 dark:bg-black/60 transition-colors duration-500" />
            <div className="relative z-20 max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-16 flex justify-center">
                <div className="max-w-3xl w-full flex flex-col items-center text-center bg-white/10 dark:bg-[#111111]/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 sm:p-12 md:p-16 rounded-sm shadow-2xl animate-fade-in-up transition-colors duration-500">
                    <span className="text-[#00A896] dark:text-[#D4AF37] tracking-[0.4em] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase mb-6 drop-shadow-md transition-colors duration-500">
                        {t('highFusionCuisine')}
                    </span>
                    <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] drop-shadow-lg transition-colors duration-500">
                        {t('restaurant')} <br />
                        <span className="italic font-medium text-[#D4AF37]">{t('mandalas')}</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#D4AF37]/60 my-4 sm:my-6 transition-colors duration-500"></div>
                    <p className="text-gray-100 dark:text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-xl drop-shadow-md transition-colors duration-500">
                        {t('heroDescription')}
                    </p>
                </div>
            </div>
        </section>
    );
}