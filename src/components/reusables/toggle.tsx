import { FC, ReactElement } from "react";
import { cn } from "@/lib/utils";
import { EventToogleItem, ToggleImages } from "@/common/enums";

interface ToggleItems {
  label: string;
  item: ToggleImages | EventToogleItem;
  Icon?: ReactElement;
}

const ToggleTabs: FC<{
  toggleItems: Array<ToggleItems>;
  onSelect: (option: EventToogleItem | ToggleImages) => void;
  selected: EventToogleItem | ToggleImages;
}> = ({ toggleItems, onSelect, selected }) => {
  return (
    <div className="flex flex-row gap-1 bg-gray-100 p-1 w-fit rounded-sm">
      {toggleItems.map(({ label, item, Icon }, index) => (
        <button
          key={index}
          onClick={() => onSelect(item as EventToogleItem)}
          className={cn(
            "cursor-pointer hover:bg-white rounded-sm py-2 px-4 flex flex-row items-center gap-1",
            selected === item ? "bg-white" : ""
          )}
        >
          {Icon}
          <p className="text-xs">{label}</p>
        </button>
      ))}
    </div>
  );
};

export default ToggleTabs;
