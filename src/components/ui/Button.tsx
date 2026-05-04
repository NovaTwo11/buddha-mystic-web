import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
}

export default function Button({
                                   children,
                                   variant = 'primary',
                                   className = '',
                                   ...props
                               }: ButtonProps) {

    // Aumentamos ligeramente el padding y la duración de la transición para más elegancia
    const baseStyle = "px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-500 inline-flex justify-center items-center";

    const variants = {
        // Dorado radiante que transiciona a nuestro Aquamarina profundo
        primary: "bg-buddha-gold text-white shadow-xl shadow-buddha-gold/20 hover:bg-[#00A896] hover:shadow-[#00A896]/20",

        // Borde sutil que se ilumina con Aquamarina
        outline: "border border-gray-300 text-gray-800 hover:border-[#00A896] hover:text-[#00A896] bg-transparent",

        // Estilo texto simple con subrayado animado (como el "Descubrir más")
        ghost: "text-gray-800 hover:text-[#00A896] border-b border-transparent hover:border-[#00A896] pb-1 !px-0 !py-0 shadow-none"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}