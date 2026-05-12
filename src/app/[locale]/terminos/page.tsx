import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TermsContent from "@/components/sections/terminos/TermsContent";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-[#FCFBF9] dark:bg-[#0A0A0A] transition-colors duration-500">
            <Navbar />

            {/* Solo orquestamos la sección de contenido con su respectiva animación */}
            <ScrollReveal>
                <TermsContent />
            </ScrollReveal>

            <Footer />
        </main>
    );
}