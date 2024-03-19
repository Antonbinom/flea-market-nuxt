import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { createProduct } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "POST") return handleNotAllowed(event);

  const body = await readBody(event);

  return await createProduct(body);
});
