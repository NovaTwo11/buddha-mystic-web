import { Room } from '@/data/rooms';
import Link from 'next/link';

export default function RoomDetailContent({ room }: { room: Room }) {
    // Generación dinámica del mensaje para WhatsApp incluyendo el nombre exacto de la habitación
    const whatsappNumber = "573135431537";
    const message = `Hola. Me gustaría solicitar una reserva para la ${room.name} y conocer su disponibilidad.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Columna Izquierda: Descripción y Amenidades */}
            <div className="lg:col-span-7 flex flex-col pt-4">

                {/* Elemento decorativo editorial superior */}
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-px w-12 bg-[#D4AF37]" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
                        Esencia
                    </span>
                </div>

                <h2 className="text-4xl lg:text-5xl text-gray-900 font-serif font-light mb-8 leading-tight">
                    El Alma del <span className="italic">Espacio</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed font-light mb-14 md:text-justify">
                    {room.description}
                </p>

                {/* Amenidades rediseñadas con un formato más premium */}
                <div className="pt-10 border-t border-gray-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                        Amenidades Incluidas
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                        {room.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-4 group">
                                {/* Viñeta envolvente tipo anillo de lujo */}
                                <div className="w-8 h-8 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 group-hover:border-[#00A896] group-hover:bg-[#00A896]/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:bg-[#00A896] group-hover:scale-150" />
                                </div>
                                <span className="text-sm text-gray-600 font-light group-hover:text-gray-900 transition-colors duration-300">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Columna Derecha: Tarjeta de Inversión (Ahora es Sticky) */}
            <div className="lg:col-span-5 relative">
                {/* Sticky permite que la tarjeta acompañe al usuario si la descripción es muy larga */}
                <div className="sticky top-32 bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50 rounded-sm group">

                    {/* Acento superior sutil (Línea degradada dorada) */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

                    <div className="text-center mb-12">
                        <h3 className="text-2xl text-gray-900 font-serif font-light italic mb-3">
                            Inversión de Descanso
                        </h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                            Capacidad: {room.capacity}
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        {/* Temporada Baja - Diseño apilado para mayor impacto visual */}
                        <div className="flex flex-col border-b border-gray-100 pb-8">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                                Temporada Baja
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl text-gray-900 font-light font-serif">{room.lowPrice}</span>
                                <span className="text-xs text-gray-400 font-light uppercase tracking-wider">/ noche</span>
                            </div>
                        </div>

                        {/* Temporada Alta - Destacada sutilmente en dorado */}
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                                Temporada Alta
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl text-[#D4AF37] font-light font-serif">{room.highPrice}</span>
                                <span className="text-xs text-gray-400 font-light uppercase tracking-wider">/ noche</span>
                            </div>
                        </div>
                    </div>

                    {/* Botón integrado como un Link funcional real hacia WhatsApp */}
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-5 px-4 text-xs font-bold tracking-widest uppercase transition-all duration-500 inline-flex justify-center items-center bg-[#D4AF37] text-white shadow-xl shadow-[#D4AF37]/20 hover:bg-[#00A896] hover:shadow-[#00A896]/20 rounded-sm"
                    >
                        Solicitar Reserva
                    </Link>
                </div>
            </div>

        </section>
    );
}