import React, { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Wallet,
  UserRoundPen,
  HeartHandshake,
} from "lucide-react";
import SelectComp from "@/components/reusables/select-item";

interface EventCardProps {
  id: number | string;
  date: string;
  day: string;
  monthYear: string;
  title: string;
  description: string;
  location: string;
  time: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  date,
  day,
  monthYear,
  title,
  description,
  location,
  time,
}) => {
  const [selected, setSelected] = useState<string>();
  const dropDownOptions = [
    {
      items: {
        icon: <Wallet size={16} />,
        label: "Donate to the event",
      },
    },
    {
      items: {
        icon: <UserRoundPen size={16} />,
        label: "Sign up for event",
      },
    },
    {
      items: {
        icon: <HeartHandshake size={16} />,
        label: "Sign up as volunteer",
      },
    },
  ];

  const handleOptions = (id: number | string, selected: string) => {
    switch (selected) {
      case "Donate to the event":
        return console.log(`Donate to the event ${id}`);
      case "Sign up for event":
        return console.log(`Sign up for event ${id}`);
      case "Sign up as volunteer":
        return console.log(`Sign up as volunteer ${id}`);
      default:
        return;
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
      <div className="text-center w-20 rounded-sm bg-gray-100 py-8 px-4 w-full md:w-[8rem] space-y-4">
        <div className="text-gray-600 font-medium text-sm">{day}</div>
        <div className="text-3xl font-bold">{date}</div>
        <div className="text-nowrap text-sm text-gray-500">{monthYear}</div>
      </div>
      <div className="flex flex-col gap-2 border border-gray-200 rounded-sm p-4">
        <div className="flex flex-row items-start justify-between">
          <h2 className="border-l-2 pl-2 text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <SelectComp
            placeholder={"View Options"}
            itemsWIcons={dropDownOptions}
            selected={selected || ""} //fix input changing from controlled to uncontrolled
            onSelect={(prev) => {
              setSelected(prev);
              handleOptions(id, prev as string);
            }}
          />
        </div>
        <p className="text-xs text-gray-500 uppercase">details</p>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <CalendarDays size={16} />{" "}
            <span>
              {day}, {monthYear}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
            <MapPin size={16} /> <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
          <Clock size={16} /> <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
