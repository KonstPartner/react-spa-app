import type { Product } from '@features/products/model';
import { Badge, Box, Card, Group, Rating, Stack, Text } from '@mantine/core';

import { getFinalPrice } from '@/utils';
import { LazyImage } from '@entities/shared/ui';

const IMG_SIZE = 242;

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) => {
  const { title, category, price, discountPercentage, rating, thumbnail } =
    product;
  const hasDiscount = !!discountPercentage && discountPercentage > 0;
  const finalPrice = getFinalPrice(price, discountPercentage);

  return (
    <Card
      withBorder
      radius="md"
      shadow="xs"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <Stack justify="space-between">
        <Stack>
          <Box w={{ sm: '100%' }} mx="auto">
            <LazyImage
              src={thumbnail}
              alt={title}
              width={IMG_SIZE}
              height={IMG_SIZE}
            />
          </Box>

          <Text fw={600} h={50} lineClamp={2}>
            {title}
          </Text>
        </Stack>

        <Stack>
          <Badge variant="light" size="sm" tt="capitalize">
            {category}
          </Badge>

          <Group gap="xs">
            {hasDiscount ? (
              <>
                <Text td="line-through" size="sm">
                  ${price.toFixed(2)}
                </Text>
                <Text fw={700}>${finalPrice.toFixed(2)}</Text>
                <Badge color="red" variant="filled" size="sm">
                  -{discountPercentage!.toFixed(0)}%
                </Badge>
              </>
            ) : (
              <Text fw={700}>${price.toFixed(2)}</Text>
            )}
          </Group>

          <Group gap="xs">
            <Rating value={rating} fractions={2} readOnly size="sm" />
            <Text size="sm">{rating.toFixed(2)}</Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductCard;
