import translitePath from "~/server/helpers/translitePath";
import prisma from "../client";
import { handleAlreadyExists, handleNotFound } from "../helpers/handleErrors";
import { SubcategoryType } from "@prisma/client";

export interface Category {
  title: string;
  name: string;
}

export interface EditedCategory {
  name?: string;
  title?: string;
  subcategories?: SubcategoryType[];
}

export const createCategory = async ({
  title,
  name,
}: Category): Promise<any> => {
  const existedCategory = await prisma.category.findFirst({ where: { title } });

  if (existedCategory) handleAlreadyExists(title, "category");

  return await prisma.category.create({
    data: {
      path: translitePath(name),
      name,
      title,
    },
  });
};

export const updateCategory = async (
  id: string,
  { name, title, subcategories }: EditedCategory
): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) handleNotFound(id, "category");

  return await prisma.category.update({
    where: { id },
    data: {
      ...(name && {
        path: translitePath(name),
      }),
      name,
      title,
      subcategories,
    },
  });
};

export const deleteCategory = async (id: string): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) handleNotFound(id, "category");

  return prisma.category.delete({ where: { id } });
};

export const getCategoryByID = async (id: string): Promise<any> => {
  const category = await prisma.category.findUnique({ where: { id } });

  if (!category) handleNotFound(id, "category");

  return category;
};

export const getAllCategories = async (): Promise<any> => {
  return await prisma.category.findMany({});
};
