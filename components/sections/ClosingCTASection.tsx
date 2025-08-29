"use client";

import { siteConfig } from "@/constants/config";
import { Button } from "@/components/ui/button";
import backgroundImage from "@/assets/images/hero-image.webp";

export default function ClosingCtaSection() {
  const { title, description } = siteConfig.closingCta;
  const buttons = siteConfig.hero.buttons;

  return (
    <section
      id="daftar"
      className="relative py-20 z-10 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay untuk memastikan teks terbaca dengan jelas */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Efek Bulat pada Background */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-white/30 dark:bg-yellow-200/10 blur-3xl rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto md:px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white mb-10">{description}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-6 sm:px-0">
            {buttons.map((btn, i) => (
              <a
                href={btn.href}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant={btn.variant === "secondary" ? "default" : "default"}
                  className={`w-full sm:w-auto py-6 font-semibold shadow-lg transition-transform duration-200 hover:scale-105 ${btn.variant === "secondary" ? "" : "bg-[#FA5130] text-white"}`}
                >
                  {btn.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
