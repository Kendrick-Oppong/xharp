import { RiAddLine } from "@remixicon/react";
import Image from "next/image";

const DashboardDefaultPage = () => {
  return (
    <div className="max-w-[75%] mx-auto">
      <section className="flex items-center justify-between">
        <header>
          <h1 className="font-medium text-2xl">E-tickets</h1>
        </header>

        <div className="flex gap-2 mb-6 items-center bg-gray-100 rounded-[10px] px-1.5 py-1 w-full max-w-[189px]">
          <p className="px-4 text-sm py-2 rounded-lg font-medium bg-white leading-5">
            Upcoming
          </p>
          <p className="px-4 py-2 rounded-lg font-medium text-primary-foreground">
            Past
          </p>
        </div>
      </section>
      <section className="text-center mt-[70px]">
        <Image
          src="calendar.svg"
          width={148}
          height={148}
          alt="calendar"
          className="mx-auto"
        />
        <h2 className="font-medium mt-5">Create new event</h2>
        <p className="text-primary-foreground">
          Add new event and stay ahead of the curve
        </p>
        <button className="bg-black/90 mt-[17px] mx-auto flex gap-3 items-center text-white font-medium py-2 px-3 rounded-[10px] hover:bg-black/85">
          <RiAddLine /> Create event
        </button>
      </section>
    </div>
  );
};

export default DashboardDefaultPage;
