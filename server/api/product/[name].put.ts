import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { updateProduct } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "PUT") return handleNotAllowed(event);

  const { name } = event.context.params;
  const body = await readBody(event);

  return await updateProduct(name, body);
});
