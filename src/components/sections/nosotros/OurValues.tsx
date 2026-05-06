export default function OurValues() {
    const values = [
        {
            title: "Paz y Armonía",
            desc: "Un ambiente que invita a respirar profundamente y encontrar el equilibrio interior.",
            icon: (
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Servicio de Excelencia",
            desc: "Trabajamos cada día para convertir cada estadía en una experiencia memorable.",
            icon: (
                <svg className="w-8 h-8 text-[#00A896]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            title: "Reconexión",
            desc: "Espacios diseñados tanto para el romance de pareja como para el descanso familiar.",
            icon: (
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-24 border-y border-gray-100 overflow-hidden">
            {/* Imagen de fondo budista (Ajustada horizontalmente y abarcando todo el contenedor) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539680964273-ae13f8a44e22?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            />

            {/* Overlay difuminado blanco para mantener la luminosidad, etereidad y legibilidad */}
            <div className="absolute inset-0 z-0 bg-white/25 backdrop-blur-[3px]" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center group bg-white/50 backdrop-blur-md border border-white/60 p-10 rounded-sm shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:bg-white/70 hover:-translate-y-1 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-6 group-hover:border-[#00A896] group-hover:shadow-sm transition-all duration-500">
                                {val.icon}
                            </div>
                            <h3 className="text-xl text-gray-900 font-serif mb-3">{val.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}