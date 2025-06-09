import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import TextAreaComp from "../reusables/textarea-comp";
import { Form } from "@/components/ui/form";
import LabeledInput from "../reusables/input-comp";
import { contactSchema } from "@/schema/contact-schema";

export default function Forms() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-5">
          <LabeledInput
            items={{
              id: "firstname",
              label: "First Name",
              placeholder: "First Name",
              type: "text",
              htmlfor: "firstname",
            }}
          />
          <LabeledInput
            items={{
              id: "lastname",
              label: "Last Name",
              placeholder: "Enter Last Name",
              type: "text",
              htmlfor: "lastname",
            }}
          />
        </div>
        <LabeledInput
          items={{
            id: "email",
            label: "Email",
            placeholder: "Enter Email",
            type: "text",
            htmlfor: "email",
          }}
        />

        <TextAreaComp
          items={{
            id: "message",
            label: "Message",
            placeholder: "Enter Message",
            type: "text",
            htmlfor: "message",
          }}
        />

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
