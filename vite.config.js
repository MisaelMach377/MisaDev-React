import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
          id: "/",
        name: "Misael Machiavello | MisaDev",
        short_name: "MisaDev",
        description: "Full-Stack Developer · Perú",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        icons: [
          {
            src: "/LogoMisaDev_PWA192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/LogoMisaDev_PWA512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});