import { IconType } from "react-icons";

type ProfileLinkProps = {
  icon: IconType;
  url: string;
  size: number;
  className?: string;
};

export const ProfileLink = ({
  icon: Icon,
  url,
  size,
  className,
}: ProfileLinkProps) => {
  return (
    <a
      href={url}
      className="transition-all text-[#3b3b3b] duration-1000 hover:text-emerald-400 hover:-translate-y-4 text-shadow-neon cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={size} className={className} />
    </a>
  );
};
