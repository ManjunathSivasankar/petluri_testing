
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white py-5 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">
          EduHub
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground hover:text-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-foreground font-medium hover:text-blue underline-animation smooth-transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-foreground font-medium hover:text-blue underline-animation smooth-transition"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="text-foreground font-medium hover:text-blue underline-animation smooth-transition"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-foreground font-medium hover:text-blue underline-animation smooth-transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-blue-light lg:hidden animate-smooth-fade-in">
            <nav className="flex flex-col py-4 px-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-blue border-b border-gold/20 smooth-transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-blue border-b border-gold/20 smooth-transition"
              >
                About
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-blue border-b border-gold/20 smooth-transition"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-blue border-b border-gold/20 smooth-transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
