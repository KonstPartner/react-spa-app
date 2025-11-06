import { useAppSelector } from '@app/hooks';
import { selectCartTotalCount } from '@features/cart/model/selectors';
import { ActionIcon, Indicator, Tooltip, useMantineTheme } from '@mantine/core';
import { useSchemeTokens } from '@shared/hooks';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { getColor } from '@/shared/utils';

const CartIndicator = () => {
  const count = useAppSelector(selectCartTotalCount);
  const { text } = useSchemeTokens();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Tooltip label="Cart" onClick={() => navigate('/cart')}>
      <Indicator label={count} disabled={count === 0} size={18}>
        <ActionIcon c={text} variant="subtle" aria-label="Open cart">
          <ShoppingCart size={26} color={getColor(theme, text)} />
        </ActionIcon>
      </Indicator>
    </Tooltip>
  );
};

export default CartIndicator;
