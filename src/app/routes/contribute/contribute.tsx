import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";
import FoundationImg from "@/assets/images/foundation/OMAAfoundation_cropped.jpg";
// import DonationForm from "@/components/contribute/donation-form";
import ComingSoon from "@/components/reusables/coming-soon";

export default function ContributeScreen() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Navbar colortheme={"light"} />
      <div className={"flex flex-row items-center justify-center"}>
        <div className="flex flex-col gap-2 text-center w-full md:max-w-lg lg:max-w-4xl">
          <p className={"text-sm md:text-base font-semibold text-primary"}>
            Together, we can celebrate Mary-Comfort’s life and make a difference
            in her name
          </p>
          <p className={"text-lg md:text-2xl lg:text-3xl font-bold uppercase"}>
            donate today to support this heartfelt tribute to mary-comfort
          </p>
        </div>
      </div>

      <div className="px-2 md:px-12 pt-5">
        <img
          src={FoundationImg}
          alt="OMAA Foundation Team"
          className="w-full h-[450px] object-top object-cover shadow-md"
        />

        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-row-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold mt-6 text-gray-800">
              Make a Difference Today
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              At OMAA Foundation, we believe that everyone deserves a chance to
              live a life of dignity, hope, and opportunity. Our foundation is
              dedicated to supporting individuals and communities in need,
              whether through providing essential resources, organising outreach
              events, or creating programs that empower people to thrive. Your
              donation helps us extend a helping hand to those who need it most,
              whether it’s families struggling to make ends meet, individuals
              facing hardship, or communities in need of support. Together, we
              can make a tangible difference in the lives of those who are often
              overlooked or forgotten.
            </p>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Your generosity has the power to transform lives and uplift entire
              communities. Every contribution we receive goes directly toward
              initiatives that provide food, shelter, education, healthcare, and
              other critical resources to people in need. By donating today, you
              become a part of a movement that values compassion, equality, and
              the belief that no one should be left behind. No matter the size
              of your gift, it helps us create a brighter future for those who
              need it most. Join us in making a lasting impact, donate now and
              help us bring hope and opportunity to people in need.
            </p>
          </div>

          {/* Right Side: Donation Form */}
          {/* <DonationForm /> */}
          <ComingSoon />
        </div>
      </div>
      <Footer />
    </div>
  );
}
