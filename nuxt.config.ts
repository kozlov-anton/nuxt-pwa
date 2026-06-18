// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/nuxt-pwa/",
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, // TODO: Doesn't work
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Nuxt PWA",
      short_name: "NuxtPWA",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/nuxt-pwa/",
      scope: "/nuxt-pwa/",
      icons: [
        {
          src: "/nuxt-pwa/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/nuxt-pwa/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/nuxt-pwa/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
