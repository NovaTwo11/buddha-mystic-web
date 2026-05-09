interface DetailContentProps {
    description: string;
    history: string;
    location: string;
    details: string[];
}

export default function DetailContent({ description, history, location, details }: DetailContentProps) {
    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto transition-colors duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Texto Principal */}
                <div className="lg:col-span-7">
                    <h2 className="font-serif font-light text-3xl text-gray-900 dark:text-white mb-8 transition-colors duration-500">
                        La <span className="italic font-medium text-[#D4AF37]">Experiencia</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 font-light text-lg leading-relaxed mb-10 transition-colors duration-500">
                        {description}
                    </p>

                    <h3 className="font-serif font-light text-2xl text-gray-900 dark:text-white mb-6 transition-colors duration-500">
                        Historia y Contexto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-500">
                        {history}
                    </p>
                </div>

                {/* Ficha Técnica (Glassmorphism Inteligente) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 bg-white dark:bg-[#111111] p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/5 transition-all duration-500">

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A896]/50 dark:via-[#D4AF37]/50 to-transparent" />

                        <div className="mb-8">
                            <span className="text-[#00A896] dark:text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2 transition-colors duration-500">Ubicación</span>
                            <p className="text-gray-900 dark:text-white font-medium transition-colors duration-500">{location}</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-[#D4AF37] dark:text-[#00A896] text-xs font-bold uppercase tracking-widest block mb-4 transition-colors duration-500">Lo que incluye</span>
                            <ul className="space-y-4">
                                {details.map((detail, index) => (
                                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300 font-light text-sm transition-colors duration-500">
                                        <svg className="w-5 h-5 mr-3 mt-0.5 text-[#00A896] dark:text-[#D4AF37] flex-shrink-0 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href="https://wa.me/573135431537?text=Hola,%20quisiera%20más%20información%20sobre%20el%20transporte%20y%20las%20experiencias."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-[#D4AF37] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm hover:bg-[#00A896] transition-colors duration-500 shadow-xl shadow-[#D4AF37]/20 flex justify-center items-center text-center"
                        >
                            Reservar Transporte
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}