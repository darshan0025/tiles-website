import { PageHero } from "@/components/layout/PageHero";
import Image from "next/image";

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666", category: "Showroom" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670", category: "Factory" },
    { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2669", category: "Exhibition" },
    { src: "https://images.unsplash.com/photo-1618221195710-9238e14ca8db?q=80&w=2574", category: "Showroom" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670", category: "Projects" },
    { src: "https://images.unsplash.com/photo-1595428774333-e02fb322a36d?q=80&w=2666", category: "Factory" },
];

export default function GalleryPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHero
                title="Our Gallery"
                backgroundImage="https://images.unsplash.com/photo-1512404090264-e400192e4be0?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                            <Image
                                src={img.src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-heading text-xl font-bold tracking-wide border-2 border-[#C5A25D] px-6 py-2 uppercase">
                                    {img.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
