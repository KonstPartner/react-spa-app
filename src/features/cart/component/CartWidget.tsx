import { useAppSelector } from '@/app/hooks';

import { selectCartItemQty } from '../selectors';
import { CartItem } from '../types';
import AddToCardButton from './AddToCardButton';
import CartOperations from './CartOperations';

const CartWidget = ({ item }: { item: Omit<CartItem, 'qty'> }) => {
  const qty = useAppSelector(selectCartItemQty(item.id));

  if (qty > 0) {
    return <CartOperations item={item} qty={qty} />;
  }

  return <AddToCardButton item={item} />;
};

export default CartWidget;
