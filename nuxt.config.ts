export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  
  css: [
    'katex/dist/katex.min.css'
  ],

  // Markdown 配置
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex']
    }
  }
})