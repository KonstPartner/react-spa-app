import { useEffect, useState } from 'react';
import { Loader, Stack, Text } from '@mantine/core';
import { useInView } from 'react-intersection-observer';

import { ProductsListSection } from '@features/products/ui';
import { useGetProductsQuery } from '@services';

const LIMIT = 20;

const Products = () => {
  const [skip, setSkip] = useState(0);
  const { data, isFetching, isLoading, isError } = useGetProductsQuery({
    limit: LIMIT,
    skip,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;

  const canLoadMore = products.length < total;

  const { ref: sentinelRef, inView } = useInView({
    root: null,
    rootMargin: '500px 0px',
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !isFetching && canLoadMore) {
      setSkip((prev) => prev + LIMIT);
    }
  }, [inView, isFetching, canLoadMore]);

  if (isError) {
    return <Text>Failed to load products</Text>;
  }

  if (isLoading && products.length === 0) {
    return (
      <Stack align="center" py="xl">
        <Loader />
        <Text>Loading catalog…</Text>
      </Stack>
    );
  }

  return (
    <ProductsListSection
      products={products}
      isFetching={isFetching}
      canLoadMore={canLoadMore}
      sentinelRef={sentinelRef}
    />
  );
};

export default Products;
