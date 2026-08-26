import type { Metadata } from "next";
import { AboutScreen } from "@/features/about/screens/AboutScreen";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about YMCL's mission, vision, and multi-sector capabilities across Nigeria.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About YMCL", description: "Learn about YMCL's mission, vision, and multi-sector capabilities across Nigeria.", url: "/about" },
};

export default function AboutPage() {
  return <AboutScreen />;
}
