import { SimpleGrid } from '@mantine/core';

import { Product } from '@features/products/model/types';
import { ProductCard } from '@entities/products';

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 4 }} spacing="md">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
