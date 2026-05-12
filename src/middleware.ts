import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
    // Lista de todos los idiomas soportados
    locales: locales,

    // El idioma que fluirá por defecto si no se detecta otro
    defaultLocale: 'es',
});

export const config = {
    // Ignoramos las rutas internas de Next.js, APIs y archivos estáticos (como imágenes o iconos)
    // para que el middleware solo actúe sobre las páginas que visitarán los usuarios.
    matcher: ['/((?!api|_next|.*\\..*).*)']
};