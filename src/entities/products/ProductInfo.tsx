import { Product } from '@features/products/model/types';
import { Badge, Group, Rating, Stack, Text, Title } from '@mantine/core';

import { getFinalPrice } from '@/utils/getFinalPrice';

const ProductInfo = ({ productInfo }: { productInfo: Product }) => {
  const {
    title,
    brand,
    category,
    sku,
    stock,
    availabilityStatus,
    rating,
    minimumOrderQuantity,
    discountPercentage,
    description,
    price,
    tags,
  } = productInfo;

  const hasDiscount = !!discountPercentage && discountPercentage > 0;
  const finalPrice = getFinalPrice(price, discountPercentage);
  const inStock = stock > 0 && availabilityStatus !== 'Out of Stock';

  return (
    <Stack gap="sm">
      <Group justify="space-between" align="start">
        <Stack gap={2}>
          <Title order={2} lh={1.2}>
            {title}
          </Title>
          <Text size="sm">
            {brand} •{' '}
            <Text span tt="capitalize">
              {category}
            </Text>{' '}
            • SKU: {sku}
          </Text>
        </Stack>
        <Badge color={inStock ? 'green' : 'red'} variant="light" size="md">
          {availabilityStatus ?? (inStock ? 'In Stock' : 'Out of Stock')}
        </Badge>
      </Group>

      <Group gap="xs">
        <Rating value={rating} readOnly fractions={2} size="sm" />
        <Text size="sm">{rating.toFixed(2)}</Text>
        <Text size="sm">• Stock: {stock}</Text>
        <Text size="sm">• MOQ: {minimumOrderQuantity}</Text>
      </Group>

      <Group gap="sm" align="end" mt="xs">
        {hasDiscount && <Text td="line-through">${price.toFixed(2)}</Text>}
        <Title order={3}>${finalPrice.toFixed(2)}</Title>
        {hasDiscount && (
          <Badge color="red" variant="filled" size="sm">
            -{Math.round(discountPercentage!)}%
          </Badge>
        )}
      </Group>

      {tags?.length > 0 && (
        <Group gap="xs" mt="xs">
          {tags.map((tag) => (
            <Badge key={tag} variant="light" size="sm" tt="capitalize">
              {tag}
            </Badge>
          ))}
        </Group>
      )}

      <Text mt="sm">{description}</Text>
    </Stack>
  );
};

export default ProductInfo;
