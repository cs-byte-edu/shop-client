import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/shop-client/",
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://whimsical-eggs-aeff2ff44f.strapiapp.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
