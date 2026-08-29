import type { Metadata } from "next";
import { ProjectsScreen } from "@/features/projects/screens/ProjectsScreen";

export const metadata: Metadata = {
  title: "Field Operations",
  description: "View YMCL field activity across trade, logistics, export documentation, and operational coordination.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "YMCL Field Operations", description: "View YMCL field activity across trade, logistics, export documentation, and operational coordination.", url: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsScreen />;
}
