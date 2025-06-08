import { ReactElement } from "react";
import { MediaType } from "./enums";

export interface INavItems {
  id: number;
  label: string;
  link: string;
}

export interface IiconsList {
  id: number;
  icon: ReactElement;
  url: string;
}

export interface IFieldItems {
  id: string;
  htmlfor: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
}

export interface ImageProp {
  Image: string;
  alt: string;
  media: MediaType;
  dateAdded: Date | string;
}

export interface ImageMasonryProp {
  id: number;
  gallery: Array<ImageProp>;
}

export interface StoryProp {
  id: number;
  title: string;
  cover: string;
  tagline?: string;
  coverAlt?: string;
  readTime: string;
  profile?: {
    cover?: string | undefined;
    alt?: string;
    email?: string;
    user?: {
      firstname?: string;
      lastname?: string;
    };
  };
  introduction?: string[];
  imageAfterIntro?: {
    image?: string | undefined;
    alt?: string;
    profile?: {
      cover?: string | undefined;
      alt?: string;
      email?: string;
      user?: {
        firstname?: string;
        lastname?: string;
      };
    };
    date?: string | Date;
    source?: string;
    link?: string;
  };
  quote?: {
    text: string;
    source: string;
    name: string;
  };
  body: string[];
  section1: {
    topic?: string;
    body?: string[];
    list?: string[];
  };
  section2?: {
    topic?: string;
    body?: string[];
    list?: string[];
  };
  imageAfterBody?: {
    image: string | undefined;
    alt?: string;
    profile: {
      cover?: string | undefined;
      alt?: string;
      user?: {
        firstname?: string;
        lastname?: string;
      };
      email?: string;
    };
    date?: string | Date;
    source?: string;
    link?: string;
  };
  finalbody?: string[];
  conclusion: string[];
}
