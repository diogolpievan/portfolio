import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";

import { IconType } from "react-icons";
import { useState } from "react";

const iconsLibraries = {
  fa: FaIcons,
  bi: BiIcons,
  io: IoIcons,
};

type SkillProps = {
  name: string;
  label: string;
  color?: string;
};

export const Skill = ({ name, label, color = "#00d492" }: SkillProps) => {
  const [lib, iconName] = name.split(":") as [
    keyof typeof iconsLibraries,
    string
  ];
  const IconSet = iconsLibraries[lib];
  const IconComponent = IconSet[iconName as keyof typeof IconSet] as IconType;

  const [hover, setHover] = useState(false);

  return (
    <div
      aria-label={label}
      className="group w-20 h-20 rounded-xl flex items-center justify-center text-center cursor-pointer transition-[transform_300ms,border-color_700ms] hover:scale-110 border-2 border-background"
      style={{
        background: "linear-gradient(45deg, #191919 70%, #2f2f2f 120%)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconComponent
        size={50}
        className="text-[#666666] transition-all duration-500 ]"
        style={{
          color: hover ? color : "#666666",
          filter: hover ? `drop-shadow(0px 4px 11px ${color}a2 ) ` : "",
        }}
      />
    </div>
  );
};
