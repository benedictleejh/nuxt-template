// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxt/fonts',
    '@nuxt/test-utils/module'
  ],

  components: [
    {
      // Avoid auto path prefixing to component names to allow easier organisation
      path: '~/components',
      pathPrefix: false
    }
  ],

  imports: {
    dirs: [
      '../shared/**' // Add types folder to auto-imports
    ]
  },

  devtools: {
    enabled: true
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-04-03',

  nitro: {
    imports: {
      dirs: [
        'shared/**'
      ]
    }
  },

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
