import { deleteProduct } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "DELETE") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }

  const { id } = event.context.params;

  return await deleteProduct(id);
});
