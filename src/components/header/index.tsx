"use client";

import { Navbar } from "./navbar";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="w-full flex justify-items-center sticky top-0 z-50 bg-background">
      <div className="container flex justify-center md:justify-between lg:px-40">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
