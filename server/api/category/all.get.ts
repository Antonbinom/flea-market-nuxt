import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getAllCategories } from "../../controllers/categoriesController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  return await getAllCategories();
});
