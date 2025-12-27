import { headerLinks } from "@/constant/headerLinks";
import { HeaderLink } from "@/types/headerTypes";
import NavLink from "./NavLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-amber-900 py-3 flex justify-around items-center ">
      <Link href="/">
        <h1 className="text-gray-100 font-semibold text-2xl"> Dashboard</h1>
      </Link>
      <nav className="text-gray-50">
        {headerLinks.map((link: HeaderLink) => {
          return (
            <NavLink key={link.id} href={link.url}>
              {link.title}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
