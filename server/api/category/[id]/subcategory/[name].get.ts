import { getSubcategoryByName } from "../../../../controllers/subcategoriesConroller";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }

  const { id, name } = event.context.params;

  return await getSubcategoryByName(id, name);
});
