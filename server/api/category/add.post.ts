import { createCategory } from "../../controllers/categoriesController";

interface CategoryBody {
  title: string;
  name: string;
}

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "POST") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }

  const body = (await readBody(event)) as CategoryBody;

  return await createCategory(body);
});
