import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getCategoryByID } from "../../controllers/categoriesController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  const { id } = event.context.params;

  return await getCategoryByID(id);
});
