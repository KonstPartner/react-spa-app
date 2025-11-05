export const DYMMI_API_BASE_URL = 'https://dummyjson.com';

export const getProductsEndpointWithQuery = (limit: number, skip: number) =>
  `/products?limit=${limit}&skip=${skip}`;
