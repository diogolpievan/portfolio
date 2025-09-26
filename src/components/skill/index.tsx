import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import { IconType } from "react-icons";
import { TooltipArrow } from "@radix-ui/react-tooltip";

const iconsLibraries = {
  fa: FaIcons,
  bi: BiIcons,
  io: IoIcons,
  si: SiIcons,
};

type SkillProps = {
  icon: string;
  label: string;
  color?: string;
};

export const Skill = ({ icon, label, color = "#00d492" }: SkillProps) => {
  const [lib, iconName] = icon.split(":") as [
    keyof typeof iconsLibraries,
    string
  ];
  const IconSet = iconsLibraries[lib];
  const IconComponent = IconSet[iconName as keyof typeof IconSet] as IconType;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          aria-label={label}
          className="group w-20 h-20 rounded-xl flex items-center justify-center text-center transition-[transform_300ms,border-color_700ms] hover:scale-110 border-2 border-background"
          style={{
            background: "linear-gradient(45deg, #191919 70%, #2f2f2f 120%)",
          }}
        >
          <IconComponent
            style={
              {
                "--icon-color": color,
                "--drop-shadow": `0px 4px 11px ${color}a2`,
              } as React.CSSProperties
            }
            size={50}
            className="text-[var(--icon-color)] xl:text-[#666666] xl:group-hover:text-[var(--icon-color)] drop-shadow-[var(--drop-shadow)] xl:drop-shadow-none xl:group-hover:drop-shadow-[var(--drop-shadow)] transition-all duration-500"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-[#222]">
        <p className="text-foreground p-1">{label}</p>
        <TooltipArrow style={{ fill: "#222" }} />
      </TooltipContent>
    </Tooltip>
  );
};
