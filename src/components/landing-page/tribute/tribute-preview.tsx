import { cn } from "@/lib/utils";
import TributeItem from "./tribute-item";
import { Button } from "@/components/ui/button";
import Cover from "@/assets/images/2023/ogb_a_home_w_family.jpg";
import Profile from "../../../assets/profile.jpg";

export default function TributePreview() {
  const tribute = [
    {
      cover: Cover,
      title: "Introduction: A Mission of Compassion",
      description:
        "On a sunny Saturday morning, a group of volunteers gathered with one shared goal: to bring joy and support to those in need. Our destination was the Hope Haven Orphanage, a place that houses children who have faced unimaginable challenges in their young lives Alongside this visit, we also organised a charity event to distribute essential supplies to ...",
      profile: {
        profile: Profile,
        fullName: "Kelechi Onyekynbra",
        email: "kes@gmail.com",
        date: new Date(),
      },
    },
  ];
  return (
    <div className={cn("flex flex-col gap-5 px-12 py-8")}>
      <div className={cn("flex flex-row items-center justify-between")}>
        <p className={cn("uppercase font-bold text-2xl")}>
          ogbenyi’s tribute messages
        </p>
        <Button>See More</Button>
      </div>

      <div
        className={cn(
          "flex flex-row gap-4 md:gap-4 overflow-x-auto scrollbar-width snap-x snap-proximity"
        )}
      >
        {[...tribute, ...tribute, ...tribute, ...tribute].map(
          ({ cover, title, description, profile }, index) => {
            return (
              <TributeItem
                className={"min-w-fit md:min-w-[25rem]"}
                key={index}
                cover={cover}
                title={title}
                description={description}
                profile={profile}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
