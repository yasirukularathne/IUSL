import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
} from "lucide-react";
import { NAV_LINKS } from "./constants";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Faculties from "./pages/Faculties";
import Philosophy from "./pages/Philosophy";
import LifeAtIUSL from "./pages/LifeAtIUSL";
import Benefits from "./pages/Benefits";
import StudentPortal from "./pages/StudentPortal";
import Contact from "./pages/Contact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed shadow-md w-full top-0 z-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="">
                <img
                  src="logo.png"
                  alt="IUSL Logo"
                  className="object-contain h-20"
                />
              </div>
              <div>
                <span
                  className={`text-2xl font-bold font-serif leading-none block ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                >
                  IUSL
                </span>
                <span
                  className={`text-xs tracking-widest uppercase font-semibold ${
                    isScrolled ? "text-dark" : "text-white"
                  }`}
                >
                  Campus
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6  w-full justify-between">
            <div className="flex flex-1  justify-end space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.path
                      ? "text-primary border-b-2 border-primary"
                      : isScrolled
                      ? "text-gray-600"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div>
              <Link
                to="/portal"
                className={`px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md ${
                  isScrolled ? "bg-primary text-white" : "bg-white text-primary"
                }`}
              >
                Enroll Now
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-primary focus:outline-none ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
          <div className="px-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  pathname === link.path
                    ? "bg-blue-50 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/portal"
              className="block w-full text-center bg-primary text-white px-5 py-3 rounded-md text-lg font-bold mt-4"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-dark text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <span className="text-2xl font-bold font-serif leading-none block text-white">
                  IUSL
                </span>
                <span className="text-xs tracking-widest uppercase font-semibold text-white">
                  Campus
                </span>
              </div>
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Take your first step towards a brighter future. IUSL Campus is a
            ground-breaking path to career success for students both local and
            abroad.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">
            Our Faculties
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <Link
                to="/faculties"
                className="hover:text-secondary transition-colors"
              >
                Engineering
              </Link>
            </li>
            <li>
              <Link
                to="/faculties"
                className="hover:text-secondary transition-colors"
              >
                Computing
              </Link>
            </li>
            <li>
              <Link
                to="/faculties"
                className="hover:text-secondary transition-colors"
              >
                Business Management
              </Link>
            </li>
            <li>
              <Link
                to="/faculties"
                className="hover:text-secondary transition-colors"
              >
                Science
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-secondary pl-3">
            Contact Info
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="text-secondary flex-shrink-0 mt-1" size={18} />
              <span>
                207/24 - 2/1, Dharmapala Mawatha, Colombo 07, Sri Lanka 00700
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-secondary flex-shrink-0" size={18} />
              <span>+94 705 999 555</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-secondary flex-shrink-0" size={18} />
              <span>info@iusl.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>
          &copy; {new Date().getFullYear()} IUSL Campus. All Rights Reserved.
          Accredited by UGC and UK Universities.
        </p>
      </div>
    </div>
  </footer>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/life" element={<LifeAtIUSL />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/portal" element={<StudentPortal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
