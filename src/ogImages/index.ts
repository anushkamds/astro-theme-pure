import extractColorScheme from './extractColorScheme'
import post from './post'
import satori, { type SatoriOptions } from 'satori'
import { siteConfig } from '@/site-config'

const fetchFont = async (weight: string) =>
  (
    await fetch(
      `https://cdn.jsdelivr.net/fontsource/fonts/space-grotesk@latest/latin-${weight}-normal.ttf`
    )
  ).arrayBuffer()

const satoriOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: 'Space Grotesk',
      data: await fetchFont('400'),
      weight: 400,
      style: 'normal'
    },
    {
      name: 'Space Grotesk',
      data: await fetchFont('600'),
      weight: 600,
      style: 'normal'
    },
    {
      name: 'Space Grotesk',
      data: await fetchFont('700'),
      weight: 700,
      style: 'normal'
    }
  ]
}

const { accent, bg } = extractColorScheme('dark')['dark']

const postTemplate = post()

export default {
  post: (...args: Parameters<typeof postTemplate>) => satori(postTemplate(...args), satoriOptions)
}
