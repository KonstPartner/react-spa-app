import { Card, Image, Text, Group, Badge, Stack, Rating } from '@mantine/core';
import { getFinalPrice } from '@/features/products/utils/price';
import type { Product } from '@/features/products/types';

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
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={title}
              radius="sm"
              fit="cover"
            />
          )}

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
                <Text td="line-through" c="dimmed" size="sm">
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
            <Text size="sm" c="dimmed">
              {rating.toFixed(2)}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductCard;
