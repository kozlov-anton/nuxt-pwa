// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@vite-pwa/nuxt", "@nuxtjs/tailwindcss"],
  app: {
    baseURL: "/nuxt-pwa/",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, // TODO: Doesn't work
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/", "/register", "/confirm"],
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
  css: ["~/assets/css/main.css"],
});
