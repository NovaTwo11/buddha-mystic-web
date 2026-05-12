export default function TermsContent() {
    return (
        <section className="pt-40 pb-32 px-4 sm:px-8 lg:px-16 transition-colors duration-500">
            <div className="max-w-[1000px] mx-auto">

                {/* Cabecera de la Sección */}
                <div className="text-center mb-20">
                    <span className="text-[#00A896] dark:text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block mb-6">
                        Transparencia y Confianza
                    </span>
                    <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8 leading-tight">
                        Términos y <span className="italic font-medium text-[#D4AF37]">Condiciones</span>
                    </h1>
                    <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-10"></div>
                </div>

                {/* Bloque de Contrato Estilizado */}
                <div className="bg-white dark:bg-[#111111] p-8 md:p-14 rounded-sm shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/5 transition-all duration-500">

                    {/* Sección 1: Tarifas */}
                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-gray-900 dark:text-white mb-6 border-b border-gray-50 dark:border-white/5 pb-4">
                            1. Tarifas y Menores
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>IVA:</strong> La tarifa de hospedaje NO incluye el Impuesto al Valor Agregado (IVA).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>Menores:</strong> Los niños mayores de 5 años pagan el mismo valor de hospedaje sin importar su edad.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sección 2: Reprogramación */}
                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-gray-900 dark:text-white mb-6 border-b border-gray-50 dark:border-white/5 pb-4">
                            2. Políticas de Reprogramación
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>Condiciones:</strong> Al reprogramar, el huésped debe conservar el mismo número de noches o elegir una cantidad superior.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>Plazo:</strong> Una vez aprobada la reprogramación, el huésped cuenta con un plazo máximo de treinta (30) días hábiles para hacerla efectiva.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sección 3: Transferencias */}
                    <div className="mb-12">
                        <h2 className="font-serif text-2xl text-gray-900 dark:text-white mb-6 border-b border-gray-50 dark:border-white/5 pb-4">
                            3. Cesión de Reservas
                        </h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed">
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>Transferibilidad:</strong> La reserva puede ser transferible a terceros siempre que se conserve su valor original.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#D4AF37] mr-4 mt-1">✦</span>
                                <span><strong>Titularidad:</strong> Toda solicitud de reprogramación o cesión será aceptada únicamente si es realizada por el titular original de la reserva.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Nota Final de Contacto */}
                    <div className="mt-16 pt-10 border-t border-gray-100 dark:border-white/10 text-center">
                        <p className="text-gray-500 dark:text-gray-400 italic text-sm mb-6">
                            Para consultas oficiales, nuestro equipo con vocación de servicio está a tu disposición:
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                            <a href="https://wa.me/573135431537" className="text-[#00A896] dark:text-[#D4AF37] font-medium text-sm hover:underline uppercase tracking-widest transition-all">
                                WhatsApp: 313 543 1537
                            </a>
                            <a href="mailto:buddhamystichotel@gmail.com" className="text-[#00A896] dark:text-[#D4AF37] font-medium text-sm hover:underline uppercase tracking-widest transition-all">
                                buddhamystichotel@gmail.com
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}