import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Xharp – Create, Manage & Launch Events Effortlessly",
    template: "%s | Xharp",
  },
  description:
    "Xharp helps creators and organizations manage nominations, votes, and event ticketing in one intuitive dashboard. Simplify your workflow, engage your audience, and launch impactful events effortlessly.",
  keywords: [
    "Xharp",
    "Event Management",
    "Voting Platform",
    "Ticketing App",
    "SaaS Dashboard",
    "Next.js SaaS",
  ],
  authors: [{ name: "Xharp Team" }],
  creator: "Xharp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
