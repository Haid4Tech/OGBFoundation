import { Link } from "react-router";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface INavBar {
  colortheme: "light" | "dark";
}

const Navbar: FC<INavBar> = ({ colortheme }) => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-2xl font-bold">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white">❤️</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/events" colortheme={colortheme}>
            EVENTS
          </NavLink>
          <NavLink colortheme={colortheme} href="/gallery">
            GALLERY
          </NavLink>
          <NavLink colortheme={colortheme} href="/stories">
            STORIES
          </NavLink>
          <NavLink colortheme={colortheme} href="/timeline">
            TIMELINE
          </NavLink>
          <NavLink colortheme={colortheme} href="/contribute">
            CONTRIBUTE
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  colortheme,
  children,
}: {
  href: string;
  colortheme: "light" | "dark";
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "transition-colors font-medium text-sm tracking-widest text-center px-2 pb-2",
        colortheme === "light"
          ? "text-white hover:text-gray-300"
          : "text-black hover:border-b hover:border-black"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
