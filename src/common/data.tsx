import { INavItems, IiconsList } from "./types";
import {
  // FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { Grid3x3, Image, ImagePlus, CalendarDays, Video } from "lucide-react";
import { GalleryFilterOptions, GallerySortOptions } from "./enums";
import Image1 from "../assets/images/IMG_7446.jpg";
import Image2 from "../assets/images/Ogb solo 3.png";
import Image3 from "../assets/images/ogb_womens_right.jpg";
import Image4 from "../assets/images/ogb_intense_laugh.jpg";
import Image5 from "../assets/images/ogb_after_class.jpg";
import Image6 from "../assets/images/ogb_hot.jpg";
import Image7 from "../assets/images/Ogb bday 22 w Kels n Nons.png";

export const navItems: Array<INavItems> = [
  // {
  //   id: 1,
  //   label: "Events",
  //   link: "/events",
  // },
  {
    id: 2,
    label: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    label: "Stories",
    link: "/stories",
  },
  // {
  //   id: 4,
  //   label: "Timeline",
  //   link: "/timeline",
  // },
  {
    id: 5,
    label: "Contribute",
    link: "/contribute",
  },
];

export const iconsList: Array<IiconsList> = [
  // {
  //   id: 1,
  //   icon: <FaFacebookF />,
  //   url: "",
  // },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    url: "",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    url: "",
  },
];

// EVENTS

// GALLERY
export const gallerySortOptions = [
  {
    items: {
      icon: <ImagePlus size={16} />,
      label: GallerySortOptions.RECENTLYADDED,
    },
  },
  {
    items: {
      icon: <CalendarDays size={16} />,
      label: GallerySortOptions.DATE,
    },
  },
];

export const galleryFilterOptions = [
  {
    items: {
      icon: <Grid3x3 size={16} />,
      label: GalleryFilterOptions.ALL,
    },
  },
  {
    items: {
      icon: <Image size={16} />,
      label: GalleryFilterOptions.PHOTOS,
    },
  },
  {
    items: {
      icon: <Video size={16} />,
      label: GalleryFilterOptions.VIDEOS,
    },
  },
];

export const ImageList = [
  {
    Image: Image2,
    alt: "Ogb with friends from aun",
  },
  {
    Image: Image6,
    alt: "Ogb taking a selfie",
  },
  {
    Image: Image3,
    alt: "Ogb with friends from aun",
  },
  {
    Image: Image1,
    alt: "Ogb solo",
  },
  {
    Image: Image4,
    alt: "Ogb laughing",
  },
  {
    Image: Image5,
    alt: "Ogb with friends in class",
  },
  {
    Image: Image7,
    alt: "Ogb with friends from aun",
  },
];
