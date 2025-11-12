import { NavItem } from "@/interfaces/navigation";
import {
  RiTicketLine,
  RiHandHeartLine,
  RiCoinLine,
  RiSettings4Line,
} from "@remixicon/react";

export const navItems: NavItem[] = [
  { name: "E-tickets", href: "/dashboard", icon: RiTicketLine },
  { name: "Donations", href: "/dashboard/donations", icon: RiHandHeartLine },
  { name: "Event Pay", href: "/dashboard/event-pay", icon: RiCoinLine },
  { name: "Settings", href: "/dashboard/settings", icon: RiSettings4Line },
];
