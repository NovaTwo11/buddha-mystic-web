'use client';

import { useState, useEffect, useCallback } from 'react';

export default function OurTeam() {
    const [visibleItems, setVisibleItems] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Los 5 representantes principales del equipo con sus SVGs únicos
    const baseTeam = [
        {
            role: "Gerente",
            name: "Liderazgo y Visión",
            desc: "Liderando con serenidad, asegura que la esencia de Buddha Mystic se refleje en cada detalle de tu estadía.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            role: "Subgerente",
            name: "Excelencia Operativa",
            desc: "Su compromiso y carisma garantizan un ambiente de confianza y excelencia operativa en todo el hotel.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            role: "Recepcionista",
            name: "Atención y Hospitalidad",
            desc: "Con un gran corazón y vocación de servicio, es la primera sonrisa que te hace sentir en casa.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            role: "Jefa de Cocina",
            name: "Gastronomía Mándalas",
            desc: "Transforma nuestra comida tradicional contemporánea en un arte que nutre el cuerpo y el alma.",
            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
            )
        },
        {
            role: "Jefa de Meseros",
            name: "Servicio y Bienestar",
            desc: "Basa su trabajo en la honestidad y el respeto, guiando cada experiencia culinaria con gracia.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
            icon: (
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        }
    ];

    // Duplicamos el arreglo para crear el efecto de "bucle infinito" sin saltos bruscos
    const team = [...baseTeam, ...baseTeam, ...baseTeam];

    // Iniciamos en el bloque central para poder ir hacia atrás libremente
    const [currentIndex, setCurrentIndex] = useState(baseTeam.length);

    // Ajuste responsivo de elementos visibles
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 768) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };
        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, [isTransitioning]);

    const prevSlide = () => {
        if (!isTransitioning) setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    // Lógica mágica que resetea la posición silenciosamente para el efecto infinito
    const handleTransitionEnd = () => {
        if (currentIndex >= baseTeam.length * 2) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex - baseTeam.length);
        } else if (currentIndex < baseTeam.length) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex + baseTeam.length);
        }
    };

    // Auto-reproducción del carrusel cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

                {/* Encabezado de la sección */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl md:text-4xl text-gray-900 font-serif font-light mb-4">
                        El <span className="italic font-medium text-[#D4AF37]">Corazón</span> de Buddha Mystic
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Un equipo formado por hombres y mujeres fuertes, con un gran corazón y una admirable vocación de servicio. Juntos, construyen un ambiente de confianza para brindarte siempre lo mejor.
                    </p>
                </div>

                {/* Carrusel */}
                <div className="relative mb-24">
                    {/* Contenedor con overflow hidden, agregamos padding vertical para que el logo SVG no se corte */}
                    <div className="overflow-hidden px-4 -mx-4 pt-8 pb-4">
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {team.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                                >
                                    {/* Tarjeta del Miembro de Equipo */}
                                    <div className="group relative bg-[#FAFAFA] border border-gray-100 p-4 transition-all duration-500 hover:shadow-xl hover:shadow-[#00A896]/5 h-full flex flex-col mt-4">

                                        {/* Logo SVG Sobresaliente Dinámico */}
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center z-20 shadow-sm group-hover:border-[#00A896] transition-colors duration-500">
                                            {member.icon}
                                        </div>

                                        <div className="aspect-[3/4] w-full overflow-hidden mb-6 relative rounded-sm">
                                            <div className="absolute inset-0 bg-[#00A896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                            <img
                                                src={member.image}
                                                alt={member.role}
                                                className="object-cover w-full h-full grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="text-center px-4 pb-4 flex-grow flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-lg text-gray-900 font-serif font-medium">{member.role}</h3>
                                                <span className="text-xs text-[#00A896] uppercase tracking-widest block mb-2">{member.name}</span>
                                                <div className="w-8 h-[1px] bg-[#D4AF37] mx-auto mb-4 opacity-50 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />
                                            </div>
                                            <p className="text-sm text-gray-600 italic font-light">
                                                &quot;{member.desc}&quot;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controles del Carrusel */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-[35%] -left-2 md:-left-6 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-lg transition-all z-20"
                        aria-label="Anterior miembro del equipo"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-[35%] -right-2 md:-right-6 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-lg transition-all z-20"
                        aria-label="Siguiente miembro del equipo"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Sección Fotografía Equipo Completo */}
                <div className="relative w-full rounded-sm overflow-hidden group flex flex-col md:block">
                    <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] overflow-hidden rounded-t-sm md:rounded-sm">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                            alt="Todo el equipo de Buddha Mystic"
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="hidden md:block absolute inset-0 bg-black/20" />
                    </div>

                    <div className="w-full md:absolute md:bottom-0 md:left-0 md:p-12 flex justify-center bg-[#FAFAFA] md:bg-transparent p-6 sm:p-8">
                        <div className="bg-white md:bg-white/80 md:backdrop-blur-md border border-gray-100 md:border-white/50 px-6 py-8 md:px-8 md:py-6 text-center max-w-2xl rounded-b-sm md:rounded-sm shadow-sm md:shadow-lg w-full transition-all duration-500">
                            <h3 className="text-2xl md:text-3xl text-gray-900 font-serif font-light mb-2">
                                La <span className="italic font-medium text-[#00A896]">Familia</span> Buddha Mystic
                            </h3>
                            <p className="text-gray-600 font-light text-sm md:text-base">
                                Detrás de cada detalle hay un equipo completo de personas maravillosas que asumen su labor con amor y responsabilidad. Todos somos parte de tu experiencia.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}