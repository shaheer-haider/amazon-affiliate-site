// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API: process.env.API,
      FILES: process.env.FILES,
      BLOGS_COLLECTION_ID: process.env.BLOGS_COLLECTION_ID
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
    '/**': { swr: 3600 }
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
