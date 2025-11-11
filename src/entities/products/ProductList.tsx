import { SimpleGrid } from '@mantine/core';

import { Product } from '@features/products/model/types';
import { ProductCard } from '@entities/products';

const ProductList = ({
  products,
  onItemClick,
}: {
  products: Product[];
  onItemClick: (id: number) => void;
}) => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 4 }} spacing="md">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onItemClick(product.id)}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
