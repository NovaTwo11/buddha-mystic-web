interface DetailContentProps {
    description: string;
    history: string;
    location: string;
    details: string[];
}

export default function DetailContent({ description, history, location, details }: DetailContentProps) {
    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Texto Principal */}
                <div className="lg:col-span-7">
                    <h2 className="font-serif font-light text-3xl text-gray-900 mb-8">
                        La <span className="italic font-medium text-[#D4AF37]">Experiencia</span>
                    </h2>
                    <p className="text-gray-700 font-light text-lg leading-relaxed mb-10">
                        {description}
                    </p>

                    <h3 className="font-serif font-light text-2xl text-gray-900 mb-6">
                        Historia y Contexto
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                        {history}
                    </p>
                </div>

                {/* Ficha Técnica (Glassmorphism) */}
                <div className="lg:col-span-5">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
                        <div className="mb-8">
                            <span className="text-[#00A896] text-xs font-bold uppercase tracking-widest block mb-2">Ubicación</span>
                            <p className="text-gray-900 font-medium">{location}</p>
                        </div>

                        <div className="mb-8">
                            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-4">Lo que incluye</span>
                            <ul className="space-y-3">
                                {details.map((detail, index) => (
                                    <li key={index} className="flex items-center text-gray-600 font-light text-sm">
                                        <svg className="w-4 h-4 mr-3 text-[#00A896]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-4 bg-[#D4AF37] text-white uppercase tracking-[0.2em] text-xs font-bold rounded-lg hover:bg-[#00A896] transition-colors duration-500 shadow-lg shadow-[#D4AF37]/20">
                            Reservar Transporte desde el Hotel
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}