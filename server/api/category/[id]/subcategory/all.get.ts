import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getAllSubcategories } from "../../../../controllers/subcategoriesConroller";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  const { id } = event.context.params;

  return await getAllSubcategories(id);
});
