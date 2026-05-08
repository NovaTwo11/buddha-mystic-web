import Link from 'next/link';

const attractions = [
    {
        title: "Hacienda Nápoles",
        slug: "hacienda-napoles",
        category: "Parque Temático",
        description: "Una experiencia inmersiva llena de vida silvestre, atracciones acuáticas y un legado histórico transformado en un santuario de conservación.",
        image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "La Aldea",
        slug: "la-aldea",
        category: "El Santorini Colombiano",
        description: "Recorre calles empedradas y fachadas blancas que evocan el mediterráneo, enclavadas en la majestuosidad de la geografía antioqueña.",
        image: "https://images.unsplash.com/photo-1516483638261-f40af5edca87?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Reserva Río Claro",
        slug: "rio-claro",
        category: "Naturaleza Virgen",
        description: "Un cañón de mármol atravesado por aguas cristalinas. El refugio perfecto para admirar la flora y fauna endémica en absoluta serenidad.",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Cascada San Juan",
        slug: "cascada-san-juan",
        category: "Balneario Natural",
        description: "Déjate envolver por el sonido del agua cayendo y sumérgete en pozos naturales de agua fresca, rodeado del verde vibrante del bosque.",
        image: "https://images.unsplash.com/photo-1543086927-536c4b9015c9?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Río Magdalena",
        slug: "rio-magdalena",
        category: "Atardeceres Mágicos",
        description: "Navega por la arteria fluvial más importante de Colombia y sé testigo de cómo el sol pinta el cielo de tonos dorados al finalizar el día.",
        image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Río La Miel",
        slug: "rio-la-miel",
        category: "Expedición Inolvidable",
        description: "Una travesía por corrientes serenas que te llevarán a descubrir paisajes prístinos, ideales para la contemplación y el nado.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    },
];

export default function TouristAttractions() {
    return (
        <section className="py-20 px-3 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
            {/* Cabecera de Sección */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="font-serif font-light text-3xl md:text-4xl text-gray-900 mb-4">
                    Nuestros <span className="italic font-medium text-[#D4AF37]">Alrededores</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base px-4">
                    Explora los tesoros que la naturaleza y la cultura han dejado cerca de nuestro refugio en Doradal.
                </p>
            </div>

            {/* Grid: grid-cols-2 para móviles (horizontalmente de 2 en 2) */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                {attractions.map((item, index) => (
                    <div
                        key={index}
                        className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white/70 backdrop-blur-md border border-white/50 flex flex-col"
                    >
                        {/* Contenedor de Imagen */}
                        <div className="relative h-40 sm:h-64 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                            />
                            {/* Etiqueta de Categoría - Oculta en móviles muy pequeños para evitar ruido visual, o ajustada */}
                            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-white/50">
                                <span className="text-[10px] md:text-xs font-medium tracking-wide text-[#00A896] uppercase">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        {/* Contenido de la Tarjeta */}
                        <div className="p-4 md:p-8 flex flex-col flex-grow">
                            <h3 className="font-serif font-light text-lg md:text-2xl text-gray-900 mb-2 md:mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* Descripción: Se limita la altura en móvil para mantener la rejilla uniforme */}
                            <p className="text-gray-600 font-light leading-relaxed mb-4 md:mb-6 text-xs md:text-base line-clamp-3 md:line-clamp-none">
                                {item.description}
                            </p>

                            {/* Enlace dinámico a la página del atractivo */}
                            <div className="mt-auto">
                                <Link
                                    href={`/experiencias/${item.slug}`}
                                    className="inline-flex items-center text-[10px] md:text-sm text-[#00A896] uppercase tracking-widest font-semibold group/btn hover:text-[#D4AF37] transition-colors duration-300"
                                >
                                    Descubrir
                                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}