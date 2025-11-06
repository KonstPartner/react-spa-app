import { Burger, Container, Group, Paper, Text } from '@mantine/core';

import { NAV_LINKS } from '@/constants/navigation';
import useSchemeTokens from '@/shared/hooks/useSchemeTokens';

import CartIndicator from './CartIndicator';
import NavItem from './NavItem';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';

const Header = ({ onBurgerClick }: { onBurgerClick: () => void }) => {
  const { headerBg, text } = useSchemeTokens();

  return (
    <Paper shadow="sm" radius={0} bg={headerBg}>
      <Container py="sm" size="lg">
        <Group justify="space-between" align="center">
          <Link to={'/'}>
            <Text c={text} fw={800} fz="h2">
              Goods Shop
            </Text>
          </Link>

          <Group gap={20}>
            <Group hiddenFrom="sm">
              <CartIndicator />
            </Group>

            <Burger onClick={onBurgerClick} hiddenFrom="sm" />
            <Group visibleFrom="sm">
              {NAV_LINKS.map(({ path, label }) => (
                <NavItem key={path} path={path}>
                  {label}
                </NavItem>
              ))}
              <CartIndicator />
            </Group>

            <Container visibleFrom="sm">
              <ToggleTheme />
            </Container>
          </Group>
        </Group>
      </Container>
    </Paper>
  );
};

export default Header;
