import { FC } from "react";
import { navItems } from "@/common/data";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import Icon from "../../assets/OG_logo.png";
import NavBarMobile from "./mobile-nav";
import { useLocation } from "react-router";

interface INavBar {
  colortheme: "light" | "dark";
}

const Navbar: FC<INavBar> = ({ colortheme }) => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-2xl font-bold">
            <img src={Icon} alt="" className="w-12 h-12" />
          </Link>
        </div>
        <div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.link} colortheme={colortheme}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className={"block md:hidden"}>
            <NavBarMobile colortheme={colortheme} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavLink = ({
  href,
  colortheme,
  children,
}: {
  href: string;
  colortheme: "light" | "dark";
  children: React.ReactNode;
}) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={href}
      className={cn(
        pathname === href && colortheme === "light" && "border-b border-black",
        "transition-colors uppercase font-medium text-sm tracking-widest text-center px-2 pb-2",
        colortheme === "light" && "text-black hover:text-gray-300",
        colortheme === "dark" &&
          "text-black md:text-white hover:border-b hover:border-white"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
