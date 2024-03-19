import { SubcategoryType } from "@prisma/client";
import { updateCategory } from "../../controllers/categoriesController";
import { Subcategory } from "../../controllers/subcategoriesConroller";

interface UpdateCategoryBody {
  name?: string;
  title?: string;
  subcategories?: SubcategoryType[];
}

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "PUT") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }
  const { id } = event.context.params;
  const body = (await readBody(event)) as UpdateCategoryBody;

  return await updateCategory(id, body);
});
