import { Room } from '@/data/rooms';
import MysticImage from "@/components/ui/MysticImage";

export default function RoomDetailHero({ room }: { room: Room }) {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden transition-colors duration-500">
            <MysticImage
                src={room.mainImage}
                alt={room.name}
                width={1920}
                height={1080}
                priority={true}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-105"
            />

            <div className="absolute inset-0 bg-black/30 dark:bg-black/50 transition-colors duration-500" />

            <div className="relative h-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col justify-end pb-20">
                <div className="max-w-2xl bg-white/10 dark:bg-[#111111]/30 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 md:p-12 rounded-sm shadow-xl transition-colors duration-500">
                    <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block drop-shadow-md">
                        {room.energy}
                    </span>
                    <h1 className="text-4xl md:text-6xl text-white font-serif font-light leading-tight drop-shadow-md">
                        {room.name}
                    </h1>
                </div>
            </div>
        </section>
    );
}