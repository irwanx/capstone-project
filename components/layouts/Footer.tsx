"use client";

import { siteConfig } from "@/constants/config";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#23313B] border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="justify-center md:flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} Footer Logo`}
            width={50}
            height={50}
            className="rounded-full mx-auto"
          />
          <div>
            <h3 className="text-lg font-bold uppercase text-primary">
              {siteConfig.name}
            </h3>
            <p className="text-sm">{siteConfig.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium text-muted-foreground">
          {siteConfig.navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted-foreground">
        {siteConfig.footer.copyright}
      </div>
    </footer>
  );
}
