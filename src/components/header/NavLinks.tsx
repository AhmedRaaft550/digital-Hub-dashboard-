"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLinks = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-gray-200 hover:text-white"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
