export const DYMMI_API_BASE_URL = 'https://dummyjson.com';

export const DYMMI_API_PRODUCTS_PATH = '/products';

export const getProductsEndpointWithQuery = (limit: number, skip: number) =>
  DYMMI_API_PRODUCTS_PATH + `?limit=${limit}&skip=${skip}`;
