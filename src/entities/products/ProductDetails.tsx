import {
  ProductAdditional,
  ProductDetailsTable,
  ProductInfo,
} from '@entities/products';
import { CartWidget } from '@features/cart/ui';
import type { Product } from '@features/products/model';
import { Reviews } from '@features/reviews/ui';
import { Box, Divider, Grid, Group, Image, Paper, Stack } from '@mantine/core';

const ProductDetails = ({ product }: { product: Product }) => {
  const { title, thumbnail, reviews } = product;

  return (
    <Box w={{ base: '100%', sm: '70%', lg: '100%' }}>
      <Stack gap="lg">
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Paper withBorder p="sm" radius="md">
              <Image
                src={thumbnail}
                alt={title}
                radius="md"
                fit="contain"
                h={360}
              />
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <ProductInfo productInfo={product} />
          </Grid.Col>
        </Grid>

        <Box mx="auto">
          <CartWidget item={product} />
        </Box>

        <Divider label="Specifications" />

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ProductDetailsTable product={product} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <ProductAdditional product={product} />
          </Grid.Col>
        </Grid>

        <Group justify="center">
          <Reviews reviews={reviews} />
        </Group>
      </Stack>
    </Box>
  );
};

export default ProductDetails;
