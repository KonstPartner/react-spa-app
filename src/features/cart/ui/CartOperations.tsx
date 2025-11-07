import { useAppDispatch } from '@app/hooks';
import { removeItem, setQuantity } from '@features/cart/model/slice';
import { CartItem } from '@features/cart/model/types';
import { ActionIcon, Button, Group, Tooltip } from '@mantine/core';
import { Minus, Plus, Trash } from 'lucide-react';

const CartOperations = ({
  item,
  qty,
}: {
  item: Omit<CartItem, 'qty'>;
  qty: number;
}) => {
  const dispatch = useAppDispatch();
  const { id } = item;

  if (qty <= 0) {
    return null;
  }

  return (
    <Group gap="xs">
      <ActionIcon
        aria-label="Decrease quantity"
        onClick={() => dispatch(setQuantity({ id, qty: qty - 1 }))}
        variant="subtle"
      >
        <Minus size={16} />
      </ActionIcon>

      <Button variant="light" color="teal" aria-label={`Quantity: ${qty}`}>
        {qty} in cart
      </Button>

      <ActionIcon
        aria-label="Increase quantity"
        onClick={() => dispatch(setQuantity({ id, qty: qty + 1 }))}
        variant="subtle"
      >
        <Plus size={16} />
      </ActionIcon>

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
