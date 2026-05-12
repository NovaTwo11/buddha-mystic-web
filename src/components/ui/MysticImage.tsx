"use client";
import { CldImage } from 'next-cloudinary';

interface MysticImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

export default function MysticImage({
                                        src,
                                        alt,
                                        width = 800,
                                        height = 600,
                                        className = "",
                                        priority = false
                                    }: MysticImageProps) {
    return (
        <CldImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            // Optimizaciones automáticas
            format="auto"
            quality="auto"
            // Efecto de carga
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            // Aquí unimos las clases base con las que envíes desde el componente padre
            className={`transition-transform duration-700 ${className}`}
        />
    );
}