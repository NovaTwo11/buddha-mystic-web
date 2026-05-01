import Link from 'next/link';

export default function FeatureGrid() {
    // Aquí definimos la información de nuestras tres áreas principales
    const features = [
        {
            id: 1,
            icon: "🛏️",
            title: "HABITACIONES Y SUITES",
            subtitle: "Santuario de Descanso",
            description: "Espacios confortables diseñados para el descanso profundo y la reconexión contigo mismo.",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
            link: "/alojamiento"
        },
        {
            id: 2,
            icon: "🌿",
            title: "RESTAURANTE MÁNDALAS",
            subtitle: "Nutrición Consciente",
            description: "Comida tradicional contemporánea que reúne una mezcla de sabores, desde platos antioqueños hasta preparaciones asiáticas.",
            image: "https://images.unsplash.com/photo-1544025162-8a15fd996530?q=80&w=1000&auto=format&fit=crop",
            link: "/restaurante"
        },
        {
            id: 3,
            icon: "✨",
            title: "EXPERIENCIAS",
            subtitle: "Aventura y Serenidad",
            description: "Desde la tranquilidad de la Reserva Río Claro hasta la aventura del Parque Temático Hacienda Nápoles y los recorridos en Buggies.",
            image: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?q=80&w=1000&auto=format&fit=crop",
            link: "/experiencias"
        }
    ];

    return (
        <section className="py-24 bg-buddha-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Título de la sección */}
                <div className="text-center mb-16">
                    <p className="text-buddha-aquamarine text-sm font-semibold tracking-[0.2em] mb-2 uppercase">
                        Vive la Experiencia
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif text-buddha-black font-light mb-4">
                        Estancia, Sabor y <span className="italic text-buddha-gold">Serenidad</span>
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className="h-[1px] w-12 bg-buddha-gold"></div>
                        <span className="mx-4 text-buddha-gold text-xl">🪷</span>
                        <div className="h-[1px] w-12 bg-buddha-gold"></div>
                    </div>
                </div>

                {/* Tarjetas Dinámicas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative flex flex-col bg-white border border-buddha-aquamarine/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            {/* Imagen de fondo de la tarjeta */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>

                                {/* Icono flotante */}
                                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full shadow-sm text-buddha-aquamarine border border-buddha-aquamarine/30">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Contenido de la tarjeta */}
                            <div className="p-8 flex flex-col flex-grow bg-white relative z-10 -mt-10 rounded-t-3xl">
                                <h4 className="text-xs tracking-widest text-buddha-black mb-1 uppercase font-semibold">
                                    {feature.title}
                                </h4>
                                <h3 className="text-xl font-serif text-buddha-gold mb-4">
                                    {feature.subtitle}
                                </h3>
                                <p className="text-sm text-gray-600 font-light mb-8 flex-grow">
                                    {feature.description}
                                </p>

                                <Link
                                    href={feature.link}
                                    className="inline-flex items-center text-sm tracking-widest text-buddha-black hover:text-buddha-gold transition-colors font-medium"
                                >
                                    EXPLORAR
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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