# Menggunakan Node.js versi 22.14.0 dari image resmi Node.js
FROM node:22

# Set working directory
WORKDIR /app

# Menyalin package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Menyalin seluruh aplikasi ke dalam container
COPY . .

# Build aplikasi (jika diperlukan)
RUN pnpm run build

# Membuka port yang digunakan aplikasi (ubah jika diperlukan)
EXPOSE 3000

# Menjalankan aplikasi menggunakan perintah pnpm start
CMD ["pnpm", "start"]
