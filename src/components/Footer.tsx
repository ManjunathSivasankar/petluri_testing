import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const [footerForm, setFooterForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFooterChange = (e) => {
    const { name, value } = e.target;
    setFooterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const phone = "919345974814"; // your WhatsApp number (no "+" or spaces)
    const text = encodeURIComponent(
      `Name: ${footerForm.name}\nEmail: ${footerForm.email}\nMessage: ${footerForm.message}`
    );
    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, "_blank");
      setFooterForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-blue">
      <div className="container max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/public/petluri_logo.jpeg"
              alt="Petluri Logo"
              className="h-12 w-auto mb-4"
              />
            <p className="text-gray-700 mb-4">
              Transforming lives through quality education and innovative learning experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue transition-colors"
                >
                  <Icon size={20} />
                  <span className="sr-only">{Icon.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-yellow-800">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Courses", "Contact"].map((label, i) => (
                <li key={i}>
                  <Link
                    to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-yellow-800">Contact</h4>
            <address className="text-gray-700 not-italic">
              <p className="mb-2">100 Education St.</p>
              <p className="mb-2">Learning City, LC 12345</p>
              <p className="mb-2">Email: info@eduhub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-yellow-800">Send a Message</h4>
            <form onSubmit={handleFooterSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={footerForm.name}
                onChange={handleFooterChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-md border border-blue-light text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
                required
              />
              <input
                type="email"
                name="email"
                value={footerForm.email}
                onChange={handleFooterChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-md border border-blue-light text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
                required
              />
              <textarea
                name="message"
                value={footerForm.message}
                onChange={handleFooterChange}
                rows={3}
                placeholder="Your Message"
                className="w-full px-3 py-2 rounded-md border border-blue-light text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-blue transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;