import { Box, Button, Divider, Group, Stack, Text, Title } from '@mantine/core';

import {
  selectCartItems,
  selectCartSubtotal,
  selectCartTotalCount,
} from '@features/cart/model/selectors';
import { clearCart } from '@features/cart/model/slice';
import { CartItemCard } from '@entities/cart';
import { useAppDispatch, useAppSelector } from '@hooks';

const CartMenu = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalCount = useAppSelector(selectCartTotalCount);
  const subtotal = useAppSelector(selectCartSubtotal);

  return (
    <Box mx="auto" w={{ xs: '80%' }} py="lg">
      <Group justify="space-between" align="center" mb="md">
        <h1>Cart ({totalCount})</h1>
        <Button
          color="red"
          variant="light"
          onClick={() => dispatch(clearCart())}
        >
          Clear all
        </Button>
      </Group>

      <Stack gap="md">
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            itemLink={`/products/${item.id}`}
          />
        ))}
      </Stack>

      <Divider my="lg" />

      <Group justify="end">
        <Stack align="end" gap={4}>
          <Text>Subtotal</Text>
          <Title order={3}>${subtotal.toFixed(2)}</Title>
        </Stack>
      </Group>
    </Box>
  );
};

export default CartMenu;
