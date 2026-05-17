import React from 'react';
import { useTranslations } from 'next-intl';

export default function CorporatePackages() {
    const t = useTranslations('CorporatePackage');

    const packages = [
        {
            title: t('packages.lowSeason.title'),
            accommodation: t('packages.lowSeason.accommodation'),
            basePrice: "$ 55.000",
            description: t('packages.lowSeason.description'),
            groupBase: "$ 70.000",
            groupOptions: [
                { desc: t('options.basic'), price: "$ 73.000" },
                { desc: t('options.meat'), price: "$ 80.000" },
                { desc: t('options.ribBroth'), price: "$ 69.000" },
                { desc: t('options.lunch'), price: "$ 75.000" },
                { desc: t('options.dinner'), price: "$ 90.000" },
            ]
        },
        {
            title: t('packages.highSeason.title'),
            accommodation: t('packages.highSeason.accommodation'),
            basePrice: "$ 90.000",
            description: t('packages.highSeason.description'),
            groupBase: "$ 105.000",
            groupOptions: [
                { desc: t('options.basic'), price: "$ 108.000" },
                { desc: t('options.meat'), price: "$ 115.000" },
                { desc: t('options.ribBroth'), price: "$ 104.000" },
                { desc: t('options.lunch'), price: "$ 110.000" },
                { desc: t('options.dinner'), price: "$ 125.000" },
            ]
        },
        {
            title: t('packages.couples.title'),
            accommodation: t('packages.couples.accommodation'),
            basePrice: "$ 120.000",
            description: t('packages.couples.description'),
            groupBase: "$ 135.000",
            groupOptions: [
                { desc: t('options.basic'), price: "$ 138.000" },
                { desc: t('options.meat'), price: "$ 145.000" },
                { desc: t('options.ribBroth'), price: "$ 134.000" },
                { desc: t('options.lunch'), price: "$ 140.000" },
                { desc: t('options.dinner'), price: "$ 155.000" },
            ]
        }
    ];

    return (
        <section className="relative py-24 bg-white/50 dark:bg-[#0A0F11]/50 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 dark:text-white mb-6 tracking-wide">
                        {t('header.title')} <span className="italic font-medium text-[#D4AF37]">{t('header.highlight')}</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-lg">
                        {t('header.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 p-8 rounded-xl shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-2 transition-all duration-500 group flex flex-col"
                        >
                            <div className="mb-6">
                                <span className="text-xs uppercase tracking-widest text-[#00A896] font-semibold mb-2 block">
                                    {pkg.accommodation}
                                </span>
                                <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-2">{pkg.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">{pkg.description}</p>
                                <div className="pb-6 border-b border-gray-200 dark:border-white/10">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-light">{t('card.basePriceLabel')}</span>
                                    <div className="text-3xl font-light text-[#D4AF37] mt-1">{pkg.basePrice}</div>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="mb-4">
                                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">{t('card.groupTariff')}</span>
                                    <span className="block text-xs text-gray-500 dark:text-gray-400 mb-2">{t('card.groupDisclaimer')}</span>
                                    <span className="text-xl font-light text-[#00A896]">{pkg.groupBase}</span>
                                </div>

                                <ul className="space-y-4 mt-6">
                                    {pkg.groupOptions.map((opt, i) => (
                                        <li key={i} className="flex justify-between items-start text-sm">
                                            <span className="text-gray-600 dark:text-gray-300 font-light pr-4">{opt.desc}</span>
                                            <span className="text-gray-900 dark:text-white font-medium whitespace-nowrap">{opt.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-[#00A896]/5 dark:bg-[#00A896]/10 backdrop-blur-sm border border-[#00A896]/20 p-8 rounded-xl text-center max-w-4xl mx-auto transition-colors duration-500">
                    <h4 className="text-[#00A896] font-serif text-xl mb-4 italic">{t('important.title')}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                        {t('important.part1')} <span className="font-medium text-gray-900 dark:text-white">{t('important.highlight')}</span>. {t('important.part2')}
                    </p>
                    <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto my-6"></div>
                    <p className="text-gray-900 dark:text-white font-serif italic text-lg tracking-wide">
                        &#34;{t('important.quote')}&#34;
                    </p>
                </div>

            </div>
        </section>
    );
}