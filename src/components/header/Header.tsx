"use client";

import { useState } from "react";
import Link from "next/link";
import { headerLinks } from "@/constant/headerLinks";
import NavLinks from "./NavLinks";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="bg-amber-900 px-4 py-3">
      <div className="flex items-center justify-between md:justify-around ">
        <Link href="/" className="text-white text-xl font-semibold">
          Dashboard
        </Link>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          <IoMdMenu />
        </button>

        <nav className="hidden md:flex gap-6">
          {headerLinks.map((link) => (
            <NavLinks key={link.id} href={link.url}>
              {link.title}
            </NavLinks>
          ))}
        </nav>
      </div>

      {/* handle mobile view =>>> */}
      {open && (
        <nav className="flex flex-col mt-2 gap-2 md:hidden">
          {headerLinks.map((link) => (
            <NavLinks key={link.id} href={link.url} onClick={handleLinkClick}>
              {link.title}
            </NavLinks>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
