"use client";

import { useState, useEffect } from "react";
import { Share2, X } from "lucide-react";
import SocialLinks from "./SocialLinks";

interface PopupShareProps {
  url: string;
}

export default function PopupShare({ url }: PopupShareProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Share"
        className="p-2 rounded-full hover:bg-accent border border-border transition"
      >
        <Share2 className="w-5 h-5 text-muted-foreground hover:text-primary" />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-background w-full max-w-sm mx-auto rounded-xl shadow-xl p-6 animate-fadeIn border border-border"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center">
                Bagikan Web Ini
              </h3>
              <SocialLinks url={url} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
