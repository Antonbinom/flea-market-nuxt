export const useGoodsInBasket = (value: number) =>
  useState("goodsInBasket", () => value);

export const useOpenMenu = () => useState("isMenuOpened", () => false);
