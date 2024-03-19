import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { deleteSubcategory } from "../../../../controllers/subcategoriesConroller";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "DELETE") return handleNotAllowed(event);

  const { id, name } = event.context.params;

  return await deleteSubcategory(id, name);
});
