// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module'
  ],

  imports: {
    dirs: [
      '../types' // Add types folder to auto-imports
    ]
  },

  devtools: {
    enabled: true
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-04-03',

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler'
        }
      }
    }
  },

  eslint: {
    config: {
      stylistic: true
    }
  }
})
