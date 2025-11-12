import { RefCallback } from 'react';
import { Box, Group, Loader, Stack, Text } from '@mantine/core';

import { Product } from '@features/products/model';
import { ProductList } from '@entities/products';

const ProductsListSection = ({
  products,
  sentinelRef,
  isFetching,
  canLoadMore,
}: {
  products: Product[];
  isFetching: boolean;
  canLoadMore: boolean;
  sentinelRef: RefCallback<HTMLDivElement>;
}) => {
  return (
    <Box
      miw={250}
      w={{ base: '100%', xs: '95%', sm: '70%', md: '90%', lg: '100%' }}
    >
      <Group justify="center">
        <ProductList products={products} />
        <div ref={sentinelRef} style={{ height: 1 }} />

        {isFetching && (
          <Stack align="center">
            <Loader size="sm" />
            <Text size="sm">Loading more…</Text>
          </Stack>
        )}

        {!canLoadMore && products.length > 0 && (
          <Text>You’ve reached the end</Text>
        )}
      </Group>
    </Box>
  );
};

export default ProductsListSection;
