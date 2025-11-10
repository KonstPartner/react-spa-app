import { ProductCard } from '@entities/products';
import { Product } from '@features/products/model/types';
import { SimpleGrid } from '@mantine/core';

const ProductList = ({
  products,
  onItemClick,
}: {
  products: Product[];
  onItemClick?: (_id: number) => void;
}) => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 4 }} spacing="md">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onItemClick ? () => onItemClick(product.id) : undefined}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
