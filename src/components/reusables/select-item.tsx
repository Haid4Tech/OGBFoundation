import React, { FC, SetStateAction, Dispatch, ReactElement } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClipLoader } from "react-spinners";

interface selectItems {
  items: {
    label: string;
    icon: ReactElement;
  };
}

interface ISelectComp {
  placeholder: string;
  selected: string | undefined;
  onSelect: Dispatch<SetStateAction<string | undefined>>;
  items?: string[];
  itemsWIcons?: selectItems[];
  identifier?: string;
}

const SelectComp: FC<ISelectComp> = ({
  placeholder,
  items,
  selected,
  onSelect,
  identifier,
  itemsWIcons,
}) => {
  return (
    <div>
      <Select value={selected} onValueChange={onSelect}>
        <SelectTrigger
          className={
            "w-full border-1 border-gray-300 cursor-pointer rounded-sm capitalize"
          }
        >
          {identifier && <p className={"text-sm font-light"}>{identifier}:</p>}

          <SelectValue className={"text-sm"} placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {itemsWIcons && itemsWIcons.length === 0 ? (
            <ClipLoader className="self-center" size={16} />
          ) : (
            itemsWIcons &&
            itemsWIcons.map(({ items }, index) => (
              <SelectItem
                className={"flex flex-row gap-1 capitalize cursor-pointer"}
                key={index}
                value={items.label}
              >
                {items.icon}
                <p className="text-xs">{items.label}</p>
              </SelectItem>
            ))
          )}

          {items && items.length === 0 ? (
            <ClipLoader className="self-center" size={16} />
          ) : (
            items &&
            items.map((item, index) => (
              <SelectItem
                className={
                  "flex flex-row gap-1 capitalize cursor-pointer text-xs"
                }
                key={index}
                value={item}
              >
                {item}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default React.memo(SelectComp);
