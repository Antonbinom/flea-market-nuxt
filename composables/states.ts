export const useGoodsInBasket = (value: number) =>
  useState("goodsInBasket", () => value);
