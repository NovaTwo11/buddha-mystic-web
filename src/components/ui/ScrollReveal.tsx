"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Cuando el elemento entra en la pantalla, lo hacemos visible
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Dejamos de observar para que la animación solo ocurra una vez
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Se activa cuando el 10% del elemento es visible
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            } ${className}`}
        >
            {children}
        </div>
    );
}