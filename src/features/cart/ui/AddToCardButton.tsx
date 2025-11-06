import { useAppDispatch } from '@app/hooks';
import { addItem } from '@features/cart/model/slice';
import { CartItem } from '@features/cart/model/types';
import { Button, Tooltip } from '@mantine/core';
import { ShoppingCart } from 'lucide-react';

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
