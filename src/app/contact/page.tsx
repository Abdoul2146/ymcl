import type { Metadata } from "next";
import { ContactScreen } from "@/features/contact/screens/ContactScreen";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Contact YMCL or request a quote for construction, agriculture, trade, contracting, or merchandise services.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact YMCL", description: "Contact YMCL or request a quote for construction, agriculture, trade, contracting, or merchandise services.", url: "/contact" },
};

export default function ContactPage() {
  return <ContactScreen />;
}
