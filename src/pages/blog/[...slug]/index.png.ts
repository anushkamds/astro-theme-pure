import { Resvg } from '@resvg/resvg-js'
import type { APIContext, APIRoute, GetStaticPaths, InferGetStaticPropsType } from 'astro'
import { type CollectionEntry, getEntryBySlug } from 'astro:content'

import { siteConfig } from '@/site-config'
import ogImages from '@/ogImages'

export const GET: APIRoute = async ({ params, props }: APIContext) => {
  const { slug } = params
  const post = await getEntryBySlug('post', slug!!)
  debugger
  const { title, description, publishDate } = post.data
  const svg = await ogImages.post(title, description, siteConfig.author, publishDate)
  const png = new Resvg(svg).render().asPng()

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' }
  })
}
