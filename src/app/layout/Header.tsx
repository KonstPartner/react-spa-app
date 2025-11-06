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
          <Link to={'/'}>
            <Text c={text} fw={800} fz="h2">
              Goods Shop
            </Text>
          </Link>

          <Group gap={20}>
            <Group hiddenFrom="sm">
              <CartIndicator />
            </Group>

            <Burger color={text} onClick={onBurgerClick} hiddenFrom="sm" />
            <Group visibleFrom="sm">
              {NAV_LINKS.map(({ path, label }) => (
                <NavItem key={path} path={path}>
                  {label}
                </NavItem>
              ))}
            </Group>
          </Group>

          <Group visibleFrom="sm" gap="lg">
            <CartIndicator />
            <ToggleTheme />
          </Group>
        </Group>
      </Container>
    </Paper>
  );
};

export default Header;
