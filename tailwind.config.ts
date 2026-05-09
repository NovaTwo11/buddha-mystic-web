import type { Config } from "tailwindcss";

const config: Config = {
    // ACTIVAMOS LA ESTRATEGIA DE CLASE
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                buddha: {
                    gold: "#D4AF37",
                    black: "#000000",
                    navy: "#0A0A0A", // Un negro más profundo y premium para el modo oscuro
                    aquamarine: "#00A896", // Corregido a tu azul institucional usado en el Navbar
                    white: "#FFFFFF",
                }
            },
        },
    },
    plugins: [],
};
export default config;