import translitePath from "~/server/helpers/translitePath";
import prisma from "../client";
import { handleNotFound } from "../helpers/handleErrors";

export interface Product {
  category: string;
  subcategory?: string;
  title: string;
  images: string[];
  text: string;
  lot: number;
  price: number;
  description: string[];
}

interface EditedProduct extends Partial<Product> {}

export const createProduct = async (data: Product): Promise<any> => {
  return await prisma.product.create({
    data: {
      path: translitePath(data.title),
      ...data,
    },
  });
};

export const updateProduct = async (
  id: string,
  data: EditedProduct
): Promise<any> => {
  const existedProduct = await prisma.product.findUnique({
    where: { id },
  });

  if (!existedProduct) handleNotFound(id, "product");

  const productData: any = { ...data };

  if (data.title) {
    productData.path = translitePath(data.title);
  }

  return await prisma.product.update({
    where: { id },
    data: productData,
  });
};

export const deleteProduct = async (id: string): Promise<any> => {
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) handleNotFound(id, "product");

  return await prisma.product.delete({ where: { id } });
};

export const getProductByID = async (id: string): Promise<any> => {
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) handleNotFound(id, "product");

  return product;
};

export const getAllProducts = async (): Promise<any> => {
  const products = await prisma.product.findMany({});

  return products;
};
