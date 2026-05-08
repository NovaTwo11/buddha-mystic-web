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
    // Estado para controlar qué imagen se muestra (por defecto la primera)
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white px-4 sm:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* LADO IZQUIERDO: Galería de Imágenes Interactiva (Ocupa 5 columnas) */}
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl lg:col-span-5 group">

                    {/* Renderizamos todas las imágenes, pero solo hacemos visible la activa */}
                    {extremeActivities.map((activity, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                        >
                            <img
                                src={activity.image}
                                alt={activity.name}
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[10s]"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}

                    {/* Tarjeta de cristal superpuesta que se actualiza con la actividad */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-xl transform translate-y-0 transition-all duration-500">
                        <span className="text-xs font-semibold tracking-widest text-[#00A896] uppercase mb-1 block">
                            {extremeActivities[activeIndex].location}
                        </span>
                        <h3 className="font-serif font-light text-2xl text-gray-900">
                            {extremeActivities[activeIndex].name}
                        </h3>
                    </div>
                </div>

                {/* LADO DERECHO: Lista de Actividades (Ocupa 7 columnas) */}
                <div className="lg:col-span-7">
                    <div className="mb-10">
                        <h2 className="font-serif font-light text-4xl md:text-5xl text-gray-900 mb-4">
                            Actividades <span className="italic font-medium text-[#00A896]">Extremas</span>
                        </h2>
                        <p className="text-gray-600 font-light max-w-xl text-lg">
                            Desafía tus límites. Pasa el cursor sobre las actividades para descubrir los escenarios naturales que te esperan.
                        </p>
                    </div>

                    {/* Grid de 2 columnas para que la lista no sea tan larga */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {extremeActivities.map((activity, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`cursor-pointer group flex items-center p-4 rounded-xl transition-all duration-300 border ${
                                        isActive
                                            ? "bg-[#FCFBF9] border-[#D4AF37]/40 shadow-sm"
                                            : "border-transparent hover:bg-gray-50"
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                        isActive ? "bg-[#00A896]/10 text-[#00A896]" : "bg-white text-gray-400 border border-gray-100 group-hover:text-[#D4AF37]"
                                    }`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className={`text-base font-medium transition-colors duration-300 ${
                                            isActive ? "text-[#D4AF37]" : "text-gray-900 group-hover:text-[#00A896]"
                                        }`}>
                                            {activity.name}
                                        </h4>
                                        <span className="text-xs font-light text-gray-500">
                                            {activity.location}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-400 font-light italic flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Consulta en nuestra recepción para coordinar estas experiencias con operadores locales.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}