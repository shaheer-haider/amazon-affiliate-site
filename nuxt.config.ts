// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API: "http://127.0.0.1:8090/api/collections/",
      FILES: "http://127.0.0.1:8090/api/files/",
      BLOGS_COLLECTION_ID: "8htorli7ky4dmf7"
    }
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" }
      ]
    }
  },
  routeRules: {
    '/**': { swr: true }
  },
  devtools: { enabled: true, },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  meta: {
    title: "Mayzii"
  }
})
