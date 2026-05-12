import ExperiencesHero from "@/components/sections/experiencias/ExperiencesHero";
import TouristAttractions from "@/components/sections/experiencias/TouristAttractions";
import ExtremeActivities from "@/components/sections/experiencias/ExtremeActivities";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Footer from "@/components/layout/Footer";
import ExperiencesBanner from "@/components/sections/experiencias/ExperiencesBanner";

export const metadata = {
    title: "Experiencias | Hotel Buddha Mystic",
    description: "Descubre las maravillas y aventuras que rodean nuestro santuario en Doradal, Antioquia.",
};

export default function ExperienciasPage() {
    return (
        <main className="min-h-screen bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <Navbar/>

            <div className="w-full">
                <ExperiencesHero/>
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