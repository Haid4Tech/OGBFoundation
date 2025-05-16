import { Images } from "@/common/data";
import { ImageProp } from "@/common/types";
import { Link } from "react-router";
import dayjs from "dayjs";

export default function MonthsGallery() {
  function groupImagesByMonth(images: ImageProp[]) {
    return images.reduce((acc: Record<number, ImageProp[]>, image) => {
      const date = new Date(image.dateAdded);
      const month = dayjs(date).month(); // Use zero-based month index

      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(image);
      return acc;
    }, {});
  }

  const groupedImages = groupImagesByMonth(Images);

  return (
    <div className="flex flex-col gap-4">
      <div>
        {Object.entries(groupedImages).map(([month, images], index) => (
          <div className={"flex flex-col gap-4"} key={index}>
            <div className={"flex flex-row items-center justify-between"}>
              <p className="font-bold text-sm">
                {dayjs(`${month}`).format("MMM")}
              </p>
              <Link className={"text-sm font-bold underline"} to={""}>
                View More
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-fit">
              {images.slice(0, 5).map((item, index) => (
                <div
                  className="md:first:col-span-2 md:first:row-span-2 md:first:h-[31rem] h-[15rem]"
                  key={index}
                >
                  <img
                    className="w-full first:h-full object-top object-cover first:object-center rounded-md"
                    src={item.Image}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
