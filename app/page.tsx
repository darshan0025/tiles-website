import { Hero } from "@/components/home/Hero";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Testimonials } from "@/components/home/Testimonials";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { ExportSection } from "@/components/home/ExportSection";
import { HomeGallery } from "@/components/home/HomeGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <div className="bg-zinc-50">
        <AboutSnippet />
      </div>
      <FeaturesGrid />
      <HomeGallery />
      <ExportSection />
    </div>
  );
}
