import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      '@stylistic/comma-dangle': ['error', 'never']
    }
  }
)
