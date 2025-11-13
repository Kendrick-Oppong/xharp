import { RiAddLine, RiGiftLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
const DashboardDefaultPage = () => {
  return (
    <div className="max-w-full lg:max-w-[75%] mx-auto">
      {/* Mobile Header */}
      <header className="flex items-center justify-between mb-6 lg:hidden">
        {/* Logo */}
        <Logo className="w-[94px] h-[35px]" />
        <button className="flex items-center gap-2 text-sm">
          <RiGiftLine />
          <span className="font-medium">Refer & Earn</span>
          <div className="size-8 bg-gray-300 rounded-full flex items-center justify-center ml-2">
            <Image src="/user.svg" width={30} height={30} alt="user" />
          </div>
        </button>
      </header>

      {/* Desktop Header */}
      <section className="hidden lg:flex items-center justify-between">
        <header>
          <h1 className="font-medium text-2xl">E-tickets</h1>
        </header>

        <div className="flex gap-2 mb-6 items-center bg-gray-100 rounded-[10px] px-1.5 py-1 w-full max-w-[189px]">
          <p className="px-4 text-sm py-2 rounded-lg font-medium bg-white leading-5">
            Upcoming
          </p>
          <p className="px-4 py-2 rounded-lg font-medium text-gray-600">Past</p>
        </div>
      </section>

      {/* Mobile Tab Selector */}
      <h1 className="font-medium text-2xl mb-6 lg:hidden">E-tickets</h1>
      <div className="flex mx-auto lg:mx-0 gap-2 mb-8 lg:hidden items-center bg-gray-100 rounded-[10px] px-1.5 py-1 w-full max-w-[189px]">
        <p className="px-4 text-sm py-2 rounded-lg font-medium bg-white leading-5">
          Upcoming
        </p>
        <p className="px-4 py-2 text-sm rounded-lg font-medium text-gray-600">
          Past
        </p>
      </div>

      <section className="text-center max-[330px]:my-[50px]  mt-[80px] mb-16 lg:mt-[70px]">
        <Image
          src="calendar.svg"
          width={148}
          height={148}
          alt="calendar"
          className="mx-auto"
        />
        <h2 className="font-medium mt-5 text-lg">Create new event</h2>
        <p className="text-gray-600 text-sm">
          Add new event and stay ahead of the curve
        </p>
        <button className="bg-black/90 mt-[17px] mx-auto flex items-center text-white font-medium py-2.5 px-4 rounded-[10px] hover:bg-black/85 text-sm">
          <Link href="/create-event" className="flex items-center gap-3 ">
            <RiAddLine size={20} /> Create event
          </Link>
        </button>
      </section>
    </div>
  );
};

export default DashboardDefaultPage;
