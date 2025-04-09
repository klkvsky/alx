import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { teamMember } from "./teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, teamMember],
};
