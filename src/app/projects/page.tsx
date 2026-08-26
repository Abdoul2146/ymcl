import type { Metadata } from "next";
import { ProjectsScreen } from "@/features/projects/screens/ProjectsScreen";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description: "View selected YMCL projects across construction, agriculture, trade, and equipment logistics.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "YMCL Projects & Portfolio", description: "View selected YMCL projects across construction, agriculture, trade, and equipment logistics.", url: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsScreen />;
}
