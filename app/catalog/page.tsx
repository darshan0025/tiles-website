import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Normalized data structure: All items are objects
const catalogSections = [
    {
        title: "600 x 1200 GVT",
        items: [
            { name: "Endless Glossy (600x1200)", file: "/600X1200 GVT/Endless Glossy - 600 x 1200 mm  WO Logo.pdf" },
            { name: "Matt Finish (600x1200)", file: "/600X1200 GVT/Matt 600X1200mm WO Logo.pdf" },
            { name: "Carving Series (600x1200)", file: "/600X1200 GVT/Carving - 600 x1200MM WO Logo.pdf" }
        ]
    },
    {
        title: "600 x 1200",
        items: [
            { name: "3D Series (600x1200)", file: "/600X1200 GVT/3D 600x1200mm WO Logo.pdf" },
            { name: "Wood Series (600x1200)", file: "/600X1200 GVT/Wood Series - 600x1200mm WO Logo.pdf" },
            { name: "Colorado Series (600x1200)", file: "/600X1200 GVT/Colorado 600x1200mm WO Logo.pdf" },
            { name: "Double Charge (600x1200)", file: "/600X1200 GVT/Double Charge_600x1200mm WO Logo.pdf" },
            { name: "Gold Series (600x1200)", file: "/600X1200 GVT/GOLD 2x4.pdf" }
        ]
    },
    {
        title: "2 x 2 Parking",
        items: [
            { name: "2X2 Plain Series", file: "/2X2 Parking/2X2 PLAIN_SERIES.pdf" },
            { name: "2X2 Punch Vol-1", file: "/2X2 Parking/2X2 PUNCH VOL-1.pdf" }
        ]
    },
    {
        title: "Sanitary Wares",
        items: [
            { name: "Sanitary Wares Collection", file: "/Sanitary wares/Sanitary Wares.pdf" }
        ]
    },
];

export default function CatalogPage() {
    return (
        <div className="bg-background min-h-screen">
            <PageHero
                title="Catalogues"
                backgroundImage="/Carving/ALICE NERO (2).png"
            />

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="max-w-6xl mx-auto space-y-20">
                    {catalogSections.map((section) => (
                        <div key={section.title} className="space-y-8">
                            {/* Section Header */}
                            <h2 className="font-heading text-3xl font-bold text-[#C5A25D] uppercase tracking-wide border-l-4 border-[#C5A25D] pl-4">
                                {section.title}
                            </h2>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, index) => (
                                    <div key={index} className="bg-zinc-50 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                                        {/* Icon Container */}
                                        <div className="mb-6 relative">
                                            <FileText className="h-20 w-20 text-slate-400 stroke-1" />
                                            {/* Green check mimic */}
                                            <div className="absolute bottom-0 right-0 bg-transparent">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-bold text-gray-800 text-lg mb-6 truncate w-full">
                                            {item.name}
                                        </h3>

                                        {/* Download Button */}
                                        <Button
                                            asChild
                                            className="bg-[#b08d55] hover:bg-[#967642] text-white uppercase tracking-widest text-xs font-bold px-8 py-2 h-auto rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none shadow-sm w-fit"
                                        >
                                            <a href={item.file} download target="_blank" rel="noopener noreferrer">
                                                DOWNLOAD
                                            </a>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
