import { useState, useEffect, useRef } from "react";
import { Images } from "@/common/data";
import { ImageProp } from "@/common/types";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";

interface IYearsGallery {
  className?: string;
}

export default function YearsGallery({ className }: IYearsGallery) {
  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>(
    {}
  );
  const [scrollTargetYear, setScrollTargetYear] = useState<number | null>(null);

  function groupImagesByYears(images: ImageProp[]) {
    return images.reduce((acc: Record<number, ImageProp[]>, image) => {
      const year = dayjs(image.dateAdded).year();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(image);
      return acc;
    }, {});
  }

  const groupedImages = groupImagesByYears(Images);

  const toggleYear = (year: number) => {
    const isExpanding = !expandedYears[year];

    setExpandedYears((prev) => ({
      ...prev,
      [year]: isExpanding,
    }));

    if (isExpanding) {
      setScrollTargetYear(year);
    }
  };

  // Scroll into view after render
  useEffect(() => {
    if (scrollTargetYear !== null) {
      const section = sectionRefs.current[scrollTargetYear];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setScrollTargetYear(null);
    }
  }, [expandedYears, scrollTargetYear]);

  return (
    <div className={cn("flex flex-col gap-8")}>
      <div className="flex flex-row flex-wrap gap-4 pb-4">
        {Object.entries(groupedImages).map(([yearStr, images]) => {
          const year = parseInt(yearStr);
          const image = images[0];

          return (
            <div
              key={year}
              className="relative cursor-pointer w-fit md:w-[280px]"
              onClick={() => toggleYear(year)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0acc] to-transparent rounded-md" />
              <img
                className="rounded-md w-full h-[250px] object-cover"
                src={image.Image}
                alt={image.alt}
              />
              <div className="absolute top-3 left-3">
                <p className="text-lg font-black text-white">{year}</p>
              </div>
            </div>
          );
        })}
      </div>

      {Object.entries(groupedImages).map(([yearStr, images]) => {
        const year = parseInt(yearStr);
        const isExpanded = expandedYears[year];

        if (!isExpanded) return null;

        return (
          <div
            ref={(el) => {
              sectionRefs.current[year] = el;
            }}
            key={year}
            className={cn(className, "flex flex-col gap-4 py-4")}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="text-primary text-lg md:text-xl font-bold">
                {year}
              </div>
              <button
                className="font-bold text-sm text-primary hover:underline mt-2 cursor-pointer"
                onClick={() => toggleYear(year)}
              >
                Show less
              </button>
            </div>
            <div className="flex flex-row flex-wrap gap-4 min-w-full">
              {images.map((item, index) => (
                <div key={index} className="relative">
                  <img
                    className="rounded-md md:min-w-52 w-full h-[350px] object-cover object-top"
                    src={item.Image}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
