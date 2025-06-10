import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import ProfileCover from "@/components/reusables/avatar";
import { useNavigate } from "react-router";

import { ProfileProp } from "@/common/types";

interface ITributeItem {
  title?: string;
  description?: string;
  profile?: ProfileProp;
  link?: string;
  cover?: string;
  className?: string;
  sideCover?: boolean;
  date?: Date | string | null;
}

export default function TributeItem({
  cover,
  title,
  description,
  profile,
  link,
  className,
  sideCover,
  date,
}: ITributeItem) {
  const formatDay = dayjs(date).format("ddd MMMM YYYY");
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
            "object-cover object-center rounded-sm min-w-[300px] md:h-full h-80"
          }
          src={cover}
          alt="tribute cover"
        />
      </div>
      <div className="flex flex-col md:justify-between gap-4 h-full">
        <div className="flex flex-col gap-3">
          <div
            onClick={() => navigate(link ?? "")}
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
              img={profile?.cover}
              user={{
                firstname: profile?.user?.firstname,
                lastname: profile?.user?.lastname,
              }}
              alt={`${profile?.alt} cover image`}
            />
            <div>
              <p className="text-sm font-semibold">
                {profile?.user?.firstname} {profile?.user?.lastname}
              </p>
              <p className="text-xs font-thin">{profile?.email}</p>
            </div>
          </div>
          <p className="text-xs font-thin">{formatDay}</p>
        </div>
      </div>
    </div>
  );
}
