import { defineVitestConfig } from '@nuxt/test-utils/config'
import { defaultExclude } from 'vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    exclude: [
      ...defaultExclude,
      './tests' // Exclude e2e tests, as we test those with Playwright
    ]
  }
})
