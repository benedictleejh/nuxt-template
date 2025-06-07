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
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless'
        ],

        ignore: [
          'inside-block'
        ]
      }
    ],
    'no-empty-source': null
  }
}
