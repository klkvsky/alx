import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

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
  textType: "bigText" | "normalText";
  text: string;
}

export interface TeamMember {
  id: {
    current: string;
  };
  name: string;
  position: string;
  description: string[];
  images: {
    asset: {
      _ref: string;
    };
    hotspot?: {
      x: number;
      y: number;
    };
  }[];
  teamBlockImage?: {
    asset: {
      _ref: string;
    };
    hotspot?: {
      x: number;
      y: number;
    };
  };
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
  );
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return await client.fetch(
    `*[_type == "teamMember"] | order(orderRank) {
      "id": id,
      name,
      position,
      description,
      "images": images[] {
        "asset": asset,
        hotspot
      },
      "teamBlockImage": teamBlockImage {
        "asset": asset,
        hotspot
      }
    }`
  );
}
