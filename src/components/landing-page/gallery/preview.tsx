import { Button } from "@/components/ui/button";
import GalleryMasonry from "@/components/gallery/masonry";
import { MediaType } from "@/common/enums";
import Img1 from "@/assets/images/2020/ogb_womens_right.jpg";
import Img2 from "@/assets/images/2018/ogb_icecream.png";
import Img3 from "@/assets/images/2020/ogb_hot.jpg";
import Img4 from "@/assets/images/2020/Ogb solo 3.png";
import Img8 from "@/assets/images/2021/Ogb n Nons 22 or 21.png";
import Img9 from "@/assets/images/2020/ogb-w-gang.jpg";
import Img10 from "@/assets/images/2023/Ogb n hpt staff.png";
import Img11 from "@/assets/images/2022/Ogb bday w family 1.png";

const rightImage = [
  {
    id: 1,
    gallery: [
      {
        Image: Img1,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
      {
        Image: Img2,
        alt: "OGB ice cream",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
    ],
  },
  {
    id: 2,
    gallery: [
      {
        Image: Img3,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
      {
        Image: Img4,
        alt: "OGB ice cream",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
    ],
  },
];

const leftImage = [
  {
    id: 1,
    gallery: [
      {
        Image: Img11,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
      {
        Image: Img10,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
    ],
  },
  {
    id: 2,
    gallery: [
      {
        Image: Img9,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
      {
        Image: Img8,
        alt: "OGB with Rahma on Womens Day",
        media: MediaType.PHOTOS,
        dateAdded: "2020-10-27 14:45:15",
      },
    ],
  },
];

export default function GalleryPreview() {
  return (
    <div className={"flex flex-col gap-5 px-12 py-8"}>
      <div className="flex flex-row items-center justify-between">
        <p className="uppercase font-bold text-2xl">Gallery</p>
        <Button>See more</Button>
      </div>

      <div>
        <GalleryMasonry right={rightImage} left={leftImage} />
      </div>
    </div>
  );
}
