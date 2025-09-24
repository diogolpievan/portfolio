"use client";

import { motion } from "motion/react";
import { MdOutlinePsychology } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="container flex flex-col lg:flex-row gap-0 py-16 justify-between lg:px-40 items-center"
    >
      <div className="flex-1 flex text-2xl">
        <motion.div>
          <motion.svg
            width="25px"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="10"
              y1="0"
              x2="10"
              y2="25%"
              strokeWidth={3}
              stroke="#00d491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              cx="10"
              cy="35%"
              r="7"
              fill="transparent"
              stroke="#00d491"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "4 1 2 3" }}
              animate={{
                strokeDasharray: ["7 7 7 7", "5 5 5 5"],
                rotate: [0, 360],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.line
              x1="10"
              y1="45%"
              x2="10"
              y2="70%"
              strokeWidth={3}
              stroke="#00d491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              cx="10"
              cy="80%"
              r="7"
              fill="transparent"
              stroke="#00d491"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "4 1 2 3" }}
              animate={{
                strokeDasharray: ["7 7 7 7", "5 5 5 5"],
                rotate: [0, 360],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.line
              x1="10"
              y1="90%"
              x2="10"
              y2="100%"
              strokeWidth={3}
              stroke="#00d491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        <div className="flex justify-center ml-5 items-start flex-col gap-10">
          <div className="flex items-center justify-start flex-1 gap-4">
            <MdOutlinePsychology className="text-4xl " />
            <h4 className="text-xl font-bold">Problem Solving</h4>
          </div>
          <div className="flex items-center justify-start flex-1 gap-4">
            <HiOutlineUserGroup className="text-4xl" />
            <h4 className="text-xl font-bold">Collaboration</h4>
          </div>
          <div className="flex items-center justify-start flex-1 gap-4">
            <PiBookOpenText className="text-4xl" />
            <h4 className="text-xl font-bold">Continuous Learning</h4>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h2 className="font-bold text-2xl lg:text-5xl">About</h2>
        <p className="text-justify mt-6">
          Sou desenvolvedor full-stack e estudante de Tecnologia em
          Desenvolvimento de Sistemas, com experiência em front-end e back-end.
          Busco criar aplicações modernas, responsivas e escaláveis, aplicando
          boas práticas e inovação para entregar soluções de qualidade e
          impacto.
        </p>
        <div className="flex mt-8">
          <h3 className="font-bold text-2xl">Top Skills</h3>
          <div className="flex gap-2"></div>
        </div>
      </div>
    </section>
  );
};
