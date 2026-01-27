"use client";

import { Factory, Award, Globe, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Factory,
        title: "Ultra Modern Technology",
        description: "State-of-the-art Italian machinery ensuring precision manufacturing and flawless finish."
    },
    {
        icon: Award,
        title: "Quality Assurance",
        description: "Rigorous ISO certified testing processes at every stage of production."
    },
    {
        icon: Globe,
        title: "Global Standards",
        description: "Products engineered to meet and exceed international export standards."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Sustainable manufacturing practices minimizing environmental impact."
    }
];

export function FeaturesGrid() {
    return (
        <section className="py-24 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#C5A25D]">
                        Why Edon Ceramics?
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We combine innovation with tradition to deliver excellence in every tile.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <div className="h-14 w-14 bg-[#C5A25D]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C5A25D] transition-colors duration-300">
                                    <Icon className="h-7 w-7 text-[#C5A25D] group-hover:text-black transition-colors duration-300" />
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
