import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { GoGear } from "react-icons/go";
import Image from "next/image";

export const Config = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <GoGear
          size={22}
          className="hover:text-emerald-400 transition-colors duration-300 hover:text-shadow-2xs cursor-pointer data-[state=open]:text-emerald-400"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-52 bg-primary-foreground px-4 rounded-4xl mt-3">
        <div className="py-8 flex flex-col gap-4">
          <div>
            <h4>Theme</h4>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="flex flex-col gap-2">
            <h4>Language</h4>
            <div className="flex flex-row w-full justify-between items-center ">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Brazilian_flag_icon_round.svg"
                alt="Portuguese"
                width={36}
                height={36}
                className="border-2 border-sidebar-border rounded-full cursor-pointer hover:border-emerald-400 transition-all duration-300 shadow-neon"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg"
                alt="English"
                width={36}
                height={36}
                className="border-2 border-sidebar-border rounded-full cursor-pointer hover:border-emerald-400 transition-all duration-300 shadow-neon"
              />
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
