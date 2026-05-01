import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-buddha-aquamarine/30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo del Hotel */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <span className="text-3xl font-serif font-light tracking-widest text-buddha-gold group-hover:text-buddha-black transition-colors duration-500">BUDDHA</span>
                            <span className="text-xs font-sans tracking-[0.4em] text-buddha-black mt-1">MYSTIC</span>
                        </Link>
                    </div>

                    {/* Enlaces de Navegación (Desktop) */}
                    <div className="hidden md:flex space-x-10 items-center text-xs tracking-[0.15em] font-medium text-buddha-black">
                        <Link href="/" className="hover:text-buddha-gold transition-colors duration-300">INICIO</Link>
                        <Link href="/nosotros" className="hover:text-buddha-gold transition-colors duration-300">ESENCIA</Link>
                        <Link href="/alojamiento" className="hover:text-buddha-gold transition-colors duration-300">HABITACIONES</Link>
                        <Link href="/restaurante" className="hover:text-buddha-gold transition-colors duration-300">RESTAURANTE</Link>
                        <Link href="/experiencias" className="hover:text-buddha-gold transition-colors duration-300">EXPERIENCIAS</Link>
                    </div>

                    {/* Botón de Reserva */}
                    <div className="hidden md:flex">
                        <a
                            href="https://engine.lobbypms.com/buddha-mystic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-buddha-gold text-buddha-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-buddha-black hover:shadow-lg hover:shadow-buddha-gold/30 transition-all duration-500"
                        >
                            RESERVAR
                        </a>
                    </div>

                    {/* Botón Menú Móvil (Hamburguesa) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-buddha-black hover:text-buddha-gold focus:outline-none transition-colors duration-300">
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