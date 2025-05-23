import { InputHTMLAttributes } from "react";
import { IFieldItems } from "@/common/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ILabeledInput extends InputHTMLAttributes<HTMLInputElement> {
  items: IFieldItems;
}

export default function LabeledInput({ items, ...rest }: ILabeledInput) {
  return (
    <div className={"grid w-full items-center gap-3"}>
      <Label className={"capitalize text-sm"} htmlFor={items.htmlfor}>
        {items.label}
      </Label>
      <Input
        autoComplete={items.id}
        id={items.id}
        type={items.type}
        placeholder={items.placeholder}
        {...rest}
      />
    </div>
  );
}
