import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";

export default function TimelineScreen() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Navbar colortheme={"dark"} />
      <div>Timeline</div>
      <Footer />
    </div>
  );
}
