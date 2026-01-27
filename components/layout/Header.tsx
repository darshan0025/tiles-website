"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tiles", href: "/products" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact Us", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-black border-b border-white/10 shadow-sm py-2"
                    : "bg-transparent py-2"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-16 w-48">
                        <Image
                            src="/logo_v2.png"
                            alt="Edon Ceramics"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Hamburger Menu (Universal) */}
                <div className="flex items-center gap-4">

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-[#C5A25D] transition-colors duration-300 h-16 w-16 rounded-full">
                                {/* Custom Staggered Menu Icon */}
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                >
                                    <line x1="8" x2="40" y1="6" y2="6" />
                                    <line x1="2" x2="40" y1="12" y2="12" />
                                    <line x1="12" x2="40" y1="18" y2="18" />
                                </svg>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[90vw] sm:w-[500px] border-l border-zinc-800 bg-black text-white p-0">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <div className="h-full flex flex-col p-8 overflow-y-auto">
                                <div className="flex justify-end mb-8">
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="text-white hover:text-[#C5A25D] h-10 w-10">
                                            <X className="h-8 w-8" />
                                        </Button>
                                    </SheetClose>
                                </div>
                                <div className="flex flex-col gap-12 mt-4">
                                    <div className="relative h-16 w-56 mb-4">
                                        <Image
                                            src="/logo_v2.png"
                                            alt="Edon Ceramics"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <nav className="flex flex-col gap-6">
                                        {navItems.map((item) => (
                                            <SheetClose asChild key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "font-heading text-3xl font-bold tracking-wide transition-colors hover:text-[#C5A25D]",
                                                        pathname === item.href
                                                            ? "text-[#C5A25D]"
                                                            : "text-white"
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </nav>

                                    <div className="space-y-6 pt-6 ">
                                        <div className="space-y-2">
                                            <h4 className="font-heading text-2xl font-bold text-[#C5A25D] border-b border-[#C5A25D] pb-2 mb-4 w-fit pr-12">
                                                Contact Details
                                            </h4>
                                            <div className="space-y-4 text-zinc-300">
                                                <div className="flex items-center gap-3">
                                                    <Phone className="h-5 w-5 text-[#C5A25D]" />
                                                    <span>+91 99253 60354</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Mail className="h-5 w-5 text-[#C5A25D]" />
                                                    <span>edonceramic@gmail.com</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <MapPin className="h-5 w-5 text-[#C5A25D] mt-1" />
                                                    <span>
                                                        C/O 8-A National Highway, <br />
                                                        Opp. Honest Hotel, Real Plaza-1, <br />
                                                        Shop No.37/38, Lalpar, <br />
                                                        Morbi, Gujarat - 363642
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
