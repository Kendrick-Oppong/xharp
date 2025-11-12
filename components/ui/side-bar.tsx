"use client";

import { navItems } from "@/lib/constants/side-nav";
import { RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col pl-4 pr-2 pt-6 min-w-[249px] border-r shadow border-r-gray-300 h-screen sticky top-0">
      {/* Logo */}
      <Image
        src="/xharp.png"
        width={94}
        height={35}
        alt="xharp"
        className="mb-6 ml-4"
      />

      {/* Navigation */}
      <ul className="space-y-3 flex-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <li
              key={item.href}
              className={`text-sm font-medium leading-5 flex items-center ${
                isActive
                  ? "bg-gray-100 font-semibold text-black rounded-lg"
                  : "text-gray-700"
              }`}
            >
              {isActive && (
                <div className="w-1 h-5 bg-black rounded-r-md -translate-x-3" />
              )}
              <Link
                href={item.href}
                className="flex items-center justify-between py-2 px-2 w-full"
              >
                <span className="inline-flex items-center">
                  <item.icon className="mr-2" size={20} />
                  {item.name}
                </span>
                {index === 0 && <RiArrowRightSLine size={21} />}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="flex items-center gap-3 text-gray-700 py-5 border-t border-t-gray-300">
        <div className="size-10 bg-gray-300 rounded-full flex items-center justify-center">
          <Image src="/user.svg" width={40} height={40} alt="user-profile" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">Nicholas Osei</div>
          <div className="text-xs text-gray-500 mt-1">nick@gmail.com</div>
        </div>
        <div>
          <RiArrowRightSLine size={21} />
        </div>
      </div>
    </aside>
  );
};
