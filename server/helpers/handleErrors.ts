export const handleNotFound = (id: string, type: string) => {
  throw createError({
    statusCode: 404,
    statusMessage: `The ${type} with id ${id} does not exist.`,
  });
};

export const handleAlreadyExists = (name: string, type: string) => {
  throw createError({
    statusCode: 404,
    statusMessage: `The ${type} ${name} already exists.`,
  });
};

export const handleNotAllowed = (event: any) => {
  return sendError(
    event,
    createError({ statusCode: 405, statusMessage: "Method Not Allowed" })
  );
};
