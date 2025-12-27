import { HeaderLink } from "@/types/headerTypes";

export const headerLinks: HeaderLink[] = [
  {
    id: crypto.randomUUID(),
    title: "Home",
    url: "/",
  },
  {
    id: crypto.randomUUID(),
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: crypto.randomUUID(),
    title: "Chart",
    url: "/chart",
  },
  {
    id: crypto.randomUUID(),
    title: "Login",
    url: "/login",
  },
];
