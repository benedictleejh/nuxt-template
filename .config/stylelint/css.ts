import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const css = defineStylelintConfig({
  rules: {
    'no-invalid-position-declaration': [
      true,
      {
        ignoreAtRules: [
          'mixin'
        ]
      }
    ],
    'unit-no-unknown': true,
    'function-url-no-scheme-relative': true,
    'font-weight-notation': 'numeric',
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
    'no-empty-source': undefined
  }
})

export default css
