import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getSubcategoryByName } from "../../../../controllers/subcategoriesConroller";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  const { id, name } = event.context.params;

  return await getSubcategoryByName(id, name);
});
