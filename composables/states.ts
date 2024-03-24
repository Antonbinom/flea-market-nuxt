export const useGoodsInBasket = (value: number) =>
  useState("goodsInBasket", () => value);

export const useOpenMenu = () => useState("isMenuOpened", () => false);

export const useCurrentCategory = (value?: any) =>
  useState("currentCategory", () => value);
