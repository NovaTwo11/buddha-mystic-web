import { useTranslations } from 'next-intl';

export default function CulinaryEvolution() {
    const t = useTranslations('Restaurant');
    const whatsappNumber = "573135431537";
    const message = t('whatsappMessage');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="py-12 md:py-20 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto transition-colors duration-500">
            <div className="relative bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-sm overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00A896]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />
                <div className="relative z-10 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-[1px] bg-[#D4AF37] mr-4"></div>
                            <span className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                                {t('comingSoon')}
                            </span>
                        </div>
                        <h3 className="font-serif font-light text-3xl md:text-4xl text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
                            {t('newAwakening')} <br />
                            <span className="italic font-medium text-[#00A896] dark:text-[#D4AF37]">{t('sensorial')}</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10 transition-colors duration-500">
                            {t('evolutionText')}
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white uppercase tracking-[0.2em] text-xs font-light rounded-sm transition-all duration-500 w-max"
                        >
                            {t('notifyMe')}
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 h-[400px] md:h-full min-h-[500px] relative">
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale-[30%]"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#111111] to-transparent w-32 hidden md:block" />
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
                    </div>
                </div>
            </div>
        </section>
    );
}