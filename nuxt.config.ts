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
    timeline: {
      enabled: true
    }
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
      compilerOptions: {
        checkJs: true
      },

      include: [
        // Add all TS/JS files at root to Node tsconfig
        '../*',

        // Enable typechecking for scripts
        '../scripts/*'
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
