import { Button } from "@/components/ui/button";
import { Config } from "./config";
import { NavItem } from "./nav-item";

const navItems = [
  {
    label: "About",
    sectionId: "about",
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
    <nav className="gap-8 hidden md:flex items-center font-medium">
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      <Button className="rounded-full border-2 border-background bg-emerald-400 hover:bg-background hover:text-emerald-400 hover:border-2 hover:border-emerald-400 cursor-pointer">
        Projetos
      </Button>
      <Config />
    </nav>
  );
};
