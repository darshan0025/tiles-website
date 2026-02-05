import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Helper for Google Drive direct download links
const getDirectDriveLink = (fileId: string) => {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

// Normalized data structure: Items now use 'fileId' for direct downloads
const catalogSections = [
    {
        title: "600 x 1200 GVT",
        items: [
            { name: "Endless Glossy (600x1200)", fileId: "INSERT_FILE_ID_HERE" },
            { name: "Matt Finish (600x1200)", fileId: "INSERT_FILE_ID_HERE" },
            { name: "Carving Series (600x1200)", fileId: "INSERT_FILE_ID_HERE" }
        ]
    },
    {
        title: "600 x 1200",
        items: [
            { name: "3D Series (600x1200)", fileId: "INSERT_FILE_ID_HERE" },
            { name: "Wood Series (600x1200)", fileId: "INSERT_FILE_ID_HERE" },
            { name: "Colorado Series (600x1200)", fileId: "INSERT_FILE_ID_HERE" },
            { name: "Double Charge (600x1200)", fileId: "INSERT_FILE_ID_HERE" },
            { name: "Gold Series (600x1200)", fileId: "INSERT_FILE_ID_HERE" }
        ]
    },
    {
        title: "2 x 2 Parking",
        items: [
            { name: "2X2 Plain Series", fileId: "INSERT_FILE_ID_HERE" },
            { name: "2X2 Punch Vol-1", fileId: "INSERT_FILE_ID_HERE" }
        ]
    },
    {
        title: "Sanitary Wares",
        items: [
            { name: "Sanitary Wares Collection", fileId: "INSERT_FILE_ID_HERE" }
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
                                            <a
                                                href={item.fileId === "INSERT_FILE_ID_HERE" ? "#" : getDirectDriveLink(item.fileId)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
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
