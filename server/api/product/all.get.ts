import { getAllProducts } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }

  return await getAllProducts();
});
