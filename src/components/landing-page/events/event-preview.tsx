import EventItem from "./event-item";
import { cn } from "@/lib/utils";

export default function EventPreview() {
  const events = [
    {
      date: new Date(),
      label: "Mary Comfort's Memorial Day",
      location: "Our Lady Queen of Nigeria Pro Cathedral, Garki II, Abuja",
    },
  ];
  return (
    <div className="flex flex-col gap-5 px-5 md:px-8 lg:px-12 py-24">
      <p className={cn("uppercase font-bold text-lg lg:text-2xl")}>
        upcoming events
      </p>

      <div className="flex flex-col gap-5 md:gap-8 divide-y-1 divide-gray-200">
        {[...events, ...events].map(({ date, label, location }, index) => {
          return (
            <EventItem
              key={index}
              date={date}
              label={label}
              location={location}
              triggerSignUp={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}
