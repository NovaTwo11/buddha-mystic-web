import Link from 'next/link';

export default function HomeHero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

            {/* Fondo de Imagen Completo */}
            <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2500&auto=format&fit=crop"
                alt="Hotel Buddha Mystic - Piscina y Áreas de descanso"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Capas de Oscurecimiento para Legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-buddha-gold/10 z-10 pointer-events-none mix-blend-overlay"></div>

            {/* Contenido Centralizado Superpuesto (Con pt-32 para evitar la Navbar) */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col items-center text-center pt-32 pb-24">

                {/* Subtítulo corregido: Color vibrante y sin sombras que lo oscurezcan */}
                <p className="text-[#7FFFD4] text-sm md:text-base font-bold tracking-[0.4em] mb-6 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Una experiencia que trasciende
                </p>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight mb-8 drop-shadow-2xl">
                    Encuentra <br />
                    <span className="text-buddha-gold italic font-medium">tu paz</span> interior.
                </h1>

                <p className="text-white mb-14 max-w-2xl text-xl md:text-2xl font-light leading-relaxed drop-shadow-lg">
                    Un refugio donde el tiempo se detiene. Descansa, respira profundamente y reconéctate contigo mismo en la serenidad de nuestras instalaciones.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <a
                        href="https://engine.lobbypms.com/buddha-mystic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-buddha-gold text-buddha-black px-12 py-5 tracking-[0.2em] text-sm font-bold uppercase shadow-xl shadow-buddha-gold/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
                    >
                        RESERVAR AHORA
                    </a>

                    <Link href="/nosotros" className="group flex items-center text-white tracking-widest text-base font-medium hover:text-buddha-gold transition-colors duration-300 drop-shadow-xl">
                        <span className="border-b-2 border-white group-hover:border-buddha-gold pb-1 transition-colors duration-300">DESCUBRIR MÁS</span>
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Decoración Orgánica para Continuidad */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
                    <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
                </svg>
            </div>

        </section>
    );
}