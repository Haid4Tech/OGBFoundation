import BannerImg from "@/assets/landing/donate-bg.png";
import { Button } from "@/components/ui/button";

export default function DonateBanner() {
  return (
    <div className="relative min-h-[30rem] w-full overflow-hidden">
      <div
        className={
          "grid lg:grid-cols-2 items-center px-5 md:px-12 p-8 bg-cover bg-center h-[30rem]"
        }
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0ae6] via-[#0a0a0acc] to-transparent"></div>
        <div className="relative z-10">
          <div className="flex flex-col gap-6 px-5">
            <p className="text-white text-2xl uppercase font-black">
              Donate to spread love to those who need it
            </p>
            <p className="text-lg text-white">
              Your donation fuels our mission to bring joy and support to people
              who need it the most and to spread the warmth and love that we
              once shared with Ogbenyi.
            </p>
            <Button className={"w-fit"} type="submit">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
