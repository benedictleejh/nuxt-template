/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  overrides: [
    {
      files: [
        '**/*.sass'
      ],
      customSyntax: 'postcss-sass'
    }
  ]
}
