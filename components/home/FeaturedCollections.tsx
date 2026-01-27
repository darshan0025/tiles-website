import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export function FeaturedCollections() {
    const collections = products.slice(0, 4);

    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 animate-fade-up opacity-0 [animation-delay:100ms]">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
                            Curated Collections
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Explore our hand-picked selection of tiles that define luxury and durability.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="hidden md:flex gap-2 animate-slide-in-right opacity-0 [animation-delay:300ms]">
                        <Link href="/products">View All Collections <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map((collection, index) => (
                        <div
                            key={collection.id}
                            className="animate-zoom-in opacity-0"
                            style={{ animationDelay: `${400 + (index * 150)}ms` }}
                        >
                            <ProductCard {...collection} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button asChild variant="outline" className="gap-2 w-full max-w-xs">
                        <Link href="/products">View All Collections <ArrowRight className="h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
