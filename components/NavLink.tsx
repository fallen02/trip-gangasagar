import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";

export const navMenus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Hotels",
    href: "/hotels",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function NavLinks() {
  return navMenus.map(({ title, href }, index) => (
    <NavLink
      key={index}
      to={href}
    //   className={({isActive}) => (isActive ? "text-red-400" : '')}
    >
      <span className="text-gray-800 font-ubuntu font-medium text-lg tracking-wide hover:text-orange-600 transition-colors duration-200">
        {title}
      </span>
      {/* <span className="absolute h-[2px] w-full bg-red-400 bottom-0 left-0"></span> */}
    </NavLink>
  ));
}
