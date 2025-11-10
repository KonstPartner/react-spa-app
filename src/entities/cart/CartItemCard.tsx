import { CartItem } from '@features/cart/model';
import { CartWidget } from '@features/cart/ui';
import {
  Box,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import { useSchemeTokens } from '@/hooks';
import { getColor, getFinalPrice } from '@/utils';

import classes from './CartItemCard.module.css';

const CartItemCard = ({
  item,
  isPriority,
}: {
  item: CartItem;
  isPriority?: boolean;
}) => {
  const { link } = useSchemeTokens();
  const theme = useMantineTheme();

  const colorVars = {
    '--link-color': getColor(theme, link),
  } as CSSProperties;

  const {
    id,
    title,
    category,
    price,
    discountPercentage,
    rating,
    thumbnail,
    qty,
  } = item;
  const unit = getFinalPrice(price, discountPercentage);
  const total = (unit * qty).toFixed(2);

  return (
    <Card withBorder radius="md" p="md">
      <Group justify="space-between" gap="lg">
        <Group>
          <Box w={{ base: 250, xs: 96 }}>
            <Link to={`/products/${id}`}>
              <Image
                width={96}
                style={{ aspectRatio: '1 / 1' }}
                src={thumbnail}
                alt={title}
                radius="md"
                loading={isPriority ? 'eager' : 'lazy'}
                fetchPriority={isPriority ? 'high' : 'auto'}
                decoding="async"
              />
            </Link>
          </Box>

          <Stack gap={4}>
            <Title order={4} lineClamp={2}>
              <Link
                style={colorVars}
                className={`${classes.link}`}
                to={`/products/${id}`}
              >
                {title}
              </Link>
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
