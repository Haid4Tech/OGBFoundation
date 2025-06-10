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

export interface ImageDataProp {
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
}

export interface ISections {
  topic?: string;
  body?: string[];
  list?: string[];
}

export interface QuoteProp {
  text: string;
  source: string;
  name: string;
}

export interface ProfileProp {
  cover?: string | undefined;
  alt?: string;
  email?: string;
  user?: {
    firstname?: string;
    lastname?: string;
  };
}

export interface StoryProp {
  id: number;
  title?: string;
  cover?: string;
  tagline?: string;
  coverAlt?: string;
  readTime?: string;
  profile?: ProfileProp;
  introduction: string[];
  imageAfterIntro?: ImageDataProp | null;
  quote?: QuoteProp | null;
  body: string[];
  section1: ISections | null;
  section2?: ISections | null;
  imageAfterBody?: ImageDataProp | null;
  finalbody?: string[] | null;
  conclusion: string[];
  created_at?: Date | string | null;
}
