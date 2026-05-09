export default function OurStory() {
    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-[#0A0A0A] relative transition-colors duration-500 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Imagen Izquierda */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="aspect-[4/5] w-full relative overflow-hidden rounded-sm shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1697730412085-6f10bddf58c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Estética en Buddha Mystic"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-[7000ms] ease-out"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                    </div>
                    {/* Acento decorativo */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37] z-0 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                </div>

                {/* Texto Derecha */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                    <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                        El Origen
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white font-serif font-light mb-8 transition-colors duration-500">
                        Un Sueño <span className="italic font-medium text-[#00A896]">Revelador</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-base lg:text-lg transition-colors duration-500">
                        <p>
                            El Hotel Buddha Mystic nace bajo un concepto estético inspirado en la armonía y la belleza de la cultura oriental. Nuestra identidad, sin embargo, surge de una anécdota muy especial.
                        </p>
                        <p>
                            Su fundador tuvo un sueño en el que dos imponentes estatuas de Buda se le presentaban, indicándole que en su próximo proyecto debía incorporar una figura igual. Sorprendentemente, días después, durante un viaje a la ciudad de Medellín, se encontró frente a frente con las mismas esculturas que había soñado.
                        </p>
                        <p>
                            Con gran asombro, decidió llevarlas consigo. Meses más tarde, surgió la oportunidad de crear este hotel, materializando así aquella visión y dando origen a lo que hoy conocemos como un exclusivo refugio diseñado para el confort y la desconexión total.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}