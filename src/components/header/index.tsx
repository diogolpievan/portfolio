import Link from "next/link";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header>
      <div className="container flex justify-between">
        <Link href={"/"}>
          <h2 className="font-bold text-2xl">
            Diogo L<span className="text-emerald-400">.</span> Pievan
          </h2>
        </Link>

        <Navbar />
      </div>
    </header>
  );
};
