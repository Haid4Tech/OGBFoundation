import { useState } from "react";
import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";
import ToggleTabs from "@/components/reusables/toggle";
import { ToggleImages, MediaType } from "@/common/enums";
import SelectComp from "@/components/reusables/select-item";
import {
  galleryFilterOptions,
  GalleryListLeft,
  GalleryListRight,
} from "@/common/data";
import { ImageList } from "@/common/data";
import GalleryMasonry from "@/components/gallery/masonry";
import YearsGallery from "@/components/gallery/galleryYears";
import MonthsGallery from "@/components/gallery/galleryMonth";
// import { Button } from "@/components/ui/button";
// import { ImagePlus } from "lucide-react";

const toggleOptions = [
  {
    label: "Years",
    item: ToggleImages.YEARS,
  },
  // {
  //   label: "Months",
  //   item: ToggleImages.MONTHS,
  // },
  {
    label: "Recently Added",
    item: ToggleImages.RECENTLYADDED,
  },
];

export default function GalleryScreen() {
  const [toggleImage, setToggleImage] = useState<ToggleImages>(
    ToggleImages.YEARS
  );
  // const [sort, setSort] = useState<GallerySortOptions>(
  //   GallerySortOptions.RECENTLYADDED
  // );
  const [filter, setFilter] = useState<MediaType>(MediaType.ALL);

  return (
    <div className="flex flex-col gap-4 scroll-container">
      <div>
        <div className="flex flex-col gap-8 p-4">
          <Navbar colortheme={"light"} />
          <div className={"flex flex-row items-center justify-center"}>
            <div className="flex flex-col gap-2 text-center w-full md:max-w-lg lg:max-w-4xl">
              <p className={"text-sm md:text-base font-semibold text-primary"}>
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
              <div className={"even:hidden md:even:block"} key={index}>
                <img src={item.Image} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-5 md:px-12">
        <div
          className={
            "flex flex-col gap-5 md:flex-row items-center justify-between"
          }
        >
          <ToggleTabs
            toggleItems={toggleOptions}
            selected={toggleImage as ToggleImages}
            onSelect={(item) => setToggleImage(item as ToggleImages)}
          />

          <div className="flex flex-row items-center gap-3">
            {/* <SelectComp
              placeholder={"View Options"}
              identifier={"Sort"}
              itemsWIcons={gallerySortOptions}
              selected={sort}
              onSelect={(item) => setSort(item as GallerySortOptions)}
            /> */}
            <SelectComp
              placeholder={"View Options"}
              identifier={"Filter"}
              itemsWIcons={galleryFilterOptions}
              selected={filter}
              onSelect={(item) => setFilter(item as MediaType)}
            />

            {/* V2 */}
            {/* <Button>
              <ImagePlus className="text-white" />
              <p className="text-sm">Add New Media</p>
            </Button> */}
          </div>
        </div>

        {toggleImage === ToggleImages.RECENTLYADDED && (
          <GalleryMasonry right={GalleryListRight} left={GalleryListLeft} />
        )}
        {toggleImage === ToggleImages.YEARS && <YearsGallery />}
        {toggleImage === ToggleImages.MONTHS && <MonthsGallery />}
      </div>

      <Footer />
    </div>
  );
}
