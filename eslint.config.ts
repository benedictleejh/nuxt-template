import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname })

export default withNuxt(
  // Your custom configs here
  ...compat.extends('plugin:vue-pug/vue3-recommended')
)
