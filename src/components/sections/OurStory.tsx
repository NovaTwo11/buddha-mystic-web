export default function OurStory() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16">

                {/* Imagen Izquierda */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[4/5] w-full relative overflow-hidden rounded-sm">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1697730412085-6f10bddf58c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Budas en meditación"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    {/* Acento decorativo */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#D4AF37] z-0" />
                </div>

                {/* Texto Derecha */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                    <h2 className="text-3xl md:text-4xl text-gray-900 font-serif font-light mb-8">
                        Un Sueño <span className="italic font-medium text-[#00A896]">Revelador</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                        <p>
                            Hotel Buddha Mystic nace como un concepto inspirado en la paz, la armonía y el equilibrio de la filosofía budista. Nuestra identidad surge de una historia muy especial.
                        </p>
                        <p>
                            Su fundador tuvo un sueño en el que dos Budas se presentaron, indicándole que en su próximo proyecto debía encontrar una figura igual. Sorprendentemente, días después, durante un viaje a Medellín, se encontró con los mismos budas que había soñado.
                        </p>
                        <p>
                            Con gran asombro, decidió llevarlos consigo. Al paso de tres meses, surgió la oportunidad de crear un hotel, materializando así esta visión y dando origen a lo que hoy conocemos como un santuario de tranquilidad y propósito.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}