import { selectCartItems } from '@features/cart/model';
import { CartMenu } from '@features/cart/ui';
import { Stack, Text } from '@mantine/core';

import { useAppSelector } from '@/hooks';

const Cart = () => {
  const items = useAppSelector(selectCartItems);

  if (items.length === 0) {
    return (
      <Stack py="lg">
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
