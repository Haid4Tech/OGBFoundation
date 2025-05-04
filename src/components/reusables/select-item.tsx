import React, { FC, SetStateAction, Dispatch } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClipLoader } from "react-spinners";

interface ISelectComp {
  placeholder: string;
  items: string[];
  selected: string | undefined;
  onSelect: Dispatch<SetStateAction<string | undefined>>;
}

const SelectComp: FC<ISelectComp> = ({
  placeholder,
  items,
  selected,
  onSelect,
}) => {
  return (
    <div>
      <Select value={selected} onValueChange={onSelect}>
        <SelectTrigger
          className={
            "w-full min-w-30 border-1 border-gray-300 cursor-pointer rounded-sm capitalize"
          }
        >
          <SelectValue className={"capitalize"} placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.length === 0 ? (
            <ClipLoader className="self-center" size={16} />
          ) : (
            items.map((item, index) => (
              <SelectItem className={"capitalize"} key={index} value={item}>
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
