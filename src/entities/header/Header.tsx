import { Burger, Container, Group, Paper, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import { CartIndicator } from '@features/cart/ui';
import { ToggleTheme } from '@features/theme';
import { NavItem } from '@entities/header';
import { useSchemeTokens } from '@hooks';
import { NAV_LINKS } from '@constants';

const Header = ({
  onBurgerClick,
  isNavbarOpen,
}: {
  onBurgerClick: () => void;
  isNavbarOpen: boolean;
}) => {
  const { primary, text } = useSchemeTokens();

  return (
    <Paper shadow="sm" radius={0} bg={primary}>
      <Container py="sm" size="lg">
        <Group justify="space-between" align="center">
          <Link to="/" aria-label="Go to homepage">
            <Text c={text} fw={800} fz="h2">
              Goods Shop
            </Text>
          </Link>

          <Group gap={20}>
            <Group hiddenFrom="sm">
              <CartIndicator aria-label="Cart" />
            </Group>

            <Burger
              color={text}
              onClick={onBurgerClick}
              hiddenFrom="sm"
              aria-label="Open navigation menu"
              aria-controls="main-nav"
              aria-expanded={isNavbarOpen}
            />

            <Group visibleFrom="sm" aria-label="Main" component="ul" gap="lg">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path}>
                  <NavItem path={path}>{label}</NavItem>
                </li>
              ))}
            </Group>
          </Group>

          <Group visibleFrom="sm" gap="lg">
            <CartIndicator aria-label="Cart" />
            <ToggleTheme aria-label="Toggle color scheme" />
          </Group>
        </Group>
      </Container>
    </Paper>
  );
};

export default Header;
