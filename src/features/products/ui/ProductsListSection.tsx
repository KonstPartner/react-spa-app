import { RefCallback } from 'react';
import { Box, Group, Loader, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Product } from '@features/products/model';
import { ProductList } from '@entities/products';

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
  sentinelRef: RefCallback<HTMLDivElement>;
}) => {
  const navigate = useNavigate();

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
      w={{ base: '100%', xs: '95%', sm: '70%', md: '90%', lg: '100%' }}
    >
      <Group justify="center">
        <ProductList
          products={products}
          onItemClick={(id: number) => navigate(`/products/${id}`)}
        />
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
