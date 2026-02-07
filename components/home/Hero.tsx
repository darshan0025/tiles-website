"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
            {/* Background Image with Parallax & Gradient Overlay */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
                <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop"
                    alt="Luxury Interior"
                    fill
                    className="object-cover opacity-70"
                    priority
                    quality={90}
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0 pointer-events-none" />

            <div className="relative z-10 container px-4 md:px-6 text-center text-white flex flex-col items-center">
                {/* Text Reveal Animation */}
                <div className="mb-6 drop-shadow-xl flex flex-col items-center gap-2 md:gap-4">
                    <TextReveal
                        text="Transform Your Space"
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                    />
                    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <TextReveal
                            text="With"
                            className="text-white"
                            delay={0.6}
                        />
                        <TextReveal
                            text="Timeless Elegance"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-50"
                            delay={0.8}
                        />
                    </div>
                </div>

                <motion.p
                    className="mx-auto max-w-[700px] text-lg md:text-xl text-zinc-100 mb-8 drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                >
                    Discover our curated collection of premium porcelain, ceramic, and natural stone tiles designed for modern living.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                >
                    <Button asChild size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                        <Link href="/products">
                            Explore Collections
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base px-8 h-12 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95">
                        <Link href="/contact">
                            Visit Showroom <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
