import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { siteConfig } from "@/constants/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const configs = {
  name: `${siteConfig.name} - Bisnis, Branding, & Mentoring`,
  url: siteConfig.url,
  description: `Semua akses ke dunia bisnis dan branding bersama ${siteConfig.name}. Dapatkan mentoring impor dari China, kelas branding, dan materi Shopee Ads`,
  author: siteConfig.name,
  auth: "@impormasterclass",
};

export const metadata: Metadata = {
  metadataBase: new URL(configs.url),
  title: {
    default: configs.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: configs.description,
  keywords: [
    siteConfig.name,
    "impor master",
    "impor indonesia",
    "impor jawa tengah",
    "impor temanggung",
    "impor china",
    "impor master class",
    "kelas impor",
    "kelas impor master",
    "belajar impor",
    "mentoring impor",
    "impor dari China",
    "bisnis impor",
    "cara impor barang dari China",
    "belajar bisnis online",
    "supplier China terpercaya",
    "forwarder impor",
    "Shopee Ads",
    "kelas bisnis digital",
    "jualan online sukses",
  ],
  authors: [
    {
      name: configs.author,
      url: configs.url,
    },
    {
      name: "Irwan",
      url: "https://irwanx.dobda.id",
    },
  ],
  creator: configs.auth,
  publisher: configs.auth,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: configs.url,
    title: configs.name,
    description: configs.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${configs.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Banner ${siteConfig.name} - Kelas Bisnis Impor`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: configs.name,
    description: configs.description,
    images: [`${configs.url}/og-image.png`],
    creator: configs.auth,
  },
  manifest: `${configs.url}/site.webmanifest`,
  alternates: {
    canonical: configs.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        suppressHydrationWarning
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen bg-[#23313B] text-foreground">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
