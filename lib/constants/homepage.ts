import { Solution } from "@/interfaces/homepage";
import { Partner } from "@/interfaces/navigation";
import { Variants } from "framer-motion";

export const solutions: Solution[] = [
  {
    id: "software",
    title: "Software",
    image: "/software.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra",
  },
  {
    id: "hardware",
    title: "Hardware",
    image: "/hardware.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra",
  },
  {
    id: "payments",
    title: "Payments",
    image: "/payment.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra",
  },
];

export const partners: Partner[] = [
  { id: 1, src: "/founders-hub.png", width: 125, height: 29 },
  { id: 2, src: "/paystack.png", width: 140, height: 24 },
  { id: 3, src: "/hubtel.png", width: 133, height: 37 },
  { id: 4, src: "/calbank.png", width: 129, height: 43 },
  { id: 5, src: "/stanbic.png", width: 103, height: 19 },
];

export const footerLinks: string[] = [
  "/linkedin.png",
  "/instagram.png",
  "/medium.png",
  "/x.png",
];


export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
