import { Link } from "react-scroll";

type NavItemProps = {
  label: string;
  sectionId: string;
};

export const NavItem = ({ label, sectionId }: NavItemProps) => {
  return (
    <Link
      activeClass="text-emerald-400 border-b-2 border-emerald-400"
      to={sectionId}
      spy={true}
      smooth={true}
      offset={10}
      duration={800}
      className={
        "hover:text-emerald-400 transition-colors font-medium cursor-pointer"
      }
    >
      {label}
    </Link>
  );
};
