import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getRooms } from '@/data/rooms';
import RoomDetailHero from '@/components/sections/alojamiento/details/RoomDetailHero';
import RoomDetailContent from '@/components/sections/alojamiento/details/RoomDetailContent';
import RoomDetailGallery from '@/components/sections/alojamiento/details/RoomDetailGallery';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function RoomPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const t = await getTranslations("RoomsData");

    // Extracción estricta del tipo usando Parameters (cero 'any')
    const rooms = getRooms(t as unknown as Parameters<typeof getRooms>[0]);

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