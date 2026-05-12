import MysticImage from "@/components/ui/MysticImage";

interface DetailHeroProps {
    title: string;
    category: string;
    tagline: string;
    image: string;
}

export default function DetailHero({ title, category, tagline, image }: DetailHeroProps) {
    // Lógica segura para separar la primera palabra del resto del título
    const titleParts = title.split(' ');
    const firstWord = titleParts[0];
    const restOfTitle = titleParts.slice(1).join(' ');

    return (
        // Añadimos padding-top (pt-24 md:pt-32) para proteger el área de la Navbar
        // y ajustamos alturas mínimas responsivas para una inmersión perfecta
        <section className="relative h-[85vh] min-h-[600px] lg:min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-gray-900 transition-colors duration-500 pt-24 md:pt-32">

            {/* Imagen de Fondo Optimizada */}
            <MysticImage
                src={image}
                alt={`Hero de ${title}`}
                width={1920}
                height={1080}
                priority={true}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] scale-105 z-0"
            />

            {/* Velos Protectores: Oscurecimiento sutil general y un degradado desde abajo para proteger el texto */}
            <div className="absolute inset-0 z-10 bg-black/20 dark:bg-black/50 transition-colors duration-500" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />

            <div className="relative z-20 max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-16 pb-16 sm:pb-24 md:pb-32">

                {/* Panel Glassmorphism Asimétrico con paddings responsivos (p-6 a p-12) */}
                <div className="max-w-2xl bg-white/10 dark:bg-[#111111]/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 sm:p-8 md:p-12 rounded-sm shadow-2xl animate-fade-in-up transition-colors duration-500">

                    {/* Categoría con acento visual */}
                    <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-6 sm:w-8 h-[1px] bg-[#D4AF37] mr-3 sm:mr-4"></div>
                        <span className="text-[#00A896] dark:text-[#D4AF37] tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs font-bold uppercase drop-shadow-md transition-colors duration-500">
                            {category}
                        </span>
                    </div>

                    {/* Título Editorial: Escala desde text-4xl (móvil) hasta text-7xl (PC) */}
                    <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-lg transition-colors duration-500">
                        {firstWord} <br className="hidden sm:block" />
                        <span className="italic font-medium text-[#D4AF37]">{restOfTitle}</span>
                    </h1>

                    {/* Tagline con línea divisoria sutil */}
                    <p className="text-gray-100 dark:text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed border-l border-[#D4AF37]/50 pl-4 sm:pl-6 drop-shadow-md transition-colors duration-500">
                        {tagline}
                    </p>

                </div>
            </div>

            {/* Gradiente inferior para una transición perfecta hacia la página */}
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none transition-colors duration-500" />
        </section>
    );
}