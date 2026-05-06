import Link from 'next/link';

export default function FeatureGrid() {
    // Definimos la información usando SVGs elegantes en lugar de emojis
    const features = [
        {
            id: 1,
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
                    <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
                    <path d="M3 18h18" />
                </svg>
            ),
            title: "HABITACIONES Y SUITES",
            subtitle: "Santuario de Descanso",
            description: "Espacios confortables diseñados para el descanso profundo y la reconexión contigo mismo.",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
            link: "/alojamiento"
        },
        {
            id: 2,
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                    <path d="M12 3v9" />
                    <path d="M8 7v5" />
                    <path d="M16 7v5" />
                </svg>
            ),
            title: "RESTAURANTE MÁNDALAS",
            subtitle: "Nutrición Consciente",
            description: "Comida tradicional contemporánea que reúne una mezcla de sabores, desde platos antioqueños hasta preparaciones asiáticas.",
            image: "https://images.unsplash.com/photo-1544025162-8a15fd996530?q=80&w=1000&auto=format&fit=crop",
            link: "/restaurante"
        },
        {
            id: 3,
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
                </svg>
            ),
            title: "EXPERIENCIAS",
            subtitle: "Aventura y Serenidad",
            description: "Desde la tranquilidad de la Reserva Río Claro hasta la aventura del Parque Temático Hacienda Nápoles y los recorridos en Buggies.",
            image: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?q=80&w=1000&auto=format&fit=crop",
            link: "/experiencias"
        }
    ];

    return (
        /* Fondo ligeramente gris/crema para que el borde blanco de las tarjetas haga contraste */
        <section className="py-32 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Título de la sección */}
                <div className="text-center mb-24 flex flex-col items-center">
                    <p className="text-[#00A896] text-xs font-bold tracking-[0.4em] mb-4 uppercase">
                        Vive la Experiencia
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-light mb-8">
                        Estancia, Sabor y <span className="italic text-[#D4AF37] font-medium normal-case">Serenidad</span>
                    </h2>

                    {/* Separador elegante con SVG en lugar de Emoji */}
                    <div className="flex justify-center items-center opacity-70">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="mx-6 text-[#D4AF37]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22c-4.4 0-8-3.6-8-8 0-5 8-12 8-12s8 7 8 12c0 4.4-3.6 8-8 8z" />
                                <path d="M12 22c-2.2 0-4-3.6-4-8 0-3 4-7 4-7s4 4 4 7c0 4.4-1.8 8-4 8z" />
                                <path d="M4 14c2 0 4-1.5 5-3" />
                                <path d="M20 14c-2 0-4-1.5-5-3" />
                            </svg>
                        </span>
                        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>
                </div>

                {/* Tarjetas Dinámicas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            /* Contenedor principal de la tarjeta: Padding grueso para simular el marco blanco, y sombra suave abajo */
                            className="group relative bg-white rounded-3xl p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,168,150,0.2)] transition-all duration-500 flex flex-col"
                        >
                            {/* Imagen de fondo de la tarjeta */}
                            <div className="relative h-72 rounded-2xl overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Contenido de la tarjeta (Texto alineado al centro) */}
                            <div className="relative pt-14 pb-8 px-6 flex flex-col flex-grow items-center text-center">

                                {/* Ícono Flotante Sobresaliendo (Con borde blanco grueso para el recorte) */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center border-[8px] border-white shadow-sm text-[#00A896] group-hover:text-[#D4AF37] transition-colors duration-500">
                                    {feature.icon}
                                </div>

                                <h4 className="text-[10px] tracking-[0.2em] text-gray-400 mb-2 uppercase font-bold">
                                    {feature.title}
                                </h4>

                                <h3 className="text-2xl font-serif text-gray-900 mb-4 font-light">
                                    {feature.subtitle}
                                </h3>

                                <p className="text-base text-gray-600 font-light mb-10 flex-grow leading-relaxed">
                                    {feature.description}
                                </p>

                                <Link
                                    href={feature.link}
                                    className="inline-flex items-center text-xs tracking-widest text-[#D4AF37] hover:text-[#00A896] transition-colors font-bold uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#D4AF37]/30 hover:after:bg-[#00A896] after:transition-colors"
                                >
                                    EXPLORAR
                                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}