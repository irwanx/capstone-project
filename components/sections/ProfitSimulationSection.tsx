"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { siteConfig } from "@/constants/config";
import backgroundImage from "@/assets/images/hero-image.webp";
import Image from "next/image";

export default function ProfitSimulationSection() {
  const { title, description, products, note } = siteConfig.profitSimulation;

  return (
    <section
      className="relative py-20 z-10 overflow-hidden"
      aria-label="Profit simulation section"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Profit Simulation Background"
          fill
          className="object-cover"
          quality={80}
          priority={false}
          placeholder="blur"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            zIndex: -2,
          }}
        />
        <div
          className="absolute inset-0 bg-black/50 z-[-1]"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto md:px-4">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {title}
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              {description}
            </p>
          </header>

          <div className="overflow-hidden bg-[#23313B]/50 backdrop-blur-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#192831] text-white">
                  <TableHead className="w-1/4 font-semibold text-foreground">
                    Produk
                  </TableHead>
                  <TableHead className="text-right font-semibold text-foreground">
                    Harga Shopee
                  </TableHead>
                  <TableHead className="text-right font-semibold text-foreground">
                    Harga Impor All-in
                  </TableHead>
                  <TableHead className="text-right font-semibold text-foreground">
                    Profit Bersih
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={`${product.name}-${index}`}
                    className="transition-colors hover:bg-[#23313B] odd:bg-[#23313B]/50 even:bg-[#23313B]/30 text-white"
                  >
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="text-right">
                      {product.shopeePrice}
                    </TableCell>
                    <TableCell className="text-right">
                      {product.importPrice}
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className="inline-block rounded-md bg-green-500/10 text-green-400 text-sm px-3 py-1 font-semibold"
                        aria-label={`Profit: ${product.profit}`}
                      >
                        {product.profit}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-10 p-6 bg-[#192831]/80 text-center rounded-lg">
            <p className="md:text-xl font-semibold text-primary">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
