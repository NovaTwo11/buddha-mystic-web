export default function AboutHero() {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Imagen de fondo (Reemplazar con foto real del hotel/budas) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2000&auto=format&fit=crop')" }}
            />
            {/* Overlay claro para asegurar el tema luminoso */}
            <div className="absolute inset-0 z-10 bg-white/40" />

            {/* Contenedor Glassmorphism */}
            <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 w-full flex justify-center">
                <div className="bg-white/70 backdrop-blur-md border border-white/50 p-10 md:p-16 text-center max-w-3xl rounded-sm shadow-sm">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-serif font-light mb-4">
                        Nuestra <span className="italic font-medium text-[#D4AF37]">Esencia</span>
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Un espacio donde el tiempo parece detenerse, creado para el descanso y la reconexión profunda.
                    </p>
                </div>
            </div>
        </section>
    );
}