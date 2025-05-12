import { useState } from "react";
import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";
import ToggleTabs from "@/components/reusables/toggle";
import {
  ToggleImages,
  GallerySortOptions,
  GalleryFilterOptions,
} from "@/common/enums";
import SelectComp from "@/components/reusables/select-item";
import { gallerySortOptions, galleryFilterOptions } from "@/common/data";
import { ImageList } from "@/common/data";
// import { Button } from "@/components/ui/button";
// import { ImagePlus } from "lucide-react";

const toggleOptions = [
  {
    label: "Years",
    item: ToggleImages.YEARS,
  },
  {
    label: "Months",
    item: ToggleImages.MONTHS,
  },
  {
    label: "Recently Added",
    item: ToggleImages.RECENTLYADDED,
  },
];

export default function GalleryScreen() {
  const [toggleImage, setToggleImage] = useState<ToggleImages>(
    ToggleImages.YEARS
  );
  const [sort, setSort] = useState<GallerySortOptions>(
    GallerySortOptions.RECENTLYADDED
  );
  const [filter, setFilter] = useState<GalleryFilterOptions>(
    GalleryFilterOptions.ALL
  );

  console.log("Sort ", sort);
  console.log("Toggle ", toggleImage);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex flex-col gap-8 p-4">
          <Navbar colortheme={"dark"} />
          <div className={"flex flex-row items-center justify-center"}>
            <div className="flex flex-col gap-2 text-center w-full md:max-w-lg lg:max-w-4xl">
              <p className={"font-semibold"}>
                Mary-Comfort: A Life Celebrated Through Media and Stories
              </p>
              <p
                className={
                  "text-lg md:text-2xl lg:text-3xl font-bold uppercase"
                }
              >
                CELEBRATE MARY-COMFORT’S LIFE THROUGH SHARED MOMENTS AND MEDIA
              </p>
            </div>
          </div>
        </div>

        <div className="image-grid-wrapper">
          <div className="image-grid">
            {ImageList.map((item, index) => (
              <div key={index}>
                <img src={item.Image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-12">
        <div className={"flex flex-row items-center justify-between"}>
          <ToggleTabs
            toggleItems={toggleOptions}
            selected={toggleImage as ToggleImages}
            onSelect={(item) => setToggleImage(item as ToggleImages)}
          />

          <div className="flex flex-row items-center gap-3">
            <SelectComp
              placeholder={"View Options"}
              identifier={"Sort"}
              itemsWIcons={gallerySortOptions}
              selected={sort}
              onSelect={(item) => setSort(item as GallerySortOptions)}
            />
            <SelectComp
              placeholder={"View Options"}
              identifier={"Filter"}
              itemsWIcons={galleryFilterOptions}
              selected={filter}
              onSelect={(item) => setFilter(item as GalleryFilterOptions)}
            />

            {/* V2 */}
            {/* <Button>
              <ImagePlus className="text-white" />
              <p className="text-sm">Add New Media</p>
            </Button> */}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
