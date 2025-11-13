import type { Metadata } from "next";

const baseURL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const ogImage = `${baseURL}/Xharp-home.png`;

export const homePageMetadata: Metadata = {
  title: {
    default: "Xharp – Create, Manage & Launch Events Effortlessly",
    template: "%s | Xharp",
  },
  description:
    "Xharp is a modern event management platform built with Next.js, designed to help creators and organizations effortlessly manage nominations, votes, and event ticketing through an intuitive dashboard. Simplify your workflow, engage your audience, and launch impactful events with ease. Features include event creation, dashboard management, responsive design, form validation, and image upload.",
  keywords: [
    "Xharp",
    "Event Management",
    "Voting Platform",
    "Ticketing App",
    "Event Ticketing",
    "Nominations",
    "Event Organization",
  ],
  authors: [{ name: "Xharp Team" }],
  creator: "Xharp",
  publisher: "Xharp Event Technologies LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xharp – Create, Manage & Launch Events Effortlessly",
    description:
      "Xharp helps creators and organizations manage nominations, votes, and event ticketing in one intuitive dashboard. Simplify your workflow, engage your audience, and launch impactful events effortlessly.",
    url: baseURL,
    siteName: "Xharp",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Xharp Event Management Platform",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xharp – Create, Manage & Launch Events Effortlessly",
    description:
      "Xharp helps creators and organizations manage nominations, votes, and event ticketing in one intuitive dashboard. Simplify your workflow, engage your audience, and launch impactful events effortlessly.",
    creator: "@xharp",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
