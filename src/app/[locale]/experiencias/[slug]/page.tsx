import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getAttractionsData, AttractionSlug } from "@/data/attractions";
import DetailHero from "@/components/sections/experiencias/details/DetailHero";
import DetailContent from "@/components/sections/experiencias/details/DetailContent";
import DetailGallery from "@/components/sections/experiencias/details/DetailGallery";
import DetailBanner from "@/components/sections/experiencias/details/DetailBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function AttractionDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const t = await getTranslations("AttractionsData");

    // Extracción estricta del tipo usando Parameters (cero 'any')
    const attractionsData = getAttractionsData(t as unknown as Parameters<typeof getAttractionsData>[0]);

    const attraction = attractionsData[slug as AttractionSlug];

    if (!attraction) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <Navbar/>
            <DetailHero
                title={attraction.title}
                category={attraction.category}
                tagline={attraction.tagline}
                image={attraction.images[0]}
            />
            <ScrollReveal>
                <DetailContent
                    description={attraction.description}
                    history={attraction.history}
                    location={attraction.location}
                    mapLink={attraction.mapLink}
                    details={attraction.details}
                />
            </ScrollReveal>
            <ScrollReveal>
                <DetailBanner />
            </ScrollReveal>
            <ScrollReveal>
                <DetailGallery images={attraction.images} />
            </ScrollReveal>
            <Footer/>
        </main>
    );
}