/** @type { import('lint-staged').Config } */
export default {
  '*.{ts,tsx,js,jsx,vue}': stagedFiles => [
    `eslint --max-warnings 0 --flag unstable_ts_config ${stagedFiles.join(' ')}`
  ],
  '*.{css,less,scss,sass,pcss,postcss,sss,vue}': stagedFiles => [
    `stylelint ${stagedFiles.join(' ')}`
  ],
  '*.*': () => [
    'pnpm typecheck',
    'pnpm test:unit'
  ]
}
