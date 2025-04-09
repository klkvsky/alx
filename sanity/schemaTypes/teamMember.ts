import { DocumentTextIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const teamMember = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: DocumentTextIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "teamMember" }),
    {
      name: "id",
      title: "ID",
      type: "slug",
      description: "Unique identifier for the team member (used for linking)",
      options: {
        source: "name",
        slugify: (input: string) => input.toLowerCase().replace(/ /g, "-"),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Full name of the team member",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      description: "Job title or position in the company",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description Points",
      type: "array",
      of: [{ type: "text" }],
      description:
        "List of bullet points describing the team member (add one point per item)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Photos of the team member",
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "teamBlockImage",
      title: "Team Block Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "teamBlockImage",
    },
  },
};
