import { Box, Loader, Stack, Text } from '@mantine/core';
import { RefObject } from 'react';

import { Product } from '@/features/products/types';

import ProductList from '../components/ProductList';

const ProductsListSection = ({
  products,
  isLoading,
  sentinelRef,
  isFetching,
  canLoadMore,
}: {
  products: Product[];
  isLoading: boolean;
  isFetching: boolean;
  canLoadMore: boolean;
  sentinelRef: RefObject<HTMLDivElement | null>;
}) => {
  if (isLoading && products.length === 0) {
    return (
      <Stack align="center" py="xl">
        <Loader />
        <Text>Loading catalog…</Text>
      </Stack>
    );
  }

  return (
    <Box
      miw={250}
      w={{ base: '40%', xs: '80%', sm: '60%', md: '80%', lg: '100%' }}
    >
      <>
        <ProductList products={products} />
        <div ref={sentinelRef} style={{ height: 1 }} />

        {isFetching && (
          <Stack align="center" py="md">
            <Loader size="sm" />
            <Text size="sm">Loading more…</Text>
          </Stack>
        )}

        {!canLoadMore && products.length > 0 && (
          <Text ta="center" py="lg">
            You’ve reached the end
          </Text>
        )}
      </>
    </Box>
  );
};

export default ProductsListSection;
