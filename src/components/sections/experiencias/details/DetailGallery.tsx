interface DetailGalleryProps {
    images: string[];
}

export default function DetailGallery({ images }: DetailGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto transition-colors duration-500">
            {/* Título de la sección */}
            <div className="mb-12 text-center md:text-left">
                <h2 className="font-serif font-light text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                    Memoria <span className="italic font-medium text-[#00A896] dark:text-[#D4AF37]">Visual</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-light max-w-xl transition-colors duration-500">
                    Un destello de la belleza y el encanto que te esperan en esta aventura.
                    Déjate inspirar por el entorno antes de vivirlo.
                </p>
            </div>

            {/* Mosaico Artístico */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px] lg:h-[700px]">

                {/* Imagen 1 (Principal) */}
                {images[0] && (
                    <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 h-[350px] md:h-full shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-xl transition-shadow duration-500">
                        <img
                            src={images[0]}
                            alt="Vista principal del atractivo"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[10s] ease-out"
                        />
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent dark:group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                )}

                {/* Imagen 2 (Secundaria superior) */}
                {images[1] && (
                    <div className="relative group overflow-hidden rounded-2xl md:col-span-1 md:row-span-1 h-[250px] md:h-full shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-xl transition-shadow duration-500">
                        <img
                            src={images[1]}
                            alt="Detalle del atractivo 1"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[10s] ease-out"
                        />
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent dark:group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                )}

                {/* Imagen 3 (Secundaria inferior) */}
                {images[2] && (
                    <div className="relative group overflow-hidden rounded-2xl md:col-span-1 md:row-span-1 h-[250px] md:h-full shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-xl transition-shadow duration-500">
                        <img
                            src={images[2]}
                            alt="Detalle del atractivo 2"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[10s] ease-out"
                        />
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-transparent dark:group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                )}
            </div>

            {/* Pie de Galería decorativo */}
            <div className="mt-12 flex justify-center">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            </div>
        </section>
    );
}