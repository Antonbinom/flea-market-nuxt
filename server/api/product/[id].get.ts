import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getProductByID } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  const { id } = event.context.params;

  return await getProductByID(id);
});
