'use client';

import { useState } from 'react';
import Link from 'next/link';
// Importamos nuestro componente de imagen optimizado
import MysticImage from "@/components/ui/MysticImage";

const filters = [
    'Todos',
    'Descanso y Privacidad',
    'Romance y Confort',
    'Descanso Familiar',
    'Grupos y Eventos'
];

// Base de datos de habitaciones con los nuevos IDs de MysticImage integrados
const rooms = [
    {
        id: 1, slug: 'individual', name: 'Individual', capacity: '1 persona', filter: 'Descanso y Privacidad', energy: 'Confort Íntimo', lowPrice: '$150.000', highPrice: '$250.000',
        imgId: 'IMG_Hab_4_vglkuy'
    },
    {
        id: 2, slug: 'pareja', name: 'Pareja', capacity: '2 personas', filter: 'Descanso y Privacidad', energy: 'Refugio Privado', lowPrice: '$150.000', highPrice: '$250.000',
        imgId: 'IMG_Hab2_2_pxnwvq'
    },
    {
        id: 3, slug: 'superior', name: 'Superior', capacity: '2 personas', filter: 'Romance y Confort', energy: 'Amplitud y Armonía', lowPrice: '$170.000', highPrice: '$270.000',
        imgId: 'IMG_9708_k2ffjv'
    },
    {
        id: 4, slug: 'triple', name: 'Triple', capacity: '3 personas', filter: 'Descanso Familiar', energy: 'Unión y Confort', lowPrice: '$225.000', highPrice: '$290.000',
        imgId: 'DJI_20260227_171323_141_dpqare'
    },
    {
        id: 5, slug: 'cuadruple', name: 'Cuádruple', capacity: '4 personas', filter: 'Descanso Familiar', energy: 'Espacio Compartido', lowPrice: '$280.000', highPrice: '$420.000',
        imgId: 'WhatsApp_Image_2026-05-11_at_1.40.08_PM_cqpb5v'
    },
    {
        id: 6, slug: 'sextuple', name: 'Séxtuple', capacity: '6 personas', filter: 'Descanso Familiar', energy: 'Familia Extendida', lowPrice: '$480.000', highPrice: '$550.000',
        imgId: 'DJI_20260227_163805_968_lrb40n'
    },
    {
        id: 7, slug: 'octuple', name: 'Óctuple', capacity: '8 personas', filter: 'Descanso Familiar', energy: 'Gran Encuentro', lowPrice: '$550.000', highPrice: '$720.000',
        imgId: 'DJI_20260227_122657_989_w6blks'
    },
    {
        id: 8, slug: 'acomodacion-10-pax', name: 'Acomodación 10', capacity: '10 personas', filter: 'Grupos y Eventos', energy: 'Gran Acomodación', lowPrice: '$620.000', highPrice: '$900.000',
        imgId: 'IMG_0642_jrbdft'
    },
    {
        id: 9, slug: 'acomodacion-12-pax', name: 'Acomodación 12', capacity: '12 personas', filter: 'Grupos y Eventos', energy: 'Estadía Colectiva', lowPrice: '$700.000', highPrice: '$1.000.000',
        imgId: 'DJI_20260227_164109_343_izxhjz'
    }
];

export default function RoomsExperience() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredRooms = rooms.filter(room =>
        activeFilter === 'Todos' ? true : room.filter === activeFilter
    );

    return (
        // Reducimos márgenes py-8/py-16 -> py-4/py-8 para unificar espacios
        <section className="w-full max-w-[1600px] mx-auto px-2 sm:px-8 lg:px-16 py-4 lg:py-8 transition-colors duration-500">
            {/* Topbar Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-sm font-light tracking-wide rounded-sm transition-all duration-300 border
                            ${activeFilter === filter
                            ? 'bg-[#00A896] text-white border-[#00A896]'
                            : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:text-[#D4AF37] dark:hover:text-[#D4AF37]'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-10">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="group relative flex flex-col bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-sm overflow-hidden">

                        {/* Image Box - Reemplazamos div con bg-image por MysticImage */}
                        <Link href={`/alojamiento/${room.slug}`} className="relative h-28 sm:h-48 md:h-64 w-full overflow-hidden block cursor-pointer">
                            <MysticImage
                                src={room.imgId}
                                alt={`Habitación ${room.name} en Buddha Mystic Doradal`}
                                // Usamos 800 de ancho para tarjetas en cuadrícula (ahorra datos vs 1920)
                                width={800}
                                height={600}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Etiqueta Descriptiva */}
                            <div className="hidden md:block absolute top-4 left-4 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md border border-white/40 dark:border-white/10 px-3 py-1.5 rounded-sm transition-colors duration-500">
                                <span className="text-[10px] text-gray-900 dark:text-white font-medium tracking-wider uppercase">{room.energy}</span>
                            </div>
                        </Link>

                        {/* Content Box */}
                        <div className="p-3 sm:p-4 md:p-8 flex flex-col flex-grow">
                            {/* Eliminamos el flex justify-between y el botón de info, dejando solo el título centrado a la izquierda */}
                            <div className="mb-3 md:mb-6">
                                {/* Tipografía purificada */}
                                <h3 className="text-[11px] leading-tight sm:text-lg md:text-2xl text-gray-900 dark:text-white font-serif font-light transition-colors duration-500">
                                    {room.name}
                                </h3>
                                <p className="text-[8px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light mt-1 transition-colors duration-500">
                                    {room.capacity}
                                </p>
                            </div>

                            {/* Prices Layout - Con lógica responsiva de etiquetas */}
                            <div className="mt-auto border-t border-gray-100 dark:border-white/5 pt-3 md:pt-5 flex flex-col space-y-2 md:space-y-3 mb-4 md:mb-8 transition-colors duration-500">
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center text-sm">
                                    {/* Etiqueta Baja: T. BAJA (Móvil) / TEMPORADA BAJA (PC) */}
                                    <span className="text-gray-500 dark:text-gray-400 font-light uppercase tracking-wider text-[7px] md:text-[9px] transition-colors duration-500">
                                        <span className="md:hidden">T. BAJA</span>
                                        <span className="hidden md:inline">TEMPORADA BAJA</span>
                                    </span>
                                    <span className="text-gray-900 dark:text-white font-medium text-[10px] sm:text-sm md:text-base transition-colors duration-500">{room.lowPrice}</span>
                                </div>
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center text-sm">
                                    {/* Etiqueta Alta: T. ALTA (Móvil) / TEMPORADA ALTA (PC) */}
                                    <span className="text-gray-500 dark:text-gray-400 font-light uppercase tracking-wider text-[7px] md:text-[9px] transition-colors duration-500">
                                        <span className="md:hidden">T. ALTA</span>
                                        <span className="hidden md:inline">TEMPORADA ALTA</span>
                                    </span>
                                    <span className="text-[#D4AF37] font-medium text-[10px] sm:text-sm md:text-base">{room.highPrice}</span>
                                </div>
                            </div>

                            <Link
                                href={`/alojamiento/${room.slug}`}
                                className="w-full py-2 md:py-3.5 px-1 md:px-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-500 font-light tracking-[0.1em] md:tracking-[0.2em] text-[7px] sm:text-[9px] md:text-xs uppercase rounded-sm text-center block"
                            >
                                <span className="hidden sm:inline">Descubrir</span>
                                <span className="sm:hidden">Ver</span>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}