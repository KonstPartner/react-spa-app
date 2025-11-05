import { SimpleGrid } from '@mantine/core';
import ProductCard from './ProductCard.view';
import { Product } from '@/features/products/types';

const ProductList = ({
  products,
  onItemClick,
}: {
  products: Product[];
  onItemClick?: (_id: number) => void;
}) => {
  return (
    <SimpleGrid cols={{ base: 1,xs:2, md: 3, lg: 4 }} spacing="md">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onClick={onItemClick ? () => onItemClick(p.id) : undefined}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
