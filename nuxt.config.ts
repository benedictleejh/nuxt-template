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

  compatibilityDate: '2024-04-03',

  typescript: {
    tsConfig: {
      vueCompilerOptions: {
        plugins: [
          '@vue/language-plugin-pug'
        ]
      }
    },

    nodeTsConfig: {
      include: [
        // Add all TS/JS files at root to Node tsconfig
        '../*.ts',
        '../*.js'
      ]
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
