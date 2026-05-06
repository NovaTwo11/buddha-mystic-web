import React from 'react';

export default function RoomsHero() {
    return (
        // 1. Usamos min-h-screen para que abarque la pantalla, pero le permitimos CRECER si el contenido lo requiere.
        // 2. Quitamos el overflow-hidden del section. Así evitamos cualquier conflicto de scroll interno.
        <section className="relative w-full min-h-screen flex items-center py-32 lg:py-0">

            {/* 3. La imagen de fondo tiene su propio contenedor absoluto y ESTE SÍ tiene overflow-hidden para la animación de escala, sin afectar al contenido. */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop')",
                    }}
                ></div>
                {/* Capa sutil para unificar tonos */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* 4. Contenedor principal de alineación. */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

                {/* 5. El Recuadro (Glassmorphism) concentrado a la izquierda. Su tamaño dictará la altura si la pantalla es muy pequeña. */}
                <div className="max-w-[90%] md:max-w-2xl bg-white/70 backdrop-blur-md border border-white/50 p-8 md:p-14 rounded-sm shadow-2xl mt-16 md:mt-0">

                    <header className="mb-6">
                        <span className="text-[#00A896] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block font-light">
                            Refugios de Paz
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 font-serif font-light leading-[1.1]">
                            Santuario de <br />
                            <span className="italic font-medium text-[#D4AF37]">Descanso</span>
                        </h1>
                    </header>

                    <div className="w-16 h-px bg-[#D4AF37] mb-6"></div>

                    <p className="text-gray-600 font-light leading-relaxed text-base md:text-xl mb-8">
                        Habitaciones modernas y confortables diseñadas para garantizar la paz interior,
                        pensadas para viajes en pareja o estadías familiares en el corazón de Doradal.
                    </p>

                    <button className="px-8 py-4 bg-[#D4AF37] text-white text-xs md:text-sm uppercase tracking-[0.2em] font-light hover:bg-[#00A896] transition-colors duration-500 rounded-sm shadow-lg shadow-black/5">
                        Explorar Habitaciones
                    </button>
                </div>
            </div>

        </section>
    );
}