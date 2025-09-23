import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";
import { IoMenu } from "react-icons/io5";

type ToggleMenuProps = {
  children: ReactNode;
};

export const ToggleMenu = ({ children }: ToggleMenuProps) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <IoMenu
          size={26}
          className="hover:text-emerald-400 transition-colors duration-300 hover:text-shadow-2xs cursor-pointer data-[state=open]:text-emerald-400"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-primary-foreground px-4 rounded-4xl mt-3 w-36 transition-all duration-300">
        <div className="flex w-full justify-between items-center">
          <div className="container flex flex-col gap-4 transition-all duration-300">
            {children}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
