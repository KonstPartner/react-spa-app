import { Card, Group, Image, Stack, Text, Title } from '@mantine/core';

import { getFinalPrice } from '@/features/products/utils/price';

import CartWidget from '../../features/cart/component/CartWidget';
import type { CartItem } from '../../features/cart/types';
import classes from './CartItemCard.module.css';

const CartItemCard = ({ item }: { item: CartItem }) => {
  const { title, category, price, discountPercentage, rating, thumbnail, qty } =
    item;
  const unit = getFinalPrice(price, discountPercentage);
  const total = (unit * qty).toFixed(2);

  return (
    <Card withBorder radius="md" p="md">
      <Group justify="space-between">
        <Group>
          <Image src={thumbnail} alt={title} w={96} h={96} radius="md" />

          <Stack gap={4}>
            <Title order={4} lineClamp={2}>
              {title}
            </Title>
            <Text size="sm" tt="capitalize">
              {category}
            </Text>
            <Group gap="sm">
              {discountPercentage ? (
                <>
                  <Text size="sm" td="line-through">
                    ${price.toFixed(2)}
                  </Text>
                  <Text fw={700}>${unit.toFixed(2)}</Text>
                  <Text size="sm" c="red">
                    -{Math.round(discountPercentage)}%
                  </Text>
                </>
              ) : (
                <Text fw={700}>${unit.toFixed(2)}</Text>
              )}

              <Text size="sm">• Rating: {rating.toFixed(2)}</Text>
            </Group>
          </Stack>
        </Group>

        <div className={classes.CartItemCard}>
          <CartWidget item={item} />
          <Stack align="end" gap={2}>
            <Text size="sm">Item total:</Text>
            <Title order={4}>${total}</Title>
          </Stack>
        </div>
      </Group>
    </Card>
  );
};

export default CartItemCard;
