import { Solution } from "@/interfaces/homepage";
import { Partner } from "@/interfaces/navigation";

export const solutions: Solution[] = [
  {
    id: "software",
    title: "Software",
    image: "/software.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  },
  {
    id: "hardware",
    title: "Hardware",
    image: "/hardware.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  },
  {
    id: "payments",
    title: "Payments",
    image: "/payment.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget varius nunc malesuada. Donec vel magna at justo aliquam convallis. Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis lectus sapien non risus.",
  },
];

export const partners: Partner[] = [
  { id: 1, src: "/founders-hub.png", width: 125, height: 29 },
  { id: 2, src: "/paystack.png", width: 140, height: 24 },
  { id: 3, src: "/hubtel.png", width: 133, height: 37 },
  { id: 4, src: "/calbank.png", width: 129, height: 43 },
  { id: 5, src: "/stanbic.png", width: 103, height: 19 },
];
