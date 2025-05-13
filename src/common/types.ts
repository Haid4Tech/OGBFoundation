import { ReactElement } from "react";

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
