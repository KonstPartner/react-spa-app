import { selectCartItemQty } from '@features/cart/model/selectors';
import { CartItem } from '@features/cart/model/types';
import { AddToCardButton, CartOperations } from '@features/cart/ui/';

import { useAppSelector } from '@/hooks';

const CartWidget = ({ item }: { item: Omit<CartItem, 'qty'> }) => {
  const qty = useAppSelector(selectCartItemQty(item.id));

  if (qty > 0) {
    return <CartOperations item={item} qty={qty} />;
  }

  return <AddToCardButton item={item} />;
};

export default CartWidget;
