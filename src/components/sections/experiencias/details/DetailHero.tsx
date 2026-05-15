import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

interface DetailHeroProps {
    title: string;
    category: string;
    tagline: string;
    image: string;
}

export default function DetailHero({ title, category, tagline, image }: DetailHeroProps) {
    const t = useTranslations('DetailHero');
    const titleParts = title.split(' ');
    const firstWord = titleParts[0];
    const restOfTitle = titleParts.slice(1).join(' ');

    return (
        <section className="relative h-[85vh] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500 pt-24 md:pt-32">
            <MysticImage
                src={image}
                alt={t('heroOf', { title })}
                width={1920}
                height={1080}
                priority={true}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] scale-105 z-0"
            />

            {/* Degradado responsivo y reforzado: Efecto de luz sólido en modo claro para proteger la legibilidad */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-r from-white/85 via-white/30 to-white/20 md:from-white/70 md:via-white/10 md:to-transparent dark:from-black/95 dark:via-black/80 dark:to-black/20 md:dark:from-black/80 md:dark:via-black/40 md:dark:to-transparent transition-all duration-500" />

            <div className="relative z-20 max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-16 pb-12 sm:pb-24 md:pb-32">

                {/* Contenedor con alineación centrada en móviles (items-center text-center) y a la izquierda en PC */}
                <div className="max-w-2xl animate-fade-in-up transition-colors duration-500 flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">

                    <div className="mb-4 sm:mb-6">
                        <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/70 dark:bg-black/70 md:bg-white/40 md:dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 text-[#00A896] dark:text-[#4DD0C1] tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs font-medium shadow-sm transition-colors duration-500 uppercase">
                            {category}
                        </span>
                    </div>

                    <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] break-words drop-shadow-sm md:drop-shadow-none transition-colors duration-500">
                        {firstWord} <br />
                        <span className="italic font-medium text-[#D4AF37]">{restOfTitle}</span>
                    </h1>

                    {/* Descripción centrada: en móvil usa borde superior, en PC vuelve al borde lateral */}
                    <p className="text-gray-900 dark:text-white font-light text-sm sm:text-base md:text-lg leading-relaxed border-t-2 md:border-t-0 md:border-l-2 border-[#D4AF37] pt-4 md:pt-0 pl-0 md:pl-6 max-w-[95%] sm:max-w-full drop-shadow-sm md:drop-shadow-none transition-colors duration-500">
                        {tagline}
                    </p>
                </div>
            </div>
        </section>
    );
}