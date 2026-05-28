import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorAura from "@/components/ui/CursorAura";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hotel Buddha Mystic | Una experiencia que trasciende",
    description: "Descubre la esencia del bienestar en Doradal, Antioquia. Un espacio donde el tiempo se detiene para tu descanso físico, mental y espiritual.",
};

export default async function RootLayout({
                                             children,
                                             params,
                                         }: Readonly<{
    children: React.ReactNode;

    params: Promise<{ locale: string }>;
}>) {

    const { locale } = await params;
    const messages = await getMessages();

    // Estructura de datos JSON-LD para Google (Resultados Enriquecidos)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        name: 'Hotel Buddha Mystic',
        description: 'Descubre la esencia del bienestar en Doradal, Antioquia. Un espacio donde el tiempo se detiene para tu descanso físico, mental y espiritual.',
        url: 'https://buddhamystichotel.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Doradal',
            addressRegion: 'Antioquia',
            addressCountry: 'CO'
        }
    };

    return (
        <html
            lang={locale}
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <head>
            {/* Inyección del script JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className="min-h-full flex flex-col bg-white text-black">
        <NextIntlClientProvider messages={messages}>
            {children}
            <CursorAura />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}