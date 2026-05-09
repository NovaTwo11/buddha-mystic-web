'use client';

import { useState } from 'react';
import Link from 'next/link';

const filters = [
    'Todos',
    'Descanso y Privacidad',
    'Romance y Confort',
    'Descanso Familiar',
    'Grupos y Eventos'
];

const rooms = [
    {
        id: 1, slug: 'individual', name: 'Individual', capacity: '1 persona', filter: 'Descanso y Privacidad', energy: 'Confort Íntimo', lowPrice: '$150.000', highPrice: '$250.000',
        img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2, slug: 'pareja', name: 'Pareja', capacity: '2 personas', filter: 'Descanso y Privacidad', energy: 'Refugio Privado', lowPrice: '$150.000', highPrice: '$250.000',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 3, slug: 'superior', name: 'Superior', capacity: '2 personas', filter: 'Romance y Confort', energy: 'Amplitud y Armonía', lowPrice: '$170.000', highPrice: '$270.000',
        img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 4, slug: 'triple', name: 'Triple', capacity: '3 personas', filter: 'Descanso Familiar', energy: 'Unión y Confort', lowPrice: '$225.000', highPrice: '$290.000',
        img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop'
    },
    {
        id: 5, slug: 'cuadruple', name: 'Cuádruple', capacity: '4 personas', filter: 'Descanso Familiar', energy: 'Espacio Compartido', lowPrice: '$280.000', highPrice: '$420.000',
        img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 6, slug: 'sextuple', name: 'Séxtuple', capacity: '6 personas', filter: 'Descanso Familiar', energy: 'Familia Extendida', lowPrice: '$480.000', highPrice: '$550.000',
        img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 7, slug: 'octuple', name: 'Óctuple', capacity: '8 personas', filter: 'Descanso Familiar', energy: 'Gran Encuentro', lowPrice: '$550.000', highPrice: '$720.000',
        img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 8, slug: 'acomodacion-10-pax', name: 'Acomodación 10', capacity: '10 personas', filter: 'Grupos y Eventos', energy: 'Gran Acomodación', lowPrice: '$620.000', highPrice: '$900.000',
        img: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2232&auto=format&fit=crop'
    },
    {
        id: 9, slug: 'acomodacion-12-pax', name: 'Acomodación 12', capacity: '12 personas', filter: 'Grupos y Eventos', energy: 'Estadía Colectiva', lowPrice: '$700.000', highPrice: '$1.000.000',
        img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function RoomsExperience() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredRooms = rooms.filter(room =>
        activeFilter === 'Todos' ? true : room.filter === activeFilter
    );

    return (
        <section className="w-full max-w-[1600px] mx-auto px-2 sm:px-8 lg:px-16 py-8 lg:py-16 transition-colors duration-500">
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

            {/* Mantenemos grid-cols-3 de base para que siempre haya 3 por fila */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-10">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="group relative flex flex-col bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-sm overflow-hidden">

                        {/* Image Box */}
                        <Link href={`/alojamiento/${room.slug}`} className="relative h-28 sm:h-48 md:h-64 w-full overflow-hidden block cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${room.img})` }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                            {/* Etiqueta Descriptiva - Oculta en móvil si es muy pequeña, visible en tablet/PC */}
                            <div className="hidden md:block absolute top-4 left-4 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-md border border-white/40 dark:border-white/10 px-3 py-1.5 rounded-sm transition-colors duration-500">
                                <span className="text-[10px] text-gray-900 dark:text-white font-medium tracking-wider uppercase">{room.energy}</span>
                            </div>
                        </Link>

                        {/* Content Box */}
                        <div className="p-3 sm:p-4 md:p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-3 md:mb-6">
                                <div>
                                    {/* Tipografía purificada: font-serif font-light sin truncamientos extraños */}
                                    <h3 className="text-[11px] leading-tight sm:text-lg md:text-2xl text-gray-900 dark:text-white font-serif font-light transition-colors duration-500">
                                        {room.name}
                                    </h3>
                                    <p className="text-[8px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 font-light mt-1 transition-colors duration-500">
                                        {room.capacity}
                                    </p>
                                </div>

                                {/* Tooltip oculto en móviles para evitar amontonamiento en las 3 columnas */}
                                <div className="hidden md:flex relative items-center justify-center cursor-help group/tooltip">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[#00A896] dark:stroke-[#D4AF37] transition-all duration-300 group-hover/tooltip:scale-110" strokeWidth="1.2">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <div className="absolute bottom-full right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mb-3 hidden group-hover/tooltip:block w-48 p-3 bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-center text-gray-600 dark:text-gray-300 rounded-sm shadow-xl z-20 pointer-events-none transition-colors duration-500">
                                        Lencería premium, Amenities exclusivos, Climatización ideal
                                    </div>
                                </div>
                            </div>

                            {/* Prices Layout - Apilado en móvil (flex-col) para acomodar los ".000", en fila en tablet/PC */}
                            <div className="mt-auto border-t border-gray-100 dark:border-white/5 pt-3 md:pt-5 flex flex-col space-y-2 md:space-y-3 mb-4 md:mb-8 transition-colors duration-500">
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400 font-light uppercase tracking-wider text-[7px] md:text-[10px] transition-colors duration-500">T. Baja</span>
                                    <span className="text-gray-900 dark:text-white font-medium text-[10px] sm:text-sm md:text-base transition-colors duration-500">{room.lowPrice}</span>
                                </div>
                                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400 font-light uppercase tracking-wider text-[7px] md:text-[10px] transition-colors duration-500">T. Alta</span>
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