import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'outline';
}

export default function Button({
                                   children,
                                   variant = 'primary',
                                   className = '',
                                   ...props
                               }: ButtonProps) {

    const baseStyle = "px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 shadow-sm inline-flex justify-center items-center";

    const variants = {
        primary: "bg-buddha-gold text-buddha-white hover:bg-buddha-black",
        outline: "border border-buddha-gold text-buddha-gold hover:bg-buddha-gold hover:text-buddha-white"
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