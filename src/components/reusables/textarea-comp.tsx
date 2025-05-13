import { TextareaHTMLAttributes } from "react";
import { IFieldItems } from "@/common/types";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ITextAreaComp extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  items: IFieldItems;
}

export default function TextAreaComp({ items, ...rest }: ITextAreaComp) {
  return (
    <div className={"grid w-full items-center gap-3"}>
      <Label className={"capitalize text-sm"} htmlFor={items.htmlfor}>
        {items.label}
      </Label>
      <Textarea
        autoComplete={items.id}
        id={items.id}
        placeholder={items.placeholder}
        {...rest}
      />
    </div>
  );
}
