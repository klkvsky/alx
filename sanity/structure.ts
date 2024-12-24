import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Новости")
    .items([
      S.documentTypeListItem("post").title("Все посты"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post"].includes(item.getId()!)
      ),
    ]);
