"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ExportSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Abstract Map Background Pattern (CSS or SVG) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <motion.div
                        className="flex-1 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-black leading-tight">
                            From Morbi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A25D] to-[#9e824a]">To The World</span>
                        </h2>
                        <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
                            Edon Ceramics is a leading exporter, delivering premium quality tiles to over 50 countries. Our logistics network ensures timely and safe delivery to any port worldwide.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-zinc-100 px-4 py-2 rounded-full text-sm font-semibold">USA</div>
                            <div className="bg-zinc-100 px-4 py-2 rounded-full text-sm font-semibold">UK</div>
                            <div className="bg-zinc-100 px-4 py-2 rounded-full text-sm font-semibold">UAE</div>
                            <div className="bg-zinc-100 px-4 py-2 rounded-full text-sm font-semibold">Australia</div>
                            <div className="bg-zinc-100 px-4 py-2 rounded-full text-sm font-semibold">Europe</div>
                        </div>

                        <Button asChild size="lg" className="bg-black text-white hover:bg-black/80 mt-4">
                            <Link href="/contact">
                                Start Export Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full relative h-[400px] lg:h-[500px] bg-zinc-100 rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Use a map image or crate/shipping image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <p className="font-bold text-xl mb-1">Global Logistics</p>
                                <p className="text-white/80 text-sm">Seamless shipping to international destinations.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
