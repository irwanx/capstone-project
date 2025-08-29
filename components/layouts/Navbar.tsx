"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { siteConfig } from "@/constants/config";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isDesktop) {
        setIsScrolled(window.scrollY > 20);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    const targetId = href.replace("#", "");

    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${targetId}`);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isDesktop
          ? isScrolled
            ? "backdrop-blur-xl bg-[#23313B]/60 shadow-md"
            : "text-white"
          : "bg-[#23313B] shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={siteConfig.logo}
              alt="Logo Impor Masterclass Atas"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-semibold uppercase">{siteConfig.name}</span>
          </Link>

          <div className="hidden md:flex ml-auto gap-6 text-sm font-medium">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`${
                  isScrolled ? "text-[#23313B]" : "text-gray-300"
                } dark:text-slate-300 hover:text-primary transition`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={`md:hidden flex items-center gap-2 text-[#23313B] dark:text-slate-300 ${isScrolled ? "text-[#23313B]" : "text-gray-300"}`}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Buka menu navigasi"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 w-4/5 sm:w-3/5 z-50 h-full p-4 bg-[#23313B] transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg md:hidden`}
      >
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Tutup menu navigasi"
          >
            <Image
              src={siteConfig.logo}
              alt="Profile logo impor masterclass"
              width={40}
              height={40}
              className="rounded"
            />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr className="mb-4 border-primary" />
        <div className="flex flex-col gap-4">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-slate-300 hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden" />
      )}
    </nav>
  );
}
