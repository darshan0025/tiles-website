"use client";

import { PageHero } from "@/components/layout/PageHero";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Globe2, Lightbulb, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
};

const stats = [
    { label: "Years of Experience", value: 25, suffix: "+" },
    { label: "Designs Created", value: 1000, suffix: "+" },
    { label: "Projects Completed", value: 689, suffix: "+" },
];

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        setCount(Math.floor(progress * end));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className="font-heading text-5xl md:text-6xl font-bold mb-2 tracking-tight">
            {count}{suffix}
        </span>
    );
}

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero is usually static or has its own internal animation, leaving as is for now or simple fade */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <PageHero
                    title="About us"
                    backgroundImage="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669&auto=format&fit=crop"
                />
            </motion.div>

            {/* Introduction & Stats */}
            <section className="py-20 md:py-28 text-slate-900 border-b border-zinc-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            className="space-y-6"
                            {...fadeInUp}
                        >
                            <h4 className="text-[#C5A25D] font-bold uppercase tracking-widest text-sm">Who We Are</h4>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                                Crafting Excellence <br />
                            </h2>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                we are architects of lifestyle. Situated in the ceramic hub of Morbi, India, we have grown from a modest unit to a global export powerhouse.
                            </p>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                Our journey is defined by a relentless pursuit of perfection. By combining Italian technology with Indian craftsmanship, we produce tiles that are not only durable but also artistic masterpieces.
                            </p>

                            <motion.div
                                className="grid grid-cols-3 gap-8 pt-6 border-t border-zinc-200 mt-6"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={fadeInUp}>
                                    <p className="text-4xl font-bold text-[#C5A25D]">25+</p>
                                    <p className="text-sm text-zinc-500 font-medium">Years Experience</p>
                                </motion.div>

                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2574"
                                    alt="Introduction"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <motion.div
                                className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs hidden lg:block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <p className="font-heading font-bold text-xl text-slate-800 italic">
                                    "We don't just make tiles; we create foundations for your dreams."
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section with Image Background */}
            <section className="relative py-24 md:py-32">
                <Image
                    src="/about-stats-bg.png"
                    alt="Stats Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-2"
                        >
                            <div className="flex justify-center">
                                <CountUp end={25} suffix="+" />
                            </div>
                            <p className="uppercase tracking-widest text-[#C5A25D] font-bold text-sm">Years of Experience</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-2 border-t md:border-t-0 md:border-l md:border-r border-white/20 pt-8 md:pt-0"
                        >
                            <div className="flex justify-center">
                                <CountUp end={1000} suffix="+" />
                            </div>
                            <p className="uppercase tracking-widest text-[#C5A25D] font-bold text-sm">Designs Created</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-2 pt-8 md:pt-0"
                        >
                            <div className="flex justify-center">
                                <CountUp end={689} suffix="+" />
                            </div>
                            <p className="uppercase tracking-widest text-[#C5A25D] font-bold text-sm">Projects Completed</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {/* Vision */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-10 bg-white shadow-lg border-l-4 border-[#C5A25D] hover:shadow-xl transition-shadow"
                        >
                            <Lightbulb className="h-12 w-12 text-[#C5A25D] mb-6" />
                            <h3 className="font-heading text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                To be the global benchmark in the ceramic industry, recognized for our innovation, quality, and commitment to sustainable luxury. We aim to transform spaces worldwide with designs that inspire.
                            </p>
                        </motion.div>
                        {/* Mission */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-10 bg-white shadow-lg border-l-4 border-slate-800 hover:shadow-xl transition-shadow"
                        >
                            <Globe2 className="h-12 w-12 text-slate-800 mb-6" />
                            <h3 className="font-heading text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                To consistently deliver superior quality products through state-of-the-art processes. We strive to build lasting relationships with our partners and customers through transparency and integrity.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Director's Message */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="bg-slate-900 rounded-2xl overflow-hidden text-white"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative min-h-[400px]">
                                <Image
                                    src="/director.png"
                                    alt="Director"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r" />
                            </div>
                            <div className="p-12 lg:p-20 flex flex-col justify-center">
                                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                                    <h3 className="text-[#C5A25D] font-bold uppercase tracking-widest mb-2">Director's Message</h3>
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Building on Trust & Innovation</h2>
                                    <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                                        "When we started Edon Ceramics, our goal was simple: to bring world-class quality to the Indian market. Today, we are proud to see our tiles adorning homes and offices across the globe. Our success is built on a foundation of trust – trust in our quality, trust in our delivery, and trust in our innovation."
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Infrastructure */}
            < section className="py-20 bg-zinc-50" >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        {...fadeInUp}
                    >
                        <h4 className="text-[#C5A25D] font-bold uppercase tracking-widest text-sm mb-3">Infrastructure</h4>
                        <h2 className="font-heading text-4xl font-bold text-slate-900">State-of-the-Art Manufacturing</h2>
                        <p className="text-zinc-600 mt-4 text-lg">
                            We employ the latest Italian technology to ensure every tile meets international standards of precision and strength.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {[
                            { title: "Sacmi Presses", desc: "High-tonnage hydraulic presses for superior density.", img: "/Carving/ALICE NERO (1).png" },
                            { title: "Digital Printing", desc: "Advanced 8-color HD printing for realistic textures.", img: "/3D/ELEGENCE FLOWER.png" },
                            { title: "Kiln Firing", desc: "Controlled temperature kilns for optimal vitrification.", img: "/Carving/AMPHORA BROWN (1).png" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group relative h-80 rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-zinc-200">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section >

            {/* Core Values */}
            < section className="py-20" >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {[
                            { title: "Innovation", icon: Lightbulb, text: "Continually pushing boundaries in design." },
                            { title: "Quality", icon: CheckCircle2, text: "Zero tolerance for defects." },
                            { title: "Global Reach", icon: Globe2, text: "Connecting cultures through design." },
                            { title: "Customer First", icon: Users2, text: "Your satisfaction is our priority." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="text-center p-6 border border-zinc-100 rounded-lg hover:shadow-lg transition-all hover:border-[#C5A25D]/30"
                            >
                                <div className="mx-auto w-16 h-16 bg-[#C5A25D]/10 rounded-full flex items-center justify-center mb-6">
                                    <item.icon className="h-8 w-8 text-[#C5A25D]" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                                <p className="text-zinc-500">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section >

            {/* CTA */}
            < section className="py-24 relative text-center overflow-hidden" >
                <Image
                    src="/Carving/ALICE BEIGE (1).png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-zinc-300 max-w-2xl mx-auto mb-10 text-lg">
                            Explore our latest collections or get in touch with our team for a bulk inquiry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-[#C5A25D] text-white hover:bg-[#b08d55] px-8 py-6 text-lg">
                                <Link href="/products">View Collection</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section >
        </div >
    );
}
