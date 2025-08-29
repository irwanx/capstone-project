"use client";

import { siteConfig } from "@/constants/config";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import placeholderImage from "@/assets/images/shipping.webp";

export default function SolutionSection() {
  const { title, description, items } = siteConfig.solution;

  return (
    <section
      id="solution"
      className="relative py-20 z-10 bg-[#23313B] overflow-hidden"
      aria-label="Solution section"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="block dark:hidden absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none z-0"
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

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <p className="text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="relative aspect-[4/3] rounded-lg shadow-xl transition-transform hover:scale-[1.02] duration-300">
              <Image
                src={placeholderImage}
                alt="Illustration of shipping and logistics"
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
