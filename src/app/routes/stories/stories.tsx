import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";
import TributeItem from "@/components/landing-page/tribute/tribute-item";
import Cover from "@/assets/images/2023/friends_at_the_site.jpg";
import StoriesCard from "@/components/stories/stories-card-item";

const stories = [
  {
    title: "A Brunch with OGB",
    date_added: new Date(),
    description:
      "On a sunny Saturday morning, a group of volunteers gathered with one shared goal: to bring joy and support to those in need. Our destination was the Hope Haven Orphanage, a place that houses children who have faced unimaginable challenges in their young lives Alongside this visit, we also organised a charity event to distribute essential supplies to",
    link: "",
  },
];

const tribute = [
  {
    id: 1,
    cover: Cover,
    title: "Introduction: A Mission of Compassion",
    description:
      "On a sunny Saturday morning, a group of volunteers gathered with one shared goal: to bring joy and support to those in need. Our destination was the Hope Haven Orphanage, a place that houses children who have faced unimaginable challenges in their young lives Alongside this visit, we also organised a charity event to distribute essential supplies to ...",
    profile: {
      profile: undefined,
      fullName: "Kelechi Onyekynbra",
      email: "kes@gmail.com",
      date: new Date(),
    },
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-2 gap-5 md:gap-4">
          {[...tribute, ...tribute, ...tribute].map(
            ({ id, cover, title, description, profile }, index) => {
              return (
                <TributeItem
                  key={index}
                  className={
                    "md:first:col-span-4 md:first:row-span-2 even:row-span-1 last:row-span-1 even:col-span-3 last:col-span-3"
                  }
                  sideCover={index !== 0 ? true : false}
                  cover={cover}
                  title={title}
                  link={`/stories/${id}`}
                  description={description}
                  profile={profile}
                />
              );
            }
          )}
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4 pt-5">
        <p className="font-bold">All Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-8">
          {[...stories, ...stories, ...stories, ...stories].map(
            ({ title, description, link, date_added }, index) => {
              return (
                <StoriesCard
                  key={index}
                  title={title}
                  date_added={date_added}
                  description={description}
                  link={link}
                />
              );
            }
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
