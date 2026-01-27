"use client";

import { PageHero } from "@/components/layout/PageHero";
import { products, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Card Carousel Component
function ProductImageSlider({ images, name }: { images: string[]; name: string }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {images.map((src, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-[16/9]">
                        <Image
                            src={src}
                            alt={`${name} - View ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Lightbox Carousel Component
function LightboxCarousel({ images, name }: { images: string[]; name: string }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    return (
        <div className="relative group/lightbox">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[80vh]">
                            <Image
                                src={src}
                                alt={`${name} - View ${index + 1}`}
                                fill
                                className="object-contain" // Use contain for lightbox to see full image
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            >
                <ChevronRight className="h-8 w-8" />
            </button>
        </div>
    );
}

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

    // Shuffle products on mount to give a "mixed" look
    const [shuffledProducts, setShuffledProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Simple Fisher-Yates shuffle
        const shuffled = [...products];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledProducts(shuffled);
    }, []);

    const toggleFilter = (filter: string) => {
        setSelectedFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    const applyFilters = () => {
        setAppliedFilters(selectedFilters);
    };

    const filteredProducts = shuffledProducts.filter(product => {
        // Search Filter
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Series Filter
        if (appliedFilters.length === 0) return matchesSearch;

        const matchesFilter = appliedFilters.some(filter => {
            if (filter === "Carving") return product.category === "Carving Series";
            if (filter === "3D") return product.category === "3D Series";
            if (filter === "Glossy") return product.features.some(f => f.toLowerCase().includes("gloss") || f === "High Gloss Finish");
            if (filter === "Golden") return product.category === "Golden Series";
            return false;
        });

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="bg-zinc-50 min-h-screen">
            <PageHero
                title="Tiles"
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Sidebar - Filters */}
                    <div className="w-full lg:w-1/4 space-y-8 bg-[#f0f4f8] p-6 h-fit rounded-sm">
                        <div className="border-b border-zinc-300 pb-2">
                            <h2 className="font-heading text-xl font-bold text-slate-800">Filters</h2>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-600">Search</label>
                            <Input
                                placeholder="Search Tiles"
                                className="bg-white border-zinc-200 focus-visible:ring-[#C5A25D]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-slate-600">Series</label>
                            <div className="space-y-3">
                                {["Carving", "Glossy", "Golden", "3D"].map((filter) => (
                                    <div key={filter} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={filter.toLowerCase()}
                                            checked={selectedFilters.includes(filter)}
                                            onCheckedChange={() => toggleFilter(filter)}
                                        />
                                        <label htmlFor={filter.toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600">
                                            {filter}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button
                            className="w-full bg-[#b08d55] hover:bg-[#967642] text-white uppercase tracking-widest font-bold py-6 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none shadow-md"
                            onClick={applyFilters}
                        >
                            APPLY FILTER
                        </Button>
                    </div>

                    {/* Right Content - Product Grid */}
                    <div className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => setSelectedProduct(product)}
                                    className="group block bg-white hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden border border-zinc-100 cursor-pointer"
                                >
                                    {/* Image Area */}
                                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                                        {product.images && product.images.length > 1 ? (
                                            <ProductImageSlider images={product.images} name={product.name} />
                                        ) : (
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        )}
                                    </div>

                                    {/* Simple Footer */}
                                    <div className="p-4 text-center ">
                                        <h3 className="font-bold text-slate-800 text-lg group-hover:text-[#C5A25D] transition-colors">
                                            {product.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 text-muted-foreground">
                                No products found matching your criteria.
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Lightbox Dialog */}
            <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
                <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-none overflow-hidden h-screen sm:h-[90vh] flex flex-col justify-center">
                    <DialogTitle className="sr-only">Image Preview</DialogTitle>

                    <button
                        onClick={() => setSelectedProduct(null)}
                        className="absolute right-4 top-4 z-50 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        {selectedProduct && (
                            selectedProduct.images && selectedProduct.images.length > 1 ? (
                                <div className="w-full max-w-5xl">
                                    <LightboxCarousel images={selectedProduct.images} name={selectedProduct.name} />
                                </div>
                            ) : (
                                <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                                    <Image
                                        src={selectedProduct?.image || ""}
                                        alt={selectedProduct?.name || "Product Image"}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
