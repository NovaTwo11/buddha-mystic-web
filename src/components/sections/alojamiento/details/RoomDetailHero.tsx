import { Room } from '@/data/rooms';

export default function RoomDetailHero({ room }: { room: Room }) {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${room.mainImage})` }}
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative h-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col justify-end pb-20">
                <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-sm">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            {room.energy}
          </span>
                    <h1 className="text-4xl md:text-6xl text-white font-serif font-light leading-tight">
                        {room.name}
                    </h1>
                </div>
            </div>
        </section>
    );
}