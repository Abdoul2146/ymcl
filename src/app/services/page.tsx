import type { Metadata } from "next";
import { ServicesScreen } from "@/features/services/screens/ServicesScreen";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore YMCL services in international trade, agriculture, construction, contracting, and merchandise supply.",
  alternates: { canonical: "/services" },
  openGraph: { title: "YMCL Services", description: "Explore YMCL services in international trade, agriculture, construction, contracting, and merchandise supply.", url: "/services" },
};

export default function ServicesPage() {
  return <ServicesScreen />;
}
