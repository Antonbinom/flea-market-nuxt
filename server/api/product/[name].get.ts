import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getProductByName } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  const { name } = event.context.params;

  return await getProductByName(name);
});
