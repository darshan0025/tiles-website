"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Same 7 images
const galleryImages = [
    "/gallery-1.png",
    "/gallery-2.png",
    "/gallery-3.png",
    "/gallery-4.png",
    "/gallery-5.png",
    "/gallery-6.png",
    "/gallery-7.png",
];

const TypewriterText = ({ text, delay = 0, className }: { text: string, delay?: number, className?: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setStarted(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50); // Speed of typing
        return () => clearInterval(timer);
    }, [text, started]);

    return <span ref={elementRef} className={className}>{displayedText}</span>;
}

export function HomeGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4 min-h-[120px]">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-black">
                        <TypewriterText text="Our Gallery" />
                    </h2>
                    <p className="text-zinc-600 max-w-xl mx-auto text-lg">
                        <TypewriterText text="Experience our premium collections. Click to view details." delay={1000} />
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {galleryImages.map((src, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                                    <div
                                        className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="text-white text-sm font-bold uppercase tracking-widest border border-white px-4 py-2">
                                                View
                                            </span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 bg-white hover:bg-zinc-100 text-black border-zinc-200" />
                        <CarouselNext className="right-0 bg-white hover:bg-zinc-100 text-black border-zinc-200" />
                    </Carousel>
                </div>

                {/* Lightbox Dialog */}
                <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                    <DialogContent className="max-w-5xl w-full p-0 bg-black/90 border-none overflow-hidden h-[90vh] flex flex-col justify-center">
                        <DialogTitle className="sr-only">Image Preview</DialogTitle>
                        {/* Close Button manually positioned if standard one is hidden or styled differently */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {selectedImage && (
                                <div className="relative w-full h-full max-h-[85vh]">
                                    <Image
                                        src={selectedImage}
                                        alt="Full View"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
