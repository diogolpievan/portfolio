import { Button } from "@/components/ui/button";
import { Config } from "./config";
import { NavItem } from "./nav-item";
import { ToggleMenu } from "./toggle-menu";

const navItems = [
  {
    label: "About",
    sectionId: "about",
    offset: -100,
  },
  {
    label: "Skills",
    sectionId: "skills",
  },
  {
    label: "CV",
    sectionId: "cv",
  },
  {
    label: "Contact",
    sectionId: "contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="gap-3 md:gap-8 flex items-center font-medium">
      <div className="gap-8 items-center font-medium hidden md:flex">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <Button className="btn">Projetos</Button>
      </div>

      <div className="md:hidden">
        <ToggleMenu>
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <Button className="rounded-full border-2 border-background bg-emerald-400 cursor-pointer transition-colors duration-500">
            Projetos
          </Button>
        </ToggleMenu>
      </div>
      <Config />
    </nav>
  );
};
