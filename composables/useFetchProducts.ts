export default async function () {
  const { data, error } = await useFetch("/api/product/all");

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch products",
    });
  }
  return data;
}
