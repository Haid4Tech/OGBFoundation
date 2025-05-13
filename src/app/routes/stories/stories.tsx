import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";

export default function StoriesScreen() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Navbar colortheme={"dark"} />
      <div>Stories</div>
      <Footer />
    </div>
  );
}
