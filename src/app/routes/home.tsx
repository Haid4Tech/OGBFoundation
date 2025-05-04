import ContactUs from "@/components/contact/contact";
import Footer from "../../components/navigation/footer";
import InMemory from "@/components/landing-page/hero/memory";
import DonateBanner from "@/components/landing-page/banners/donate-banner";
import Hero from "@/components/landing-page/hero/hero";
import GalleryPreview from "@/components/landing-page/gallery/preview";
import EventPreview from "@/components/landing-page/events/event-preview";
import TributePreview from "@/components/landing-page/tribute/tribute-preview";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-5">
      <Hero />
      <InMemory />
      <DonateBanner />
      <EventPreview />
      <TributePreview />
      <GalleryPreview />
      <ContactUs />
      <Footer />
    </div>
  );
}
