import { Logo } from "@/components/ui/logo";
import { SolutionCard } from "@/components/ui/solutions-card";
import { partners, solutions } from "@/lib/constants/homepage";
import { RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black px-[190px] min-h-dvh  text-white">
      <div className="flex items-center justify-between pt-[31px]">
        <Logo variant="secondary" />
        <p className="text-sm">
          Why Now? <span className="ml-[9px]">Explore Buddyvotes</span>
        </p>
      </div>
      <section className="max-w-[50%] mx-auto text-center mt-[84px]">
        <h1 className="font-serif leading-13  text-[50px]">
          We are building the best way to scale events across Africa
        </h1>
        <p className="my-[23px] text-gray-300">
          We’re building Africa’s event infrastructure — delivering payment,
          software, and hardware solutions that help organizers run modern,
          profitable, and inclusive events.
        </p>
        <div className="w-fit mx-auto">
          <button className="text-center bg-secondary rounded-full px-[35px] py-2.5 font-medium flex items-center justify-center gap-1">
            Get In Touch <RiArrowRightSLine />{" "}
          </button>
        </div>
      </section>
      <section className="mt-[125px]">
        <div className="relative h-[593px]">
          <Image src="/frame.png" fill alt="frame" draggable={false} />
        </div>
        <div className="mt-[77px]">
          <p className="font-serif text-center mb-4">Supporters & Partners</p>
          <div className="flex items-center justify-center gap-[22px]">
            {partners.map((partner) => (
              <Image
                key={partner.src}
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt={partner.src}
              />
            ))}
          </div>
        </div>
      </section>
      {/* challenge */}
      <section className="my-[108px] grid grid-cols-2">
        <div className="self-center max-w-[70%]">
          <h2 className="text-[#A8FF07] text-[30px] font-serif">
            The Challenge
          </h2>
          <p className="mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed commodo sapien at augue dignissim, eget varius nunc
            malesuada. Donec vel magna at justo aliquam convallis. Phasellus
            vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec
            luctus gravida, justo nisl accumsan lorem, vel sagittis lectus
            sapien non risus.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget
            varius nunc malesuada. Donec vel magna at justo aliquam convallis.
            Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod,
            purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis
            lectus sapien non risus.
          </p>
        </div>
        <div>
          <Image
            src="/challenge.png"
            width={420}
            height={509}
            alt="challenge"
          />
        </div>
      </section>
      {/* solution */}
      <section className="py-[108px] grid grid-cols-2">
        <div>
          <Image src="/solution.png" width={420} height={515} alt="challenge" />
        </div>
        <div className="self-center max-w-[90%]">
          <h2 className="text-[#A8FF07] text-[30px] font-serif">
            The Solution
          </h2>
          <p className="mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed commodo sapien at augue dignissim, eget varius nunc
            malesuada. Donec vel magna at justo aliquam convallis. Phasellus
            vitae urna sed lacus ultricies pharetra. Morbi euismod, purus nec
            luctus gravida, justo nisl accumsan lorem, vel sagittis lectus
            sapien non risus.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla facilisi. Sed commodo sapien at augue dignissim, eget
            varius nunc malesuada. Donec vel magna at justo aliquam convallis.
            Phasellus vitae urna sed lacus ultricies pharetra. Morbi euismod,
            purus nec luctus gravida, justo nisl accumsan lorem, vel sagittis
            lectus sapien non risus.
          </p>
        </div>
      </section>
      
      {/* scale events */}
      <div className="bg-black min-h-screen p-8 text-white">
        <section className="max-w-7xl mx-auto pb-[108px]">
          <h2 className="font-serif leading-tight text-5xl mb-[120px] max-w-[480px]">
            Solutions to scale your events across Africa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </section>
      </div>

      <section className="pb-[50px] grid grid-cols-2">
        <div className="self-center space-y-[35px] max-w-[90%]">
          <h2 className="font-serif leading-12 text-[50px]">
            We’re open to strategic investors & partners{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed commodo sapien at augue dignissim, eget varius nunc
            malesuada
          </p>
          <button className="text-center bg-secondary rounded-full px-[35px] py-2.5 font-medium flex items-center justify-center gap-1">
            Get In Touch <RiArrowRightSLine />{" "}
          </button>
        </div>
        <div>
          <Image
            src="/globe.png"
            width={488}
            height={426}
            alt="challenge"
            className="w-[488px] h-[428px]"
          />
        </div>
      </section>
      <footer className="flex items-center justify-between pb-[24px]">
        <p>© 2025 Xharp Event Technologies LTD</p>
        <div className="flex items-center gap-2.5">
          <Image
            src="/linkedin.png"
            width={18}
            height={18}
            alt="challenge"
            className="w-[18px] h-[18px] object-cover"
          />
          <Image
            src="/instagram.png"
            width={18}
            height={18}
            alt="challenge"
            className="w-[18px] h-[18px] object-cover"
          />
          <Image
            src="/medium.png"
            width={18}
            height={18}
            alt="challenge"
            className="w-[18px] h-[18px] object-cover"
          />
          <Image
            src="/x.png"
            width={18}
            height={18}
            alt="challenge"
            className="w-[18px] h-[18px] object-cover"
          />
        </div>
      </footer>
    </div>
  );
}
