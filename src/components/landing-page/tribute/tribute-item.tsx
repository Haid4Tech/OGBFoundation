import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";

type Profile = {
  profile: string;
  fullName: string;
  date: Date;
  email?: string;
};

interface ITributeItem {
  cover: string;
  title: string;
  description: string;
  profile: Profile;
}

export default function TributeItem({
  cover,
  title,
  description,
  profile,
}: ITributeItem) {
  const formatDay = dayjs(profile.date).format("dddd MMMM YYYY");
  return (
    <div
      className={cn(
        "flex flex-col gap-3 min-w-fit md:min-w-[25rem] mb-5 snap-center"
      )}
    >
      <div className={cn("")}>
        <img
          className={"object-cover object-center rounded-sm"}
          src={cover}
          alt="tribute cover"
        />
      </div>
      <div className={cn("flex flex-row items-center justify-between")}>
        <p className={cn("uppercase font-semibold")}>{title}</p>
        <MoveUpRight size={18} />
      </div>
      <div className={cn("")}>
        <p className={cn("text-sm font-thin")}>{description}</p>
      </div>

      <div className={cn("flex flex-row items-center justify-between")}>
        <div className={cn("flex flex-row items-center gap-2")}>
          <div>
            {profile.profile ? (
              <img
                className={"w-6 h-6 object-cover object-center rounded-full"}
                src={profile.profile}
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-black" />
            )}
          </div>
          <div>
            <p className={cn("text-sm font-semibold")}>{profile.fullName}</p>
            <p className={cn("text-xs font-thin")}>{profile.email}</p>
          </div>
        </div>
        <p className={cn("text-xs font-thin")}>{formatDay}</p>
      </div>
    </div>
  );
}
