import FinalCallToAction from "@/components/FinalCallToAction";
import Footer from "@/components/Footer";
import HeroScrollSequence from "@/components/HeroScrollSequence";
import { Testimonials } from "@/components/Testimonials";
import AboutHero from "@/components/AboutHero";
import SafariExpedition from "@/components/SafariExpedition";
import GallerySection from "@/components/GallerySection";
import InstagramFeedSection from "@/components/InstagramFeedSection";
import RisingBubbles from "@/components/RisingBubbles";
import SmoothScroller from "@/components/SmoothScroller";

export default function Home() {
  return (
    <SmoothScroller enableSnap={true} snapType="proximity">
      <main className="min-h-screen bg-black relative">
        <HeroScrollSequence />
        <AboutHero />
        <SafariExpedition />
        <GallerySection />
        <InstagramFeedSection />
        <Testimonials />
        <FinalCallToAction />
        <RisingBubbles />
        <Footer />
      </main>
    </SmoothScroller>
  );
}
