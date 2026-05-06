'use client';

import { useState } from 'react';

const filters = [
    'Todos',
    'Silencio y Desconexión',
    'Romance y Conexión',
    'Descanso Familiar',
    'Grupos de Sanación'
];

const rooms = [
    {
        id: 1, name: 'Individual', capacity: '1 persona', filter: 'Silencio y Desconexión', energy: 'Ideal para Introspección', lowPrice: '$150.000', highPrice: '$250.000',
        img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2, name: 'Pareja', capacity: '2 personas', filter: 'Silencio y Desconexión', energy: 'Refugio de Paz', lowPrice: '$150.000', highPrice: '$250.000',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 3, name: 'Superior', capacity: '2 personas', filter: 'Romance y Conexión', energy: 'Amplitud y Armonía', lowPrice: '$170.000', highPrice: '$270.000',
        img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 4, name: 'Triple', capacity: '3 personas', filter: 'Descanso Familiar', energy: 'Unión y Confort', lowPrice: '$225.000', highPrice: '$290.000',
        img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop'
    },
    {
        id: 5, name: 'Cuádruple', capacity: '4 personas', filter: 'Descanso Familiar', energy: 'Espacio Compartido', lowPrice: '$280.000', highPrice: '$420.000',
        img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 6, name: 'Séxtuple', capacity: '6 personas', filter: 'Descanso Familiar', energy: 'Familia Extendida', lowPrice: '$480.000', highPrice: '$550.000',
        img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 7, name: 'Óctuple', capacity: '8 personas', filter: 'Descanso Familiar', energy: 'Gran Encuentro', lowPrice: '$550.000', highPrice: '$720.000',
        img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 8, name: 'Acomodación 10 pax', capacity: '10 personas', filter: 'Grupos de Sanación', energy: 'Círculo de Luz', lowPrice: '$620.000', highPrice: '$900.000',
        img: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2232&auto=format&fit=crop'
    },
    {
        id: 9, name: 'Acomodación 12 pax', capacity: '12 personas', filter: 'Grupos de Sanación', energy: 'Retiro Colectivo', lowPrice: '$700.000', highPrice: '$1.000.000',
        img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop'
    }
];

export default function RoomsExperience() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredRooms = rooms.filter(room =>
        activeFilter === 'Todos' ? true : room.filter === activeFilter
    );

    return (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-8 lg:py-16">
            {/* Topbar Filters */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 text-xs md:text-sm font-light tracking-wide rounded-sm transition-all duration-300 border
              ${activeFilter === filter
                            ? 'bg-[#00A896] text-white border-[#00A896]'
                            : 'bg-transparent text-gray-600 border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="group relative flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden">

                        {/* Image Box (Protegido con overflow-hidden y transformaciones seguras) */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${room.img})` }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                            {/* Energy Badge */}
                            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-sm">
                                <span className="text-[10px] text-gray-900 font-medium tracking-wider uppercase">{room.energy}</span>
                            </div>
                        </div>

                        {/* Content Box */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl text-gray-900 font-serif font-light">{room.name}</h3>
                                    <p className="text-sm text-gray-500 font-light mt-1">Capacidad: {room.capacity}</p>
                                </div>

                                {/* Menú del Buen Descanso Tooltip (Centrado para evitar fugas horizontales) */}
                                <div className="relative flex items-center justify-center cursor-help group/tooltip">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[#00A896] transition-transform duration-300 group-hover/tooltip:scale-110" strokeWidth="1.2">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    {/* Tooltip con posición segura */}
                                    <div className="absolute bottom-full right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mb-3 hidden group-hover/tooltip:block w-48 p-3 bg-white/95 backdrop-blur-md border border-[#D4AF37]/30 text-xs text-center text-gray-600 rounded-sm shadow-xl z-20 pointer-events-none">
                                        Aromaterapia, Menú de almohadas, Kit de meditación
                                    </div>
                                </div>
                            </div>

                            {/* Prices Layout */}
                            <div className="mt-auto border-t border-gray-100 pt-5 flex flex-col space-y-3 mb-8">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-light uppercase tracking-wider text-[10px]">Temporada Baja</span>
                                    <span className="text-gray-900 font-medium">{room.lowPrice}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-light uppercase tracking-wider text-[10px]">Temporada Alta</span>
                                    <span className="text-[#D4AF37] font-medium">{room.highPrice}</span>
                                </div>
                            </div>

                            {/* Reserve Button */}
                            <button className="w-full py-3.5 px-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors duration-500 font-light tracking-[0.2em] text-[10px] md:text-xs uppercase rounded-sm">
                                Reservar Ahora
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}