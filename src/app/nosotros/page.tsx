import AboutHero from '@/components/sections/AboutHero';
import OurStory from '@/components/sections/OurStory';
import OurValues from '@/components/sections/OurValues';
import OurTeam from '@/components/sections/OurTeam';
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";

export default function NosotrosPage() {
    return (
        <main className="bg-white min-h-screen pt-20">
            <Navbar />
            <ScrollReveal>
                <AboutHero />
            </ScrollReveal>
            <ScrollReveal>
                <OurStory />
            </ScrollReveal>
            <ScrollReveal>
                <OurValues />
            </ScrollReveal>
            <ScrollReveal>
                <OurTeam />
            </ScrollReveal>
            <ScrollReveal>
                <Footer />
            </ScrollReveal>
        </main>
    );
}