import 'katex/dist/katex.min.css'
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('katex', {
    mounted(el) {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ]
      })
    }
  })
})