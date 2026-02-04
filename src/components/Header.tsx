import { Link, useLocation } from "react-router-dom";
import { User, Users } from "lucide-react";
import alphaLogo from "@/assets/alpha-logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Membership", path: "/membership" },
  { name: "Partners", path: "/partners" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-navy sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-amber flex items-center justify-center overflow-hidden">
              <img 
                src={alphaLogo} 
                alt="ALPHA Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide">ALPHA</span>
              <span className="text-xs text-amber tracking-wider">AUTOMOTIVE EXCELLENCE</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/member-signin"
              className="hidden sm:flex items-center gap-2 rounded-md border border-amber px-4 py-2 text-sm font-medium text-amber transition-colors hover:bg-amber hover:text-navy"
            >
              <User className="w-4 h-4" />
              Member Sign In
            </Link>
            <Link
              to="/partner-login"
              className="hidden sm:flex items-center gap-2 rounded-md border border-amber bg-transparent px-4 py-2 text-sm font-medium text-amber transition-colors hover:bg-amber hover:text-navy"
            >
              <Users className="w-4 h-4" />
              Partner Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
