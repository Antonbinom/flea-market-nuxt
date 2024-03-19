import { handleNotAllowed } from "~/server/helpers/handleErrors";
import { getAllProducts } from "../../controllers/productController";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method !== "GET") return handleNotAllowed(event);

  return await getAllProducts();
});
