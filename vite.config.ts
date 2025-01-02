import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
// });

export default defineConfig({
  base: "/transaction/", // Це базовий шлях для GitHub Pages
  plugins: [react()], // Додайте плагін для React
  build: {
    outDir: "dist", // Вказуємо папку для вихідних файлів
  },
});
