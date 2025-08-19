"use client";

import { Button } from "@/components/ui/button";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-40 border-b border-white/15 bg-[#1c3f60]`}
      >
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center gap-4 justify-between">
          <Image
            src="/images/logo.png"
            width={1000}
            height={1000}
            alt=""
            className="w-36 "
          />

          <div className="ml-auto hidden md:flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 ml-8">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-sm text-white/85 hover:text-white transition-colors uppercase font-medium"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="h-6 bg-zinc-400/30 w-px" />

            <Link
              href="tel:+919900006840"
              aria-label="Call us"
              className="text-sm text-white"
            >
              +91 8919684575
            </Link>
            <Button
              className="hidden md:block text-xs transition-colors hover:opacity-90 bg-gradient-to-r from-[#bd9102] to-[#e1be49] uppercase font-semibold px-6"
              onClick={() => router.push("/contact")}
            >
              Enquire now
            </Button>
          </div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            variant="ghost"
            size="icon"
          >
            <AlignRight className="size-5 text-white" />
          </Button>
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
          style={{ backgroundColor: "#1c3f60" }}
        >
          {/* Menu Header */}
          <div
            className="flex items-center justify-between h-16 border-b px-5"
            style={{ borderColor: "#1c3f60" }}
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
              {nav.map((item) => (
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
          <div className="p-6 border-t" style={{ borderColor: "#1c3f60" }}>
            <Button
              onClick={() => {
                router.push("/contact");
                closeMenu();
              }}
              className="w-full transition-colors hover:opacity-90 bg-gradient-to-r from-[#bd9102] to-[#fcd553]"
            >
              Enquire now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
