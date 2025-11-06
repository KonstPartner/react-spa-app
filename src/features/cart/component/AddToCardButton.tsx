import { Button, Tooltip } from '@mantine/core';
import { ShoppingCart } from 'lucide-react';

import { useAppDispatch } from '@/app/hooks';

import { addItem } from '../slice';
import { CartItem } from '../types';

const AddToCardButton = ({ item }: { item: Omit<CartItem, 'qty'> }) => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip label="Add to cart">
      <Button
        leftSection={<ShoppingCart size={16} />}
        onClick={() => dispatch(addItem({ ...item, qty: 1 }))}
        variant="filled"
        color="teal"
      >
        Add to cart
      </Button>
    </Tooltip>
  );
};

export default AddToCardButton;
