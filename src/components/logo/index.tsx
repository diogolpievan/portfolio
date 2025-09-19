import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="font-bold text-2xl">
        Diogo L<span className="text-emerald-400">.</span> Pievan
      </h2>
    </Link>
  );
};
