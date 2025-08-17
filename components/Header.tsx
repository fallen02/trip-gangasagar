import { useRef, useState } from "react";
import * as motion from "motion/react-client";
import { useWindowSize } from "react-use";
import { Container } from "./Container";
import { MenuToggle } from "./MenuToggle";
import { NavLinks, navMenus } from "./NavLink";
import { bookLink } from "@/constant/navmenu";
export function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height, width } = useWindowSize();

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: () => ({
      clipPath: `circle(20px at ${width - 30}px 2em)`,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }),
  };
  return (
    <header>
      <motion.nav
        initial={false}
        animate={mobileMenu ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="relative"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <motion.div
          className="lg:hidden w-dvw h-dvh  absolute z-20 backdrop-blur-sm"
          //@ts-ignore
          variants={sidebarVariants}
        >
          <MobileMenu />
        </motion.div>

        <Container className="relative flex justify-between items-center py-5 z-50">
          <a
            href="/"
            className="relative font-catamaran text-orange-600 font-extrabold text-base lg:text-2xl tracking-wider uppercase z-50"
          >
            Gangasagar Travels & Hotels
          </a>
          <div className="flex justify-between items-center  gap-2 lg:gap-20">
            <div className="hidden lg:flex gap-8  items-center">
              <NavLinks />
            </div>
            <div className="hidden lg:inline-block relative group">
              <div className="hidden lg:block absolute inset-0 bg-orange-600 z-0 border border-black translate-0 lg:translate-x-0.5 lg:translate-y-0.5 rounded-xl group-hover:translate-0 transition-transform duration-150" />
              <a
                href={bookLink}
                className="relative inline-flex rounded-xl no-underline items-center justify-center border border-black transition-all duration-150 -translate-x-0.5 -translate-y-0.5 group-hover:-translate-0 z-30  bg-gray-800 group-hover:bg-gray-950 text-gray-200 w-full lg:w-auto  px-3 py-1.5 text-sm lg:text-lg font-OpenSans font-medium"
              >
                +91 6297368883
              </a>
            </div>
            <motion.div
              // style={nav}
              className="lg:hidden relative flex justify-between items-center "
            >
              <MenuToggle toggle={() => setMobileMenu(!mobileMenu)} />
            </motion.div>
          </div>
        </Container>
      </motion.nav>
    </header>
  );
}

function MobileMenu() {
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.div
      variants={navVariants}
      className="absolute w-full flex flex-col gap-2 top-1/10 px-5"
    >
      {navMenus.map((menu, index) => (
        <motion.li
          key={index}
          whileTap={{ scale: 0.9 }}
          variants={itemVariants}
          className="list-none"
        >
          <a
            href={menu.href}
            className="font-ubuntu font-medium tracking-wider"
          >
            {menu.title}
          </a>
        </motion.li>
      ))}
      <motion.a
        href={bookLink}
        variants={itemVariants}
        className="mt-10 bg-orange-600 w-full py-3 text-center text-xl text-white font-ubuntu font-medium rounded-2xl"
      >
        +91 6297368883
      </motion.a>
    </motion.div>
  );
}
