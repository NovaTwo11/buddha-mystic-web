import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://buddhamystichotel.com';

    // Rutas principales de tu proyecto
    const routes = [
        '',
        '/nosotros',
        '/alojamiento',
        '/restaurante',
        '/experiencias',
        '/terminos',
    ];

    // Generamos el sitemap mapeando las rutas
    const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8, // Mayor prioridad para el Home
    }));

    return sitemapEntries;
}