import prisma from "../client";
import translitePath from "~/server/helpers/translitePath";
import { handleAlreadyExists, handleNotFound } from "../helpers/handleErrors";

export interface Subcategory {
  name: string;
  title: string;
}

export interface UpdatedSubcategory {
  name?: string;
  title?: string;
}

export const createSubcategory = async (
  id: string,
  { name, title }: Subcategory
): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) return handleNotFound(id, "category");

  const existedSubategory = category.subcategories.some(
    (item) => item.name === name
  );

  if (existedSubategory) return handleAlreadyExists(name, "subcategory");

  const subcategory = {
    path: translitePath(name),
    name,
    title,
  };

  const updatedCategory = prisma.category.update({
    where: { id },
    data: {
      subcategories: [...category.subcategories, subcategory],
    },
  });

  return (await updatedCategory).subcategories;
};

export const updateSubcategory = async (
  id: string,
  name: string,
  data: UpdatedSubcategory
): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) return handleNotFound(id, "category");

  const subcategory =
    category.subcategories.find((item) => item.path === name) ||
    handleNotFound(name, "subcategory");

  if (!subcategory) return handleNotFound(id, "subcategory");

  const updatedSubcategoriesArray = category.subcategories.map((item) => {
    if (item.path === name) {
      return {
        ...(data.name
          ? {
              path: translitePath(data.name),
            }
          : { path: item.path }),
        ...(data.name ? { name: data.name } : { name: item.name }),

        ...(data.title ? { title: data.title } : { title: item.title }),
      };
    } else return item;
  });

  const updatedCategory = prisma.category.update({
    where: { id },
    data: {
      subcategories: updatedSubcategoriesArray,
    },
  });

  return (await updatedCategory).subcategories;
};

export const deleteSubcategory = async (
  id: string,
  name: string
): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) return handleNotFound(id, "category");

  const existedSubcategory = category.subcategories.find(
    (item) => item.path === name
  );

  if (!existedSubcategory) return handleNotFound(id, "subcategory");

  const updatedCategory = await prisma.category.update({
    where: { id },
    data: {
      subcategories: category.subcategories.filter(
        (item) => item.path !== name
      ),
    },
  });

  return updatedCategory.subcategories;
};

export const getSubcategoryByName = async (
  id: string,
  name: string
): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) return handleNotFound(id, "category");

  const subcategory = category.subcategories.find((item) => item.path === name);

  if (!subcategory) return handleNotFound(name, "category");

  return subcategory;
};

export const getAllSubcategories = async (id: string): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) return handleNotFound(id, "category");

  return category.subcategories;
};
