import type { Product } from '@features/products/model';
import {
  Badge,
  Box,
  Card,
  Group,
  Image,
  Rating,
  Stack,
  Text,
} from '@mantine/core';
import { getFinalPrice } from '@shared/utils';

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
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
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <Stack justify="space-between">
        <Group>
          <Box w={{ sm: '100%' }} mx="auto">
            <Image src={thumbnail} alt={title} radius="sm" fit="cover" />
          </Box>

          <Text fw={600} h={50} lineClamp={2}>
            {title}
          </Text>
        </Group>

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
