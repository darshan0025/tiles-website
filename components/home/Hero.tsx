"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
            {/* Background Image with Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-70 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat"
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />

            <div className="relative z-10 container px-4 md:px-6 text-center text-white">
                <motion.h1
                    className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Transform Your Space <br className="hidden md:inline" />
                    With <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-orange-50">Timeless Elegance</span>
                </motion.h1>
                <motion.p
                    className="mx-auto max-w-[700px] text-lg md:text-xl text-zinc-100 mb-8 drop-shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Discover our curated collection of premium porcelain, ceramic, and natural stone tiles designed for modern living.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
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
