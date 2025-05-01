import { INavItems, IiconsList } from "./types";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export const navItems: Array<INavItems> = [
  {
    id: 1,
    label: "Events",
    link: "/events",
  },
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
  {
    id: 4,
    label: "Timeline",
    link: "/timeline",
  },
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
