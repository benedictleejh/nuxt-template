import { defineVitestConfig } from '@nuxt/test-utils/config'
import { defaultExclude } from 'vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom'
      }
    },
    exclude: [
      ...defaultExclude,
      './tests/e2e' // Exclude e2e tests, as we test those with Playwright
    ]
  }
})
