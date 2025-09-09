import eslintPluginVitest from '@vitest/eslint-plugin'

import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const vitest = defineFlatConfigs(
  // @ts-expect-error See https://github.com/vitest-dev/eslint-plugin-vitest/issues/737
  {
    name: 'nuxt-template/vitest',
    plugins: {
      vitest: eslintPluginVitest
    },
    files: [
      'tests/**'
    ],
    ignores: [
      'tests/e2e/**'
    ],
    rules: {
      ...eslintPluginVitest.configs.all.rules,
      'vitest/consistent-test-filename': [
        'error',
        {
          pattern: String.raw`.*\.spec\.[tj]sx?$`
        }
      ],
      'vitest/prefer-expect-assertions': 'off',

      // Due to a bug in the plugin where actual functions are not recognised as functions
      // See https://github.com/vitest-dev/eslint-plugin-vitest/issues/692
      'vitest/valid-title': 'off',

      // To allow common setup
      'vitest/no-hooks': 'off',

      // Disable deprecated rules
      'vitest/no-done-callback': 'off',

      // Allow magic numbers for behaviour testing
      'no-magic-numbers': 'off'
    }
  }
)
