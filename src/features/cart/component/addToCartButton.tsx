import { Button, Group, ActionIcon, Tooltip } from '@mantine/core';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addItem, removeItem, setQuantity } from '@/features/cart/slice';
import { selectCartItemQty } from '@/features/cart/selectors';

const AddToCartButton = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector(selectCartItemQty(id));

  if (qty > 0) {
    return (
      <Group gap="xs">
        <ActionIcon
          aria-label="Decrease quantity"
          onClick={() => dispatch(setQuantity({ id, qty: qty - 1 }))}
          variant="subtle"
        >
          <Minus size={16} />
        </ActionIcon>

        <Button variant="light" color="teal">
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
          px={5}
            onClick={() => dispatch(removeItem({ id }))}
            variant="filled"
            color="pink"
          ><Trash size={16} /></Button>
        </Tooltip>
      </Group>
    );
  }

  return (
    <Tooltip label="Add to cart">
      <Button
        leftSection={<ShoppingCart size={16} />}
        onClick={() => dispatch(addItem({ id, qty: 1 }))}
        variant="filled"
        color="teal"
      >
        Add to cart
      </Button>
    </Tooltip>
  );
};

export default AddToCartButton;
