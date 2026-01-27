import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "Edon Ceramics Tiles transformed our living room. The quality of the porcelain is unmatched, and the delivery was seamless. Highly recommended for any renovation project.",
        author: "Sarah Jenkins",
        role: "Interior Designer",
        rating: 5,
    },
    {
        id: 2,
        content: "The variety of textures and finishes available is incredible. We found the perfect stone-look tiles for our patio. The showroom staff was incredibly helpful.",
        author: "Michael Ross",
        role: "Homeowner",
        rating: 5,
    },
    {
        id: 3,
        content: "As a contractor, I value reliability and quality. Luxe Tiles delivers both consistently. Their Marmo Luxe collection is a favorite among my clients.",
        author: "James Carter",
        role: "Architect",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Hear From Our Clients
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We take pride in bringing visions to life. Here is what our community has to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <Card key={t.id} className="border-none shadow-lg bg-card/50">
                            <CardContent className="pt-6">
                                <div className="flex gap-1 mb-4 text-primary">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="fill-current w-5 h-5" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                                    "{t.content}"
                                </p>
                            </CardContent>
                            <CardFooter>
                                <div>
                                    <p className="font-semibold text-foreground">{t.author}</p>
                                    <p className="text-sm text-primary">{t.role}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
