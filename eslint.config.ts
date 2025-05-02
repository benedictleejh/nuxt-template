import { FlatCompat } from '@eslint/eslintrc'
import n from 'eslint-plugin-n'
import withNuxt from './.nuxt/eslint.config.mjs'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

export default withNuxt(
  // Your custom configs here
  ...compat.extends('plugin:vue-pug/vue3-recommended'),
  {
    plugins: { n },
    rules: {
      'n/prefer-node-protocol': ['error']
    }
  }
)
