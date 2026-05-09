export default function OurValues() {
    const values = [
        {
            title: "Atmósfera Cautivadora",
            desc: "Una estética inspirada en la serenidad oriental, diseñada cuidadosamente para envolverte en un ambiente de absoluto confort.",
            icon: (
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Servicio de Excelencia",
            desc: "Nuestra vocación es la atención al detalle. Trabajamos incansablemente para que cada instante de tu estadía sea impecable.",
            icon: (
                <svg className="w-8 h-8 text-[#00A896]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            title: "Descanso Pleno",
            desc: "Instalaciones creadas para garantizar un sueño reparador y una desconexión total, ideales para escapadas en pareja o familia.",
            icon: (
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5b0-7.143-4.726-10.5-12-10.5M20.25 10.5c0 7.142-4.726 10.5-12 10.5M20.25 10.5H8.25m-5.25 0h.008v.008H3V10.5z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-500">
            {/* Imagen de fondo budista */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539680964273-ae13f8a44e22?q=80&w=1074&auto=format&fit=crop')" }}
            />

            {/* Overlay Inteligente: Blanco en claro, negro en oscuro para asegurar legibilidad */}
            <div className="absolute inset-0 z-0 bg-white/40 dark:bg-[#0A0A0A]/80 backdrop-blur-[3px] transition-colors duration-500" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

                {/* Título opcional para dar contexto a los valores */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-serif font-light transition-colors duration-500">
                        Nuestros <span className="italic font-medium text-[#D4AF37]">Pilares</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((val, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center group bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md border border-white/60 dark:border-white/10 p-10 rounded-sm shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:bg-white dark:hover:bg-[#1A1A1A] hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:border-[#00A896] dark:group-hover:border-[#D4AF37] group-hover:shadow-sm transition-all duration-500">
                                {val.icon}
                            </div>
                            <h3 className="text-xl text-gray-900 dark:text-white font-serif mb-4 transition-colors duration-500">{val.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-500">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}