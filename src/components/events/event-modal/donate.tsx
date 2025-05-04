import { useState } from "react";
import LabeledInput from "@/components/reusables/input-comp";
import { Button } from "@/components/ui/button";

interface IDonateInputProps {
  firstname: string;
  email: string;
  amount: number;
}

const donateInputValues = {
  firstname: "",
  email: "",
  amount: 0,
};

export const DonateEvent = () => {
  const [steps, setSteps] = useState<number>(0);
  const [donateInput, setDonateInput] =
    useState<IDonateInputProps>(donateInputValues);

  return (
    <div className="flex flex-col gap-3">
      <div className="border border-gray-400 pb-4">
        <p className="font-bold text-xl">
          {steps === 0 && "Donate to Event"} {steps === 1 && "Summary"}
        </p>
      </div>

      {steps === 0 && (
        <div className="flex flex-col gap-3">
          <LabeledInput
            items={{
              id: "firstname",
              label: "First Name",
              placeholder: "First Name",
              type: "text",
              htmlfor: "firstname",
            }}
            value={donateInput.firstname}
            onChange={(e) =>
              setDonateInput((prev) => ({
                ...prev,
                firstname: e.target.value,
              }))
            }
          />

          <LabeledInput
            items={{
              id: "email",
              label: "Email",
              placeholder: "Email",
              type: "email",
              htmlfor: "email",
            }}
            value={donateInput.email}
            onChange={(e) =>
              setDonateInput((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>
      )}

      {steps === 1 && <div></div>}

      <Button>
        {steps === 0 && "Continue"}
        {steps === 1 && "Pay"}
      </Button>
    </div>
  );
};
