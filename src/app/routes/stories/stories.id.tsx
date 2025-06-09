import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navigation/menubar";
import Footer from "@/components/navigation/footer";
import { stories } from "@/common/stories";
import { StoryProp } from "@/common/types";
import ProfileCover from "@/components/reusables/avatar";

export default function DynamicStory() {
  let params = useParams<{ storiesId: string }>();
  const [story, setStory] = useState<StoryProp | undefined>(undefined);

  const getStory = (id: number) => {
    const filteredStory = stories?.find((story) => story.id === id);
    setStory(filteredStory);
  };

  useEffect(() => {
    if (params?.storiesId) {
      getStory(Number(params.storiesId));
    }
  }, [params?.storiesId]);

  if (!story) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-center text-gray-500">Story not found.</p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-8 p-4")}>
      <Navbar colortheme={"light"} />
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-6 justify-between p-5 border-b border-gray-300 pb-12"
        )}
      >
        <div>
          <div className={cn("flex flex-col gap-8 w-full h-full ")}>
            <div className={cn("flex flex-col gap-5 w-full")}>
              <p className={"text-sm text-gray-500"}>{story?.readTime} read</p>
              <p
                className={cn(
                  "text-lg md:text-xl lg:text-3xl font-bold uppercase"
                )}
              >
                {story?.title}
              </p>
            </div>
            <p className="text-gray-500 capitalize">{story?.tagline}</p>
            <div className={cn("flex flex-row items-center gap-5  mt-auto")}>
              <ProfileCover
                img={story?.profile?.cover}
                user={story?.profile?.user}
                alt={`${story?.profile?.user?.firstname} cover image`}
              />
              <p className={"font-semibold text-sm text-primary-dark"}>
                {story?.profile?.user?.firstname}{" "}
                {story?.profile?.user?.lastname}
              </p>
            </div>
          </div>
        </div>
        <img
          className={cn(
            "w-full rounded-md object-cover object-center h-[20rem]"
          )}
          src={story?.cover}
          alt={story?.coverAlt}
        />
      </div>

      <div className={"flex flex-col gap-4 px-4 md:px-32 pt-5"}>
        <p className="font-bold text-lg md:text-xl">Introduction</p>
        <div className={"flex flex-col gap-5 md:gap-8"}>
          {story?.introduction?.map((text) => (
            <p className={"md:text-base text-sm"}>{text}</p>
          ))}
        </div>
      </div>

      {story?.imageAfterIntro?.image && (
        <div className={"px-4 md:px-32"}>
          <img
            className={cn(
              "w-full rounded-md object-cover object-center h-[20rem]"
            )}
            src={story?.imageAfterIntro?.image}
            alt={story?.imageAfterIntro?.alt}
          />

          <p className="text-sm text-gray-500">
            Image courtesy of {story?.imageAfterIntro?.profile?.user?.firstname}{" "}
            {story?.imageAfterIntro?.profile?.user?.lastname} via{" "}
            {story?.imageAfterIntro?.source}
          </p>
        </div>
      )}

      {story?.body && (
        <div className={"flex flex-col gap-5 md:gap-8 p-4 md:px-32"}>
          {story?.body?.map((item) => (
            <p className="text-sm md:text-base">{item}</p>
          ))}
        </div>
      )}

      {story?.section1 && (
        <div className="flex flex-col gap-4 p-4 md:px-32">
          <p className="font-semibold">{story?.section1?.topic}</p>
          <div className="flex flex-col gap-5 md:gap-8">
            {story?.section1?.body?.map((item, index) => (
              <p key={index} className="text-sm md:text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      {story?.imageAfterBody?.image && (
        <div className={"w-full px-4 md:px-32"}>
          <img
            className={cn(
              "w-full rounded-md object-cover object-center h-[20rem]"
            )}
            src={story?.imageAfterBody?.image}
            alt={story?.imageAfterBody?.alt}
          />

          <p className="text-sm text-gray-500">
            Image courtesy of {story?.imageAfterBody?.profile?.user?.firstname}{" "}
            {story?.imageAfterBody?.profile?.user?.lastname} via{" "}
            {story?.imageAfterBody?.source}
          </p>
        </div>
      )}

      {story.finalbody && (
        <div className="flex flex-col gap-5 md:gap-8 p-4 md:px-32">
          {story?.finalbody?.map((item, index) => (
            <p key={index} className="text-sm md:text-base">
              {item}
            </p>
          ))}
        </div>
      )}

      <div className="p-4 md:px-32">
        <div className="border-b border-gray-300 pb-12">
          <div className="bg-primary/5 rounded-md flex flex-col gap-5 p-12">
            <p className={"font-semibold text-lg"}>Conclusion</p>
            <div className="flex flex-col gap-5 md:gap-8">
              {story?.conclusion?.map((item) => (
                <p className="text-sm md:text-base">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={cn("flex flex-row items-center gap-5 px-4 md:px-32")}>
        <ProfileCover
          img={story?.profile?.cover}
          user={story?.profile?.user}
          alt={`${story?.profile?.user?.firstname} cover image`}
        />
        <p className={"font-semibold text-sm text-primary-dark"}>
          {story?.profile?.user?.firstname} {story?.profile?.user?.lastname}
        </p>
      </div>

      <Footer />
    </div>
  );
}
