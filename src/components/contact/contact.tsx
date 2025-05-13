import Forms from "./form";
import ContactImg from "@/assets/landing/contact-img.png";

export default function ContactUs() {
  return (
    <div
      className="grid grid-cols-2 gap-5 p-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${ContactImg})` }}
    >
      <div className="flex flex-col gap-5 py-8">
        <p className="uppercase font-black text-2xl">Contact us</p>
        <p>
          This is the official Ogbenyi Mary-Comfort Anastasia (OMAA) website
          built by her friends. The purpose of the website is to preserve and
          promote the memory of Ogbenyi Mary-Comfort Anastasia.{" "}
        </p>
      </div>

      <div>
        <Forms />
      </div>
    </div>
  );
}
