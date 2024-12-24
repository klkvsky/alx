import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Пост",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "date",
      type: "date",
      title: "Дата",
      options: {
        dateFormat: "DD.MM.YYYY",
      },
    }),
    defineField({
      name: "source",
      type: "string",
      title: "Источник",
    }),
    defineField({
      name: "sourceLink",
      type: "url",
      title: "Ссылка на оригинальный источник",
    }),
    defineField({
      name: "titleLink",
      type: "string",
      title: "Часть заголовка со ссылкой",
    }),
    defineField({
      name: "titleNormal",
      type: "string",
      title: "Обычная часть заголовка",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Ссылка",
      options: {
        source: "titleLink",
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Альтернативный текст",
        },
      ],
    }),
    defineField({
      name: "textType",
      type: "string",
      title: "Тип текста",
      options: {
        list: [
          { title: "Большой текст", value: "bigText" },
          { title: "Обычный текст", value: "normalText" },
        ],
      },
      validation: (Rule) => Rule.required().error("Выберите тип текста"),
    }),
    defineField({
      name: "text",
      type: "text",
      title: "Текст",
      validation: (Rule) => Rule.required().error("Введите текст"),
    }),
  ],
  preview: {
    select: {
      titleLink: "titleLink",
      titleNormal: "titleNormal",
      media: "mainImage",
    },
    prepare(selection) {
      const { titleLink, titleNormal } = selection;
      return {
        ...selection,
        title: `${titleLink || ""} ${titleNormal || ""}`.trim(),
      };
    },
  },
});
