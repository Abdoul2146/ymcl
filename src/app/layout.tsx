import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/core/providers/theme-provider";
import { Header } from "@/core/components/Header";
import { Footer } from "@/core/components/Footer";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/core/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const themeScript = `try{var t=localStorage.getItem("ymcl-theme");var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: `${SITE_NAME} (${SITE_SHORT_NAME}) | Multiple Solutions. Endless Possibilities.`,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_SHORT_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Multiple Solutions. Endless Possibilities.`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/logo-nobg.png", width: 500, height: 500, alt: `${SITE_SHORT_NAME} logo` }],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Multiple Solutions. Endless Possibilities.`,
    description: SITE_DESCRIPTION,
    images: ["/logo-nobg.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL.toString(),
  logo: absoluteUrl("/logo-nobg.png"),
  email: "Yarima588@gmail.com",
  telephone: "+2348165037338",
  identifier: "RC 8805696",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Material Symbols is global in the App Router root layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="fixed left-4 top-3 z-[100] -translate-y-20 rounded bg-primary px-4 py-3 font-semibold text-on-primary transition-transform focus:translate-y-0"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1 pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
