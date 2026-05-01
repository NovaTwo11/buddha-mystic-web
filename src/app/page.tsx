import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/sections/HomeHero";
import OurPromise from "@/components/sections/OurPromise";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
    return (
        <main className="min-h-screen bg-buddha-white flex flex-col">

            {/* 1. Barra de Navegación Glassmorphism */}
            <Navbar />

            <div className="flex-grow">

                {/* 2. Sección Principal */}
                <HomeHero />

                {/* 3. Nuestra Promesa (Ahora como un componente independiente y animado) */}
                <ScrollReveal>
                    <OurPromise />
                </ScrollReveal>

                {/* 4. Cuadrícula de Áreas */}
                <ScrollReveal>
                    <FeatureGrid />
                </ScrollReveal>

            </div>

            {/* 5. Pie de Página */}
            <Footer />

        </main>
    );
}