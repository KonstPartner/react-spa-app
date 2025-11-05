import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  DYMMI_API_BASE_URL,
  getProductsEndpointWithQuery,
} from '@/constants/dymmiApi';
import { ProductsResponse } from '@/features/products/types';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: DYMMI_API_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => getProductsEndpointWithQuery(limit, skip),
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}-${queryArgs.limit}`,
      merge: (currentCache, newData) => {
        if (!currentCache) {
          return newData;
        }
        const existingIds = new Set(currentCache.products.map((p) => p.id));
        const merged = [
          ...currentCache.products,
          ...newData.products.filter((p) => !existingIds.has(p.id)),
        ];
        currentCache.products = merged;
        currentCache.total = newData.total;
        currentCache.skip = newData.skip;
        currentCache.limit = newData.limit;
      },
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.skip !== previousArg?.skip,
    }),
  }),
});

export const { useGetProductsQuery } = dummyApi;
