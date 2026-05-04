import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            {/* Alineación idéntica a la del nuevo Hero Section para mantener la cuadrícula invisible */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                <div className="flex justify-between items-center h-24">

                    {/* Logo del Hotel */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <span className="text-3xl font-serif font-light tracking-widest text-[#D4AF37] transition-colors duration-500">BUDDHA</span>
                            <span className="text-[10px] font-sans tracking-[0.4em] text-gray-900 mt-1">MYSTIC</span>
                        </Link>
                    </div>

                    {/* Enlaces de Navegación (Desktop) */}
                    <div className="hidden md:flex space-x-10 items-center text-xs tracking-[0.15em] font-medium text-gray-800">
                        <Link href="/" className="relative group py-2">
                            <span className="group-hover:text-[#00A896] transition-colors duration-300">INICIO</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00A896] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/nosotros" className="relative group py-2">
                            <span className="group-hover:text-[#00A896] transition-colors duration-300">ESENCIA</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00A896] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/alojamiento" className="relative group py-2">
                            <span className="group-hover:text-[#00A896] transition-colors duration-300">HABITACIONES</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00A896] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/restaurante" className="relative group py-2">
                            <span className="group-hover:text-[#00A896] transition-colors duration-300">RESTAURANTE</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00A896] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/experiencias" className="relative group py-2">
                            <span className="group-hover:text-[#00A896] transition-colors duration-300">EXPERIENCIAS</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00A896] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Botón de Reserva (Hereda el estilo del botón principal) */}
                    <div className="hidden md:flex">
                        <a
                            href="https://engine.lobbypms.com/buddha-mystic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#D4AF37] text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#00A896] shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#00A896]/20 transition-all duration-500"
                        >
                            RESERVAR
                        </a>
                    </div>

                    {/* Botón Menú Móvil (Hamburguesa) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-900 hover:text-[#00A896] focus:outline-none transition-colors duration-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}