import { deleteProduct } from "../../controllers/productController";
import { handleNotAllowed } from "~/server/helpers/handleErrors";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "DELETE") return handleNotAllowed(event);

  const { id } = event.context.params;

  return await deleteProduct(id);
});
