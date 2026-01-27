"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            {count}{suffix}
        </span>
    );
}

export function StatsSection() {
    return (
        <section className="py-16 bg-[#C5A25D] text-black">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="p-4 flex flex-col items-center justify-center"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            <CountUp end={stat.value} suffix={stat.suffix} />
                            <span className="text-sm md:text-base font-medium uppercase tracking-wider opacity-80">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
