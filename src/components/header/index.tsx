"use client";

import Link from "next/link";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="w-full flex justify-items-center sticky top-0 z-50 bg-background">
      <div className="container flex justify-between ">
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
