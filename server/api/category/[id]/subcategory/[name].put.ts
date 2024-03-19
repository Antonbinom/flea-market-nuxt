import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { updateSubcategory } from "../../../../controllers/subcategoriesConroller";

interface UpdateSubcategoryBody {
  categoryId: string;
  title?: string;
  name?: string;
}

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "PUT") return handleNotAllowed(event);

  const { id, name } = event.context.params;

  const body = (await readBody(event)) as UpdateSubcategoryBody;

  return await updateSubcategory(id, name, body);
});
