"use client";

import { siteConfig } from "@/constants/config";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import placeholderImage from "@/assets/images/why.webp";

import {
  ChartLine,
  ShoppingCartIcon,
  XCircle,
  NotebookPen,
  AlertTriangle,
} from "lucide-react";

const icons: { [key: string]: LucideIcon } = {
  ChartLine,
  ShoppingCartIcon,
  XCircle,
  NotebookPen,
};

export default function WhyLearnSection() {
  const { title, description, problems, highlightNote } = siteConfig.whyLearn;

  return (
    <section
      id="why"
      className="relative py-20 z-10 bg-[#192831] overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div
        className="absolute top-12 right-1/3 w-60 h-60 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-2xl opacity-40 -z-10 dark:from-primary-500/20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto md:px-4">
          <header className="text-center mb-16">
            <h2
              id="why-heading"
              className="text-3xl md:text-4xl text-primary font-bold mb-4"
            >
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl transition-transform hover:scale-105">
              <Image
                src={placeholderImage}
                alt="Masalah umum dalam bisnis impor"
                fill
                priority={false}
                quality={85}
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <ul className="flex flex-col gap-6">
              {problems.map((item, index) => {
                const IconComponent = icons[item.icon] || AlertTriangle;

                return (
                  <li key={index} className="flex items-start gap-3">
                    <IconComponent
                      className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <p className="text-sm md:text-base">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Highlight note with semantic markup */}
          <aside className="mt-12 p-6 bg-primary/80 text-center">
            <p className="md:text-xl font-semibold text-[#192831]">
              {highlightNote}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
