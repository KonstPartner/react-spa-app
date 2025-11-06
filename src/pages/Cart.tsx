import { Container, Stack, Text, Title } from '@mantine/core';

import { useAppSelector } from '@/app/hooks';
import CartMenu from '@/features/cart/container/CartMenu';
import { selectCartItems } from '@/features/cart/selectors';

const Cart = () => {
  const items = useAppSelector(selectCartItems);

  if (items.length === 0) {
    return (
      <Container py="lg">
        <Title order={2}>Cart</Title>
        <Stack align="center">
          <Text>Your cart is empty.</Text>
        </Stack>
      </Container>
    );
  }

  return (
    <Container size="lg">
      <CartMenu />
    </Container>
  );
};

export default Cart;
