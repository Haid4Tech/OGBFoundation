import Navbar from "@/components/navigation/menubar";
import HeroBG from "../../../assets/landing/hero-bg.png";

export default function Hero() {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-900 bg-cover bg-top bg-no-repeat brightness-50"
          style={{
            backgroundImage: `url(${HeroBG})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0acc] to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              OGBENYI MARY-COMFORT
            </h1>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              ANASTASIA AGI
            </h2>
            <div className="flex flex-row gap-3 md:gap-5 justify-center items-center py-8">
              <p className="text-base md:text-xl text-white">2000</p>
              <div className="h-px bg-white w-[15rem] md:w-[30rem]"></div>
              <p className="text-base md:text-xl text-white">2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
