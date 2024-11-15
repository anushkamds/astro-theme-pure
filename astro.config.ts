import { defineConfig } from 'astro/config'
// Adapter
// ---
// if you want deploy locally
// import node from '@astrojs/node'
// Integrations
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import playformCompress from '@playform/compress'
import icon from 'astro-icon'
// Markdown
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import { remarkAlert } from 'remark-github-blockquote-alert'
import remarkMath from 'remark-math'
import remarkUnwrapImages from 'remark-unwrap-images'
import { siteConfig } from './src/site.config.ts'
import { remarkReadingTime } from './src/utils/remarkParser.ts'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  // Top-Level Options
  site: siteConfig.site,
  vite: {
    ssr: { external: ['@resvg/resvg-js'] },
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
    build: { rollupOptions: { external: ['@resvg/resvg-js'] } }
  },
  // base: '/docs',
  trailingSlash: 'never',

  output: 'server',

  // ---
  // if you want deploy locally
  // adapter: node({
  //   mode: 'standalone'
  // }),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx(),
    icon(),
    playformCompress({
      SVG: false
    })
  ],

  // root: './my-project-directory',

  // Prefetch Options
  prefetch: true,

  // Server Options
  server: {
    host: true
  },

  // Markdown Options
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkMath, remarkReadingTime, remarkAlert],
    rehypePlugins: [
      [rehypeKatex, {}],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow, noopener, noreferrer']
        }
      ]
    ],
    remarkRehype: {
      footnoteLabelProperties: {
        className: ['']
      }
    },
    shikiConfig: {
      themes: {
        dark: 'github-dark',
        light: 'github-light'
      }
    }
  },
  adapter: cloudflare()
})
