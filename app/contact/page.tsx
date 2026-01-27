import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHero
                title="Contact Us"
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Get In Touch</h2>

                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-[#C5A25D] shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Showroom & Office</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    C/O 8-A National Highway,<br />
                                    Opp. Honest Hotel, Real Plaza-1,<br />
                                    Shop No.37/38, Lalpar,<br />
                                    Morbi, Gujarat - 363642
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-[#C5A25D] shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                <p className="text-muted-foreground">+91 99253 60354</p>
                                <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9am - 7pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 text-[#C5A25D] shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email</h3>
                                <p className="text-muted-foreground">edonceramic@gmail.com</p>
                                <p className="text-sm text-muted-foreground mt-1">Typical response time: 24 hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-50 p-8 rounded-lg shadow-sm border border-border">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                            </div>
                            <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}