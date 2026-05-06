import { Metadata } from 'next';
import RoomsHero from '@/components/sections/alojamiento/RoomsHero';
import RoomAmenities from '@/components/sections/alojamiento/RoomAmenities';
import RoomsExperience from '@/components/sections/alojamiento/RoomsExperience';
import ConditionsFooter from '@/components/sections/alojamiento/ConditionsFooter';
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: 'Santuario de Descanso | Alojamiento | Buddha Mystic',
    description: 'Descubre nuestras habitaciones modernas y confortables, diseñadas para garantizar tu descanso en un entorno de paz y conexión.',
};

export default function AlojamientoPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] flex flex-col w-full relative">

            <Navbar/>

            <div className="w-full">
                <ScrollReveal>
                    <RoomsHero/>
                </ScrollReveal>
            </div>

            <div className="w-full">
                <ScrollReveal>
                    <RoomAmenities/>
                </ScrollReveal>
            </div>

            <div className="w-full">
                <ScrollReveal>
                    <RoomsExperience/>
                </ScrollReveal>
            </div>

            <div className="w-full overflow-hidden">
                <ScrollReveal>
                    <ConditionsFooter/>
                </ScrollReveal>
            </div>

            <div className="w-full overflow-hidden">
                <ScrollReveal>
                    <Footer/>
                </ScrollReveal>
            </div>
        </main>
    );
}