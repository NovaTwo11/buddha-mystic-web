import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                {/* Agregamos text-center general para móviles y md:text-left para escritorio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-center md:text-left">

                    {/* Columna 1: Marca */}
                    <div className="col-span-1 md:col-span-1 lg:pr-8 flex flex-col items-center md:items-start">
                        <Link href="/" className="inline-block mb-6 group">
                            <h3 className="text-2xl font-serif text-[#D4AF37] tracking-widest group-hover:text-[#00A896] transition-colors duration-500">
                                BUDDHA MYSTIC
                            </h3>
                        </Link>
                        <p className="text-gray-500 font-light leading-relaxed mb-6">
                            Una experiencia que trasciende. El lugar perfecto para tu descanso físico, mental y espiritual.
                        </p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#00A896]/50">
                            <path d="M12 22c-4.4 0-8-3.6-8-8 0-5 8-12 8-12s8 7 8 12c0 4.4-3.6 8-8 8z" />
                            <path d="M12 22c-2.2 0-4-3.6-4-8 0-3 4-7 4-7s4 4 4 7c0 4.4-1.8 8-4 8z" />
                            <path d="M4 14c2 0 4-1.5 5-3" />
                            <path d="M20 14c-2 0-4-1.5-5-3" />
                        </svg>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-gray-900 font-bold tracking-[0.2em] mb-8 text-xs uppercase">
                            Navegación
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-light flex flex-col items-center md:items-start">
                            <li>
                                <Link href="/nosotros" className="hover:text-[#00A896] transition-colors duration-300 inline-flex items-center group">
                                    <span className="w-0 h-[1px] bg-[#00A896] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 hidden md:inline-block"></span>
                                    Nuestra Historia
                                </Link>
                            </li>
                            <li>
                                <Link href="/alojamiento" className="hover:text-[#00A896] transition-colors duration-300 inline-flex items-center group">
                                    <span className="w-0 h-[1px] bg-[#00A896] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 hidden md:inline-block"></span>
                                    Alojamiento y Tarifas
                                </Link>
                            </li>
                            <li>
                                <Link href="/restaurante" className="hover:text-[#00A896] transition-colors duration-300 inline-flex items-center group">
                                    <span className="w-0 h-[1px] bg-[#00A896] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 hidden md:inline-block"></span>
                                    Restaurante Mándalas
                                </Link>
                            </li>
                            <li>
                                <Link href="/experiencias" className="hover:text-[#00A896] transition-colors duration-300 inline-flex items-center group">
                                    <span className="w-0 h-[1px] bg-[#00A896] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 hidden md:inline-block"></span>
                                    Experiencias y Entorno
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-gray-900 font-bold tracking-[0.2em] mb-8 text-xs uppercase">
                            Contacto
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-light flex flex-col items-center md:items-start">
                            <li>Doradal, Puerto Triunfo (Antioquia)</li>
                            <li>Autopista Medellín – Bogotá, Calle 20 # 20-58</li>
                            <li>
                                <a href="https://wa.me/573135431537" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    WhatsApp: +57 313 543 1537
                                </a>
                            </li>
                            <li>
                                <a href="mailto:buddhamystichotel@gmail.com" className="hover:text-[#D4AF37] transition-colors duration-300">
                                    buddhamystichotel@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes y Legal */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-gray-900 font-bold tracking-[0.2em] mb-8 text-xs uppercase">
                            Conéctate
                        </h4>

                        {/* Redes Sociales centradas en móvil */}
                        <div className="flex justify-center md:justify-start space-x-5 mb-8">
                            <a href="https://instagram.com/buddhamystichotel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A896] transition-colors duration-300" aria-label="Instagram">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://facebook.com/Hotelbuddhamystic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A896] transition-colors duration-300" aria-label="Facebook">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://tiktok.com/@buddhamystic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A896] transition-colors duration-300" aria-label="TikTok">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                </svg>
                            </a>
                        </div>

                        <Link href="/terminos" className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 underline underline-offset-4 decoration-gray-200 hover:decoration-[#D4AF37]">
                            Políticas y Condiciones
                        </Link>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-gray-400 font-light">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Hotel Buddha Mystic. Todos los derechos reservados.</p>
                    <p>Diseñado para inspirar tranquilidad.</p>
                </div>
            </div>
        </footer>
    );
}