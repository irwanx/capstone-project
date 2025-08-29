import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Icons } from "../icons/icon";

const socialMedia = [
  {
    name: "Twitter",
    href: (url: string) => `https://x.com/intent/tweet?text=${url}`,
    bg: "bg-black",
    icon: Icons.twitter,
  },
  {
    name: "Threads",
    href: (url: string) => `https://threads.net/intent/post?text=${url}`,
    bg: "bg-black",
    icon: Icons.threads,
  },
  {
    name: "Facebook",
    href: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?quote=${url}`,
    bg: "bg-[#1064fc]",
    icon: Icons.facebook,
  },
  {
    name: "WhatsApp",
    href: (url: string) =>
      typeof window !== "undefined" && window.innerWidth >= 1024
        ? `https://web.whatsapp.com/send?text=${url}`
        : `whatsapp://send?text=${url}`,
    bg: "bg-[#25d366]",
    icon: Icons.whatsapp,
  },
  {
    name: "Telegram",
    href: (url: string) =>
      typeof window !== "undefined" && window.innerWidth >= 1024
        ? `https://t.me/share/url?url=${url}`
        : `tg://msg?text=${url}`,
    bg: "bg-[#32a9df]",
    icon: Icons.telegram,
  },
];

interface SocialLinksProps {
  url: string;
  onClose: () => void;
}

export default function SocialLinks({ url, onClose }: SocialLinksProps) {
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="grid grid-cols-3 gap-4 text-center p-4 bg-white border rounded-lg shadow-lg"
    >
      {socialMedia.map(({ name, href, bg, icon: Icon }, i) => (
        <Link
          key={i}
          href={href(url)}
          target="_blank"
          className="flex flex-col items-center justify-center gap-2"
        >
          <div
            className={`rounded-full w-14 h-14 flex items-center justify-center ${bg}`}
          >
            <Icon className="text-white w-7 h-7" />
          </div>
          <span className="text-sm text-muted-foreground">{name}</span>
        </Link>
      ))}

      <button
        onClick={handleCopy}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="rounded-full w-14 h-14 flex items-center justify-center bg-muted hover:bg-primary/90 transition">
          {copied ? (
            <Icons.copyF className="text-primary hover:text-white w-7 h-7" />
          ) : (
            <Icons.copyR className="text-primary hover:text-white w-7 h-7" />
          )}
        </div>
        <span className="text-sm text-muted-foreground">
          {copied ? "Copied!" : "Copy Link"}
        </span>
      </button>
    </div>
  );
}
