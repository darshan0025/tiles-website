import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Truck } from "lucide-react";
import { getProduct } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} | Edon Ceramics`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                <Link href="/products" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Collections
                </Link>
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    {product.isNew && (
                        <Badge className="absolute top-4 left-4 text-base px-3 py-1">New Arrival</Badge>
                    )}
                </div>

                {/* Product Details */}
                <div className="space-y-8">
                    <div>
                        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                            {product.category}
                        </p>
                        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-semibold text-foreground">{product.price}</p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                        <p>{product.description}</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Key Features:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-border pt-8 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="w-full sm:w-auto text-lg h-12">
                                Request Quote
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12">
                                Order Sample
                            </Button>
                        </div>
                        <p className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
                            <Truck className="h-4 w-4" /> Available for nationwide delivery
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
