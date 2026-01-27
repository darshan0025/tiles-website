import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Home } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-16 border-t border-zinc-900">
            <div className="container mx-auto px-4 md:px-6 mb-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column: Logo & Socials */}
                    <div className="lg:w-1/4 space-y-8">
                        {/* Logo */}
                        <Link href="/" className="inline-block relative h-16 w-48">
                            <Image
                                src="/logo_v2.png"
                                alt="Edon Ceramics"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>

                        {/* Social Icons */}
                        <div className="flex gap-6">
                            <Link href="#" className="bg-zinc-900 p-3 rounded-full hover:bg-[#C5A25D] hover:text-white transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="bg-zinc-900 p-3 rounded-full hover:bg-[#C5A25D] hover:text-white transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="bg-zinc-900 p-3 rounded-full hover:bg-[#C5A25D] hover:text-white transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column Area */}
                    <div className="lg:w-3/4 flex flex-col gap-12">

                        {/* Top: Horizontal Navigation */}
                        <div className="border-b border-zinc-800 pb-6">
                            <ul className="flex flex-wrap gap-8 text-sm md:text-base font-medium">
                                <li>
                                    <Link href="/" className="text-[#C5A25D] border-b-2 border-[#C5A25D] pb-1">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-zinc-400 hover:text-[#C5A25D] transition-colors">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="text-zinc-400 hover:text-[#C5A25D] transition-colors">
                                        Tiles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/catalog" className="text-zinc-400 hover:text-[#C5A25D] transition-colors">
                                        Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-zinc-400 hover:text-[#C5A25D] transition-colors">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Bottom: Text & Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Company Text */}
                            <div className="space-y-6">
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    Anyone without hands-on experience of the ceramic industry will not understand the importance of every grain of sand: attention to detail is everything to us.
                                </p>
                                <Link href="/about" className="inline-block text-white font-semibold underline decoration-[#C5A25D] underline-offset-4 hover:text-[#C5A25D] transition-colors">
                                    Read More
                                </Link>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Home className="h-5 w-5 text-[#C5A25D]" />
                                    </div>
                                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                                        C/O 8-A National Highway, <br />
                                        Opp. Honest Hotel, Real Plaza-1, <br />
                                        Shop No.37/38, Lalpar, Morbi, Gujarat - 363642
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-5 w-5 text-[#C5A25D]" />
                                    <p className="text-zinc-300 text-sm md:text-base">
                                        +91 99253 60354
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-5 w-5 text-[#C5A25D]" />
                                    <p className="text-zinc-300 text-sm md:text-base">
                                        edonceramic@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar with Watermark */}
            <div className="w-full bg-black py-8 relative overflow-hidden flex items-center justify-center min-h-[120px] border-t border-zinc-900">
                {/* Watermark Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="font-heading font-black text-[15vw] leading-none text-white/5 whitespace-nowrap tracking-tighter">
                        TILES & BATHWARE
                    </span>
                </div>

                {/* Copyright Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-2">
                        <span>© {new Date().getFullYear()} – All rights reserved by Edon Ceramics</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
