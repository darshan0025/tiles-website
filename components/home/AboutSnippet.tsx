"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutSnippet() {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-0 overflow-hidden rounded-md shadow-2xl">
                            <Image
                                src="/Homepage.png"
                                alt="Luxury Bathroom Design"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        className="order-1 lg:order-2 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            We Craft Spaces <br /> That Inspire
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                At Edon Tiles, we believe that every surface tells a story. Since 2010, we have been sourcing the finest materials from Italy, Spain, and beyond to bring you a world-class selection of tiles.
                            </p>
                            <p>
                                Whether you are renovating a cozy bathroom or designing a grand commercial lobby, our team of experts is dedicated to helping you find the perfect match for your vision.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Button asChild variant="default" size="lg">
                                <Link href="/about">Read Our Story</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
