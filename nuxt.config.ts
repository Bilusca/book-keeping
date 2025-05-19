import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/scripts', // 'shadcn-nuxt',
    'nuxt-lucide-icons', '@nuxt/fonts', '@nuxtjs/google-fonts'],
  fonts: {
    families: [
      { name: 'Alfa Slab One', provider: 'google' },
      { name: 'Poppins', provider: 'google' }
    ]
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: [
    {
      path: '~/components/ui',
      prefix: '',
    },
    {
      path: '~/components',
      prefix: ''
    }
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Raleway: {
        wght: '100..900'
      },
      Lato: true
    }
  }
})