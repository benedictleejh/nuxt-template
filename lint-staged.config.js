/** @type { import('lint-staged').Config } */
export default {
  '*.{ts,tsx,js,jsx,vue}': stagedFiles => [
    `pnpm lint:es ${stagedFiles.join(' ')}`
  ],
  '*.{css,less,scss,sass,pcss,postcss,sss,vue}': stagedFiles => [
    `stylelint ${stagedFiles.join(' ')}`
  ],
  '*.*': () => [
    'pnpm typecheck',
    'pnpm test:unit'
  ]
}
