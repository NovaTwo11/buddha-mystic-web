"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false);

    // Guardianes de nuestros clics
    const langMenuRef = useRef<HTMLDivElement>(null);
    const mobileLangMenuRef = useRef<HTMLDivElement>(null); // Nuevo guardián para móvil

    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const locales = [
        { code: 'es', label: 'Español' },
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'pt', label: 'Português' }
    ];

    // Cierra los menús de idiomas si el usuario hace clic fuera de ellos
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (langMenuRef.current && !langMenuRef.current.contains(target)) {
                setIsLangMenuOpen(false);
            }
            if (mobileLangMenuRef.current && !mobileLangMenuRef.current.contains(target)) {
                setIsMobileLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Sincronizamos el tema con el sistema o la preferencia guardada
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsMobileLangMenuOpen(false);
    };

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Función mágica para cambiar el idioma manteniendo la página actual
    const switchLocale = (newLocale: string) => {
        setIsLangMenuOpen(false);
        setIsMobileLangMenuOpen(false);

        if (!pathname) return;

        // Removemos el idioma actual de la ruta para inyectar el nuevo
        const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '') || '/';
        const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

        router.push(newPath);
    };

    const navLinks = [
        { name: t('nav_home'), path: '/' },
        { name: t('nav_about'), path: '/nosotros' },
        { name: t('nav_rooms'), path: '/alojamiento' },
        { name: t('nav_restaurant'), path: '/restaurante' },
        { name: t('nav_experiences'), path: '/experiencias' },
    ];

    const whatsappNumber = "573135431537";
    const whatsappMessage = encodeURIComponent(t('whatsapp_msg'));
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-white/85 dark:bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                <div className="flex justify-between items-center h-24">

                    {/* Logo del Hotel */}
                    <div className="flex-shrink-0 flex items-center z-50">
                        <Link href="/" className="flex flex-col items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-3xl font-serif font-light tracking-widest text-[#D4AF37] group-hover:text-[#00A896] transition-colors duration-700">BUDDHA</span>
                            <span className="text-[10px] font-sans tracking-[0.4em] text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-700 mt-1">MYSTIC</span>
                        </Link>
                    </div>

                    {/* Enlaces de Navegación (Desktop) */}
                    <div className="hidden md:flex space-x-10 items-center text-[11px] tracking-[0.2em] font-medium text-gray-600 dark:text-gray-300 uppercase">
                        {navLinks.map((item) => (
                            <Link key={item.name} href={item.path} className="relative group py-2 flex items-center">
                                <span className="group-hover:text-[#D4AF37] transition-colors duration-500">{item.name}</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Herramientas y CTA (Desktop) */}
                    <div className="hidden md:flex items-center space-x-6">

                        {/* Botones de Accesibilidad */}
                        <div className="flex items-center space-x-3 border-r border-gray-200 dark:border-gray-800 pr-6" ref={langMenuRef}>

                            {/* Selector de Idioma (Dropdown Desktop) */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                    className="flex items-center space-x-1.5 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-full text-gray-500 dark:text-gray-400 shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:text-[#D4AF37] dark:hover:text-[#D4AF37] hover:shadow-md transition-all duration-300"
                                    aria-label="Cambiar idioma"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3v18" />
                                    </svg>
                                    <span className="text-[10px] font-bold tracking-widest uppercase">{locale}</span>
                                </button>

                                {/* Menú Desplegable de Idiomas */}
                                {isLangMenuOpen && (
                                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-lg shadow-xl py-2 flex flex-col min-w-[130px] opacity-100 transition-opacity duration-300 animate-in fade-in zoom-in-95">
                                        {locales.map((l) => (
                                            <button
                                                key={l.code}
                                                onClick={() => switchLocale(l.code)}
                                                className={`text-left px-4 py-2.5 text-[10px] tracking-widest uppercase hover:bg-gray-50 dark:hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-colors ${locale === l.code ? 'text-[#D4AF37] font-bold bg-gray-50/50 dark:bg-[#1A1A1A]/50' : 'text-gray-500 dark:text-gray-400 font-medium'}`}
                                            >
                                                {l.code} - {l.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Modo Claro/Oscuro con lógica CSS */}
                            <button
                                onClick={toggleTheme}
                                className="flex items-center bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-2 rounded-full text-gray-500 dark:text-gray-400 shadow-sm hover:border-[#00A896] dark:hover:border-[#00A896] hover:text-[#00A896] dark:hover:text-[#00A896] hover:shadow-md transition-all duration-300"
                                aria-label="Alternar tema"
                            >
                                <svg className="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                                <svg className="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            </button>
                        </div>

                        {/* Contenedor de Botones de Acción */}
                        <div className="flex items-center space-x-3">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center border border-[#00A896] text-[#00A896] dark:border-[#D4AF37] dark:text-[#D4AF37] px-5 lg:px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#00A896] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-gray-900 transition-all duration-500 rounded-sm"
                            >
                                <svg className="w-4 h-4 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                                    <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0 -1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                                <span className="hidden lg:block">WhatsApp</span>
                            </a>

                            <a
                                href="https://engine.lobbypms.com/buddha-mystic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden group bg-[#D4AF37] px-6 lg:px-8 py-3 text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(0,168,150,0.3)] rounded-sm"
                            >
                                <span className="relative z-10 text-white transition-colors duration-500">{t('book_now')}</span>
                                <div className="absolute inset-0 h-full w-0 bg-[#00A896] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
                            </a>
                        </div>
                    </div>

                    {/* Controles Móviles */}
                    <div className="md:hidden flex items-center space-x-4 z-50">
                        {/* Selector de idioma rápido en móvil con Dropdown */}
                        <div className="relative" ref={mobileLangMenuRef}>
                            <button
                                onClick={() => setIsMobileLangMenuOpen(!isMobileLangMenuOpen)}
                                className="flex items-center space-x-1 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-full text-gray-500 dark:text-gray-400 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                            >
                                <span className="text-[9px] font-bold tracking-widest uppercase">{locale}</span>
                            </button>

                            {isMobileLangMenuOpen && (
                                <div className="absolute top-full mt-2 right-0 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-md shadow-lg py-1 flex flex-col min-w-[80px] animate-in fade-in zoom-in-95">
                                    {locales.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => switchLocale(l.code)}
                                            className={`text-center px-2 py-2 text-[9px] tracking-widest uppercase hover:bg-gray-50 dark:hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-colors ${locale === l.code ? 'text-[#D4AF37] font-bold' : 'text-gray-500 dark:text-gray-400 font-medium'}`}
                                        >
                                            {l.code}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 dark:text-white hover:text-[#00A896] dark:hover:text-[#00A896] focus:outline-none transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            <div
                className={`md:hidden absolute w-full bg-white dark:bg-[#0A0A0A] shadow-xl dark:shadow-2xl border-t border-gray-100 dark:border-gray-900 transition-all duration-500 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden`}
            >
                <div className="px-6 py-8 flex flex-col space-y-6">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm tracking-[0.2em] font-medium text-gray-600 dark:text-gray-300 uppercase hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col space-y-6">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center text-sm tracking-[0.2em] font-medium text-gray-600 dark:text-gray-300 uppercase hover:text-[#00A896] dark:hover:text-[#00A896] transition-colors duration-300"
                        >
                            <span className="hidden dark:flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                                {t('light_mode')}
                            </span>
                            <span className="flex dark:hidden items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                                {t('dark_mode')}
                            </span>
                        </button>

                        <div className="flex flex-col space-y-3">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center border border-[#00A896] text-[#00A896] dark:border-[#D4AF37] dark:text-[#D4AF37] px-8 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#00A896] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-gray-900 transition-colors duration-500 rounded-sm flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                                    <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0 -1h-1a.5.5 0 0 0 0 1" />
                                </svg>
                                WhatsApp
                            </a>
                            <a
                                href="https://engine.lobbypms.com/buddha-mystic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center bg-[#D4AF37] text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#00A896] transition-colors duration-500 rounded-sm"
                            >
                                {t('book_now_mobile')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}