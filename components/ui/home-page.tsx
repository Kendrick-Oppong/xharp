"use client";

import { Logo } from "@/components/ui/logo";
import { SolutionCard } from "@/components/ui/solutions-card";
import {
  fadeIn,
  fadeInUp,
  footerLinks,
  partners,
  scaleIn,
  slideInLeft,
  slideInRight,
  solutions,
  staggerContainer,
  staggerItem,
} from "@/lib/constants/homepage";
import { RiArrowRightSLine } from "@remixicon/react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HomePage() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black px-5 sm:px-14 lg:px-[190px] min-h-dvh text-white">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between pt-[31px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Logo variant="secondary" />
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Why Now? <span className="ml-[9px]">Explore Buddyvotes</span>
        </motion.p>
      </motion.div>

      {/* Hero Section */}
      <section className="lg:max-w-[50%] mx-auto text-center mt-[84px]">
        <motion.h1
          className="font-serif leading-13 text-[40px] sm:text-[50px]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          We are building the best way to scale events across Africa
        </motion.h1>
        <motion.p
          className="my-[23px] text-gray-300"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          We&apos;re building Africa&apos;s event infrastructure — delivering
          payment, software, and hardware solutions that help organizers run
          modern, profitable, and inclusive events.
        </motion.p>
        <motion.div
          className="w-fit mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="text-center bg-secondary rounded-full px-[35px] py-2.5 font-medium flex items-center justify-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch <RiArrowRightSLine />
          </motion.button>
        </motion.div>
      </section>

      {/* Frame Section */}
      <motion.section
        className="mt-[125px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          className="relative h-[250px] sm:h-[400px] lg:h-[593px]"
          variants={scaleIn}
        >
          <Image
            src="/frame.png"
            fill
            alt="frame"
            draggable={false}
            className="object-scale-down sm:object-fill aspect-square size-full"
          />
        </motion.div>
        <motion.div className="mt-[77px]" variants={fadeInUp}>
          <p className="font-serif text-center mb-4">Supporters & Partners</p>
          <motion.div
            className="flex items-center justify-center gap-[22px]"
            variants={staggerContainer}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.src}
                variants={staggerItem}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={partner.src}
                  width={partner.width}
                  height={partner.height}
                  alt={partner.src}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Challenge Section */}
      <motion.section
        className="my-[108px] grid grid-cols-1 px-4 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          className="self-center lg:max-w-[70%]"
          variants={slideInLeft}
        >
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
            elit. Nulla facilisi. Sed commodo sapien at augue dignissim
          </p>
        </motion.div>
        <motion.div variants={slideInRight}>
          <Image
            src="/challenge.png"
            width={420}
            height={509}
            alt="challenge"
            className="mx-auto mt-14 lg:mt-0 h-[509px] object-cover rounded-3xl"
          />
        </motion.div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        className="lg:py-[108px] grid grid-cols-1 px-4 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={slideInLeft}>
          <Image
            src="/solution.png"
            width={420}
            height={515}
            alt="challenge"
            className="mx-auto object-cover rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="self-center mt-14 lg:mt-0 ml-auto lg:max-w-[90%]"
          variants={slideInRight}
        >
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
            elit. Nulla facilisi. Sed commodo sapien at augue dignissim
          </p>
        </motion.div>
      </motion.section>

      {/* Scale Events / Solutions Cards */}
      <motion.div
        className="bg-black min-h-screen p-3 lg:p-8 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={fadeIn}
      >
        <section className="max-w-7xl mx-auto pb-[108px]">
          <motion.h2
            className="font-serif leading-tight text-5xl mb-[120px] max-w-[480px]"
            variants={fadeInUp}
          >
            Solutions to scale your events across Africa
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]"
            variants={staggerContainer}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                variants={staggerItem}
                custom={index}
              >
                <SolutionCard solution={solution} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>

      {/* Investors Section */}
      <motion.section
        className="pb-[50px] lg:grid grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div
          className="self-center space-y-[35px] max-w-[90%]"
          variants={slideInLeft}
        >
          <h2 className="font-serif leading-12 text-[50px]">
            We&apos;re open to strategic investors & partners
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed commodo sapien at augue dignissim, eget varius nunc
            malesuada
          </p>
          <motion.button
            className="text-center bg-secondary rounded-full px-[35px] py-2.5 font-medium flex items-center justify-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch <RiArrowRightSLine />
          </motion.button>
        </motion.div>
        <motion.div className="mt-24 lg:mt-0" variants={slideInRight}>
          <Image
            src="/globe.png"
            width={488}
            height={426}
            alt="challenge"
            className="w-[488px] h-[428px] object-scale-down"
          />
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="flex items-center justify-between pb-[24px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>© {currentYear} Xharp Event Technologies LTD</p>
        <motion.div
          className="flex items-center gap-2.5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerLinks.map((src) => (
            <motion.div key={src} variants={staggerItem}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={src}
                  width={18}
                  height={18}
                  alt={src}
                  className="w-[18px] h-[18px] object-cover cursor-pointer"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.footer>
    </div>
  );
}
