import DOMPurify from 'isomorphic-dompurify'
import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html'
import type { DirectiveConfig as VueDompurifyHtmlDirectiveConfig } from 'vue-dompurify-html'

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface GlobalDirectives {
    vDompurifyHtml: ReturnType<typeof buildVueDompurifyHTMLDirective>
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vueDompurifyHtmlConfig: VueDompurifyHtmlDirectiveConfig = {
    enableSSRPropsSupport: true
  }

  const vDompurifyHtml = buildVueDompurifyHTMLDirective(vueDompurifyHtmlConfig, () => DOMPurify)

  nuxtApp.vueApp.directive('dompurify-html', vDompurifyHtml)
})
