import { Stack, Text } from '@mantine/core';

import { useAppSelector } from '@/app/hooks';
import CartMenu from '@/features/cart/container/CartMenu';
import { selectCartItems } from '@/features/cart/selectors';

const Cart = () => {
  const items = useAppSelector(selectCartItems);

  if (items.length === 0) {
    return (
      <Stack>
        <h1>Cart</h1>
        <Stack align="center">
          <Text>Your cart is empty.</Text>
        </Stack>
      </Stack>
    );
  }

  return <CartMenu />;
};

export default Cart;
