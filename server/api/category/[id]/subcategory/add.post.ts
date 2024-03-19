import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { createSubcategory } from "../../../../controllers/subcategoriesConroller";

export interface SubcategoryBody {
  categoryId: string;
  name: string;
  title: string;
}

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "POST") return handleNotAllowed(event);

  const { id } = event.context.params;

  const body = (await readBody(event)) as SubcategoryBody;

  return await createSubcategory(id, body);
});
