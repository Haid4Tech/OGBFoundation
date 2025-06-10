import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";
import TributeItem from "@/components/landing-page/tribute/tribute-item";
import StoriesCard from "@/components/stories/stories-card-item";

import { stories } from "@/common/stories";

export default function StoriesScreen() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Navbar colortheme={"light"} />
      <div className={"flex flex-row items-center justify-center"}>
        <div className="flex flex-col gap-2 text-center w-full md:max-w-lg lg:max-w-4xl">
          <p className={"text-sm md:text-base font-semibold text-primary"}>
            Mary-Comfort's stories by her friends and family
          </p>
          <p className={"text-lg md:text-2xl lg:text-3xl font-bold uppercase"}>
            LEARN MORE ABOUT THE LIFE OF MARY-COMFORT
          </p>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4 pt-12">
        <p className="font-bold">Recent Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-3 md:grid-rows-1 gap-5 md:gap-4">
          {stories
            .slice(0, 3)
            .map(
              (
                { id, cover, title, profile, introduction, created_at },
                index
              ) => {
                return (
                  <TributeItem
                    key={index}
                    className={
                      "first:col-span-3 first:row-span-1 md:first:col-span-4 md:first:row-span-2 even:row-span-1 last:row-span-1 even:col-span-3 last:col-span-3"
                    }
                    sideCover={index !== 0 ? true : false}
                    cover={cover}
                    title={title}
                    link={`/stories/${id}`}
                    description={introduction[0]}
                    profile={profile}
                    date={created_at}
                  />
                );
              }
            )}
        </div>
      </div>

      <div className="px-5 flex flex-col gap-5 pt-5">
        <p className="font-bold">All Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories
            .slice(3, 6)
            .map(({ id, title, tagline, created_at }, index) => {
              return (
                <StoriesCard
                  key={index}
                  title={title}
                  date_added={created_at}
                  description={tagline}
                  link={`/stories/${id}`}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
