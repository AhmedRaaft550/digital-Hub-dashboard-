"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "mr-4 transition-colors",
        isActive ? "text-white font-bold " : "text-gray-50 hover:text-gray-200"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
