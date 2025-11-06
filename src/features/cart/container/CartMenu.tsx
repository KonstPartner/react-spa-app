import { Box, Button, Divider, Group, Stack, Text, Title } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import CartItemCard from '@/entities/cart/CartItemCard';

import {
  selectCartItems,
  selectCartSubtotal,
  selectCartTotalCount,
} from '../selectors';
import { clearCart } from '../slice';

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
        {items.map((it) => (
          <CartItemCard key={it.id} item={it} />
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
