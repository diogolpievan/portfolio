"use client";

import { Button } from "../ui/button";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <section id="hero" className=" h-auto md:h-[680px]">
      <div className="container h-full items-center justify-around flex flex-col-reverse lg:flex-row gap-10 lg:gap-0">
        <div className="text-2xl lg:text-5xl gap-3 lg:gap-10 flex flex-col items-center justify-center lg:justify-start lg:items-stretch">
          <p className="font-bold">
            Olá<span className="text-emerald-400 ml-1 lg:ml-4">.</span>
          </p>
          <p className="font-light lg:ml-5">Eu sou Diogo Pievan</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: { duration: 5, ease: "linear" },
            }}
            className="h-1 absolute left-0 mt-32 bg-emerald-400 xl:max-w-[11%] max-w-[6%] hidden lg:inline"
          ></motion.div>
          <h1 className="font-bold">FullStack Developer</h1>

          <div className="text-accent flex items-center flex-col lg:flex-row justify-center lg:justify-start mt-2 lg:mt-0">
            <div>
              <Button className="py-7 duration-700 rounded-4xl font-bold bg-transparent text-emerald-400 border-2 border-emerald-400 shadow-neon cursor-pointer">
                DOWNLOAD CV <FiDownload />
              </Button>
            </div>

            <div className="flex lg:ml-5 lg:gap-10 items-center justify-center lg:justify-start lg:static gap-2 lg:mt-0 mt-2">
              <LiaLinkedin
                size={52}
                className="transition-all text-emerald-400  lg:text-[#3b3b3b] duration-700 hover:text-emerald-400 hover:mb-4 lg:absolute text-shadow-neon cursor-pointer"
              />
              <FaGithub
                size={46}
                className="transition-all text-emerald-400  lg:text-[#3b3b3b] duration-700 hover:text-emerald-400 hover:mb-4 lg:absolute lg:ml-14 text-shadow-neon cursor-pointer "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] bg-[url(/images/profile.png)] bg-cover bg-center rounded-full"></div>
          <motion.div className="absolute">
            <motion.svg
              className="w-[320px] lg:w-[390px] h-[320px] lg:h-[390px]"
              fill="transparent"
              viewBox="0 0 390 390"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="195"
                cy="195"
                r="190"
                stroke="#00d492"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "23 25 92 72",
                    "4 220 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.circle>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
