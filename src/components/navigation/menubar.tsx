import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-2xl font-bold">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white">❤️</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/events">EVENTS</NavLink>
          <NavLink href="/gallery">GALLERY</NavLink>
          <NavLink href="/stories">STORIES</NavLink>
          <NavLink href="/timeline">TIMELINE</NavLink>
          <NavLink href="/contribute">CONTRIBUTE</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className="text-white hover:text-gray-300 transition-colors font-medium text-sm tracking-widest"
    >
      {children}
    </Link>
  );
};

export default Navbar;
