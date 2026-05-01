import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-buddha-aquamarine/30 text-buddha-black pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Columna 1: Marca */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-serif text-buddha-gold mb-4">BUDDHA MYSTIC</h3>
                        <p className="text-sm text-gray-600 mb-6 font-light">
                            Una experiencia que trasciende. El lugar perfecto para tu descanso físico, mental y espiritual.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h4 className="font-semibold tracking-wider mb-6 text-sm uppercase">Navegación</h4>
                        <ul className="space-y-3 text-sm text-gray-600 font-light">
                            <li><Link href="/nosotros" className="hover:text-buddha-gold transition-colors">Nuestra Historia</Link></li>
                            <li><Link href="/alojamiento" className="hover:text-buddha-gold transition-colors">Alojamiento y Tarifas</Link></li>
                            <li><Link href="/restaurante" className="hover:text-buddha-gold transition-colors">Restaurante Mándalas</Link></li>
                            <li><Link href="/experiencias" className="hover:text-buddha-gold transition-colors">Experiencias y Entorno</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h4 className="font-semibold tracking-wider mb-6 text-sm uppercase">Contacto</h4>
                        <ul className="space-y-3 text-sm text-gray-600 font-light">
                            <li>Doradal, Puerto Triunfo (Antioquia)</li>
                            <li>Autopista Medellín – Bogotá, Calle 20 # 20-58</li>
                            <li>WhatsApp: +57 313 543 1537</li>
                            <li>buddhamystichotel@gmail.com</li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes y Legal */}
                    <div>
                        <h4 className="font-semibold tracking-wider mb-6 text-sm uppercase">Conéctate</h4>
                        <div className="flex space-x-4 mb-6">
                            {/* Instagram */}
                            <a href="https://instagram.com/buddhamystichotel" target="_blank" rel="noopener noreferrer" className="text-buddha-black hover:text-buddha-gold transition-colors">
                                <span className="text-sm underline">Instagram</span>
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com/Hotelbuddhamystic" target="_blank" rel="noopener noreferrer" className="text-buddha-black hover:text-buddha-gold transition-colors">
                                <span className="text-sm underline">Facebook</span>
                            </a>
                            {/* TikTok */}
                            <a href="https://tiktok.com/@buddhamystic" target="_blank" rel="noopener noreferrer" className="text-buddha-black hover:text-buddha-gold transition-colors">
                                <span className="text-sm underline">TikTok</span>
                            </a>
                        </div>
                        <Link href="/terminos" className="text-xs text-gray-500 hover:text-buddha-gold transition-colors">
                            Políticas y Condiciones de Reserva
                        </Link>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400 font-light">
                    <p>&copy; {new Date().getFullYear()} Hotel Buddha Mystic. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}