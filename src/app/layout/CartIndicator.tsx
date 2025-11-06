import { useAppSelector } from '@app/hooks';
import { selectCartTotalCount } from '@features/cart/model/selectors';
import { ActionIcon, Indicator, Tooltip } from '@mantine/core';
import { useSchemeTokens } from '@shared/hooks';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartIndicator = () => {
  const count = useAppSelector(selectCartTotalCount);
  const { link } = useSchemeTokens();
  const navigate = useNavigate();

  return (
    <Tooltip label="Cart" onClick={() => navigate('/cart')}>
      <Indicator label={count} disabled={count === 0} size={18}>
        <ActionIcon c={link} variant="subtle" aria-label="Open cart">
          <ShoppingCart size={24} />
        </ActionIcon>
      </Indicator>
    </Tooltip>
  );
};

export default CartIndicator;
