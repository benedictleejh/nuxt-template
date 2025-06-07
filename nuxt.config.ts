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

  typescript: {
    tsConfig: {
      vueCompilerOptions: {
        plugins: [
          '@vue/language-plugin-pug'
        ]
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: 'single',
        commaDangle: 'never',
        braceStyle: 'stroustrup'
      }
    }
  }
})
