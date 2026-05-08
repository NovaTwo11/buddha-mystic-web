"use client"; // Necesario para usar hooks de estado y eventos de hover

import { useState } from "react";

const extremeActivities = [
    {
        name: "Tour Buggies",
        location: "Selva y trochas locales",
        image: "https://images.unsplash.com/photo-1559553156-2e97137af16f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Tour Cuatrimoto",
        location: "Rutas agrestes de Doradal",
        image: "https://images.unsplash.com/photo-1596324143435-081831c26b58?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Liberación de Tortugas",
        location: "Río Magdalena",
        image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Cascada El Oro",
        location: "Senderismo avanzado",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Aventura a Los Chorros",
        location: "Cañones acuáticos",
        image: "https://images.unsplash.com/photo-1533568024501-81f181f7f259?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Rafting en Río Claro",
        location: "Reserva Río Claro",
        image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Cavernas La Danta",
        location: "Corregimiento La Danta",
        image: "https://images.unsplash.com/photo-1534068305413-585a973d88b4?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "La Gran Magdalena",
        location: "Puerto Triunfo",
        image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1000&auto=format&fit=crop"
    },
];

export default function ExtremeActivities() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-[#FAFAFA] px-4 sm:px-8 lg:px-16 overflow-hidden relative">

            {/* Mancha de luz sutil en el fondo para dar dimensión */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A896]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="relative z-10 max-w-[1600px] mx-auto">

                {/* Cabecera Principal Separada del Grid para mayor jerarquía */}
                <div className="mb-16 md:mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[#00A896] tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">
                            Más allá del límite
                        </span>
                        <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                            Adrenalina y <span className="italic font-medium text-[#D4AF37]">Naturaleza</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 font-light max-w-lg text-base md:text-lg">
                        Desafía tus límites. Pasa el cursor sobre las experiencias para descubrir los escenarios vivos que te aguardan.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* LADO IZQUIERDO: Galería de Imágenes (Editorial Portrait) */}
                    <div className="relative h-[450px] md:h-[600px] lg:h-[700px] lg:col-span-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">

                        {/* Imágenes con transición cinética (Opacidad + Escala) */}
                        {extremeActivities.map((activity, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                    index === activeIndex
                                        ? "opacity-100 z-10 scale-100"
                                        : "opacity-0 z-0 scale-105"
                                }`}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.name}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[15000ms] ease-out"
                                />
                                {/* Velo degradado inferior solo para asegurar legibilidad */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                            </div>
                        ))}

                        {/* Tarjeta de cristal que ROMPE la caja hacia la derecha (Overlap 3D) */}
                        <div className="absolute -bottom-6 -right-4 sm:bottom-12 sm:-right-12 z-20 bg-white/85 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/60 max-w-[280px] sm:max-w-[340px] transform transition-all duration-700">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4AF37] to-[#00A896]/30 rounded-l-2xl" />

                            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#00A896] uppercase mb-2 block pl-3">
                                {extremeActivities[activeIndex].location}
                            </span>
                            <h3 className="font-serif font-light text-xl sm:text-3xl text-gray-900 leading-tight pl-3">
                                {extremeActivities[activeIndex].name}
                            </h3>
                        </div>
                    </div>

                    {/* LADO DERECHO: Menú Interactivo de 2 Columnas (7 columnas del grid maestro) */}
                    <div className="lg:col-span-7 pl-0 sm:pl-4 lg:pl-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {extremeActivities.map((activity, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer group relative overflow-hidden flex items-center p-4 sm:p-5 rounded-2xl transition-all duration-500 border ${
                                            isActive
                                                ? "bg-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] border-white/60 translate-x-2"
                                                : "bg-transparent border-transparent hover:bg-white/40"
                                        }`}
                                    >
                                        {/* Destello sutil de color activo */}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent pointer-events-none" />
                                        )}

                                        {/* Icono Táctil */}
                                        <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                                            isActive
                                                ? "bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 scale-110"
                                                : "bg-white text-gray-400 border border-gray-100 group-hover:border-[#00A896]/30 group-hover:text-[#00A896]"
                                        }`}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>

                                        <div className="relative z-10 ml-4 flex flex-col justify-center">
                                            <h4 className={`text-base sm:text-lg font-medium transition-colors duration-500 ${
                                                isActive ? "text-gray-900" : "text-gray-600 group-hover:text-[#D4AF37]"
                                            }`}>
                                                {activity.name}
                                            </h4>
                                            <span className={`text-[10px] sm:text-xs tracking-wide uppercase transition-colors duration-500 ${
                                                isActive ? "text-[#00A896] font-semibold" : "text-gray-400 font-light"
                                            }`}>
                                                {activity.location}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Aviso al huésped */}
                        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 font-light italic flex items-start sm:items-center">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mr-4">
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                Consulta en nuestra recepción para coordinar estas aventuras con operadores turísticos locales de confianza.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}