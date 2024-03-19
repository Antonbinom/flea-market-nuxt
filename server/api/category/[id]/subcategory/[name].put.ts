import { updateSubcategory } from "../../../../controllers/subcategoriesConroller";

interface UpdateSubcategoryBody {
  categoryId: string;
  title?: string;
  name?: string;
}

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "PUT") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }

  const { id, name } = event.context.params;

  const body = (await readBody(event)) as UpdateSubcategoryBody;

  return await updateSubcategory(id, name, body);
});
