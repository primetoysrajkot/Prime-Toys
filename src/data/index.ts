import { products } from "./products.js";

export const getProducts = () => products;

export const getProduct = (id: string) =>
  products.find((p) => p.id === id);
