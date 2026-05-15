'use client';

import { useState } from 'react';
import Link from 'next/link';
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

const filterKeys = ['all', 'privacy', 'romance', 'family', 'groups'];

export default function RoomsExperience() {
    const t = useTranslations('RoomsExperience');
    const [activeFilter, setActiveFilter] = useState('all');

    const rooms = [
        {
            id: 1, slug: 'individual', name: t('room1_name'), capacity: t('room1_cap'), filter: 'privacy', energy: t('room1_en'), lowPrice: '$150.000', highPrice: '$250.000',
            imgId: 'IMG_Hab_4_vglkuy'
        },
        {
            id: 2, slug: 'pareja', name: t('room2_name'), capacity: t('room2_cap'), filter: 'privacy', energy: t('room2_en'), lowPrice: '$150.000', highPrice: '$250.000',
            imgId: 'IMG_Hab2_2_pxnwvq'
        },
        {
            id: 3, slug: 'superior', name: t('room3_name'), capacity: t('room3_cap'), filter: 'romance', energy: t('room3_en'), lowPrice: '$170.000', highPrice: '$270.000',
            imgId: 'IMG_9708_k2ffjv'
        },
        {
            id: 4, slug: 'triple', name: t('room4_name'), capacity: t('room4_cap'), filter: 'family', energy: t('room4_en'), lowPrice: '$225.000', highPrice: '$290.000',
            imgId: 'DJI_20260227_171323_141_dpqare'
        },
        {
            id: 5, slug: 'cuadruple', name: t('room5_name'), capacity: t('room5_cap'), filter: 'family', energy: t('room5_en'), lowPrice: '$280.000', highPrice: '$420.000',
            imgId: 'WhatsApp_Image_2026-05-11_at_1.40.08_PM_cqpb5v'
        },
        {
            id: 6, slug: 'sextuple', name: t('room6_name'), capacity: t('room6_cap'), filter: 'family', energy: t('room6_en'), lowPrice: '$480.000', highPrice: '$550.000',
            imgId: 'DJI_20260227_163805_968_lrb40n'
        },
        {
            id: 7, slug: 'octuple', name: t('room7_name'), capacity: t('room7_cap'), filter: 'family', energy: t('room7_en'), lowPrice: '$550.000', highPrice: '$720.000',
            imgId: 'DJI_20260227_122657_989_w6blks'
        },
        {
            id: 8, slug: 'acomodacion-10-pax', name: t('room8_name'), capacity: t('room8_cap'), filter: 'groups', energy: t('room8_en'), lowPrice: '$620.000', highPrice: '$900.000',
            imgId: 'IMG_0642_jrbdft'
        },
        {
            id: 9, slug: 'acomodacion-12-pax', name: t('room9_name'), capacity: t('room9_cap'), filter: 'groups', energy: t('room9_en'), lowPrice: '$700.000', highPrice: '$1.000.000',
            imgId: 'DJI_20260227_164109_343_izxhjz'
        }
    ];

    const filteredRooms = rooms.filter(room =>
        activeFilter === 'all' ? true : room.filter === activeFilter
    );

    return (
        <section id="habitaciones" className="w-full max-w-[1600px] mx-auto px-2 sm:px-8 lg:px-16 py-4 lg:py-8 transition-colors duration-500 scroll-mt-24">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                {filterKeys.map(key => (
                    <button
                        key={key}
                        onClick={() => setActiveFilter(key)}
                        className={`px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-sm font-light tracking-wide rounded-sm transition-all duration-300 border
                            ${activeFilter === key
                            ? 'bg-[#00A896] text-white border-[#00A896]'
                            : 'bg-transparent text-gray-900 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:text-[#D4AF37] dark:hover:text-[#D4AF37]'}`}
                    >
                        {t(`filter_${key}`)}
                    </button>
                ))}
            </div>

            {/* Transformamos el Grid en un Flexbox centrado. Las tarjetas calcularán su 50% automáticamente */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6 lg:gap-10">
                {filteredRooms.map((room) => (
                    <div
                        key={room.id}
                        // El ancho (w) de cada tarjeta se calcula restando el margen exacto para que encajen dos por fila
                        className="w-[calc(50%-0.25rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1.25rem)] group relative flex flex-col bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-sm overflow-hidden"
                    >
                        {/* Se elevó la altura de la imagen (h-36, h-64, h-80) para darles el protagonismo solicitado */}
                        <Link href={`/alojamiento/${room.slug}`} className="relative h-36 sm:h-64 md:h-80 w-full overflow-hidden block cursor-pointer">
                            <MysticImage
                                src={room.imgId}
                                alt={t('alt_img', { name: room.name })}
                                width={1000} // Elevamos la resolución solicitada al optimizador por el nuevo ancho
                                height={800}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                            <div className="hidden md:block absolute top-4 left-4 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md border border-white/40 dark:border-white/10 px-4 py-2 rounded-sm transition-colors duration-500">
                                <span className="text-xs text-gray-900 dark:text-white font-medium tracking-wider uppercase">{room.energy}</span>
                            </div>
                        </Link>

                        <div className="p-3 sm:p-6 md:p-10 flex flex-col flex-grow">
                            <div className="mb-4 md:mb-8">
                                {/* Tipografías proporcionales a las nuevas tarjetas más anchas */}
                                <h3 className="text-sm leading-tight sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white font-serif font-light transition-colors duration-500">
                                    {room.name}
                                </h3>
                                <p className="text-[10px] sm:text-sm md:text-base text-gray-500 dark:text-gray-400 font-light mt-2 transition-colors duration-500">
                                    {room.capacity}
                                </p>
                            </div>

                            <div className="mt-auto border-t border-gray-100 dark:border-white/5 pt-4 md:pt-6 flex flex-col space-y-3 md:space-y-4 mb-5 md:mb-10 transition-colors duration-500">
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400 font-light uppercase tracking-wider text-[9px] md:text-xs transition-colors duration-500">
                                        <span className="md:hidden">{t('low_season_mobile')}</span>
                                        <span className="hidden md:inline">{t('low_season_pc')}</span>
                                    </span>
                                    <span className="text-gray-900 dark:text-white font-medium text-xs sm:text-base md:text-xl transition-colors duration-500">{room.lowPrice}</span>
                                </div>
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400 font-light uppercase tracking-wider text-[9px] md:text-xs transition-colors duration-500">
                                        <span className="md:hidden">{t('high_season_mobile')}</span>
                                        <span className="hidden md:inline">{t('high_season_pc')}</span>
                                    </span>
                                    <span className="text-[#D4AF37] font-medium text-xs sm:text-base md:text-xl">{room.highPrice}</span>
                                </div>
                            </div>

                            <Link
                                href={`/alojamiento/${room.slug}`}
                                className="w-full py-2.5 md:py-4 px-2 md:px-6 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-500 font-light tracking-[0.1em] md:tracking-[0.2em] text-[9px] sm:text-xs md:text-sm uppercase rounded-sm text-center block"
                            >
                                <span className="hidden sm:inline">{t('discover_pc')}</span>
                                <span className="sm:hidden">{t('discover_mobile')}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}