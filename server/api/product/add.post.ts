import { createProduct } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "POST") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }

  const body = await readBody(event);

  return await createProduct(body);
});
