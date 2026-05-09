interface DetailHeroProps {
    title: string;
    category: string;
    tagline: string;
    image: string;
}

export default function DetailHero({ title, category, tagline, image }: DetailHeroProps) {
    return (
        <section className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">

            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-105"
                style={{ backgroundImage: `url('${image}')` }}
            />

            <div className="absolute inset-0 z-10 bg-black/30 md:bg-black/20 dark:bg-black/50 transition-colors duration-500" />

            <div className="relative z-20 max-w-[1600px] w-full px-4 sm:px-8 lg:px-16 pt-20">

                <div className="bg-white/75 dark:bg-[#111111]/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-white/30 dark:border-white/5 max-w-2xl animate-fade-in-up transition-colors duration-500">

                    <span className="text-[#00A896] dark:text-[#D4AF37] tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4 block transition-colors duration-500">
                        {category}
                    </span>

                    <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-950 dark:text-white mb-6 leading-tight transition-colors duration-500">
                        {title.split(' ')[0]} <span className="italic font-medium text-[#D4AF37]">{title.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    <p className="text-gray-800 dark:text-gray-300 font-light text-base md:text-lg italic leading-relaxed border-l-2 border-[#D4AF37]/30 pl-6 transition-colors duration-500">
                        {tagline}
                    </p>

                    <div className="mt-8 w-12 h-1 bg-[#00A896] dark:bg-[#D4AF37] transition-colors duration-500"></div>
                </div>
            </div>

            {/* Gradiente inferior para conectar con el resto de la página */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0A0A0A] to-transparent z-10 transition-colors duration-500" />
        </section>
    );
}