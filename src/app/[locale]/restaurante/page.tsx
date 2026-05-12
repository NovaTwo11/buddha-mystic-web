import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RestaurantHero from "@/components/sections/restaurante/RestaurantHero";
import MandalasPhilosophy from "@/components/sections/restaurante/MandalasPhilosophy";
import CulinaryEvolution from "@/components/sections/restaurante/CulinaryEvolution";

// IMPORTACIONES FUTURAS (Descomentar cuando la carta esté lista)
// import MenuSensorial from "@/components/sections/restaurante/MenuSensorial";
// import SignatureDishes from "@/components/sections/restaurante/SignatureDishes";
// import DiningExperiences from "@/components/sections/restaurante/DiningExperiences";

export default function RestaurantPage() {
    return (
        <main className="min-h-screen bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <Navbar />

            <RestaurantHero />

            <ScrollReveal>
                <MandalasPhilosophy />
            </ScrollReveal>

            {/* SECCIÓN DE EXPECTATIVA (Activa actualmente) */}
            <ScrollReveal>
                <CulinaryEvolution />
            </ScrollReveal>

            {/* ESTRUCTURA FUTURA (Comentada hasta que el cliente apruebe la nueva carta) */}
            {/* <ScrollReveal>
                <SignatureDishes />
            </ScrollReveal>

            <ScrollReveal>
                <MenuSensorial />
            </ScrollReveal>

            <ScrollReveal>
                <DiningExperiences />
            </ScrollReveal>
            */}

            <Footer />
        </main>
    );
}