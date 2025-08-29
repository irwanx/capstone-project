"use client";

import { siteConfig } from "@/constants/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LearningPathSection() {
  const { title, description, list } = siteConfig.programs;

  return (
    <section
      id="program"
      className="relative py-20 bg-[#23313B] z-10 overflow-hidden"
      aria-label="Learning paths section"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="block dark:hidden absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto md:px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {list.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="bg-[#192831] p-8 rounded-2xl shadow-md border border-border flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-secondary/50">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon learning path`}
                    width={40}
                    height={40}
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {item.description}
                </p>

                <a
                  href={item.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant={
                      item.cta.variant === "secondary" ? "default" : "default"
                    }
                    className="w-full px-6 py-4 text-base font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
                  >
                    {item.cta.label}
                  </Button>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
