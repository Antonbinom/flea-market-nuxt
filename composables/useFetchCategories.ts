export default async function () {
  const { data, error } = await useFetch("/api/category/all");

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch categories",
    });
  }
  return { data };
}
