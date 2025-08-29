"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { siteConfig } from "@/constants/config";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-gray-700/40 opacity-40" />

        <Image
          src={heroImage}
          alt="Hero Background - Impor Masterclass"
          fill
          priority
          quality={80}
          className="object-cover opacity-50"
          sizes="100vw"
        />

        <div className="absolute top-1/4 -left-36 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-6xl md:px-4 text-center">
            <Badge
              variant="secondary"
              className="mb-6 border-transparent bg-primary/10 text-white hover:bg-primary/20"
              aria-label="Trending badge"
            >
              <TrendingUp className="mr-2 h-4 w-4" aria-hidden="true" />
              {siteConfig.hero.badge.text}
            </Badge>

            <h1
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl text-white"
              dangerouslySetInnerHTML={{ __html: siteConfig.hero.title }}
            />

            <p
              className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300"
              dangerouslySetInnerHTML={{ __html: siteConfig.hero.description }}
            />

            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-6 sm:px-0">
              {siteConfig.hero.buttons.map((button, index) => (
                <Button
                  asChild
                  key={index}
                  size="lg"
                  variant={
                    button.variant === "secondary" ? "default" : "outline"
                  }
                  className="w-full sm:w-auto py-6 font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
                >
                  <a
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {button.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
