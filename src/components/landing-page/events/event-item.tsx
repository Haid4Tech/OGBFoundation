import dayjs from "dayjs";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IEventItem {
  date: Date;
  label: string;
  location: string;
  triggerSignUp: () => void;
}

export default function EventItem({
  date,
  label,
  location,
  triggerSignUp,
}: IEventItem) {
  const formatDay = dayjs(date).format("dddd");
  const formatDate = dayjs(date).format("d");
  const formatMonYear = dayjs(date).format("MMMM YYYY");

  return (
    <div
      className={"flex flex-row items-center justify-between w-full space-y-8"}
    >
      <div className={"flex flex-row items-center gap-2 md:gap-5"}>
        <div className="flex flex-col items-center justify-center p-2 gap-1 border border-gray-200 rounded-sm">
          <p className={"text-xs font-light"}>{formatDay}</p>
          <p className="font-bold text-base md:text-xl">{formatDate}</p>
          <p className={"text-xs font-light text-nowrap"}>{formatMonYear}</p>
        </div>

        <div className={cn("flex flex-col gap-3")}>
          <p className={cn("text-base md:text-lg font-semibold")}>{label}</p>
          <div className="flex flex-row gap-1 md:gap-2 lg:items-center">
            <MapPin className="text-gray-300" size={18} />
            <p className={"text-sm md:text-base font-thin"}>{location}</p>
          </div>
        </div>
      </div>

      <Button
        className={cn("text-sm md:text-base")}
        onClick={triggerSignUp}
        variant={"outline"}
      >
        Sign up
      </Button>
    </div>
  );
}
