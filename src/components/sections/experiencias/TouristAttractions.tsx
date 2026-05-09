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
        title: "Santorini Colombiano",
        slug: "santorini",
        category: "Arquitectura Mágica",
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
        <section className="py-24 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
            {/* Cabecera de Sección Estilizada */}
            <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                <span className="text-[#00A896] tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">
                    Nuestra Región
                </span>
                <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
                    Tesoros que <span className="italic font-medium text-[#D4AF37]">aguardan</span> tu llegada
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-base md:text-lg transition-colors duration-500">
                    Explora los rincones donde la imponente naturaleza y la cultura antioqueña se entrelazan.
                    Cada destino es una invitación a vivir aventuras inolvidables y descubrir la belleza de nuestro entorno.
                </p>
            </div>

            {/* Grid Equitativo pero Espectacular */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                {attractions.map((item, index) => (
                    <div key={index} className="group flex flex-col">

                        {/* Contenedor de Imagen */}
                        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden z-0 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[10000ms] ease-out"
                            />

                            {/* Velo adaptativo */}
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent dark:group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />

                            {/* Etiqueta de Categoría Flotante */}
                            <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-sm border border-transparent dark:border-white/10 px-3 py-1.5 rounded-sm shadow-sm transition-colors duration-500">
                                <span className="text-[9px] sm:text-xs font-semibold tracking-widest text-[#00A896] dark:text-[#D4AF37] uppercase transition-colors duration-500">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        {/* El Panel de Cristal Superpuesto */}
                        <div className="relative z-10 bg-white/85 dark:bg-[#111111]/85 backdrop-blur-xl p-5 md:p-8 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10 -mt-12 mx-3 sm:-mt-16 sm:mx-6 flex-grow flex flex-col group-hover:-translate-y-3 transition-all duration-500">

                            <h3 className="font-serif font-light text-lg sm:text-2xl text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors duration-500">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 font-light text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-6 flex-grow transition-colors duration-500">
                                {item.description}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    href={`/experiencias/${item.slug}`}
                                    className="inline-flex items-center text-[10px] sm:text-xs text-[#00A896] dark:text-[#D4AF37] uppercase tracking-[0.2em] font-semibold group-hover:text-[#D4AF37] dark:group-hover:text-[#00A896] transition-colors duration-500"
                                >
                                    Descubrir
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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