// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@nuxt/fonts',
    '@nuxt/test-utils/module',
    '@nuxt/image'
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

  nitro: {
    typescript: {
      tsConfig: {
        compilerOptions: {
          // Workaround for https://github.com/nuxt/nuxt/issues/32941
          noUncheckedIndexedAccess: true,
          noImplicitReturns: true
        },

        include: [
          // Add server tests, fixtures, mocks, and test utils to server tsconfig
          '../tests/server/**/*',
          '../tests/fixtures/server/**/*',
          '../tests/mocks/server/**/*',
          '../tests/utils/server/**/*'
        ]
      }
    }
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        noImplicitReturns: true
      },

      vueCompilerOptions: {
        plugins: [
          '@vue/language-plugin-pug'
        ]
      },

      include: [
        // Add app tests, fixtures, mocks, and test utils to app tsconfig
        '../tests/app/**/*',
        '../tests/fixtures/app/**/*',
        '../tests/mocks/app/**/*',
        '../tests/utils/app/**/*'
      ]
    },

    sharedTsConfig: {
      compilerOptions: {
        noImplicitReturns: true
      },

      include: [
        // Add shared tests, fixtures, mocks, and test utils to shared tsconfig
        '../tests/shared/**/*',
        '../tests/fixtures/shared/**/*',
        '../tests/mocks/shared/**/*',
        '../tests/utils/shared/**/*'
      ]
    },

    nodeTsConfig: {
      compilerOptions: {
        checkJs: true,
        noImplicitReturns: true
      },

      include: [
        // Add all TS/JS files at root to Node tsconfig
        '../*',

        // Add files in .config
        '../.config/**/*',

        // Enable typechecking for scripts
        '../scripts/*',

        // Add e2e tests to node tsconfig
        '../tests/e2e/**/*'
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
      },

      typescript: {
        tsconfigPath: './tsconfig.json'
      }
    }
  },

  image: {
    dir: 'assets/images'
  },

  stylelint: {
    configFile: './stylelint.config.ts'
  }
})
