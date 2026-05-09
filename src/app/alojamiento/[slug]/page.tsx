import { notFound } from 'next/navigation';
import { rooms } from '@/data/rooms';
import RoomDetailHero from '@/components/sections/alojamiento/details/RoomDetailHero';
import RoomDetailContent from '@/components/sections/alojamiento/details/RoomDetailContent';
import RoomDetailGallery from '@/components/sections/alojamiento/details/RoomDetailGallery';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const room = rooms.find((r) => r.slug === slug);

    if (!room) notFound();

    return (
        <main className="min-h-screen bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <Navbar/>
            <RoomDetailHero room={room}/>
            <ScrollReveal>
            <RoomDetailContent room={room} />
            </ScrollReveal>
            <ScrollReveal>
                <RoomDetailGallery images={room.gallery} />
            </ScrollReveal>
            <Footer/>
        </main>
    );
}