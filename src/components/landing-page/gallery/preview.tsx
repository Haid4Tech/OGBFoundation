import { Button } from "@/components/ui/button";
import Img1 from "../../../assets/images/IMG_0264.png";
import Img2 from "../../../assets/images/IMG_0339.png";
import Img3 from "../../../assets/images/IMG_0392.png";
import Img4 from "../../../assets/images/img1.png";
import Img6 from "../../../assets/images/IMG4.png";
import Img7 from "../../../assets/images/IMG_0382.png";

export default function GalleryPreview() {
  return (
    <div className={"flex flex-col gap-5 px-12 py-8"}>
      <div className="flex flex-row items-center justify-between">
        <p className="uppercase font-bold text-2xl">Gallery</p>
        <Button>See more</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto object-cover object-center w-full rounded-lg"
              src={Img6}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto object-cover object-center w-full rounded-lg"
              src={Img2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[15rem] object-cover object-center max-w-full rounded-lg"
              src={Img1}
              alt=""
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-auto object-cover object-center w-auto rounded-lg"
              src={Img7}
              alt=""
            />
          </div>
          <div className="flex flex-row gap-3">
            <img
              className="h-auto object-cover object-center max-w-full rounded-lg"
              src={Img3}
              alt=""
            />
            <img
              className="hidden md:block h-auto object-cover object-center max-w-fit rounded-lg"
              src={Img4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
