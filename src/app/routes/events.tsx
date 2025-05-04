import { useState } from "react";
import EventCard from "@/components/events/event-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ToggleTabs from "@/components/reusables/toggle";
import Navbar from "@/components/navigation/menubar";
import { EventToogleItem, EventTimeline } from "@/common/enums";
import SelectComp from "@/components/reusables/select-item";
import Footer from "@/components/navigation/footer";
import EventCalendar from "@/components/events/event-calandar";

const events = [
  {
    date: "28",
    day: "Friday",
    monthYear: "March 2025",
    title: "Mary Comfort’s Memorial Day",
    description:
      "Join us as we commemorate Mary Comfort’s life and legacy with a special day of remembrance and service. The afternoon begins with a memorial Mass to honour her memory. Following the service, we’ll continue Mary’s spirit of giving by visiting [Orphanage Name], where we’ll spend time with the children and contribute to their well-being.",
    location: "Our Lady Queen of Nigeria Pro Cathedral, Garki II, Abuja",
    time: "11:00 AM – 2:00 PM",
  },
  {
    date: "22",
    day: "Saturday",
    monthYear: "February 2025",
    title: "Visit to Mary Comfort’s Grave",
    description:
      "Join us for a solemn visit to pay our respects at the final resting place of Mary Comfort. This meaningful gathering will honor her memory and reflect on her lasting impact on our community. We’ll share stories and remember the legacy she left behind.",
    location: "Gudu Cemetery – Christian Section Opposite Defence HMO",
    time: "11:00 AM – 1:00 PM",
  },
  {
    date: "7",
    day: "Friday",
    monthYear: "February 2025",
    title: "Orphanage Visit and Charity Visit",
    description:
      "Join us for a meaningful day of community service as we visit Faith, Hope & Charity Orphanage to spend quality time with the children and provide essential supplies. Our visit includes interactive activities, story-telling sessions, and the distribution of donations to support the orphanage’s ongoing needs.",
    location: "Apo Dutse, behind Amina Court Estate, District, Abuja",
    time: "11:00 AM – 1:00 PM",
  },
];

export default function EventScreen() {
  const [toggle, setToggle] = useState<EventToogleItem>(EventToogleItem.LIST);
  const [timeline, setTimeline] = useState<EventTimeline>(EventTimeline.PAST);

  return (
    <div className="flex flex-col gap-8 p-4">
      <Navbar colortheme={"dark"} />
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <p className="font-semibold">
          Be a part of the foundation’s effort to reach out to the ones who need
          us the most
        </p>
        <p className="uppercase font-bold text-3xl">
          JOIn us In making a difference: explore our events
        </p>
        <p className="w-full md:max-w-lg lg:max-w-3xl">
          From community gatherings to impactful fundraisers, discover how you
          can be part of our mission to create lasting change. Together, we can
          make a difference–one event at a time.
        </p>
        <Button>Get notified on future events</Button>
      </div>

      <div className="flex flex-col gap-2 py-8 px-12">
        <div className="flex flex-row gap-3 items-center w-full">
          <ToggleTabs selected={toggle} onSelect={setToggle} />
          <SelectComp
            placeholder={"View Options"}
            items={[...Object.values(EventTimeline)]}
            selected={timeline}
            onSelect={(item) => setTimeline(item as EventTimeline)}
          />
        </div>
        {toggle === EventToogleItem.LIST && (
          <div className="py-8 space-y-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        )}

        {toggle === EventToogleItem.CALENDAR && (
          <div className="py-8">
            <EventCalendar />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center text-center justify-center gap-5 p-24 max-w-full bg-gray-100">
        <p className="uppercase font-bold text-3xl">
          WANT TO KNOW ABOUT OUR EVENTS BEFOREHAND?
        </p>
        <p className="">
          Be the first to know about our upcoming events, initiatives, and
          opportunities to make an impact. Sign up for updates and never miss a
          chance to be part of the change!
        </p>
        <div className="flex flex-row items-center gap-3 w-full">
          <Input type="email" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
