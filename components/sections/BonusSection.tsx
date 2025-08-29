"use client";

import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/constants/config";

export default function BonusSection() {
  const { title, description, items } = siteConfig.bonus;

  return (
    <section
      id="bonus"
      className="relative py-20 z-10 bg-[#192831] overflow-hidden"
      aria-label="Bonus section"
    >
      <div
        className="absolute top-12 right-1/3 w-60 h-60 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-2xl opacity-40 -z-10 dark:from-primary-500/20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto md:px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {items.map((bonus, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#23313B]/50 hover:bg-[#23313B]/70 transition-colors duration-200"
              >
                <CheckCircle
                  className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="text-sm md:text-base">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
