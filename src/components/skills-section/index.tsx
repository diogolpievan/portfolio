import { ReactNode } from "react";
import { Skill } from "../skill";

import styles from "./styles.module.css";

type Category = "languages" | "frameworks" | "databases" | "tools";

interface SkillType {
  name: string;
  icon: string;
  color: string;
}

type MySkillType = Record<Category, SkillType[]>;

const mySkills: MySkillType = {
  languages: [
    {
      name: "TypeScript",
      icon: "bi:BiLogoTypescript",
      color: "#3178c6",
    },
    {
      name: "JavaScript",
      icon: "bi:BiLogoJavascript",
      color: "#F5DD27",
    },
    {
      name: "HTML",
      icon: "fa:FaHtml5",
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: "fa:FaCss3Alt",
      color: "#214ce5",
    },
    {
      name: "PHP",
      icon: "si:SiPhp",
      color: "#777BB3",
    },
    {
      name: "Python",
      icon: "fa:FaPython",
      color: "#FEDC56",
    },
  ],
  frameworks: [
    {
      name: "Node.js",
      icon: "fa:FaNodeJs",
      color: "#4DAF51",
    },
    {
      name: "Express.js",
      icon: "si:SiExpress",
      color: "#FFFFFF",
    },
    {
      name: "React",
      icon: "fa:FaReact",
      color: "#00D8FF",
    },
    {
      name: "Next.js",
      icon: "si:SiNextdotjs",
      color: "#FFFFFF",
    },
  ],
  databases: [
    {
      name: "PostgreSQL",
      icon: "bi:BiLogoPostgresql",
      color: "#306792",
    },
    {
      name: "MySQL",
      icon: "si:SiMysql",
      color: "#E58F00",
    },
    {
      name: "MongoDB",
      icon: "bi:BiLogoMongodb",
      color: "#00ED64",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "fa:FaGitAlt",
      color: "#F15337",
    },
    {
      name: "Docker",
      icon: "fa:FaDocker",
      color: "#0091E2",
    },
    {
      name: "Linux",
      icon: "fa:FaLinux",
      color: "#FFFFFF",
    },
  ],
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className={`py-36 container flex justify-between px-10 flex-col ${styles["bg-grid"]}`}
    >
      <h2 className="font-bold text-3xl lg:text-5xl z-20">Skills</h2>
      <p className="mt-4">
        Technologies and tools I use daily to build projects
      </p>
      <div className="w-full flex flex-col justify-center items-center">
        {Object.entries(mySkills).map(([category, skills]): ReactNode => {
          return (
            <div key={category} className="mt-10 skills-div">
              {skills.map((skill): ReactNode => {
                return (
                  <Skill
                    key={`mySkills-${skill.name}`}
                    icon={skill.icon}
                    label={skill.name}
                    color={skill.color}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};
