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

    const rooms = getRooms(t as unknown as Parameters<typeof getRooms>[0]);
    const room = rooms.find((r) => r.slug === slug);

    if (!room) notFound();

    // Mapeamos la galería de la habitación para soportar videos e imágenes
    const formattedGallery = room.gallery.map((media, index) => ({
        id: index,
        type: media.type,
        src: media.src,
        alt: `${room.name} - Vista ${index + 1}`
    }));

    return (
        <main className="min-h-screen bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <Navbar/>
            <RoomDetailHero room={room}/>
            <ScrollReveal>
                <RoomDetailContent room={room} />
            </ScrollReveal>
            <ScrollReveal>
                {/* Enviamos la nueva propiedad mediaList */}
                <RoomDetailGallery mediaList={formattedGallery} />
            </ScrollReveal>
            <Footer/>
        </main>
    );
}