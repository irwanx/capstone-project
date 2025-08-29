import profileAvatar from "@/assets/images/profile-avatar.jpg";

const name = "Impor Masterclass";

export const siteConfig = {
  name: name,
  logo: profileAvatar,
  description:
    "Kelas Bisnis Impor - Belajar Strategi Impor Langsung dari Pabrik China dan Jualan Skala Besar di Shopee",
  url:
    process.env.NODE_ENV === "production"
      ? "https://capstone.dobda.id"
      : "http://localhost:3000",
  hero: {
    badge: {
      text: name,
    },
    title:
      'Mau Dapat Barang <span class="text-primary underline underline-offset-4 decoration-primary/60">Harga Pabrik</span> dari China & Laku Keras di <span class="text-[#FA5130] font-bold">Shopee</span>?',
    description:
      "Belajar strategi <strong>impor langsung dari pabrik China</strong> dan <strong>jualan skala besar di Shopee</strong> — Tanpa Izin Ribet, Tanpa Modal Besar, Bisa Mulai dari 1 Pcs!",
    buttons: [
      {
        label: "🚀 Saya Mau Belajar Impor Sekarang",
        href: "https://wa.me/62816777703?text=Halo%20Kak%2C%20saya%20tertarik%20dengan%20KELAS%20IMPOR%20yang%20ditawarkan.%20Boleh%20minta%20informasi%20lebih%20detail%20mengenai%20jadwal%20dan%20biaya%20kelasnya%3F%20Terima%20kasih%20banyak.%20🙏",
        variant: "secondary",
      },
      {
        label: "📈 Saya Mau Optimalkan Shopee Saya",
        href: "https://wa.me/62816777703?text=Halo%20Kak%2C%20perkenalkan%20saya%20%5BNAMA%20SAYA%5D.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20kelas%20SCALE%20UP%20TIKTOK%20%26%20SHOPEE.%20Saya%20ingin%20tahu%20apa%20saja%20materi%20yang%20akan%20dibahas%20dan%20siapa%20saja%20mentornya.%20Bisa%20tolong%20dijelaskan%3F%20Terima%20kasih.%20🙏",
        variant: "outline",
      },
    ],
  },
  navLinks: [
    { href: "#hero", label: "Beranda" },
    { href: "#why", label: "Kenapa Belajar?" },
    { href: "#solution", label: "Solusi" },
    { href: "#bonus", label: "Bonus" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#program", label: "Pilih Kelas" },
    { href: "#daftar", label: "Gabung Sekarang" },
  ],
  whyLearn: {
    title: "❌ Kenapa Harus Belajar Ini?",
    description: "Jangan biarkan masalah ini menghambat kesuksesan bisnismu!",
    problems: [
      {
        icon: "ChartLine",
        text: "Harga produk makin mahal, margin makin tipis",
      },
      {
        icon: "ShoppingCartIcon",
        text: "Kompetitor bisa jual lebih murah dengan produk yang sama",
      },
      {
        icon: "XCircle",
        text: "Belum ngerti cara cari supplier pabrik",
      },
      {
        icon: "NotebookPen",
        text: "Bingung dengan dokumen, bea cukai, dan HPP",
      },
      {
        icon: "ChartLine",
        text: "Shopee Ads boncos, order stuck",
      },
    ],
    highlightNote:
      "Fakta: 90% produk di marketplace adalah hasil impor dari China. Tapi kamu masih beli dari tangan ke-5.",
  },
  solution: {
    title: "🔑 Solusi: Gabung Masterclass Impor & Shopee ScaleUp",
    description:
      "Dapatkan semua yang kamu butuhkan untuk sukses impor dan jualan di Shopee!",
    items: [
      "Cari supplier langsung dari 1688 & Alibaba",
      "Negosiasi & order mulai dari 1 pcs",
      "Gunakan forwarder dan jasa titip bayar legal",
      "Hitung HPP dengan Kalkulator Impor Otomatis",
      "Dapat akses dokumen legal (invoice, HS code, packing list)",
      "Join komunitas interpreuner, bisa beli bareng",
      "Langsung praktek jualan: riset produk - upload - iklan - repeat order",
    ],
  },
  bonus: {
    title: "🎁 Bonus Eksklusif yang Kamu Dapat",
    description: "Dapatkan keuntungan lebih dengan bonus-bonus spesial ini!",
    items: [
      "Kalkulator HPP Impor Otomatis (Excel + Sheet)",
      "Template Chat Mandarin ke Supplier (bukan Google Translate)",
      "Database 50+ Supplier Pabrik (verified & aktif)",
      "Grup Komunitas Impor, Bisa Beli 1 pcs via join bulk order",
      "Template Dokumen Impor Lengkap (Invoice, PL, HS Code)",
      "Support & Pendampingan Seumur Hidup",
      "Tools Optimasi Shopee & TikTok Seller (judul, deskripsi, iklan, CPAS, reseller)",
    ],
  },
  profitSimulation: {
    title: "💰 Simulasi Cuan Produk",
    description: "Lihat potensi keuntungan yang bisa kamu raih!",
    note: "Ini baru dari 1 SKU... bayangkan kalau kamu jual 5 SKU sekaligus.",
    products: [
      {
        name: "Tas Wanita",
        shopeePrice: "Rp70.000",
        importPrice: "Rp18.000",
        profit: "+Rp52.000",
      },
      {
        name: "Gantungan",
        shopeePrice: "Rp52.000",
        importPrice: "Rp8.900",
        profit: "+Rp43.100",
      },
      {
        name: "Teko Listrik",
        shopeePrice: "Rp85.000",
        importPrice: "Rp44.000",
        profit: "+Rp41.000",
      },
    ],
  },
  testimonials: {
    title: "💬 Testimoni Member",
    description: "Apa kata mereka yang sudah bergabung dan sukses?",
    list: [
      {
        name: "Yunita",
        role: "IRT",
        location: "Medan",
        avatar: "/placeholderr.svg",
        text: "Barang sampai! Gila sih, awalnya ragu banget. Ternyata beneran bisa order dari China langsung dan harganya bener-bener ngaco murahnya!",
      },
      {
        name: "Ardi",
        role: "Pemilik Toko Online",
        location: "Jakarta",
        avatar: "/placeholderr.svg",
        text: "Gue udah ikut banyak kelas Shopee, tapi ini pertama kalinya beneran diajarin sampai ngerti. Iklanku sekarang ROAS 4,3 dan makin stabil.",
      },
      {
        name: "Laras",
        role: "Mahasiswa",
        location: "Malang",
        avatar: "/placeholderr.svg",
        text: "Seneng banget bisa tanya-tanya langsung ke grup. Aku order pertama cuma 1 karton, tapi dibantuin semua step-nya. Nggak nyangka secepat ini.",
      },
      {
        name: "Budi",
        role: "Karyawan Swasta",
        location: "Solo",
        avatar: "/placeholderr.svg",
        text: "Paling suka template chat Mandarin-nya. Gak nyangka bisa negosiasi kayak orang China beneran haha 😂",
      },
      {
        name: "Dede",
        role: "UMKM Kuliner",
        location: "Bandung",
        avatar: "/placeholderr.svg",
        text: "Sekarang udah repeat order. Dulu biasa beli di marketplace, sekarang langsung ke pabriknya. Modal kecil tapi hasilnya gila.",
      },
    ],
  },
  programs: {
    title: "🎯 Pilih Jalur Belajarmu",
    description:
      "Pilih program yang paling sesuai dengan kebutuhan dan tujuan bisnismu.",
    list: [
      {
        icon: profileAvatar,
        title: name,
        description:
          "Belajar langsung proses impor dari A-Z, cocok buat kamu yang belum pernah impor sama sekali.",
        cta: {
          label: "Saya Mau Belajar Impor Sekarang",
          href: "https://wa.me/62816777703?text=Halo%20Kak%2C%20saya%20tertarik%20dengan%20KELAS%20IMPOR%20yang%20ditawarkan.%20Boleh%20minta%20informasi%20lebih%20detail%20mengenai%20jadwal%20dan%20biaya%20kelasnya%3F%20Terima%20kasih%20banyak.%20🙏",
          variant: "secondary",
        },
      },
      {
        icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeElEQVR4nO1Za2xURRQen4mPvwYfO6ctolGIYqS/oEp8YyLcmd1uTUN4SLVVEVF/ACkSgjW1KKFERQMGMaE8KwkxajGkotTE4KuaIPEBxgRCs9ZquTP3tQk55j7YptW2O7N33Y32S75kNzuz53z3O+fOzL2ETOB/ANu4lkpGV0lGP5YcTgQMP6+0+HUJUu7AxhmXCE7XCUYdyQH/icFvDNbibHIxKUdgOnGZYPT9oaTpYWlAw1kDZvqUHB6VHD7JCeLwnj+HlBskozuDJBkI04DUaOMEo3WCg4zE7iDlBMES9VHZeCajNeONN5OJOwWj2WhOHSkHYJpcJDn9IbrCzfnOkxzWRHOO41pyISk1hAH3RHXfjw9dc3m+8zLpq66UHH4PXElW3EVKDcHoK2Hz0q3KczndFpYXtBUnOwUIDh9FJbKQKEIadHEkpIsUCyJFpwkOrf7VGouS0YyfjMlhz3hjR9I0YG8wl9HMuOM5tJrzYKqyEMlo52iLWgm5T0MI7C6DxHEEdykLEYy+VQaJ47DtjcYNxXekvdSJy5FksFHdEU5bys4RRl/QcISuKjSwNX8aWk/fG3LBrXGIWanuCIOndAPabY3oHTuKWdfBbDY7xNMn0TmwBa0n7tDsEVhKdBcrJaaq0D20J5e498dv6H3/Bbq9PYGInCDXQWf/Gxo9QhcpCzE51KoGcjpeDhPNnEJ7w1KUycrhY5pmotP5OnqDA+hsb1EWYo5xPBjdEZ6YoxSo7oYgwaxjo7Xs7rF755HbUdZOVnckmXhA3RFGa1SCWM/OCdxwe4/oNvL4jiRhlrojRsVtSkKeezAU8vXhogmRvHK6spDBuYkpSkHqb0Lv7J9BadnNtUURMsjo9eqOpCuu1m12X5CzbV3QN3EKEXOrJikLiU5wasGSlei8uzm3fnj9fcF368nZsQjB+yZdoSwECblAMDinE9Bafj+6Rw9h1vPC27HnofvdZ+EtOVWl5waDc35ORAf+o52CrmLTLHT2bkIvc3pokfzlOFor5mn8HzWJLgSjfbHUd+1ktFob0Dt5LBRkSbRbFik6Qs9oC5Ecfo6rUQOmqtDZsT63fbEWTs9/LoOf9B3htDdWIRHdTw8EYpw3m1Uc+aYQR3qKIcRe3xQunh+8ozLviL4jDLqKIqStMRRysCN/Rzj9UN8RhScp1oJb0NndjvLhG8cem6xA98vuQIi9eUVxn6Cch+CwPe+6P9gRNvGpE2hvXIaybsrfxS6pRre7M7xznfkVrfqbFXoE3ia6kJy+lrcjj9eg+23P0HrR34du9z50dm0IzyCfd2HWEuFvA5lgk6lUkoy+qi1EcHhJtf799SIoHc8dfsz1aVuBI3JJtXJfCQ6t+o4weF63of0ystseQ2frGnS2rEbrxcWFPYBgdHUBjtBntAPHTMHocn1HDGgotQB5ngY0xPESp+QUhbwMwvTUS2Pfb+nxR//VNykEVopWSwYDJRPBYMBiMIPEgejYu8nfewkOX/0blP4+j0G71vF2AhOYwH8XfwHBlox38srexwAAAABJRU5ErkJggg==`,
        title: "ScaleUp Master Shopee",
        description:
          "Panduan lengkap jualan Shopee: dari upload produk sampai iklan ROAS tinggi. Cocok untuk seller aktif maupun pemula.",
        cta: {
          label: "Saya Mau Jualan Laku di Shopee",
          href: "https://wa.me/62816777703?text=Halo%20Kak%2C%20perkenalkan%20saya%20%5BNAMA%20SAYA%5D.%20Saya%20ingin%20bertanya%20lebih%20lanjut%20tentang%20kelas%20SCALE%20UP%20TIKTOK%20%26%20SHOPEE.%20Saya%20ingin%20tahu%20apa%20saja%20materi%20yang%20akan%20dibahas%20dan%20siapa%20saja%20mentornya.%20Bisa%20tolong%20dijelaskan%3F%20Terima%20kasih.%20🙏",
          variant: "outline",
        },
      },
    ],
  },
  closingCta: {
    title: "Jangan tunggu kompetitor kamu lebih dulu impor & scale-up.",
    description:
      "Kamu bisa mulai sekarang, bahkan kalau belum punya produk. Semua sistem, tools, dan komunitas sudah disiapkan. Kamu tinggal jalan.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} ${name}. All rights reserved.`,
  },
};
