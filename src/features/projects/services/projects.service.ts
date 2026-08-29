import type { ImageProps } from "next/image";

import terminalTeamImage from "../../../../assets/his images/01.jpg";
import airportImage from "../../../../assets/his images/02.jpg";
import awardImage from "../../../../assets/his images/03.jpg";
import fieldPortraitImage from "../../../../assets/his images/04.jpg";
import terminalPortraitImage from "../../../../assets/his images/05.jpg";
import oceanTerminalImage from "../../../../assets/his images/06.jpg";

export type ProjectCategory = "All" | "Import / Export" | "Logistics" | "Recognition" | "Field Operations";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  desc?: string;
  image: ImageProps["src"];
  alt: string;
  span: string; // tailwind grid span classes
  badgeColor?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "West Africa Container Terminal Engagement",
    category: "Import / Export",
    desc: "On-ground coordination for trade movement and port-side logistics at West Africa Container Terminal.",
    image: terminalTeamImage,
    alt: "YMCL representatives at West Africa Container Terminal",
    span: "md:col-span-8 row-span-2",
    badgeColor: "#d4af37",
  },
  {
    id: "2",
    title: "Port Harcourt Trade Movement",
    category: "Logistics",
    desc: "Field movement supporting business coordination through Port Harcourt International Airport.",
    image: airportImage,
    alt: "YMCL representative at Port Harcourt International Airport",
    span: "md:col-span-4 row-span-1",
  },
  {
    id: "3",
    title: "NEPC Export Recognition",
    category: "Recognition",
    desc: "Recognition from the Nigerian Export Promotion Council for export-focused enterprise activity.",
    image: awardImage,
    alt: "NEPC Award of Merit presented to Yarima Multi Concept Limited",
    span: "md:col-span-4 row-span-1",
    badgeColor: "#d4af37",
  },
  {
    id: "4",
    title: "YMCL Representative Field Visit",
    category: "Field Operations",
    desc: "Direct field presence for documentation, coordination, and client-facing operational follow-up.",
    image: fieldPortraitImage,
    alt: "YMCL representative on a field visit",
    span: "md:col-span-6 row-span-1",
  },
  {
    id: "5",
    title: "Terminal Access Coordination",
    category: "Import / Export",
    desc: "Presence at West Africa Container Terminal for port access, documentation, and logistics coordination.",
    image: terminalPortraitImage,
    alt: "YMCL representative at the West Africa Container Terminal gate",
    span: "md:col-span-6 row-span-1",
    badgeColor: "#d4af37",
  },
  {
    id: "6",
    title: "Federal Ocean Terminal Field Presence",
    category: "Logistics",
    desc: "Operational field activity around terminal access points and cargo movement corridors.",
    image: oceanTerminalImage,
    alt: "YMCL representative near the Federal Ocean Terminal access gate",
    span: "md:col-span-12 row-span-1",
  },
];
