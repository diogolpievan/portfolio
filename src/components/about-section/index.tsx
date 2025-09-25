"use client";

import { motion } from "motion/react";
import { MdOutlinePsychology } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";

import { Skill } from "../skill";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="container flex flex-col lg:flex-row gap-0 py-16 justify-between xl:px-40 items-start min-h-[380px] xl:h-[380px] p-10 lg:p-0"
    >
      <div className="flex-1 hidden lg:flex text-2xl h-full">
        <motion.div className="flex items-stretch h-full ">
          <motion.svg
            width="25px"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="10"
              y1="0"
              x2="10"
              y2="28%"
              strokeWidth={3}
              stroke="#00d491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              cx="10"
              cy="33%"
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
              y1="38%"
              x2="10"
              y2="63%"
              strokeWidth={3}
              stroke="#00d491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.circle
              cx="10"
              cy="68%"
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
              y1="73%"
              x2="10"
              y2="100%"
              strokeWidth={3}
              stroke="#00d491"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        <div className="flex justify-center ml-5 items-start flex-col gap-5 h-full">
          <div className="flex items-center justify-start flex-1 gap-4">
            <MdOutlinePsychology className="text-5xl" />
            <h4 className="text-xl font-bold">Problem Solving</h4>
          </div>
          <div className="flex items-center justify-start flex-1 gap-4">
            <HiOutlineUserGroup className="text-5xl" />
            <h4 className="text-xl font-bold">Collaboration</h4>
          </div>
          <div className="flex items-center justify-start flex-1 gap-4">
            <PiBookOpenText className="text-5xl" />
            <h4 className="text-xl font-bold">Continuous Learning</h4>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div>
          <h2 className="font-bold text-3xl lg:text-5xl">About</h2>
          <p className="text-justify mt-6">
            Sou desenvolvedor full-stack e estudante de Tecnologia em
            Desenvolvimento de Sistemas, com experiência em front-end e
            back-end. Busco criar aplicações modernas, responsivas e escaláveis,
            aplicando boas práticas e inovação para entregar soluções de
            qualidade e impacto.
          </p>
        </div>

        <div className="flex flex-col mt-8 justify-center items-center md:justify-start md:items-stretch">
          <h3 className="font-bold text-2xl">Top Skills</h3>
          <div className="flex gap-2 mt-4 flex-wrap justify-center items-center sm:justify-start sm:items-stretch">
            <Skill
              name="bi:BiLogoTypescript"
              label="TypeScript"
              color="#3178c6"
            />
            <Skill
              name="bi:BiLogoJavascript"
              label="JavaScript"
              color="#F5DD27"
            />
            <Skill name="fa:FaNodeJs" label="Node.js" color="#4DAF51" />
            <Skill name="fa:FaReact" label="React" color="#00D8FF" />
            <Skill
              name="bi:BiLogoTailwindCss"
              label="Tailwind CSS"
              color="#37b3ae"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
