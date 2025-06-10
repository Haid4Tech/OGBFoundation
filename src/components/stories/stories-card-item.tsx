import dayjs from "dayjs";
import { Link } from "react-router";

interface IStoriesCard {
  link: string;
  title?: string;
  date_added?: Date | string | null;
  description?: string;
}

export default function StoriesCard(storyItems: IStoriesCard) {
  const formatDate = storyItems.date_added
    ? dayjs(new Date(storyItems.date_added)).format("DD MMMM, YYYY")
    : "";
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"flex flex-col gap-2"}>
        <p className="font-bold text-primary-dark border-b-2 pb-2 w-fit">
          {storyItems.title}
        </p>
        <p className="text-sm text-gray-500">{formatDate}</p>
      </div>
      <div className={"flex flex-col gap-2"}>
        <p className={"line-clamp-4 text-sm"}>{storyItems.description}</p>
        <Link
          className={
            "w-fit text-sm font-bold hover:underline text-primary-dark"
          }
          to={storyItems.link}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
