import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false
})

export interface Post {
  _id: string;
  date: string;
  source: string;
  sourceLink: string;
  titleLink: string;
  titleNormal: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  textType: 'bigText' | 'normalText';
  text: string;
}

export async function getAllPosts(): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post"] | order(date desc) {
      _id,
      date,
      source,
      sourceLink,
      titleLink,
      titleNormal,
      slug,
      mainImage {
        asset-> {
          url
        },
        alt
      },
      textType,
      text
    }`
  )
}