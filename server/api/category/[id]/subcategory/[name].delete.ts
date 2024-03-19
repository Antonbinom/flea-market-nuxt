import { deleteSubcategory } from "../../../../controllers/subcategoriesConroller";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "DELETE") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }
  const { id, name } = event.context.params;

  return await deleteSubcategory(id, name);
});
