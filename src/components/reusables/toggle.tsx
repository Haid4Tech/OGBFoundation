import { FC } from "react";
import { cn } from "@/lib/utils";
import { EventToogleItem } from "@/common/enums";
import { List, CalendarDays } from "lucide-react";

const ToggleTabs: FC<{
  onSelect: (option: EventToogleItem) => void;
  selected: EventToogleItem;
}> = ({ onSelect, selected }) => {
  return (
    <div className="flex flex-row gap-1 bg-gray-100 p-1 w-fit rounded-sm">
      <button
        onClick={() => onSelect(EventToogleItem.LIST)}
        className={cn(
          "cursor-pointer hover:bg-white rounded-sm py-[0.2px] px-4 flex flex-row items-center gap-1",
          selected === EventToogleItem.LIST ? "bg-white" : ""
        )}
      >
        <List size={16} />
        <p className="text-xs">List</p>
      </button>
      <button
        onClick={() => onSelect(EventToogleItem.CALENDAR)}
        className={cn(
          "cursor-pointer hover:bg-white rounded-sm py-2 px-4 flex flex-row gap-1",
          selected === EventToogleItem.CALENDAR ? "bg-white" : ""
        )}
      >
        <CalendarDays size={16} />
        <p className="text-xs">Calendar</p>
      </button>
    </div>
  );
};

export default ToggleTabs;

{
  /* <div>
        <div className="flex flex-row gap-5 bg-gray-100 p-2 px-4 w-fit rounded-sm">
          <div className="flex flex-row items-center gap-1">
            <List size={16} />
            <p className="text-sm">List</p>
          </div>
          <div className="flex flex-row gap-1">
            <CalendarDays size={16} />
            <p className="text-sm">Calendar</p>
          </div>
        </div>
        <div></div>
      </div> */
}
