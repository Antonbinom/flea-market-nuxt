import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { createCategory } from "../../controllers/categoriesController";

interface CategoryBody {
  title: string;
  name: string;
}

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "POST") return handleNotAllowed(event);

  const body = (await readBody(event)) as CategoryBody;

  return await createCategory(body);
});
