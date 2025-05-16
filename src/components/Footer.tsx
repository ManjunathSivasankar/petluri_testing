
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f9e79f] text-gray-800 border-t border-blue">
      <div className="container max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-800">EduHub</h3>
            <p className="text-gray-700 mb-4">
              Transforming lives through quality education and innovative learning experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-yellow-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-700 hover:text-blue transition duration-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-yellow-800">Contact</h4>
            <address className="text-gray-700 not-italic">
              <p className="mb-2">100 Education St.</p>
              <p className="mb-2">Learning City, LC 12345</p>
              <p className="mb-2">Email: info@eduhub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-bold mb-4 text-yellow-800">Send a Message</h4>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-md border border-blue-light text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-md border border-blue-light text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
              />
              <textarea
                rows={3}
                placeholder="Your Message"
                className="w-full px-3 py-2 rounded-md border border-blue-light text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-blue transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
