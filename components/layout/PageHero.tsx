import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    backgroundImage: string;
    className?: string;
}

export function PageHero({ title, backgroundImage, className }: PageHeroProps) {
    return (
        <section className={cn("relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-zinc-900", className)}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover opacity-60 transition-transform duration-1000 ease-out hover:scale-105"
                    priority
                    quality={90}
                />
            </div>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 container px-4 md:px-6 text-center">
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg capitalize animate-fade-up opacity-0 [animation-delay:200ms]">
                    {title}
                </h1>
                {/* Optional decorative line */}
                <div className="w-24 h-1 bg-[#C5A25D] mx-auto mt-6 rounded-full animate-fade-up opacity-0 [animation-delay:400ms]" />
            </div>
        </section>
    );
}
