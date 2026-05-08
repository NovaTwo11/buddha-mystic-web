import React from 'react';

export default function ExperiencesHero() {
    return (
        /* 1. Contenedor Principal:
           - Cambiamos flex-row por flex-col de base para controlar la verticalidad.
           - Usamos justify-center en móvil para subir el texto, y lg:justify-end para mantener el anclaje inferior en escritorio.
        */
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center lg:justify-end overflow-hidden bg-[#FAFAFA]">

            {/* 2. Capa de Imagen de Fondo */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2000&auto=format&fit=crop')" }}
            />

            {/* 3. Velos de Degradado (Overlays) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* 4. Contenedor del Contenido Principal
                - pt-32: Garantiza el espacio vital para la Navbar (aprox 128px de respiro superior).
                - pb-12 lg:pb-24: Evita que el panel quede aplastado contra el borde inferior en móviles.
            */}
            <div className="relative z-20 w-full max-w-[1600px] mx-auto px-5 sm:px-12 lg:px-16 pt-32 pb-12 lg:pb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

                {/* EL NUEVO PANEL EDITORIAL */}
                <div className="bg-white/85 backdrop-blur-2xl p-8 sm:p-10 lg:p-14 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/60 max-w-2xl relative overflow-hidden group">

                    {/* Acento lateral */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4AF37] to-[#00A896]/30" />

                    {/* Ubicación */}
                    <span className="text-[#00A896] tracking-[0.4em] text-[10px] sm:text-sm font-semibold uppercase mb-4 sm:mb-5 block pl-2">
                        Doradal, Antioquia
                    </span>

                    {/* Título: Ajuste tipográfico suave para móviles (text-4xl) */}
                    <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-7xl text-gray-900 mb-5 sm:mb-6 leading-[1.1] pl-2">
                        Aventuras que <br className="hidden sm:block" />
                        <span className="italic font-medium text-[#D4AF37]">despiertan</span> el alma
                    </h1>

                    {/* Párrafo descriptivo */}
                    <p className="text-gray-600 font-light text-sm sm:text-base lg:text-lg leading-relaxed pl-2">
                        Más allá de nuestro santuario de descanso, te aguarda un entorno natural vibrante.
                        Descubre la magia de la región y conecta con la energía pura de la naturaleza.
                    </p>
                </div>

                {/* 5. Indicador de Scroll Minimalista */}
                <div className="hidden lg:flex flex-col items-center gap-6 mb-8">
                    <span
                        className="text-white text-xs tracking-[0.3em] uppercase opacity-80"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        Descubrir
                    </span>
                    <div className="w-[1px] h-20 bg-white/30 relative overflow-hidden">
                        <div className="w-full h-1/3 bg-white absolute top-0"
                             style={{ animation: 'scrollDown 2s infinite' }}
                        />
                        <style>{`
                            @keyframes scrollDown {
                                0% { transform: translateY(-100%); }
                                100% { transform: translateY(300%); }
                            }
                        `}</style>
                    </div>
                </div>

            </div>
        </section>
    );
}