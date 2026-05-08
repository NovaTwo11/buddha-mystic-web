import ExperiencesHero from "@/components/sections/experiencias/ExperiencesHero";
import TouristAttractions from "@/components/sections/experiencias/TouristAttractions";
import ExtremeActivities from "@/components/sections/experiencias/ExtremeActivities";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RoomsHero from "@/components/sections/alojamiento/RoomsHero";
import Footer from "@/components/layout/Footer";
import ExperiencesBanner from "@/components/sections/experiencias/ExperiencesBanner";

export const metadata = {
    title: "Experiencias | Hotel Buddha Mystic",
    description: "Descubre las maravillas y aventuras que rodean nuestro santuario en Doradal, Antioquia.",
};

export default function ExperienciasPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            <Navbar/>
            <div className="w-full">
                <ScrollReveal>
                    <ExperiencesHero/>
                </ScrollReveal>
            </div>
            <div className="w-full">
                <ScrollReveal>
                    <TouristAttractions/>
                </ScrollReveal>
            </div>
            <div className="w-full">
                <ScrollReveal>
                    <ExperiencesBanner/>
                </ScrollReveal>
            </div>
            <div className="w-full">
                <ScrollReveal>
                    <ExtremeActivities/>
                </ScrollReveal>
            </div>
            <div className="w-full">
                <ScrollReveal>
                    <Footer/>
                </ScrollReveal>
            </div>
        </main>
    );
}