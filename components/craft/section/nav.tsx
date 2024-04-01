// Fjord Config
import fjord from "@/fjord.config";

// Next Imports
import Link from "next/link";
import Image from "next/image";

// Utility Imports
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b drop-shadow-sm",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-screen-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        {/* max-w-screen-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl */}
        <Link className="hover:opacity-75 transition-all" href="/">
          <h2 className="sr-only">Craft UI</h2>
          <Image src={fjord.logo} alt="Logo" width={180} height={60}></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />

          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
