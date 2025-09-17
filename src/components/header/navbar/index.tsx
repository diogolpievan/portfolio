import { NavItem } from "./nav-item";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "CV",
    href: "#cv",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </nav>
  );
};
