import { Button, Tooltip } from '@mantine/core';
import { ShoppingCart } from 'lucide-react';

import { addItem } from '@features/cart/model/slice';
import { CartItem } from '@features/cart/model/types';
import { useAppDispatch } from '@hooks';

const AddToCardButton = ({ item }: { item: Omit<CartItem, 'qty'> }) => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip label="Add to cart">
      <Button
        leftSection={<ShoppingCart size={16} />}
        onClick={() => dispatch(addItem({ ...item, qty: 1 }))}
        variant="filled"
        color="teal"
        aria-label="Add item to cart"
      >
        Add to cart
      </Button>
    </Tooltip>
  );
};

export default AddToCardButton;
