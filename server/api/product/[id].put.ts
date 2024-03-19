import { updateProduct } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "PUT") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
    );
  }
  const { id } = event.context.params;
  const body = await readBody(event);

  return await updateProduct(id, body);
});
