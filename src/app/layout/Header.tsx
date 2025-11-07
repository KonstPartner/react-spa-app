import { CartIndicator, NavItem, ToggleTheme } from '@app/layout';
import { Burger, Container, Group, Paper, Text } from '@mantine/core';
import { useSchemeTokens } from '@shared/hooks';
import { Link } from 'react-router-dom';

import { NAV_LINKS } from '@/constants';

const Header = ({ onBurgerClick }: { onBurgerClick: () => void }) => {
  const { headerBg, text } = useSchemeTokens();

  return (
    <Paper shadow="sm" radius={0} bg={headerBg}>
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
              aria-expanded={false}
            />

            <Group visibleFrom="sm" aria-label="Main" component="ul">
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
