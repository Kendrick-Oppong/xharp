"use client"
import { navItems } from "@/lib/constants/side-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <ul className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 py-2 px-3 ${
                  isActive ? "text-black" : "text-gray-500"
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
                <span
                  className={`text-xs ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
