'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import MysticImage from "@/components/ui/MysticImage";
import { useTranslations } from 'next-intl';

interface RoomDetailGalleryProps {
    images: string[];
}

export default function RoomDetailGallery({ images }: RoomDetailGalleryProps) {
    const t = useTranslations('RoomDetail');
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, nextImage, prevImage]);

    if (!images || images.length === 0) return null;

    return (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pb-24 transition-colors duration-500">
            <div className="flex flex-col items-center mb-12">
                <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block text-center">
                    {t('visualizeStay')}
                </span>
                <h3 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-serif font-light italic transition-colors duration-500 text-center">
                    {t('cornersOfComfort')}
                </h3>
                <div className="w-12 h-px bg-[#00A896] mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {images.map((srcId, index) => {
                    const isFeatured = index === 0 && images.length % 2 !== 0;

                    return (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className={`relative overflow-hidden group bg-gray-100 dark:bg-[#111111] shadow-sm cursor-pointer transition-colors duration-500 ${isFeatured ? 'md:col-span-2 h-[40vh] md:h-[60vh]' : 'col-span-1 h-[40vh] md:h-[50vh]'}`}
                        >
                            <MysticImage
                                src={srcId}
                                alt={t('galleryAlt', { index: index + 1 })}
                                width={800}
                                height={600}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {isOpen && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity duration-500"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-[#D4AF37] transition-colors duration-300 z-[110] p-2"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white/50 font-light tracking-[0.3em] text-xs uppercase z-[110]">
                        {currentIndex + 1} <span className="text-[#D4AF37] mx-2">/</span> {images.length}
                    </div>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 md:left-10 text-white/50 hover:text-[#D4AF37] transition-all duration-300 z-[110] p-4"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 md:right-10 text-white/50 hover:text-[#D4AF37] transition-all duration-300 z-[110] p-4"
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    <div
                        className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center px-12 md:px-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MysticImage
                            src={images[currentIndex]}
                            alt={t('expandedAlt', { index: currentIndex + 1 })}
                            width={1920}
                            height={1080}
                            className="max-w-full max-h-full object-contain shadow-2xl transition-opacity duration-500"
                        />
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}