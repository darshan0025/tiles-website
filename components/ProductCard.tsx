import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    image: string;
    price?: string;
    isNew?: boolean;
}

export function ProductCard({ id, name, category, image, price, isNew }: ProductCardProps) {
    return (
        <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-card hover:-translate-y-1">
            <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isNew && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg animate-zoom-in">
                        New Arrival
                    </Badge>
                )}
            </div>
            <CardHeader className="p-4 pb-2 relative z-10 bg-card transition-colors group-hover:bg-muted/30">
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{category}</p>
                <h3 className="font-heading text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{name}</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 relative z-10 bg-card group-hover:bg-muted/30">
                {price && <p className="text-lg font-semibold text-primary">{price}</p>}
            </CardContent>
            <CardFooter className="p-4 pt-0 relative z-10 bg-card group-hover:bg-muted/30">
                <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Link href={`/products/${id}`}>View Details</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}