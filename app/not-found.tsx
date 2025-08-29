import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#23313B] p-8 text-center">
      <SearchX className="h-24 w-24 text-muted-foreground" />
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-muted-foreground">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari.
        </p>
      </div>
      <Link href="/">
        <Button size="lg">Kembali ke Beranda</Button>
      </Link>
    </div>
  );
}
