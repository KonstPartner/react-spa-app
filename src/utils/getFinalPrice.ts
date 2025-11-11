export const getFinalPrice = (price: number, discountPercentage?: number) => {
  if (!discountPercentage || discountPercentage <= 0) {
    return price;
  }

  return +(price * (1 - discountPercentage / 100)).toFixed(2);
};
