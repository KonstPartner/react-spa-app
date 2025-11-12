import { AppShell, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

import { Footer } from '@entities/footer';
import { Header, SideNav } from '@entities/header';

const AppLayout = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 64 }}
      footer={{ height: 54 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
    >
      <AppShell.Header>
        <Header isBurgerExpanded={opened} onBurgerClick={toggle} />
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="sm">
        <SideNav onNavigate={close} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="lg">
          <Outlet />
        </Container>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
