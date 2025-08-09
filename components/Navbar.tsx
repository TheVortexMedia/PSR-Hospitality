"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling down after 100px
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex items-center justify-center h-16 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "#214280" }}
      >
        <div className="flex items-center justify-between w-11/12 md:w-10/12">
          <img src="/images/logo.png" alt="" className="w-36 " />

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-16 text-sm"
            style={{ color: "#FBD65D" }}
          >
            <Link
              href="/"
              className="transition-colors"
              style={{ color: "#FBD65D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FBD65D")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors"
              style={{ color: "#FBD65D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FBD65D")}
            >
              About
            </Link>
            <Link
              href="/menu"
              className="transition-colors"
              style={{ color: "#FBD65D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FBD65D")}
            >
              Menu
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <Button
            size="sm"
            className="hidden md:block transition-colors hover:opacity-90"
            style={{ backgroundColor: "#FBD65D", color: "#1c3f60" }}
            onClick={() => router.push("/contact")}
          >
            Contact Us Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden transition-colors"
            style={{ color: "#FBD65D" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FBD65D")}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 right-0 h-full w-full z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div
          className="flex flex-col h-full"
          style={{ backgroundColor: "#214280" }}
        >
          {/* Menu Header */}
          <div
            className="flex items-center justify-between h-16 border-b px-5"
            style={{ borderColor: "#214280" }}
          >
            <h3 className="font-bold text-lg" style={{ color: "#FBD65D" }}>
              PSR Hospitality
            </h3>
            <button
              onClick={closeMenu}
              className="transition-colors"
              style={{ color: "#FBD65D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FBD65D")}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-white transition-colors text-lg py-2"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FBD65D")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact Button */}
          <div className="p-6 border-t" style={{ borderColor: "#214280" }}>
            <Button
              onClick={closeMenu}
              className="w-full transition-colors hover:opacity-90"
              style={{ backgroundColor: "#FBD65D", color: "#214280" }}
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
