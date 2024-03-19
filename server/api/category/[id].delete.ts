import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { deleteCategory } from "../../controllers/categoriesController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "DELETE") return handleNotAllowed(event);

  const { id } = event.context.params;

  return await deleteCategory(id);
});
