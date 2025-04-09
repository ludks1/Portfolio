import { RefObject } from "react";

export type SectionRefs = {
  [key: string]: RefObject<HTMLElement | null>;
};

export interface NavbarProps {
  sectionRefs: SectionRefs;
}
