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
    label: "Contact",
    sectionId: "contact",
  },
  {
    label: "CV",
    sectionId: "cv",
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
