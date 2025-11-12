import { ActionIcon, Box, Button, Group, Text, Tooltip } from '@mantine/core';
import { Minus, Plus, Trash } from 'lucide-react';

import { removeItem, setQuantity } from '@features/cart/model/slice';
import { CartItem } from '@features/cart/model/types';
import { useAppDispatch, useSchemeTokens } from '@hooks';

const CartOperations = ({
  item,
  qty,
}: {
  item: Omit<CartItem, 'qty'>;
  qty: number;
}) => {
  const { primary, text } = useSchemeTokens();
  const dispatch = useAppDispatch();
  const { id } = item;

  if (qty <= 0) {
    return null;
  }

  return (
    <Group gap="xs">
      <Tooltip label="Decrease quantity">
        <ActionIcon
          aria-label="Decrease quantity"
          onClick={() => dispatch(setQuantity({ id, qty: qty - 1 }))}
          variant="subtle"
        >
          <Minus size={16} />
        </ActionIcon>
      </Tooltip>

      <Box
        bdrs="sm"
        bg={primary}
        px="md"
        py={6}
        aria-label={`Quantity: ${qty}`}
      >
        <Text fw={600} c={text}>
          {qty} in cart
        </Text>
      </Box>

      <Tooltip label="Increase quantity">
        <ActionIcon
          aria-label="Increase quantity"
          onClick={() => dispatch(setQuantity({ id, qty: qty + 1 }))}
          variant="subtle"
        >
          <Plus size={16} />
        </ActionIcon>
      </Tooltip>

      <Tooltip label="Remove from cart">
        <Button
          aria-label="Remove item from cart"
          px={5}
          onClick={() => dispatch(removeItem({ id }))}
          variant="filled"
          color="pink"
        >
          <Trash size={16} />
        </Button>
      </Tooltip>
    </Group>
  );
};

export default CartOperations;
