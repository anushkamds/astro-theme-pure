import { Resvg } from '@resvg/resvg-js'
import type { APIContext, APIRoute } from 'astro'
import { type CollectionEntry, getEntry } from 'astro:content'

import { siteConfig } from '@/site-config'
import ogImages from '@/ogImages'

export const GET: APIRoute = async ({ params }: APIContext) => {
  const { slug } = params
  const post: CollectionEntry<'post'> = (await getEntry('post', slug!!)) as CollectionEntry<'post'>

  const { title, description, publishDate } = post.data
  const svg = await ogImages.post(title, description, siteConfig.author, publishDate)
  const png = new Resvg(svg).render().asPng()

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' }
  })
}
