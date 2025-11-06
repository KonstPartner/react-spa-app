import { Container, Group, Loader, Stack, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';

import ProductDetails from '@/entities/products/ProductDetails';
import { useGetProductByIdQuery } from '@/services/dummyApi';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId, {
    skip: !id,
  });

  if (isLoading) {
    return (
      <Stack align="center" py="xl">
        <Loader />
        <Text>Loading product…</Text>
      </Stack>
    );
  }

  if (isError || !product) {
    return (
      <Container size="lg" py="lg">
        <Text c="red">Failed to load product</Text>
      </Container>
    );
  }

  return (
    <Stack>
      <h1>Product</h1>
      <Group justify="center">
        <ProductDetails product={product} />
      </Group>
    </Stack>
  );
};

export default Product;
