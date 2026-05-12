'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorAura() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Verifica si el dispositivo usa un puntero fino (mouse) y no una pantalla táctil
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsDesktop(true);

            let mouseX = 0;
            let mouseY = 0;
            let auraX = 0;
            let auraY = 0;

            const handleMouseMove = (e: MouseEvent) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            };

            window.addEventListener('mousemove', handleMouseMove);

            // Animación suave con inercia (efecto fluido premium)
            const animate = () => {
                // Interpolación lineal: el aura alcanza al mouse suavemente (0.15 es la velocidad)
                auraX += (mouseX - auraX) * 0.15;
                auraY += (mouseY - auraY) * 0.15;

                if (cursorRef.current) {
                    // Trasladamos el div usando translate3d para usar aceleración por hardware
                    // Restamos 150px (la mitad del ancho/alto) para que el centro del aura quede en la punta del cursor
                    cursorRef.current.style.transform = `translate3d(${auraX - 150}px, ${auraY - 150}px, 0)`;
                }

                requestAnimationFrame(animate);
            };

            const animationId = requestAnimationFrame(animate);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                cancelAnimationFrame(animationId);
            };
        }
    }, []);

    // Si es un dispositivo móvil, no renderizamos nada
    if (!isDesktop) return null;

    return (
        <div
            ref={cursorRef}
            // z-50 para flotar, pointer-events-none para no bloquear clicks
            // bg-[#00A896]/15 en modo claro y bg-[#D4AF37]/15 en modo oscuro
            className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-50 transition-colors duration-1000 bg-[#00A896]/15 dark:bg-[#D4AF37]/15 blur-[80px]"
            style={{
                // Ocultamos el aura por defecto hasta que el usuario mueva el mouse por primera vez
                willChange: 'transform',
            }}
        />
    );
}