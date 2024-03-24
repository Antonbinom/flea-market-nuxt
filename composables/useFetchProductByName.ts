export default async function (name: string) {
  const { data, error } = await useFetch(`/api/product/${name}`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch product",
    });
  }
  return data;
}
