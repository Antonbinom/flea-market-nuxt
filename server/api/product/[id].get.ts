import { getProductByID } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }
  const { id } = event.context.params;

  return await getProductByID(id);
});
