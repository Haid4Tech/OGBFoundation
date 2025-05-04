import React from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import SelectComp from "@/components/reusables/select-item";

interface EventCardProps {
  date: string;
  day: string;
  monthYear: string;
  title: string;
  description: string;
  location: string;
  time: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  day,
  monthYear,
  title,
  description,
  location,
  time,
}) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="text-center w-20 rounded-sm bg-gray-100 py-8 px-4 w-[8rem] space-y-4">
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
            items={[]}
            selected={undefined}
            onSelect={() => {}}
          />
        </div>
        <p className="text-xs text-gray-500 uppercase">details</p>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex flex-row gap-4">
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
