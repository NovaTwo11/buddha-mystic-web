import { Room } from '@/data/rooms';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function RoomDetailContent({ room }: { room: Room }) {
    const t = useTranslations('RoomDetail');
    const whatsappNumber = "573135431537";
    const message = t('whatsappMessage', { roomName: room.name });
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 transition-colors duration-500">
            <div className="lg:col-span-7 flex flex-col pt-4">
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-px w-12 bg-[#D4AF37]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
                        {t('absoluteComfort')}
                    </span>
                </div>

                <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white font-serif font-light mb-8 leading-tight transition-colors duration-500">
                    {t('essenceOf')} <span className="italic font-medium text-[#00A896] dark:text-[#D4AF37]">{t('space')}</span>
                </h2>

                <p className="text-gray-900 dark:text-gray-300 text-lg leading-relaxed font-light mb-14 md:text-justify transition-colors duration-500">
                    {room.description}
                </p>

                <div className="pt-10 border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8 transition-colors duration-500">
                        {t('amenitiesIncluded')}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                        {room.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-4 group">
                                <div className="w-8 h-8 flex-shrink-0 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-500 group-hover:border-[#00A896] dark:group-hover:border-[#D4AF37] group-hover:bg-[#00A896]/5 dark:group-hover:bg-[#D4AF37]/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:bg-[#00A896] dark:group-hover:bg-[#D4AF37] group-hover:scale-150" />
                                </div>
                                <span className="text-sm text-gray-900 dark:text-gray-300 font-light group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 relative">
                <div className="sticky top-32 bg-white dark:bg-[#111111] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-50 dark:border-white/5 rounded-sm group transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

                    <div className="text-center mb-12">
                        <h3 className="text-2xl text-gray-900 dark:text-white font-serif font-light italic mb-3 transition-colors duration-500">
                            {t('bookYourRest')}
                        </h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 transition-colors duration-500">
                            {t('capacity', { capacity: room.capacity })}
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        <div className="flex flex-col border-b border-gray-100 dark:border-white/10 pb-8 transition-colors duration-500">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3 transition-colors duration-500">
                                {t('lowSeason')}
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl text-gray-900 dark:text-white font-light font-serif transition-colors duration-500">{room.lowPrice}</span>
                                <span className="text-xs text-gray-400 font-light uppercase tracking-wider">{t('perNight')}</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3 transition-colors duration-500">
                                {t('highSeason')}
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl text-[#D4AF37] font-light font-serif">{room.highPrice}</span>
                                <span className="text-xs text-gray-400 font-light uppercase tracking-wider">{t('perNight')}</span>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-5 px-4 text-xs font-bold tracking-widest uppercase transition-all duration-500 inline-flex justify-center items-center bg-[#D4AF37] text-white shadow-xl shadow-[#D4AF37]/20 hover:bg-[#00A896] hover:shadow-[#00A896]/20 rounded-sm"
                    >
                        {t('requestReservation')}
                    </Link>
                </div>
            </div>
        </section>
    );
}