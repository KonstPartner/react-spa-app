import { List, Paper, rem, Title } from '@mantine/core';

import { Product } from '@features/products/model';

const ProductAdditional = ({ product }: { product: Product }) => {
  const { warrantyInformation, shippingInformation, returnPolicy } = product;

  return (
    <Paper withBorder p="md" radius="md">
      <Title order={4} mb="sm">
        Policies & Shipping
      </Title>

      <List spacing={rem(6)}>
        <List.Item>Warranty: {warrantyInformation}</List.Item>
        <List.Item>Shipping: {shippingInformation}</List.Item>
        <List.Item>Returns: {returnPolicy}</List.Item>
      </List>
    </Paper>
  );
};

export default ProductAdditional;
