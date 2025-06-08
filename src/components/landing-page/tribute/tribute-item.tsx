import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import ProfileCover from "@/components/reusables/avatar";
import { useNavigate } from "react-router";

type Profile = {
  fullName: string;
  date: Date;
  profile?: string;
  email?: string;
};

interface ITributeItem {
  title: string;
  description: string;
  profile: Profile;
  link: string;
  cover?: string;
  className?: string;
  sideCover?: boolean;
}

export default function TributeItem({
  cover,
  title,
  description,
  profile,
  link,
  className,
  sideCover,
}: ITributeItem) {
  const formatDay = dayjs(profile.date).format("ddd MMMM YYYY");
  const navigate = useNavigate();
  return (
    <div
      className={cn(
        className,
        "flex gap-3 mb-5 h-full",
        sideCover ? "flex-col md:flex-row" : "flex-col snap-center"
      )}
    >
      <div className={cn("")}>
        <img
          className={
            "object-cover object-center rounded-sm min-w-[300px] h-full"
          }
          src={cover}
          alt="tribute cover"
        />
      </div>
      <div className="flex flex-col md:justify-between gap-4 h-full">
        <div className="flex flex-col gap-3">
          <div
            onClick={() => navigate(link)}
            className={cn(
              "flex flex-row items-center justify-between cursor-pointer hover:underline"
            )}
          >
            <p
              className={cn(
                sideCover && "text-sm",
                "uppercase font-semibold text-primary-dark"
              )}
            >
              {title}
            </p>
            <MoveUpRight
              className={"text-primary-dark"}
              size={sideCover ? 20 : 18}
            />
          </div>
          <div>
            <p className={cn("text-sm font-thin line-clamp-4")}>
              {description}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "flex justify-between",
            sideCover ? "flex-row md:flex-col gap-3" : "flex-row"
          )}
        >
          <div className="flex flex-row gap-2 my-auto">
            <ProfileCover
              img={profile.profile}
              user={{
                firstname: profile.fullName.split(" ")[0],
                lastname: profile.fullName.split(" ").slice(1).join(" "),
              }}
              alt={`${profile.fullName} cover image`}
            />
            <div>
              <p className="text-sm font-semibold">{profile.fullName}</p>
              <p className="text-xs font-thin">{profile.email}</p>
            </div>
          </div>
          <p className="text-xs font-thin">{formatDay}</p>
        </div>
      </div>
    </div>
  );
}
