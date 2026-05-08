export default function ExperiencesHero() {
    return (
        /* Aumentamos la altura a h-screen para un impacto total e incluimos pt-28 para la Navbar */
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950">

            {/* 1. Capa de Imagen de Fondo: Mantenemos la imagen impactante y nítida */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105" // scale sutil para dar profundidad
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2000&auto=format&fit=crop')" }}
            />

            {/* 2. Capa de Superposición Sutil (Overlay):
                Un degradado muy suave de oscuro a transparente para dar profundidad a la imagen
                sin perder sus colores, y asegurar que el panel central resalte.
            */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-black/30" />

            {/* 3. Contenedor de Contenido (Capa Central con Efecto Vidrio) */}
            <div className="relative z-20 max-w-[1600px] w-full px-4 sm:px-8 lg:px-16 pt-28 pb-12 flex items-center justify-center h-full">

                {/* ESTE ES EL RECTÁNGULO DETRÁS DEL TEXTO (Glassmorphism)
                    - bg-white/70: Fondo blanco con opacidad.
                    - backdrop-blur-xl: Efecto de desenfoque intenso detrás del panel.
                    - shadow-2xl: Sombra pronunciada para elevar la capa.
                */}
                <div className="bg-white/70 backdrop-blur-xl p-10 md:p-16 lg:p-20 rounded-3xl shadow-2xl border border-white/20 max-w-5xl text-center flex flex-col items-center">

                    {/* Ubicación en Aquamarina - Ajustamos tracking y font-medium */}
                    <span className="text-[#00A896] tracking-[0.3em] text-xs sm:text-sm font-semibold uppercase mb-6 block">
                        Doradal, Antioquia
                    </span>

                    {/* Título en Negro con acento en Dorado y Serif Font */}
                    <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-gray-950 mb-8 leading-tight">
                        Aventuras que <span className="italic font-medium text-[#D4AF37]">despiertan</span> el alma
                    </h1>

                    {/* Párrafo en gris muy oscuro para legibilidad y suavidad */}
                    <p className="text-gray-800 font-light max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed">
                        Más allá de nuestro santuario de descanso, te aguarda un entorno natural vibrante.
                        Descubre la magia de la región y conecta con la energía pura de la naturaleza.
                    </p>

                </div>
            </div>
        </section>
    );
}