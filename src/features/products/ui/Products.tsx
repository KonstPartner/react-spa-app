import { useEffect, useRef, useState } from 'react';
import { Text } from '@mantine/core';

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
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isFetching && canLoadMore) {
          setSkip((prev) => prev + LIMIT);
        }
      },
      { rootMargin: '500px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isFetching, canLoadMore]);

  if (isError) {
    return <Text>Failed to load products</Text>;
  }

  return (
    <ProductsListSection
      products={products}
      isLoading={isLoading}
      isFetching={isFetching}
      canLoadMore={canLoadMore}
      sentinelRef={sentinelRef}
    />
  );
};

export default Products;
