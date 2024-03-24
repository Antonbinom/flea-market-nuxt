export default async function (id: string) {
  const { data, error } = await useFetch(`/api/category/${id}`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch category",
    });
  }
  return data;
}
